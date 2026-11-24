import { useState } from 'react';
import { PILLARS } from '../utils/helpers';
import { IconEdit, IconMapPin, IconPlus, IconTrash } from './Icons';

export default function FavoritesView({
  lists,
  allPlacesById,
  getAveragesForPlace,
  onCreateList,
  onRenameList,
  onDeleteList,
  onRemovePlaceFromList,
  onOpenDetail,
  onGoExplore,
}) {
  const [selectedListId, setSelectedListId] = useState(lists[0]?.id || '');
  const [newListName, setNewListName] = useState('');
  const [createError, setCreateError] = useState('');

  const [isRenaming, setIsRenaming] = useState(false);
  const [renameValue, setRenameValue] = useState('');
  const [renameError, setRenameError] = useState('');

  const [confirmingDeleteId, setConfirmingDeleteId] = useState(null);

  const activeList = lists.find((l) => l.id === selectedListId) || lists[0] || null;

  const handleCreateSubmit = (event) => {
    event.preventDefault();
    const res = onCreateList(newListName);
    if (!res.ok) {
      setCreateError(res.error);
      return;
    }
    setNewListName('');
    setCreateError('');
    if (res.createdId) {
      setSelectedListId(res.createdId);
    }
  };

  const startRename = () => {
    if (!activeList) return;
    setRenameValue(activeList.nome);
    setRenameError('');
    setIsRenaming(true);
    setConfirmingDeleteId(null);
  };

  const handleRenameSubmit = (event) => {
    event.preventDefault();
    if (!activeList) return;
    const res = onRenameList(activeList.id, renameValue);
    if (!res.ok) {
      setRenameError(res.error);
      return;
    }
    setIsRenaming(false);
    setRenameError('');
  };

  const handleConfirmDelete = (listId) => {
    onDeleteList(listId);
    setConfirmingDeleteId(null);
    setIsRenaming(false);
    const remaining = lists.filter((l) => l.id !== listId);
    setSelectedListId(remaining[0]?.id || '');
  };

  const savedPlaces = activeList
    ? activeList.locaisIds.map((id) => allPlacesById[id]).filter(Boolean)
    : [];

  return (
    <section aria-labelledby="favorites-heading" className="favorites-section">
      <header className="page-header-block">
        <h1 id="favorites-heading">Favoritos Organizados por Critério</h1>
        <p>
          Agrupe estabelecimentos e espaços de João Pessoa conforme a necessidade de cada passeio.
          Um mesmo local pode aparecer em múltiplas listas simultaneamente.
        </p>
      </header>

      <form onSubmit={handleCreateSubmit} className="create-list-card" noValidate>
        <div className="create-list-fields">
          <label htmlFor="campo-nova-lista" className="create-list-label">
            Criar nova lista de favoritos (2 a 60 caracteres)
          </label>
          <div className="inline-input-row">
            <input
              id="campo-nova-lista"
              type="text"
              maxLength={60}
              value={newListName}
              onChange={(e) => {
                setNewListName(e.target.value);
                if (createError) setCreateError('');
              }}
              placeholder="Ex.: Melhores para ir com meu Avô, Locais com Baixo Ruído..."
              className="text-input"
            />
            <button type="submit" className="btn btn-primary">
              <IconPlus size={17} />
              <span>Criar lista</span>
            </button>
          </div>
          {createError && (
            <p className="field-error" role="alert">
              {createError}
            </p>
          )}
        </div>
      </form>

      {lists.length === 0 ? (
        <div className="empty-state">
          <h2>Você ainda não possui listas de favoritos</h2>
          <p>
            Crie uma lista acima ou explore os locais de João Pessoa para salvar suas recomendações.
          </p>
          <button type="button" className="btn btn-primary" onClick={onGoExplore}>
            Explorar locais em João Pessoa
          </button>
        </div>
      ) : (
        <div className="favorites-layout">
          <aside className="lists-sidebar" aria-label="Minhas listas de favoritos">
            <h2>Minhas listas ({lists.length})</h2>
            <ul className="lists-nav">
              {lists.map((list) => {
                const isSelected = activeList && activeList.id === list.id;
                return (
                  <li key={list.id}>
                    <button
                      type="button"
                      className={`list-nav-btn ${isSelected ? 'is-selected' : ''}`}
                      aria-current={isSelected ? 'true' : undefined}
                      onClick={() => {
                        setSelectedListId(list.id);
                        setIsRenaming(false);
                        setConfirmingDeleteId(null);
                      }}
                    >
                      <span className="list-nav-name">{list.nome}</span>
                      <span className="list-nav-badge" aria-label={`${list.locaisIds.length} locais`}>
                        {list.locaisIds.length}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </aside>

          <div className="list-detail-column">
            {activeList && (
              <>
                <div className="active-list-header">
                  <div>
                    <h2>{activeList.nome}</h2>
                    <p className="active-list-count">
                      {savedPlaces.length}{' '}
                      {savedPlaces.length === 1 ? 'local salvo' : 'locais salvos'} nesta lista
                    </p>
                  </div>

                  <div className="active-list-actions">
                    <button type="button" className="btn btn-outline" onClick={startRename}>
                      <IconEdit size={15} />
                      <span>Renomear</span>
                    </button>
                    <button
                      type="button"
                      className="btn btn-danger-outline"
                      onClick={() => {
                        setConfirmingDeleteId(activeList.id);
                        setIsRenaming(false);
                      }}
                    >
                      <IconTrash size={15} />
                      <span>Excluir lista</span>
                    </button>
                  </div>
                </div>

                {isRenaming && (
                  <form onSubmit={handleRenameSubmit} className="action-box" noValidate>
                    <label htmlFor="campo-renomear-lista">Novo nome da lista</label>
                    <div className="inline-input-row">
                      <input
                        id="campo-renomear-lista"
                        type="text"
                        maxLength={60}
                        value={renameValue}
                        onChange={(e) => {
                          setRenameValue(e.target.value);
                          if (renameError) setRenameError('');
                        }}
                        className="text-input"
                      />
                      <button type="submit" className="btn btn-primary">
                        Salvar nome
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline"
                        onClick={() => setIsRenaming(false)}
                      >
                        Cancelar
                      </button>
                    </div>
                    {renameError && (
                      <p className="field-error" role="alert">
                        {renameError}
                      </p>
                    )}
                  </form>
                )}

                {confirmingDeleteId === activeList.id && (
                  <div className="action-box action-box-danger" role="alertdialog" aria-labelledby="confirm-del-title">
                    <p id="confirm-del-title">
                      Confirmar exclusão definitiva da lista <strong>{activeList.nome}</strong>? Os
                      locais permanecerão disponíveis no catálogo e em suas outras listas.
                    </p>
                    <div className="confirm-buttons">
                      <button
                        type="button"
                        className="btn btn-danger"
                        onClick={() => handleConfirmDelete(activeList.id)}
                      >
                        Confirmar exclusão
                      </button>
                      <button
                        type="button"
                        className="btn btn-outline"
                        onClick={() => setConfirmingDeleteId(null)}
                      >
                        Cancelar
                      </button>
                    </div>
                  </div>
                )}

                {savedPlaces.length === 0 ? (
                  <div className="empty-state">
                    <h3>Esta lista ainda está vazia</h3>
                    <p>
                      Explore o catálogo de João Pessoa e utilize o comando &ldquo;Salvar&rdquo; em
                      qualquer estabelecimento para adicioná-lo a esta lista.
                    </p>
                    <button type="button" className="btn btn-primary" onClick={onGoExplore}>
                      Explorar estabelecimentos
                    </button>
                  </div>
                ) : (
                  <div className="places-grid">
                    {savedPlaces.map((local) => {
                      const avg = getAveragesForPlace(local);
                      return (
                        <article key={local.id} className="place-card">
                          <div className="badge-row">
                            <span
                              className={`badge ${
                                local.tipoOrigem === 'Espaço Público Real'
                                  ? 'badge-public'
                                  : 'badge-local'
                              }`}
                            >
                              {local.tipoOrigem}
                            </span>
                            <span className="badge badge-category">{local.categoria}</span>
                          </div>

                          <h3 className="place-title">{local.nome}</h3>

                          <div className="place-meta">
                            <span className="meta-item">
                              <IconMapPin size={15} />
                              <span>{local.bairro}, João Pessoa</span>
                            </span>
                          </div>

                          <div className="pillars-summary">
                            {PILLARS.map((pillar) => {
                              const pData = avg.pillars[pillar.key];
                              return (
                                <div key={pillar.key} className="pillar-mini-box">
                                  <span className="pillar-mini-label">{pillar.shortLabel}</span>
                                  <strong
                                    className={`pillar-mini-score ${
                                      pData.value === null ? 'is-empty' : ''
                                    }`}
                                  >
                                    {pData.formatted}
                                  </strong>
                                </div>
                              );
                            })}
                          </div>

                          <div className="place-card-footer">
                            <button
                              type="button"
                              className="btn btn-danger-outline"
                              onClick={() => onRemovePlaceFromList(activeList.id, local.id)}
                            >
                              Remover desta lista
                            </button>
                            <button
                              type="button"
                              className="btn btn-primary"
                              onClick={() => onOpenDetail(local.id)}
                            >
                              Ver detalhes
                            </button>
                          </div>
                        </article>
                      );
                    })}
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
