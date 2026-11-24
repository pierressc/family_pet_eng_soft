import { useState } from 'react';
import { CATEGORIAS, FILTER_GROUPS, PILLARS, getAllTagsFlat } from '../utils/helpers';
import {
  IconBookmark,
  IconClock,
  IconClose,
  IconFilter,
  IconMapPin,
  IconSearch,
} from './Icons';

export default function ExploreView({
  locaisFiltrados,
  totalCatalogo,
  searchQuery,
  onSearchChange,
  selectedCategories,
  onToggleCategory,
  selectedTags,
  onToggleTag,
  sortBy,
  onSortChange,
  onClearFilters,
  onOpenDetail,
  onOpenSaveModal,
  getAveragesForPlace,
  getListsContainingPlace,
}) {
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  const activeFiltersCount =
    selectedCategories.length + selectedTags.length + (searchQuery.trim() ? 1 : 0);

  return (
    <section aria-labelledby="explore-heading" className="explore-section">
      <div className="hero-banner">
        <div className="hero-content">
          <p className="hero-eyebrow">Plataforma Comunitária • João Pessoa (PB)</p>
          <h1 id="explore-heading">Encontre locais realmente preparados para sua família e seu pet</h1>
          <p className="hero-subtitle">
            Combine filtros de estrutura infantil, acessibilidade física, conforto sensorial e
            receptividade pet com avaliações independentes em quatro pilares antes de sair de casa.
          </p>
        </div>

        <div className="search-bar-card" role="search" aria-label="Busca de estabelecimentos em João Pessoa">
          <div className="search-input-group">
            <label htmlFor="campo-busca" className="sr-only">
              Pesquisar estabelecimento por nome, bairro ou categoria em João Pessoa
            </label>
            <span className="search-icon">
              <IconSearch size={20} />
            </span>
            <input
              id="campo-busca"
              type="search"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Pesquisar por nome, bairro (Manaíra, Bessa, Tambaú...) ou categoria"
              className="search-input"
            />
          </div>

          <div className="search-actions">
            <div className="sort-group">
              <label htmlFor="campo-ordenacao" className="sort-label">
                Ordenar por
              </label>
              <select
                id="campo-ordenacao"
                value={sortBy}
                onChange={(e) => onSortChange(e.target.value)}
                className="select-input"
              >
                <option value="relevancia">Relevância (média geral)</option>
                <option value="acessibilidade">Melhor Acessibilidade</option>
                <option value="infantil">Melhor Estrutura Infantil</option>
                <option value="pet">Melhor Receptividade Pet</option>
              </select>
            </div>

            {activeFiltersCount > 0 && (
              <button
                type="button"
                onClick={onClearFilters}
                className="btn btn-secondary"
              >
                Limpar filtros ({activeFiltersCount})
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="mobile-filter-bar">
        <button
          type="button"
          className="btn btn-outline mobile-filter-toggle"
          aria-expanded={mobileFiltersOpen}
          aria-controls="painel-filtros"
          onClick={() => setMobileFiltersOpen((prev) => !prev)}
        >
          <IconFilter size={18} />
          <span>
            {mobileFiltersOpen ? 'Ocultar filtros combinados' : 'Filtrar por necessidades'}
            {selectedCategories.length + selectedTags.length > 0
              ? ` (${selectedCategories.length + selectedTags.length})`
              : ''}
          </span>
        </button>
      </div>

      <div className="explore-layout">
        <aside
          id="painel-filtros"
          aria-label="Filtros combinados por necessidade"
          className={`filters-panel ${mobileFiltersOpen ? 'is-open' : ''}`}
        >
          <div className="filters-header">
            <h2>Filtros combinados</h2>
            {selectedCategories.length + selectedTags.length > 0 && (
              <button
                type="button"
                onClick={onClearFilters}
                className="btn-link"
              >
                Limpar tudo
              </button>
            )}
          </div>
          <p className="filters-hint">
            Todos os critérios marcados são aplicados simultaneamente (combinação lógica E).
          </p>

          <fieldset className="filter-fieldset">
            <legend>1. Tipo de local</legend>
            <div className="checkbox-list">
              {CATEGORIAS.map((cat) => {
                const checked = selectedCategories.includes(cat);
                return (
                  <label key={cat} className={`checkbox-label ${checked ? 'is-checked' : ''}`}>
                    <input
                      type="checkbox"
                      checked={checked}
                      onChange={() => onToggleCategory(cat)}
                    />
                    <span>{cat}</span>
                  </label>
                );
              })}
            </div>
          </fieldset>

          {FILTER_GROUPS.map((group, idx) => (
            <fieldset key={group.key} className="filter-fieldset">
              <legend>
                {idx + 2}. {group.title}
              </legend>
              <div className="checkbox-list">
                {group.options.map((tag) => {
                  const checked = selectedTags.includes(tag);
                  return (
                    <label key={tag} className={`checkbox-label ${checked ? 'is-checked' : ''}`}>
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => onToggleTag(tag)}
                      />
                      <span>{tag}</span>
                    </label>
                  );
                })}
              </div>
            </fieldset>
          ))}
        </aside>

        <div className="results-column">
          <div className="results-toolbar" aria-live="polite">
            <p className="results-count">
              Exibindo <strong>{locaisFiltrados.length}</strong> de{' '}
              <strong>{totalCatalogo}</strong> locais cadastrados em João Pessoa (PB)
            </p>
          </div>

          {(selectedCategories.length > 0 || selectedTags.length > 0) && (
            <div className="active-chips" aria-label="Filtros ativos">
              {selectedCategories.map((cat) => (
                <button
                  key={`cat-${cat}`}
                  type="button"
                  className="chip-active"
                  onClick={() => onToggleCategory(cat)}
                  aria-label={`Remover filtro de categoria ${cat}`}
                >
                  <span>{cat}</span>
                  <IconClose size={14} />
                </button>
              ))}
              {selectedTags.map((tag) => (
                <button
                  key={`tag-${tag}`}
                  type="button"
                  className="chip-active"
                  onClick={() => onToggleTag(tag)}
                  aria-label={`Remover filtro ${tag}`}
                >
                  <span>{tag}</span>
                  <IconClose size={14} />
                </button>
              ))}
            </div>
          )}

          {locaisFiltrados.length === 0 ? (
            <div className="empty-state" role="status">
              <h3>Nenhum local atende a todos os filtros marcados simultaneamente</h3>
              <p>
                Tente remover um ou mais critérios de filtragem ou limpar a pesquisa para visualizar
                novamente os {totalCatalogo} espaços e estabelecimentos cadastrados em João Pessoa.
              </p>
              <button type="button" onClick={onClearFilters} className="btn btn-primary">
                Limpar todos os filtros
              </button>
            </div>
          ) : (
            <div className="places-grid">
              {locaisFiltrados.map((local) => {
                const avg = getAveragesForPlace(local);
                const savedLists = getListsContainingPlace(local.id);
                const isSaved = savedLists.length > 0;
                const flatTags = getAllTagsFlat(local);
                const visibleTags = flatTags.slice(0, 4);
                const extraTagsCount = Math.max(0, flatTags.length - visibleTags.length);

                return (
                  <article key={local.id} className="place-card">
                    <div className="place-card-top">
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

                      <button
                        type="button"
                        className={`icon-save-btn ${isSaved ? 'is-saved' : ''}`}
                        onClick={() => onOpenSaveModal(local)}
                        aria-label={
                          isSaved
                            ? `Gerenciar listas de favoritos para ${local.nome} (salvo em ${savedLists.length})`
                            : `Salvar ${local.nome} em lista de favoritos`
                        }
                        title={
                          isSaved
                            ? `Salvo em ${savedLists.length} lista(s)`
                            : 'Salvar em lista de favoritos'
                        }
                      >
                        <IconBookmark size={18} filled={isSaved} />
                        <span>{isSaved ? `Salvo (${savedLists.length})` : 'Salvar'}</span>
                      </button>
                    </div>

                    <h3 className="place-title">{local.nome}</h3>

                    <div className="place-meta">
                      <span className="meta-item">
                        <IconMapPin size={15} />
                        <span>{local.bairro}, João Pessoa</span>
                      </span>
                      <span className="meta-item">
                        <IconClock size={15} />
                        <span>{local.horario}</span>
                      </span>
                    </div>

                    <p className="place-desc">{local.descricao}</p>

                    <div className="tag-list" aria-label="Comodidades principais">
                      {visibleTags.map((tag) => (
                        <span key={tag} className="tag-pill">
                          {tag}
                        </span>
                      ))}
                      {extraTagsCount > 0 && (
                        <span className="tag-pill tag-pill-more">+{extraTagsCount} tags</span>
                      )}
                    </div>

                    <div className="pillars-summary" aria-label="Médias nos quatro pilares">
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
                      <span className="review-count-note">
                        {avg.total === 0
                          ? 'Sem avaliações'
                          : `${avg.total} ${avg.total === 1 ? 'avaliação' : 'avaliações'}`}
                      </span>
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
        </div>
      </div>
    </section>
  );
}
