import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
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
  loadThemePreference,
  saveFavoriteLists,
  saveStoredReviews,
  saveThemePreference,
} from './utils/storage';
import ExploreView from './components/ExploreView';
import DetailView from './components/DetailView';
import FavoritesView from './components/FavoritesView';
import RatingModal from './components/RatingModal';
import SaveToListModal from './components/SaveToListModal';
import CityModal from './components/CityModal';
import {
  IconBookmark,
  IconChevronDown,
  IconHome,
  IconInfo,
  IconMapPin,
  IconMoon,
  IconSearch,
  IconSun,
} from './components/Icons';

function parseInitialHash() {
  const raw = (window.location.hash || '#explorar').replace(/^#\/?/, '');
  if (raw.startsWith('local/')) {
    return {
      tab: 'explorar',
      placeId: decodeURIComponent(raw.slice('local/'.length)),
    };
  }
  if (raw === 'favoritos') {
    return { tab: 'favoritos', placeId: null };
  }
  return { tab: 'explorar', placeId: null };
}

export default function App() {
  const initialState = useMemo(() => parseInitialHash(), []);
  const [activeTab, setActiveTab] = useState(initialState.tab);
  const [detailPlaceId, setDetailPlaceId] = useState(initialState.placeId);

  const [theme, setTheme] = useState(() => loadThemePreference());
  const [cityModalOpen, setCityModalOpen] = useState(false);
  const [storageWarning, setStorageWarning] = useState('');
  const [toastMessage, setToastMessage] = useState('');

  // Estado preservado de busca e filtros
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const [sortBy, setSortBy] = useState('relevancia');

  // Avaliações e favoritos salvos no navegador
  const [userReviewsByPlace, setUserReviewsByPlace] = useState(() => loadStoredReviews().data);
  const [favoriteLists, setFavoriteLists] = useState(() => loadFavoriteLists().data);

  // Modais empilhados (camada superior)
  const [ratingTargetPlace, setRatingTargetPlace] = useState(null);
  const [saveTargetPlace, setSaveTargetPlace] = useState(null);

  // Referências para restauração de foco ao fechar modais
  const detailTriggerRef = useRef(null);
  const topModalTriggerRef = useRef(null);

  // Aplicação do tema claro/escuro
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    saveThemePreference(theme);
  }, [theme]);

  // Verificação defensiva do armazenamento do navegador
  useEffect(() => {
    if (!checkLocalStorageAvailable()) {
      setStorageWarning(
        'O armazenamento do navegador está indisponível ou bloqueado. Suas avaliações e listas valerão apenas nesta visita.'
      );
    }
  }, []);

  // Travamento da rolagem da página de fundo enquanto qualquer modal estiver aberto
  const hasAnyModalOpen = Boolean(
    detailPlaceId || ratingTargetPlace || saveTargetPlace || cityModalOpen
  );
  useEffect(() => {
    if (hasAnyModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [hasAnyModalOpen]);

  // Sincronização com hash sem perder contexto da aba de origem
  useEffect(() => {
    const onHashChange = () => {
      const raw = (window.location.hash || '#explorar').replace(/^#\/?/, '');
      if (raw.startsWith('local/')) {
        setDetailPlaceId(decodeURIComponent(raw.slice('local/'.length)));
      } else if (raw === 'favoritos') {
        setDetailPlaceId(null);
        setActiveTab('favoritos');
      } else {
        setDetailPlaceId(null);
        setActiveTab('explorar');
      }
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Limpeza automática da notificação
  useEffect(() => {
    if (!toastMessage) return undefined;
    const timer = window.setTimeout(() => setToastMessage(''), 4200);
    return () => window.clearTimeout(timer);
  }, [toastMessage]);

  const switchTab = useCallback((tab) => {
    setDetailPlaceId(null);
    setActiveTab(tab);
    const nextHash = `#${tab}`;
    if (window.location.hash !== nextHash) {
      window.location.hash = nextHash;
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const handleOpenDetail = useCallback((placeId) => {
    if (document.activeElement instanceof HTMLElement) {
      detailTriggerRef.current = document.activeElement;
    }
    setDetailPlaceId(placeId);
    const targetHash = `#local/${encodeURIComponent(placeId)}`;
    if (window.location.hash !== targetHash) {
      window.history.replaceState(null, '', targetHash);
    }
  }, []);

  const handleCloseDetail = useCallback(() => {
    setDetailPlaceId(null);
    const returnHash = `#${activeTab}`;
    if (window.location.hash !== returnHash) {
      window.history.replaceState(null, '', returnHash);
    }
    const trigger = detailTriggerRef.current;
    if (trigger && trigger.isConnected) {
      window.requestAnimationFrame(() => trigger.focus());
    }
  }, [activeTab]);

  const handleOpenRatingModal = useCallback((local) => {
    if (document.activeElement instanceof HTMLElement) {
      topModalTriggerRef.current = document.activeElement;
    }
    setRatingTargetPlace(local);
  }, []);

  const handleCloseRatingModal = useCallback(() => {
    setRatingTargetPlace(null);
    const trigger = topModalTriggerRef.current;
    if (trigger && trigger.isConnected) {
      window.requestAnimationFrame(() => trigger.focus());
    }
  }, []);

  const handleOpenSaveModal = useCallback((local) => {
    if (document.activeElement instanceof HTMLElement) {
      topModalTriggerRef.current = document.activeElement;
    }
    setSaveTargetPlace(local);
  }, []);

  const handleCloseSaveModal = useCallback(() => {
    setSaveTargetPlace(null);
    const trigger = topModalTriggerRef.current;
    if (trigger && trigger.isConnected) {
      window.requestAnimationFrame(() => trigger.focus());
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

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
        if (!selectedTags.every((tag) => placeTags.includes(tag))) return false;
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
    handleCloseRatingModal();
    setToastMessage('Avaliação publicada com sucesso.');
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
      return { ok: false, error: 'Já existe uma lista com este nome.' };
    }

    const createdId = `lista-${Date.now()}`;
    const newList = {
      id: createdId,
      nome: trimmed,
      locaisIds: initialPlaceId ? [initialPlaceId] : [],
    };
    updateListsWithStorage([newList, ...favoriteLists]);
    setToastMessage(`Lista "${trimmed}" criada.`);
    return { ok: true, createdId };
  };

  const handleRenameList = (listId, rawName) => {
    const trimmed = String(rawName || '').trim();
    if (trimmed.length < 2 || trimmed.length > 60) {
      return { ok: false, error: 'O nome deve ter entre 2 e 60 caracteres.' };
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
    setToastMessage('Local removido desta lista.');
  };

  const totalUniqueSavedPlaces = useMemo(() => {
    const set = new Set();
    for (const list of favoriteLists) {
      for (const id of list.locaisIds) set.add(id);
    }
    return set.size;
  }, [favoriteLists]);

  const currentDetailPlace = detailPlaceId ? allPlacesById[detailPlaceId] || null : null;
  const hasChildModalOpen = Boolean(ratingTargetPlace || saveTargetPlace);

  return (
    <div className="app-shell">
      <a href="#conteudo-principal" className="skip-link">
        Pular para o conteúdo principal
      </a>

      <header className="top-header">
        <div className="container header-inner">
          <div className="header-left">
            <a
              href="#explorar"
              className="brand-link"
              onClick={(e) => {
                e.preventDefault();
                switchTab('explorar');
              }}
            >
              <span className="brand-mark">
                <IconHome size={19} />
              </span>
              <span className="brand-name">Family Place</span>
            </a>

            <button
              type="button"
              className="city-selector-btn"
              onClick={() => setCityModalOpen(true)}
              aria-label="Selecionar cidade. Atual: João Pessoa, PB"
            >
              <IconMapPin size={15} />
              <span>João Pessoa, PB</span>
              <IconChevronDown size={14} />
            </button>
          </div>

          <div className="header-right">
            <nav aria-label="Navegação principal" className="main-nav">
              <a
                href="#explorar"
                className={`nav-link ${activeTab === 'explorar' ? 'is-active' : ''}`}
                aria-current={activeTab === 'explorar' ? 'page' : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  switchTab('explorar');
                }}
              >
                <IconSearch size={16} />
                <span>Explorar</span>
              </a>

              <a
                href="#favoritos"
                className={`nav-link ${activeTab === 'favoritos' ? 'is-active' : ''}`}
                aria-current={activeTab === 'favoritos' ? 'page' : undefined}
                onClick={(e) => {
                  e.preventDefault();
                  switchTab('favoritos');
                }}
              >
                <IconBookmark size={16} />
                <span>Favoritos</span>
                <span className="nav-badge" aria-label={`${totalUniqueSavedPlaces} locais salvos`}>
                  {totalUniqueSavedPlaces}
                </span>
              </a>
            </nav>

            <button
              type="button"
              className="theme-toggle-btn"
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
              title={theme === 'dark' ? 'Tema claro' : 'Tema escuro'}
            >
              {theme === 'dark' ? <IconSun size={18} /> : <IconMoon size={18} />}
            </button>
          </div>
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
        {activeTab === 'explorar' && (
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
            onOpenDetail={handleOpenDetail}
            onOpenSaveModal={handleOpenSaveModal}
            getAveragesForPlace={getAveragesForPlace}
            getListsContainingPlace={getListsContainingPlace}
          />
        )}

        {activeTab === 'favoritos' && (
          <FavoritesView
            lists={favoriteLists}
            allPlacesById={allPlacesById}
            getAveragesForPlace={getAveragesForPlace}
            onCreateList={handleCreateList}
            onRenameList={handleRenameList}
            onDeleteList={handleDeleteList}
            onRemovePlaceFromList={handleRemovePlaceFromList}
            onOpenDetail={handleOpenDetail}
            onGoExplore={() => switchTab('explorar')}
          />
        )}
      </main>

      <footer className="site-footer">
        <div className="container footer-grid">
          <div>
            <p className="footer-brand">
              <strong>Family Place</strong>
            </p>
            <p className="footer-note">
              Guia colaborativo para famílias, crianças, pets, idosos, pessoas com deficiência e
              pessoas neurodivergentes encontrarem espaços acolhedores antes de sair de casa.
            </p>
          </div>
          <div className="footer-roadmap">
            <p className="footer-roadmap-title">Em breve</p>
            <ul>
              <li>Clube de benefícios presenciais</li>
              <li>Novidades dos locais favoritos</li>
              <li>Assistente de recomendações</li>
            </ul>
          </div>
        </div>
      </footer>

      {currentDetailPlace && (
        <DetailView
          local={currentDetailPlace}
          avaliacoes={getAllReviewsForPlace(currentDetailPlace)}
          averages={getAveragesForPlace(currentDetailPlace)}
          savedLists={getListsContainingPlace(currentDetailPlace.id)}
          hasChildModalOpen={hasChildModalOpen}
          onClose={handleCloseDetail}
          onOpenRatingModal={() => handleOpenRatingModal(currentDetailPlace)}
          onOpenSaveModal={handleOpenSaveModal}
        />
      )}

      {cityModalOpen && <CityModal onClose={() => setCityModalOpen(false)} />}

      {ratingTargetPlace && (
        <RatingModal
          local={ratingTargetPlace}
          onClose={handleCloseRatingModal}
          onSubmit={(review) => handleAddReview(ratingTargetPlace.id, review)}
        />
      )}

      {saveTargetPlace && (
        <SaveToListModal
          local={saveTargetPlace}
          lists={favoriteLists}
          onClose={handleCloseSaveModal}
          onTogglePlaceInList={handleTogglePlaceInList}
          onCreateList={handleCreateList}
        />
      )}
    </div>
  );
}
