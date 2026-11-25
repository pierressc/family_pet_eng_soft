import { useEffect, useRef } from 'react';
import { PILLARS, buildWhatsAppUrl, formatDateBR, getImageUrl } from '../utils/helpers';
import {
  IconBookmark,
  IconClock,
  IconClose,
  IconExternalLink,
  IconInfo,
  IconMapPin,
  IconMessage,
  IconStar,
} from './Icons';

export default function DetailView({
  local,
  avaliacoes,
  averages,
  savedLists,
  hasChildModalOpen,
  onClose,
  onOpenRatingModal,
  onOpenSaveModal,
}) {
  const closeBtnRef = useRef(null);

  useEffect(() => {
    closeBtnRef.current?.focus();
  }, [local?.id]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape' && !hasChildModalOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, hasChildModalOpen]);

  if (!local) return null;

  const isSaved = savedLists.length > 0;
  const whatsappUrl = buildWhatsAppUrl(local.contato?.whatsapp, local.nome);
  const siteUrl = local.contato?.site || '';

  const tagSections = [
    {
      title: 'Estrutura Infantil',
      items: local.tags?.infantil || [],
      emptyText: 'Sem itens infantis específicos informados.',
    },
    {
      title: 'Acessibilidade',
      items: local.tags?.acessibilidade || [],
      emptyText: 'Sem itens de acessibilidade física informados.',
    },
    {
      title: 'Conforto Sensorial',
      items: local.tags?.sensorial || [],
      emptyText: 'Sem informações sensoriais específicas.',
    },
    {
      title: 'Pet Friendly',
      items: local.tags?.pet || [],
      emptyText:
        local.tipoOrigem === 'Espaço Público'
          ? 'Não permite animais domésticos (proteção à fauna silvestre ou patrimônio).'
          : 'Não há informação de área pet neste local.',
    },
  ];

  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget && !hasChildModalOpen) {
          onClose();
        }
      }}
    >
      <div
        className="modal-dialog modal-dialog-detail"
        role="dialog"
        aria-modal="true"
        aria-labelledby="detail-heading"
      >
        <div className="modal-header detail-modal-header">
          <div className="detail-modal-heading-wrap">
            <div className="badge-row">
              <span
                className={`badge ${
                  local.tipoOrigem === 'Espaço Público' ? 'badge-public' : 'badge-local'
                }`}
              >
                {local.tipoOrigem}
              </span>
              <span className="badge badge-category">{local.categoria}</span>
            </div>
            <h2 id="detail-heading" className="detail-modal-title">
              {local.nome}
            </h2>
          </div>

          <button
            ref={closeBtnRef}
            type="button"
            className="btn-icon-close"
            onClick={onClose}
            aria-label={`Fechar detalhes de ${local.nome}`}
          >
            <IconClose size={20} />
          </button>
        </div>

        <div className="detail-modal-scroll">
          <div className="detail-cover-wrap">
            <img
              src={getImageUrl(local.imagem)}
              alt={`Foto de capa de ${local.nome} no bairro ${local.bairro}`}
              className="detail-cover-img"
            />
          </div>

          <div className="detail-modal-content">
            <div className="detail-meta-list">
              <div className="meta-item">
                <IconMapPin size={16} />
                <span>{local.endereco}</span>
              </div>
              <div className="meta-item">
                <IconClock size={16} />
                <span>{local.horario}</span>
              </div>
            </div>

            <p className="detail-description">{local.descricao}</p>

            <div className="detail-primary-actions">
              <button
                type="button"
                className="btn btn-primary btn-sm"
                onClick={onOpenRatingModal}
              >
                <IconStar size={16} filled />
                <span>Avaliar local</span>
              </button>

              <button
                type="button"
                className={`btn btn-sm ${isSaved ? 'btn-saved' : 'btn-secondary'}`}
                onClick={() => onOpenSaveModal(local)}
              >
                <IconBookmark size={16} filled={isSaved} />
                <span>
                  {isSaved ? `Salvo (${savedLists.length})` : 'Salvar em favoritos'}
                </span>
              </button>

              {whatsappUrl && (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp btn-sm"
                >
                  <IconMessage size={16} />
                  <span>WhatsApp</span>
                  <IconExternalLink size={13} />
                </a>
              )}

              {siteUrl && (
                <a
                  href={siteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline btn-sm"
                >
                  <span>Site oficial</span>
                  <IconExternalLink size={13} />
                </a>
              )}
            </div>

            <div className="detail-modal-grid">
              <section className="detail-subcard" aria-labelledby="tags-heading">
                <h3 id="tags-heading" className="detail-subcard-title">
                  O que o local oferece
                </h3>
                <div className="tag-groups-stack">
                  {tagSections.map((sec) => (
                    <div key={sec.title} className="tag-group-block">
                      <h4>{sec.title}</h4>
                      {sec.items.length > 0 ? (
                        <div className="tag-list">
                          {sec.items.map((tag) => (
                            <span key={tag} className="tag-pill tag-pill-detail">
                              {tag}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <p className="tag-empty-note">{sec.emptyText}</p>
                      )}
                    </div>
                  ))}
                </div>
              </section>

              <section className="detail-subcard" aria-labelledby="pillars-heading">
                <div className="card-title-row">
                  <h3 id="pillars-heading" className="detail-subcard-title">
                    Avaliações
                  </h3>
                  <span className="pill-counter">
                    {averages.total === 0
                      ? 'Sem avaliações'
                      : `${averages.total} ${averages.total === 1 ? 'avaliação' : 'avaliações'}`}
                  </span>
                </div>

                <div className="pillars-detail-list">
                  {PILLARS.map((pillar) => {
                    const pData = averages.pillars[pillar.key];
                    const pct = pData.value !== null ? Math.round((pData.value / 5) * 100) : 0;
                    return (
                      <div key={pillar.key} className="pillar-row-card">
                        <div className="pillar-row-top">
                          <div>
                            <h4>{pillar.label}</h4>
                            <p className="pillar-help-text">{pillar.description}</p>
                          </div>
                          <div
                            className={`pillar-score-badge ${
                              pData.value === null ? 'is-empty' : ''
                            }`}
                          >
                            {pData.value !== null ? (
                              <>
                                <IconStar size={14} filled />
                                <span>{pData.formatted} / 5,0</span>
                              </>
                            ) : (
                              <span>{pData.formatted}</span>
                            )}
                          </div>
                        </div>
                        <div
                          className="meter-track"
                          role="progressbar"
                          aria-label={`Nota de ${pillar.label}`}
                          aria-valuemin={0}
                          aria-valuemax={5}
                          aria-valuenow={pData.value ?? 0}
                          aria-valuetext={
                            pData.value !== null ? `${pData.formatted} de 5` : pData.formatted
                          }
                        >
                          <div className="meter-fill" style={{ width: `${pct}%` }} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            </div>

            <section className="detail-subcard" aria-labelledby="vitrine-heading">
              <h3 id="vitrine-heading" className="detail-subcard-title">
                Cardápio e Destaques
              </h3>

              <div className="vitrine-grid">
                {(local.vitrine || []).map((item) => (
                  <div key={item.nome} className="vitrine-card">
                    {item.favoritoDaCasa && (
                      <div className="vitrine-card-top">
                        <span className="badge badge-featured">Favorito da Casa</span>
                      </div>
                    )}
                    <h4>{item.nome}</h4>
                    <p>{item.descricao}</p>
                    <p className="vitrine-price">{item.faixaPreco}</p>
                  </div>
                ))}
              </div>

              <div className="info-banner" role="note">
                <IconInfo size={16} />
                <p>
                  Valores e itens têm caráter informativo. Para reservas, pedidos ou dúvidas, entre
                  em contato diretamente com o local.
                </p>
              </div>
            </section>

            <section className="detail-subcard" aria-labelledby="reviews-heading">
              <div className="card-title-row">
                <h3 id="reviews-heading" className="detail-subcard-title">
                  Comentários da Comunidade
                </h3>
                <button
                  type="button"
                  className="btn btn-secondary btn-sm"
                  onClick={onOpenRatingModal}
                >
                  Escrever avaliação
                </button>
              </div>

              {avaliacoes.length === 0 ? (
                <div className="empty-inline">
                  <p>Ainda não há avaliações para este local. Compartilhe como foi sua visita.</p>
                </div>
              ) : (
                <ol className="reviews-list">
                  {avaliacoes.map((rev) => (
                    <li key={rev.id} className="review-card">
                      <div className="review-header">
                        <strong>{rev.autor}</strong>
                        <time dateTime={rev.data}>{formatDateBR(rev.data)}</time>
                      </div>
                      <div className="review-pillars-strip">
                        {PILLARS.map((pillar) => {
                          const val = rev.pilares?.[pillar.key];
                          const isRated = typeof val === 'number' && val >= 1 && val <= 5;
                          return (
                            <span
                              key={pillar.key}
                              className={`review-pillar-pill ${isRated ? '' : 'is-na'}`}
                              title={
                                isRated
                                  ? `${pillar.label}: ${val} de 5`
                                  : `${pillar.label}: Não se aplica`
                              }
                            >
                              {pillar.shortLabel}:{' '}
                              <strong>{isRated ? `${val}/5` : 'N/A'}</strong>
                            </span>
                          );
                        })}
                      </div>
                      {rev.comentario ? (
                        <p className="review-comment">{rev.comentario}</p>
                      ) : (
                        <p className="review-comment is-muted">
                          Avaliação registrada sem comentário.
                        </p>
                      )}
                    </li>
                  ))}
                </ol>
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
