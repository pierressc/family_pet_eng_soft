const REVIEWS_KEY = 'familyplace_avaliacoes_v1';
const FAVORITES_KEY = 'familyplace_favoritos_v1';

export const DEFAULT_FAVORITE_LISTS = [
  {
    id: 'lista-avo',
    nome: 'Melhores para ir com meu Avô',
    locaisIds: ['bistro-jardim-da-orla', 'casa-calma-gastronomia', 'estacao-cabo-branco'],
  },
  {
    id: 'lista-baixo-ruido',
    nome: 'Locais com Baixo Ruído',
    locaisIds: [
      'cafe-silencio-e-leitura',
      'casa-calma-gastronomia',
      'jardim-botanico-benjamin-maranhao',
    ],
  },
  {
    id: 'lista-kids',
    nome: 'Melhores Espaços Kids',
    locaisIds: ['quintal-bessa-familia', 'espaco-brincar-e-cuidar', 'parque-zoobotanico-bica'],
  },
  {
    id: 'lista-pets',
    nome: 'Passeios com Pets',
    locaisIds: ['parque-linear-parahyba', 'cafeteria-acolher-tambau', 'cantina-brisa-do-bessa'],
  },
];

export function checkLocalStorageAvailable() {
  try {
    const testKey = '__familyplace_storage_check__';
    window.localStorage.setItem(testKey, '1');
    window.localStorage.removeItem(testKey);
    return true;
  } catch {
    return false;
  }
}

export function loadStoredReviews() {
  try {
    const raw = window.localStorage.getItem(REVIEWS_KEY);
    if (!raw) return { ok: true, data: {} };
    const parsed = JSON.parse(raw);
    if (parsed && typeof parsed === 'object') {
      return { ok: true, data: parsed };
    }
    return { ok: true, data: {} };
  } catch {
    return {
      ok: false,
      data: {},
      error:
        'O armazenamento local do navegador está indisponível ou bloqueado. Suas novas avaliações funcionarão apenas nesta sessão.',
    };
  }
}

export function saveStoredReviews(reviewsByPlace) {
  try {
    window.localStorage.setItem(REVIEWS_KEY, JSON.stringify(reviewsByPlace));
    return { ok: true };
  } catch {
    return {
      ok: false,
      error:
        'Não foi possível gravar a avaliação no armazenamento local do navegador. Verifique permissões de privacidade ou espaço disponível.',
    };
  }
}

export function loadFavoriteLists() {
  try {
    const raw = window.localStorage.getItem(FAVORITES_KEY);
    if (raw === null) {
      window.localStorage.setItem(FAVORITES_KEY, JSON.stringify(DEFAULT_FAVORITE_LISTS));
      return { ok: true, data: DEFAULT_FAVORITE_LISTS };
    }
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      return { ok: true, data: parsed };
    }
    return { ok: true, data: DEFAULT_FAVORITE_LISTS };
  } catch {
    return {
      ok: false,
      data: DEFAULT_FAVORITE_LISTS,
      error:
        'O armazenamento local do navegador está indisponível ou bloqueado. Alterações nas listas de favoritos não serão preservadas após recarregar a página.',
    };
  }
}

export function saveFavoriteLists(lists) {
  try {
    window.localStorage.setItem(FAVORITES_KEY, JSON.stringify(lists));
    return { ok: true };
  } catch {
    return {
      ok: false,
      error:
        'Não foi possível salvar suas listas de favoritos no armazenamento local do navegador.',
    };
  }
}
