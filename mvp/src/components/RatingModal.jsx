import { useEffect, useRef, useState } from 'react';
import { PILLARS } from '../utils/helpers';
import { IconClose, IconShield, IconStar } from './Icons';

const MAX_COMMENT = 500;

export default function RatingModal({ local, onClose, onSubmit }) {
  const [scores, setScores] = useState({
    infantil: 0,
    acessibilidade: 0,
    pet: 0,
    atendimento: 0,
  });
  const [autor, setAutor] = useState('');
  const [comentario, setComentario] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const closeBtnRef = useRef(null);

  useEffect(() => {
    closeBtnRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const handleSelectScore = (pillarKey, value) => {
    setScores((prev) => ({ ...prev, [pillarKey]: value }));
    if (errorMsg) setErrorMsg('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const missing = PILLARS.filter((p) => !scores[p.key] || scores[p.key] < 1 || scores[p.key] > 5);
    if (missing.length > 0) {
      setErrorMsg(
        `Selecione uma nota obrigatória de 1 a 5 estrelas para: ${missing
          .map((m) => m.label)
          .join(', ')}.`
      );
      return;
    }

    const todayIso = new Date().toISOString().slice(0, 10);
    onSubmit({
      id: `av-local-${Date.now()}`,
      autor: autor.trim() || 'Visitante Anônimo',
      data: todayIso,
      pilares: { ...scores },
      comentario: comentario.trim().slice(0, MAX_COMMENT),
    });
  };

  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="modal-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="rating-modal-title"
      >
        <div className="modal-header">
          <div>
            <h2 id="rating-modal-title">Avaliar nos 4 Pilares</h2>
            <p className="modal-subtitle">{local.nome}</p>
          </div>
          <button
            ref={closeBtnRef}
            type="button"
            className="btn-icon-close"
            onClick={onClose}
            aria-label="Fechar janela de avaliação"
          >
            <IconClose size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} noValidate className="modal-body">
          <p className="form-lead">
            Atribua uma nota obrigatória de 1 a 5 estrelas para cada pilar independente.
          </p>

          {errorMsg && (
            <div className="alert-error" role="alert">
              {errorMsg}
            </div>
          )}

          <div className="rating-pillars-stack">
            {PILLARS.map((pillar) => {
              const current = scores[pillar.key];
              return (
                <fieldset key={pillar.key} className="rating-pillar-fieldset">
                  <legend>
                    {pillar.label} <span aria-hidden="true">*</span>
                  </legend>
                  <p className="pillar-help-text">{pillar.description}</p>
                  <div className="star-rating-row" role="group" aria-label={`Nota para ${pillar.label}`}>
                    {[1, 2, 3, 4, 5].map((value) => {
                      const active = value <= current;
                      const selected = value === current;
                      return (
                        <button
                          key={value}
                          type="button"
                          className={`star-btn ${active ? 'is-active' : ''}`}
                          aria-pressed={selected}
                          aria-label={`Nota ${value} de 5 para ${pillar.label}`}
                          onClick={() => handleSelectScore(pillar.key, value)}
                        >
                          <IconStar size={20} filled={active} />
                          <span>{value}</span>
                        </button>
                      );
                    })}
                    <span className="star-current-label" aria-live="polite">
                      {current > 0 ? `${current} de 5` : 'Obrigatório'}
                    </span>
                  </div>
                </fieldset>
              );
            })}
          </div>

          <div className="form-field">
            <label htmlFor="campo-apelido">Apelido público (opcional)</label>
            <input
              id="campo-apelido"
              type="text"
              value={autor}
              maxLength={60}
              onChange={(e) => setAutor(e.target.value)}
              placeholder="Ex.: Família Silva ou Visitante de Manaíra (padrão: Visitante Anônimo)"
              className="text-input"
            />
          </div>

          <div className="form-field">
            <div className="label-with-counter">
              <label htmlFor="campo-comentario">Comentário sobre a experiência (opcional)</label>
              <span className="char-counter" aria-live="polite">
                {comentario.length} / {MAX_COMMENT} caracteres
              </span>
            </div>
            <textarea
              id="campo-comentario"
              rows={4}
              maxLength={MAX_COMMENT}
              value={comentario}
              onChange={(e) => setComentario(e.target.value)}
              placeholder="Compartilhe detalhes objetivos sobre acessibilidade, ruído, espaço infantil, regras pet ou atendimento..."
              className="textarea-input"
            />
          </div>

          <div className="privacy-notice" role="note">
            <IconShield size={18} />
            <p>
              <strong>Privacidade e LGPD (RD001):</strong> não informe CPF, telefone pessoal,
              endereço residencial ou dados sensíveis de terceiros. Sua avaliação fica gravada
              localmente no navegador e recalcula imediatamente as quatro médias do local.
            </p>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-outline" onClick={onClose}>
              Cancelar
            </button>
            <button type="submit" className="btn btn-primary">
              Publicar avaliação
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
