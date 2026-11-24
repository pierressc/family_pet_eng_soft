import { useCallback, useEffect, useMemo, useState } from 'react';
import estabelecimentosData from './data/estabelecimentos.json';
import {
  calculatePillarAverages,
  getAllTagsFlat,
  getOverallScore,
  normalizeText,
} from './utils/helpers';
import {
  checkLocalStorageAvailable,
  loadFavoriteLists,
  loadStoredReviews,
  saveFavoriteLists,
  saveStoredReviews,
} from './utils/storage';
import ExploreView from './components/ExploreView';
import DetailView from './components/DetailView';
import FavoritesView from './components/FavoritesView';
import RatingModal from './components/RatingModal';
import SaveToListModal from './components/SaveToListModal';
import { IconBookmark, IconHome, IconInfo, IconSearch } from './components/Icons';

function parseHashRoute() {
  const raw = (window.location.hash || '#explorar').replace(/^#\/?/, '');
  if (raw.startsWith('local/')) {
    const id = decodeURIComponent(raw.slice('local/'.length));
    return { view: 'detail', placeId: id };
  }
  if (raw === 'favoritos') {
    return { view: 'favoritos', placeId: null };
  }
  return { view: 'explorar', placeId: null };
}

export default function App() {
  const [route, setRoute] = useState(() => parseHashRoute());
  const [storageWarning, setStorageWarning] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  // Estado preservado de busca e filtros (RF001, RF002, RF003)
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [sortBy, setSortBy] = useState('relevancia');

  // Avaliações criadas localmente e listas de favoritos (NF006)
  const [userReviewsByPlace, setUserReviewsByPlace] = useState(() => {
    const res = loadStoredReviews();
    return res.data;
  });
  const [favoriteLists, setFavoriteLists] = useState(() => {
    const res = loadFavoriteLists();
    return res.data;
  });

  // Modais ativos
  const [ratingTargetPlace, setRatingTargetPlace] = useState(null);
  const [saveTargetPlace, setSaveTargetPlace] = useState(null);

  // Verificação defensiva inicial do localStorage (NF006)
  useEffect(() => {
    if (!checkLocalStorageAvailable()) {
      setStorageWarning(
        'O armazenamento local do navegador (localStorage) está indisponível ou bloqueado. Suas avaliações e listas funcionarão apenas durante esta sessão.'
      );
    }
  }, []);

  // Sincronização com hash para funcionamento seguro no GitHub Pages
  useEffect(() => {
    const onHashChange = () => {
      setRoute(parseHashRoute());
      window.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Limpeza automática da notificação de confirmação
  useEffect(() => {
    if (!toastMessage) return undefined;
    const timer = window.setTimeout(() => setToastMessage(''), 4500);
    return () => window.clearTimeout(timer);
  }, [toastMessage]);

  const navigateTo = useCallback((hash) => {
    window.location.hash = hash;
    setRoute(parseHashRoute());
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const allPlacesById = useMemo(() => {
    const map = {};
    for (const item of estabelecimentosData) {
      map[item.id] = item;
    }
    return map;
  }, []);

  const getAllReviewsForPlace = useCallback(
    (local) => {
      if (!local) return [];
      const custom = userReviewsByPlace[local.id] || [];
      const base = local.avaliacoesIniciais || [];
      return [...custom, ...base].sort((a, b) => String(b.data).localeCompare(String(a.data)));
    },
    [userReviewsByPlace]
  );

  const getAveragesForPlace = useCallback(
    (local) => calculatePillarAverages(getAllReviewsForPlace(local)),
    [getAllReviewsForPlace]
  );

  const getListsContainingPlace = useCallback(
    (placeId) => favoriteLists.filter((list) => list.locaisIds.includes(placeId)),
    [favoriteLists]
  );

  // Filtragem combinada (RF001, RF002) e ordenação
  const locaisFiltrados = useMemo(() => {
    const queryNorm = normalizeText(searchQuery);

    const filtered = estabelecimentosData.filter((local) => {
      if (queryNorm) {
        const haystack = normalizeText(`${local.nome} ${local.bairro} ${local.categoria}`);
        if (!haystack.includes(queryNorm)) return false;
      }

      if (selectedCategories.length > 0 && !selectedCategories.includes(local.categoria)) {
        return false;
      }

      if (selectedTags.length > 0) {
        const placeTags = getAllTagsFlat(local);
        const matchesAll = selectedTags.every((tag) => placeTags.includes(tag));
        if (!matchesAll) return false;
      }

      return true;
    });

    return filtered.sort((a, b) => {
      const avgA = getAveragesForPlace(a);
      const avgB = getAveragesForPlace(b);

      let scoreA = -1;
      let scoreB = -1;
      if (sortBy === 'relevancia') {
        scoreA = getOverallScore(avgA);
        scoreB = getOverallScore(avgB);
      } else {
        scoreA = avgA.pillars[sortBy]?.value ?? -1;
        scoreB = avgB.pillars[sortBy]?.value ?? -1;
      }

      if (scoreB !== scoreA) return scoreB - scoreA;
      return a.nome.localeCompare(b.nome, 'pt-BR');
    });
  }, [searchQuery, selectedCategories, selectedTags, sortBy, getAveragesForPlace]);

  const handleToggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((item) => item !== cat) : [...prev, cat]
    );
  };

  const handleToggleTag = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((item) => item !== tag) : [...prev, tag]
    );
  };

  const handleClearFilters = () => {
    setSearchQuery('');
    setSelectedCategories([]);
    setSelectedTags([]);
    setSortBy('relevancia');
  };

  const handleAddReview = (placeId, review) => {
    const updated = {
      ...userReviewsByPlace,
      [placeId]: [review, ...(userReviewsByPlace[placeId] || [])],
    };
    setUserReviewsByPlace(updated);
    const saveRes = saveStoredReviews(updated);
    if (!saveRes.ok && saveRes.error) {
      setStorageWarning(saveRes.error);
    }
    setRatingTargetPlace(null);
    setToastMessage('Avaliação publicada com sucesso e médias dos quatro pilares recalculadas.');
  };

  const updateListsWithStorage = (nextLists) => {
    setFavoriteLists(nextLists);
    const saveRes = saveFavoriteLists(nextLists);
    if (!saveRes.ok && saveRes.error) {
      setStorageWarning(saveRes.error);
    }
  };

  const handleCreateList = (rawName, initialPlaceId = null) => {
    const trimmed = String(rawName || '').trim();
    if (trimmed.length < 2 || trimmed.length > 60) {
      return { ok: false, error: 'Informe um nome entre 2 e 60 caracteres para a lista.' };
    }
    const normNew = normalizeText(trimmed);
    const duplicate = favoriteLists.some((l) => normalizeText(l.nome) === normNew);
    if (duplicate) {
      return { ok: false, error: 'Já existe uma lista de favoritos com este nome.' };
    }

    const createdId = `lista-${Date.now()}`;
    const newList = {
      id: createdId,
      nome: trimmed,
      locaisIds: initialPlaceId ? [initialPlaceId] : [],
    };
    updateListsWithStorage([newList, ...favoriteLists]);
    setToastMessage(`Lista "${trimmed}" criada com sucesso.`);
    return { ok: true, createdId };
  };

  const handleRenameList = (listId, rawName) => {
    const trimmed = String(rawName || '').trim();
    if (trimmed.length < 2 || trimmed.length > 60) {
      return { ok: false, error: 'O novo nome deve conter entre 2 e 60 caracteres.' };
    }
    const normNew = normalizeText(trimmed);
    const duplicate = favoriteLists.some(
      (l) => l.id !== listId && normalizeText(l.nome) === normNew
    );
    if (duplicate) {
      return { ok: false, error: 'Já existe outra lista com este nome.' };
    }

    const nextLists = favoriteLists.map((l) =>
      l.id === listId ? { ...l, nome: trimmed } : l
    );
    updateListsWithStorage(nextLists);
    setToastMessage(`Lista renomeada para "${trimmed}".`);
    return { ok: true };
  };

  const handleDeleteList = (listId) => {
    const target = favoriteLists.find((l) => l.id === listId);
    const nextLists = favoriteLists.filter((l) => l.id !== listId);
    updateListsWithStorage(nextLists);
    if (target) {
      setToastMessage(`Lista "${target.nome}" removida.`);
    }
  };

  const handleTogglePlaceInList = (listId, placeId) => {
    const nextLists = favoriteLists.map((list) => {
      if (list.id !== listId) return list;
      const exists = list.locaisIds.includes(placeId);
      return {
        ...list,
        locaisIds: exists
          ? list.locaisIds.filter((id) => id !== placeId)
          : [placeId, ...list.locaisIds],
      };
    });
    updateListsWithStorage(nextLists);
  };

  const handleRemovePlaceFromList = (listId, placeId) => {
    const nextLists = favoriteLists.map((list) => {
      if (list.id !== listId) return list;
      return {
        ...list,
        locaisIds: list.locaisIds.filter((id) => id !== placeId),
      };
    });
    updateListsWithStorage(nextLists);
    setToastMessage('Estabelecimento removido desta lista.');
  };

  const totalUniqueSavedPlaces = useMemo(() => {
    const set = new Set();
    for (const list of favoriteLists) {
      for (const id of list.locaisIds) set.add(id);
    }
    return set.size;
  }, [favoriteLists]);

  const currentDetailPlace = route.view === 'detail' ? allPlacesById[route.placeId] : null;

  return (
    <div className="app-shell">
      <a href="#conteudo-principal" className="skip-link">
        Pular para o conteúdo principal
      </a>

      <header className="top-header">
        <div className="container header-inner">
          <a
            href="#explorar"
            className="brand-link"
            onClick={(e) => {
              e.preventDefault();
              navigateTo('#explorar');
            }}
          >
            <span className="brand-mark">
              <IconHome size={20} />
            </span>
            <span className="brand-text">
              <strong>Family Place</strong>
              <small>João Pessoa • PB</small>
            </span>
          </a>

          <nav aria-label="Navegação principal" className="main-nav">
            <a
              href="#explorar"
              className={`nav-link ${route.view === 'explorar' || route.view === 'detail' ? 'is-active' : ''}`}
              aria-current={route.view === 'explorar' ? 'page' : undefined}
              onClick={(e) => {
                e.preventDefault();
                navigateTo('#explorar');
              }}
            >
              <IconSearch size={17} />
              <span>Explorar</span>
            </a>

            <a
              href="#favoritos"
              className={`nav-link ${route.view === 'favoritos' ? 'is-active' : ''}`}
              aria-current={route.view === 'favoritos' ? 'page' : undefined}
              onClick={(e) => {
                e.preventDefault();
                navigateTo('#favoritos');
              }}
            >
              <IconBookmark size={17} />
              <span>Favoritos</span>
              <span className="nav-badge" aria-label={`${totalUniqueSavedPlaces} locais salvos`}>
                {totalUniqueSavedPlaces}
              </span>
            </a>
          </nav>
        </div>
      </header>

      {storageWarning && (
        <div className="container">
          <div className="storage-alert" role="alert">
            <IconInfo size={18} />
            <p>{storageWarning}</p>
          </div>
        </div>
      )}

      {toastMessage && (
        <div className="toast-container" role="status" aria-live="polite">
          <div className="toast-box">{toastMessage}</div>
        </div>
      )}

      <main id="conteudo-principal" className="container main-content" tabIndex={-1}>
        {route.view === 'explorar' && (
          <ExploreView
            locaisFiltrados={locaisFiltrados}
            totalCatalogo={estabelecimentosData.length}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
            selectedCategories={selectedCategories}
            onToggleCategory={handleToggleCategory}
            selectedTags={selectedTags}
            onToggleTag={handleToggleTag}
            sortBy={sortBy}
            onSortChange={setSortBy}
            onClearFilters={handleClearFilters}
            onOpenDetail={(id) => navigateTo(`#local/${encodeURIComponent(id)}`)}
            onOpenSaveModal={(local) => setSaveTargetPlace(local)}
            getAveragesForPlace={getAveragesForPlace}
            getListsContainingPlace={getListsContainingPlace}
          />
        )}

        {route.view === 'detail' && (
          <DetailView
            local={currentDetailPlace}
            avaliacoes={getAllReviewsForPlace(currentDetailPlace)}
            averages={getAveragesForPlace(currentDetailPlace)}
            savedLists={currentDetailPlace ? getListsContainingPlace(currentDetailPlace.id) : []}
            onBack={() => navigateTo('#explorar')}
            onOpenRatingModal={() => setRatingTargetPlace(currentDetailPlace)}
            onOpenSaveModal={(local) => setSaveTargetPlace(local)}
          />
        )}

        {route.view === 'favoritos' && (
          <FavoritesView
            lists={favoriteLists}
            allPlacesById={allPlacesById}
            getAveragesForPlace={getAveragesForPlace}
            onCreateList={handleCreateList}
            onRenameList={handleRenameList}
            onDeleteList={handleDeleteList}
            onRemovePlaceFromList={handleRemovePlaceFromList}
            onOpenDetail={(id) => navigateTo(`#local/${encodeURIComponent(id)}`)}
            onGoExplore={() => navigateTo('#explorar')}
          />
        )}
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <p className="footer-brand">
              <strong>Family Place</strong> — Plataforma Comunitária de João Pessoa (PB)
            </p>
            <p className="footer-note">
              MVP web focado nos requisitos essenciais (RF001–RF010). Atuação exclusivamente
              informativa: sem pagamentos online, checkout financeiro, delivery próprio ou avaliação
              individual por item.
            </p>
          </div>
          <div className="footer-roadmap">
            <p className="footer-roadmap-title">Módulos planejados para ciclos evolutivos</p>
            <ul>
              <li>
                <strong>Should:</strong> Cadastro por perfil, Painel do Estabelecimento e Clube de
                Fidelidade (cupons presenciais).
              </li>
              <li>
                <strong>Could:</strong> Seguidores com Timeline comunitária e Assistente Virtual de
                recomendação.
              </li>
            </ul>
          </div>
        </div>
      </footer>

      {ratingTargetPlace && (
        <RatingModal
          local={ratingTargetPlace}
          onClose={() => setRatingTargetPlace(null)}
          onSubmit={(review) => handleAddReview(ratingTargetPlace.id, review)}
        />
      )}

      {saveTargetPlace && (
        <SaveToListModal
          local={saveTargetPlace}
          lists={favoriteLists}
          onClose={() => setSaveTargetPlace(null)}
          onTogglePlaceInList={handleTogglePlaceInList}
          onCreateList={handleCreateList}
        />
      )}
    </div>
  );
}
