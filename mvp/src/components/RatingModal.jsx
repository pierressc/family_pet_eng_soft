import { useEffect, useRef, useState } from 'react';
import { PILLARS } from '../utils/helpers';
import { IconClose, IconShield, IconStar } from './Icons';

const MAX_COMMENT = 500;

export default function RatingModal({ local, onClose, onSubmit }) {
  // undefined = não marcado | 1..5 = nota numérica | null = Não se aplica
  const [scores, setScores] = useState({
    infantil: undefined,
    acessibilidade: undefined,
    pet: undefined,
    atendimento: undefined,
  });
  const [autor, setAutor] = useState('');
  const [comentario, setComentario] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const closeBtnRef = useRef(null);

  useEffect(() => {
    closeBtnRef.current?.focus();

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.stopPropagation();
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

    const unmarked = PILLARS.filter((p) => scores[p.key] === undefined);
    if (unmarked.length > 0) {
      setErrorMsg(
        `Selecione uma nota de 1 a 5 ou "Não se aplica" para: ${unmarked
          .map((m) => m.label)
          .join(', ')}.`
      );
      return;
    }

    const ratedCount = PILLARS.filter(
      (p) => typeof scores[p.key] === 'number' && scores[p.key] >= 1 && scores[p.key] <= 5
    ).length;
    if (ratedCount === 0) {
      setErrorMsg(
        'Atribua uma nota de 1 a 5 estrelas em pelo menos um dos quatro critérios para enviar sua avaliação.'
      );
      return;
    }

    const trimmedAuthor = autor.trim();
    if (trimmedAuthor.length < 2) {
      setErrorMsg('Informe seu nome ou apelido público com pelo menos 2 caracteres.');
      return;
    }

    const todayIso = new Date().toISOString().slice(0, 10);
    onSubmit({
      id: `av-local-${Date.now()}`,
      autor: trimmedAuthor,
      data: todayIso,
      pilares: { ...scores },
      comentario: comentario.trim().slice(0, MAX_COMMENT),
    });
  };

  return (
    <div
      className="modal-backdrop modal-backdrop-top"
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
            <h2 id="rating-modal-title">Avaliar local</h2>
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
            Avalie de 1 a 5 estrelas os critérios que você vivenciou ou marque &ldquo;Não se
            aplica&rdquo; nos demais (é necessário atribuir nota em pelo menos um critério).
          </p>

          {errorMsg && (
            <div className="alert-error" role="alert">
              {errorMsg}
            </div>
          )}

          <div className="rating-pillars-stack">
            {PILLARS.map((pillar) => {
              const current = scores[pillar.key];
              const isNA = current === null;
              const numericScore = typeof current === 'number' ? current : 0;

              return (
                <fieldset key={pillar.key} className="rating-pillar-fieldset">
                  <legend>{pillar.label}</legend>
                  <p className="pillar-help-text">{pillar.description}</p>
                  <div
                    className="star-rating-row"
                    role="group"
                    aria-label={`Avaliação para ${pillar.label}`}
                  >
                    {[1, 2, 3, 4, 5].map((value) => {
                      const active = numericScore > 0 && value <= numericScore;
                      const selected = numericScore === value;
                      return (
                        <button
                          key={value}
                          type="button"
                          className={`star-btn ${active ? 'is-active' : ''}`}
                          aria-pressed={selected}
                          aria-label={`Nota ${value} de 5 para ${pillar.label}`}
                          onClick={() => handleSelectScore(pillar.key, value)}
                        >
                          <IconStar size={19} filled={active} />
                          <span>{value}</span>
                        </button>
                      );
                    })}

                    <button
                      type="button"
                      className={`na-btn ${isNA ? 'is-active' : ''}`}
                      aria-pressed={isNA}
                      aria-label={`Marcar ${pillar.label} como Não se aplica`}
                      onClick={() => handleSelectScore(pillar.key, null)}
                    >
                      Não se aplica
                    </button>
                  </div>
                </fieldset>
              );
            })}
          </div>

          <div className="form-field">
            <label htmlFor="campo-apelido">Seu nome ou apelido</label>
            <input
              id="campo-apelido"
              type="text"
              required
              minLength={2}
              maxLength={60}
              value={autor}
              onChange={(e) => {
                setAutor(e.target.value);
                if (errorMsg) setErrorMsg('');
              }}
              placeholder="Ex.: Camila, Rafael ou Família Silva"
              className="text-input"
            />
          </div>

          <div className="form-field">
            <div className="label-with-counter">
              <label htmlFor="campo-comentario">Comentário sobre a visita (opcional)</label>
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
              placeholder="Conte como foi o acolhimento, o ruído, a acessibilidade, o espaço kids ou a área pet..."
              className="textarea-input"
            />
          </div>

          <div className="privacy-notice" role="note">
            <IconShield size={17} />
            <p>
              Sua avaliação é pública e não coleta dados sensíveis (como e-mail ou documentos). Use
              apenas o nome ou apelido que deseja exibir.
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
