export const PILLARS = [
  {
    key: 'infantil',
    label: 'Estrutura Infantil (Kids)',
    shortLabel: 'Infantil',
    description: 'Trocador, espaço kids, cadeirão, segurança física e recreação.',
  },
  {
    key: 'acessibilidade',
    label: 'Acessibilidade e Conforto',
    shortLabel: 'Acessibilidade',
    description:
      'Rampas, banheiro adaptado, piso tátil, baixo ruído, iluminação confortável, comunicação acessível e assentos (idosos, PCD e neurodivergentes).',
  },
  {
    key: 'pet',
    label: 'Receptividade Pet',
    shortLabel: 'Pet Friendly',
    description: 'Área coberta permitida, disponibilidade de água e suporte por porte de animal.',
  },
  {
    key: 'atendimento',
    label: 'Atendimento e Custo-Benefício',
    shortLabel: 'Atendimento',
    description: 'Cordialidade, preparo da equipe para acolhimento inclusivo e preços transparentes.',
  },
];

export const CATEGORIAS = [
  'Restaurante',
  'Cafeteria / Padaria',
  'Parque / Lazer / Cultura',
  'Serviço / Lazer',
];

export const FILTER_GROUPS = [
  {
    key: 'infantil',
    title: 'Estrutura Infantil (Crianças)',
    options: [
      'Espaço Kids Monitorado',
      'Trocador Acessível',
      'Cadeirão Infantil',
      'Área Infantil Segura',
    ],
  },
  {
    key: 'pet',
    title: 'Receptividade Pet',
    options: [
      'Aceita Pet Porte Pequeno',
      'Aceita Pet Porte Médio',
      'Aceita Pet Porte Grande',
      'Área Coberta Permitida',
      'Potes de Água Disponíveis',
    ],
  },
  {
    key: 'acessibilidade',
    title: 'Idosos e PCD (Físico / Intelectual)',
    options: [
      'Rampa de Acessibilidade',
      'Banheiro Adaptado',
      'Piso Tátil / Sinalização',
      'Assentos Confortáveis',
      'Circulação Ampla',
    ],
  },
  {
    key: 'sensorial',
    title: 'Sensorial / Neurodivergentes',
    options: [
      'Ambiente com Baixo Ruído',
      'Iluminação Controlada',
      'Área Reservada / Calma',
      'Cardápio / Comunicação Visual',
    ],
  },
];

export function normalizeText(text) {
  if (!text) return '';
  return String(text)
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim();
}

/**
 * Regra de Domínio RD002:
 * Média aritmética simples por pilar arredondada para 1 casa decimal quando N >= 1;
 * exibe exatamente "Sem avaliações" quando N = 0 (vedando "0,0").
 */
export function calculatePillarAverages(avaliacoes) {
  const list = Array.isArray(avaliacoes) ? avaliacoes : [];
  const total = list.length;

  const result = {};
  for (const pillar of PILLARS) {
    if (total === 0) {
      result[pillar.key] = {
        value: null,
        formatted: 'Sem avaliações',
      };
    } else {
      const sum = list.reduce((acc, item) => acc + Number(item.pilares?.[pillar.key] || 0), 0);
      const avg = Math.round((sum / total) * 10) / 10;
      result[pillar.key] = {
        value: avg,
        formatted: avg.toFixed(1).replace('.', ','),
      };
    }
  }

  return {
    total,
    pillars: result,
  };
}

export function getOverallScore(averages) {
  if (!averages || averages.total === 0) return -1;
  const vals = PILLARS.map((p) => averages.pillars[p.key].value).filter((v) => v !== null);
  if (vals.length === 0) return -1;
  return vals.reduce((a, b) => a + b, 0) / vals.length;
}

export function getAllTagsFlat(local) {
  if (!local?.tags) return [];
  return [
    ...(local.tags.infantil || []),
    ...(local.tags.acessibilidade || []),
    ...(local.tags.sensorial || []),
    ...(local.tags.pet || []),
  ];
}

export function buildWhatsAppUrl(numero, nomeLocal) {
  if (!numero) return '';
  const digits = String(numero).replace(/\D/g, '');
  const message = `Olá! Encontrei ${nomeLocal} no Family Place (João Pessoa) e gostaria de confirmar informações sobre acessibilidade e atendimento.`;
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}

export function formatDateBR(isoDate) {
  if (!isoDate) return '';
  const parts = String(isoDate).split('-');
  if (parts.length !== 3) return isoDate;
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
}
