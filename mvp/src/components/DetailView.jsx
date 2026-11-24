import { PILLARS, buildWhatsAppUrl, formatDateBR } from '../utils/helpers';
import {
  IconArrowLeft,
  IconBookmark,
  IconClock,
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
  onBack,
  onOpenRatingModal,
  onOpenSaveModal,
}) {
  if (!local) {
    return (
      <section className="empty-state">
        <h1>Local não encontrado</h1>
        <p>O estabelecimento selecionado não consta no catálogo atual.</p>
        <button type="button" className="btn btn-primary" onClick={onBack}>
          Voltar à busca
        </button>
      </section>
    );
  }

  const isSaved = savedLists.length > 0;
  const whatsappUrl = buildWhatsAppUrl(local.contato?.whatsapp, local.nome);
  const siteUrl = local.contato?.site || '';

  const tagSections = [
    {
      title: 'Estrutura Infantil (Crianças)',
      items: local.tags?.infantil || [],
      emptyText: 'Sem comodidades infantis específicas registradas.',
    },
    {
      title: 'Acessibilidade Física e Conforto (Idosos e PCD)',
      items: local.tags?.acessibilidade || [],
      emptyText: 'Sem tags de acessibilidade física registradas.',
    },
    {
      title: 'Conforto Sensorial e Neurodivergentes',
      items: local.tags?.sensorial || [],
      emptyText: 'Sem informações sensoriais específicas registradas.',
    },
    {
      title: 'Receptividade Pet (Pet Friendly)',
      items: local.tags?.pet || [],
      emptyText:
        local.tipoOrigem === 'Espaço Público Real'
          ? 'Não permite entrada de animais domésticos (proteção à fauna silvestre ou patrimônio).'
          : 'Não há registro de área pet friendly neste local.',
    },
  ];

  return (
    <section aria-labelledby="detail-heading" className="detail-section">
      <div className="detail-nav-row">
        <button type="button" className="btn btn-outline" onClick={onBack}>
          <IconArrowLeft size={16} />
          <span>Voltar à busca (preservar filtros)</span>
        </button>
      </div>

      <header className="detail-header-card">
        <div className="badge-row">
          <span
            className={`badge ${
              local.tipoOrigem === 'Espaço Público Real' ? 'badge-public' : 'badge-local'
            }`}
          >
            {local.tipoOrigem}
          </span>
          <span className="badge badge-category">{local.categoria}</span>
        </div>

        <h1 id="detail-heading" className="detail-title">
          {local.nome}
        </h1>

        <div className="detail-meta-list">
          <div className="meta-item">
            <IconMapPin size={17} />
            <span>{local.endereco}</span>
          </div>
          <div className="meta-item">
            <IconClock size={17} />
            <span>{local.horario}</span>
          </div>
        </div>

        <p className="detail-description">{local.descricao}</p>

        <div className="detail-primary-actions">
          <button type="button" className="btn btn-primary" onClick={onOpenRatingModal}>
            <IconStar size={17} filled />
            <span>Avaliar nos 4 pilares</span>
          </button>

          <button
            type="button"
            className={`btn ${isSaved ? 'btn-saved' : 'btn-secondary'}`}
            onClick={() => onOpenSaveModal(local)}
          >
            <IconBookmark size={17} filled={isSaved} />
            <span>
              {isSaved ? `Salvo em ${savedLists.length} lista(s)` : 'Salvar em favoritos'}
            </span>
          </button>

          {whatsappUrl && (
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp"
            >
              <IconMessage size={17} />
              <span>Contato via WhatsApp</span>
              <IconExternalLink size={14} />
            </a>
          )}

          {siteUrl && (
            <a
              href={siteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline"
            >
              <span>Site oficial</span>
              <IconExternalLink size={14} />
            </a>
          )}
        </div>
      </header>

      <div className="detail-two-col">
        <article className="content-card" aria-labelledby="tags-heading">
          <h2 id="tags-heading" className="section-card-title">
            Infraestrutura e Acolhimento Declarados
          </h2>
          <div className="tag-groups-stack">
            {tagSections.map((sec) => (
              <div key={sec.title} className="tag-group-block">
                <h3>{sec.title}</h3>
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
        </article>

        <article className="content-card" aria-labelledby="pillars-heading">
          <div className="card-title-row">
            <h2 id="pillars-heading" className="section-card-title">
              Avaliação Multicritério (4 Pilares)
            </h2>
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
                      <h3>{pillar.label}</h3>
                      <p className="pillar-help-text">{pillar.description}</p>
                    </div>
                    <div className={`pillar-score-badge ${pData.value === null ? 'is-empty' : ''}`}>
                      {pData.value !== null ? (
                        <>
                          <IconStar size={15} filled />
                          <span>{pData.formatted} / 5,0</span>
                        </>
                      ) : (
                        <span>Sem avaliações</span>
                      )}
                    </div>
                  </div>
                  <div
                    className="meter-track"
                    role="progressbar"
                    aria-label={`Média do pilar ${pillar.label}`}
                    aria-valuemin={0}
                    aria-valuemax={5}
                    aria-valuenow={pData.value ?? 0}
                    aria-valuetext={
                      pData.value !== null ? `${pData.formatted} de 5` : 'Sem avaliações'
                    }
                  >
                    <div className="meter-fill" style={{ width: `${pct}%` }} />
                  </div>
                </div>
              );
            })}
          </div>

          <p className="rule-note">
            Cálculo objetivo por pilar (RD002): média aritmética simples arredondada para 1 casa
            decimal. Quando não há registros, exibe-se &ldquo;Sem avaliações&rdquo;.
          </p>
        </article>
      </div>

      <article className="content-card" aria-labelledby="vitrine-heading">
        <h2 id="vitrine-heading" className="section-card-title">
          Vitrine Informativa de Produtos e Serviços
        </h2>

        <div className="vitrine-grid">
          {(local.vitrine || []).map((item) => (
            <div key={item.nome} className="vitrine-card">
              <div className="vitrine-card-top">
                {item.favoritoDaCasa ? (
                  <span className="badge badge-featured">Favorito da Casa</span>
                ) : (
                  <span className="badge badge-category">Item informativo</span>
                )}
              </div>
              <h3>{item.nome}</h3>
              <p>{item.descricao}</p>
              <p className="vitrine-price">{item.faixaPreco}</p>
            </div>
          ))}
        </div>

        <div className="info-banner" role="note">
          <IconInfo size={18} />
          <p>
            <strong>Aviso de vitrine informativa (RD003):</strong> o Family Place não realiza
            pagamentos online, carrinho de compras, checkout financeiro, serviço próprio de delivery
            nem avaliação individual por item do cardápio. Para reservas, dúvidas ou pedidos, utilize
            diretamente os canais oficiais acima.
          </p>
        </div>
      </article>

      <article className="content-card" aria-labelledby="reviews-heading">
        <div className="card-title-row">
          <h2 id="reviews-heading" className="section-card-title">
            Comentários da Comunidade
          </h2>
          <button type="button" className="btn btn-secondary" onClick={onOpenRatingModal}>
            Escrever avaliação
          </button>
        </div>

        {avaliacoes.length === 0 ? (
          <div className="empty-inline">
            <p>
              Este local ainda não possui avaliações comunitárias. Seja a primeira pessoa a avaliar
              nos quatro pilares.
            </p>
          </div>
        ) : (
          <ol className="reviews-list">
            {avaliacoes.map((rev) => (
              <li key={rev.id} className="review-card">
                <div className="review-header">
                  <strong>{rev.autor || 'Visitante Anônimo'}</strong>
                  <time dateTime={rev.data}>{formatDateBR(rev.data)}</time>
                </div>
                <div className="review-pillars-strip">
                  {PILLARS.map((pillar) => (
                    <span key={pillar.key} className="review-pillar-pill">
                      {pillar.shortLabel}: <strong>{rev.pilares?.[pillar.key]}/5</strong>
                    </span>
                  ))}
                </div>
                {rev.comentario ? (
                  <p className="review-comment">{rev.comentario}</p>
                ) : (
                  <p className="review-comment is-muted">
                    Avaliação registrada sem comentário textual.
                  </p>
                )}
              </li>
            ))}
          </ol>
        )}
      </article>
    </section>
  );
}
