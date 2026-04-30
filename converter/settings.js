const SETTINGS_KEY = "siteSettings";

const DEFAULT_SETTINGS = {
  textSize: "default",
  contrast: "normal",
  reduceMotion: false,
  keyboardFocus: false,
  screenReader: false,
  language: "en",
  themeMode: "system",
  colorTheme: "blue",
  backgroundImage: "1.png"   // ✅ correct place
};

const I18N = {
  en: {
    nav_home: "Home",
    nav_converter: "Converter",
    nav_details: "Details",
    nav_history: "History",
    nav_settings: "Settings",
    header_main: "CURRENT CONVERTER 2026",
    header_details: "CURRENCY DETAILS DASHBOARD",
    hero_line1: "Currency made simple",
    hero_line2: "Convert money instantly in real-time",
    label_from: "FROM:",
    label_to: "TO:",
    btn_convert: "Convert",
    text_for_more: "For more",
    btn_get_start: "Get Started",
    enter_amount: "ENTER AMOUNT",
    history_title: "Conversion History",
    btn_clear_history: "Clear History",
    details_select_currency: "Select Currency:",
    details_demand_impact: "Demand Impact",
    details_compared_usd: "Compared to USD",
    details_trend_status: "Trend Status",
    details_historical_trend: "Historical Trend (Mock Chart)",
    details_strength_comparison: "Currency Strength Comparison (vs USD)",
    table_currency: "Currency",
    table_rate: "Rate (vs 1 USD)",
    table_strength_bar: "Strength Bar",
    settings_title: "Accessibility Settings",
    settings_display: "Display",
    settings_display_help: "Adjust visual settings to make the app easier to read and use.",
    settings_text_size: "Text size:",
    settings_text_default: "Default",
    settings_text_large: "Large",
    settings_text_x_large: "Extra Large",
    settings_contrast: "Contrast mode:",
    settings_contrast_normal: "Normal",
    settings_contrast_high: "High Contrast",
    settings_interaction: "Interaction",
    settings_interaction_help: "Improve control and reduce visual discomfort while using the app.",
    settings_reduce_motion: "Reduce motion effects",
    settings_keyboard_focus: "Show strong keyboard focus highlight",
    settings_screen_reader: "Enable screen reader friendly announcements",
    settings_language_theme: "Language & Theme",
    settings_language_theme_help: "Choose your preferred app language and display theme.",
    settings_language: "Language:",
    settings_theme_mode: "Theme mode:",
    settings_theme_system: "System Default",
    settings_theme_light: "Light",
    settings_theme_dark: "Dark",
    settings_color_theme: "Color theme:",
    settings_color_blue: "Blue",
    settings_color_green: "Green",
    settings_color_orange: "Orange",
    settings_color_gray: "Gray",
    settings_save: "Save Accessibility Settings",
    language_english: "English",
    language_french: "French",
    language_spanish: "Spanish",
    language_portuguese: "Portuguese",
    language_chinese: "Chinese",
    language_kinyarwanda: "Kinyarwanda",
    alert_valid_amount: "Enter a valid amount",
    time_updated: "Updated: ",
    alert_settings_saved: "Settings saved for all pages.",
    announce_settings_applied: "Accessibility settings applied.",
    details_title_suffix: "DETAILS",
    details_live_rate: "Live Rate: 1 USD = {rate} {currency}",
    details_app_usage_demand: "App Usage Demand: {demand}",
    details_compared_line: "1 USD ~= {rate} {currency}",
    details_trend_strong: "Strong currency (high usage in app)",
    details_trend_stable: "Stable / low usage currency",
    chart_label: "{currency} Market Growth Trend"
  },
 fr: {
    nav_home: "Accueil",
    nav_converter: "Convertisseur",
    nav_details: "Détails",
    nav_history: "Historique",
    nav_settings: "Paramètres",
    header_main: "CONVERTISSEUR ACTUEL 2026",
    header_details: "TABLEAU DE BORD DES DEVISES",
    hero_line1: "La monnaie simplifiée",
    hero_line2: "Convertissez instantanément en temps réel",
    label_from: "DE:",
    label_to: "À:",
    btn_convert: "Convertir",
    text_for_more: "Pour plus",
    btn_get_start: "Commencer",
    enter_amount: "ENTRER LE MONTANT",
    history_title: "Historique des conversions",
    btn_clear_history: "Effacer l'historique",
    details_select_currency: "Sélectionner une devise:",
    details_demand_impact: "Impact de la demande",
    details_compared_usd: "Comparé au USD",
    details_trend_status: "Statut de tendance",
    details_historical_trend: "Tendance historique (Graphique fictif)",
    details_strength_comparison: "Comparaison de la force (vs USD)",
    table_currency: "Devise",
    table_rate: "Taux (vs 1 USD)",
    table_strength_bar: "Barre de force",
    settings_title: "Paramètres d'accessibilité",
    settings_display: "Affichage",
    settings_display_help: "Ajustez les paramètres visuels pour une meilleure lisibilité.",
    settings_text_size: "Taille du texte:",
    settings_text_default: "Défaut",
    settings_text_large: "Grand",
    settings_text_x_large: "Très grand",
    settings_contrast: "Mode contraste:",
    settings_contrast_normal: "Normal",
    settings_contrast_high: "Contraste élevé",
    settings_interaction: "Interaction",
    settings_interaction_help: "Améliorer le contrôle et réduire l'inconfort visuel.",
    settings_reduce_motion: "Réduire les animations",
    settings_keyboard_focus: "Afficher le focus clavier",
    settings_screen_reader: "Activer les annonces pour lecteur d'écran",
    settings_language_theme: "Langue & Thème",
    settings_language_theme_help: "Choisissez votre langue et thème préférés.",
    settings_language: "language:",
    language_english: "english",
    language_french: "french",
    language_spanish: "spanish",
    language_portuguese: "portuguese",
    language_chinese: "chinese",
    language_kinyarwanda: "Ikinyarwanda",
    settings_theme_mode: "Mode thème:",
    settings_theme_system: "Système",
    settings_theme_light: "Clair",
    settings_theme_dark: "Sombre",
    settings_color_theme: "Couleur:",
    settings_color_blue: "Bleu",
    settings_color_green: "Vert",
    settings_color_orange: "Orange",
    settings_color_gray: "Gris",
    settings_save: "Save Accessibility Settings"
 },
  es: {
    nav_home: "Inicio",
    nav_converter: "Convertidor",
    nav_details: "Detalles",
    nav_history: "Historial",
    nav_settings: "Configuración",
    header_main: "CONVERTIDOR ACTUAL 2026",
    header_details: "PANEL DE DETALLES DE MONEDA",
    hero_line1: "La moneda hecha simple",
    hero_line2: "Convierte dinero instantáneamente en tiempo real",
    label_from: "DE:",
    label_to: "A:",
    btn_convert: "Convertir",
    text_for_more: "Para más",
    btn_get_start: "Comenzar",
    enter_amount: "INGRESAR MONTO",
    history_title: "Historial de Conversiones",
    btn_clear_history: "Borrar Historial",
    details_select_currency: "Seleccionar moneda:",
    details_demand_impact: "Impacto de la demanda",
    details_compared_usd: "Comparado con USD",
    details_trend_status: "Estado de la tendencia",
    details_historical_trend: "Tendencia histórica (Gráfico simulado)",
    details_strength_comparison: "Comparación de fuerza de la moneda (vs USD)",
    table_currency: "Moneda",
    table_rate: "Tasa (vs 1 USD)",
    table_strength_bar: "Barra de fuerza",
    settings_title: "Configuración de accesibilidad",
    settings_display: "Pantalla",
    settings_display_help: "Ajusta las opciones visuales para facilitar la lectura y el uso.",
    settings_text_size: "Tamaño de texto:",
    settings_text_default: "Predeterminado",
    settings_text_large: "Grande",
    settings_text_x_large: "Extra grande",
    settings_contrast: "Modo de contraste:",
    settings_contrast_normal: "Normal",
    settings_contrast_high: "Alto contraste",
    settings_interaction: "Interacción",
    settings_interaction_help: "Mejora el control y reduce la incomodidad visual.",
    settings_reduce_motion: "Reducir efectos de movimiento",
    settings_keyboard_focus: "Mostrar resaltado de enfoque del teclado",
    settings_screen_reader: "Activar anuncios para lector de pantalla",
    settings_language_theme: "Idioma y tema",
    settings_language_theme_help: "Elige tu idioma y tema preferidos.",
    settings_language: "language:",
    settings_theme_mode: "Modo de tema:",
    settings_theme_system: "Predeterminado del sistema",
    settings_theme_light: "Claro",
    settings_theme_dark: "Oscuro",
    settings_color_theme: "Tema de color:",
    settings_color_blue: "Azul",
    settings_color_green: "Verde",
    settings_color_orange: "Naranja",
    settings_color_gray: "Gris",
    settings_save: "Save Accessibility Settings",
    language_english: "english",
    language_french: "french",
    language_spanish: "spanish",
    language_portuguese: "portuguese",
    language_chinese: "chinese",
    language_kinyarwanda: "Ikinyarwanda",
    alert_valid_amount: "Ingresa un monto válido",
    time_updated: "Actualizado: ",
    alert_settings_saved: "Configuración guardada en todas las páginas.",
    announce_settings_applied: "Configuración de accesibilidad aplicada.",
    details_title_suffix: "DETALLES",
    details_live_rate: "Tasa en vivo: 1 USD = {rate} {currency}",
    details_app_usage_demand: "Demanda de uso en la app: {demand}",
    details_compared_line: "1 USD ≈ {rate} {currency}",
    details_trend_strong: "Moneda fuerte (alto uso en la app)",
    details_trend_stable: "Moneda estable / bajo uso",
    chart_label: "Tendencia de crecimiento del mercado de {currency}"
},
pt: {
    nav_home: "Início",
    nav_converter: "Conversor",
    nav_details: "Detalhes",
    nav_history: "Histórico",
    nav_settings: "Configurações",
    header_main: "CONVERSOR ATUAL 2026",
    header_details: "PAINEL DE DETALHES DE MOEDA",
    hero_line1: "Moeda simplificada",
    hero_line2: "Converta dinheiro instantaneamente em tempo real",
    label_from: "DE:",
    label_to: "PARA:",
    btn_convert: "Converter",
    text_for_more: "Para mais",
    btn_get_start: "Começar",
    enter_amount: "INSERIR VALOR",
    history_title: "Histórico de Conversão",
    btn_clear_history: "Limpar Histórico",
    details_select_currency: "Selecionar Moeda:",
    details_demand_impact: "Impacto da Demanda",
    details_compared_usd: "Comparado ao USD",
    details_trend_status: "Status da Tendência",
    details_historical_trend: "Tendência Histórica (Gráfico Simulado)",
    details_strength_comparison: "Comparação de Força da Moeda (vs USD)",
    table_currency: "Moeda",
    table_rate: "Taxa (vs 1 USD)",
    table_strength_bar: "Barra de Força",
    settings_title: "Configurações de Acessibilidade",
    settings_display: "Exibição",
    settings_display_help: "Ajuste as configurações visuais para facilitar a leitura e uso.",
    settings_text_size: "Tamanho do texto:",
    settings_text_default: "Padrão",
    settings_text_large: "Grande",
    settings_text_x_large: "Extra Grande",
    settings_contrast: "Modo de contraste:",
    settings_contrast_normal: "Normal",
    settings_contrast_high: "Alto Contraste",
    settings_interaction: "Interação",
    settings_interaction_help: "Melhore o controle e reduza o desconforto visual.",
    settings_reduce_motion: "Reduzir efeitos de movimento",
    settings_keyboard_focus: "Mostrar destaque de foco do teclado",
    settings_screen_reader: "Ativar anúncios para leitores de tela",
    settings_language_theme: "Idioma e Tema",
    settings_language_theme_help: "Escolha o idioma e tema preferidos.",
    settings_language: "language:",
    settings_theme_mode: "Modo de tema:",
    settings_theme_system: "Padrão do Sistema",
    settings_theme_light: "Claro",
    settings_theme_dark: "Escuro",
    settings_color_theme: "Tema de cor:",
    settings_color_blue: "Azul",
    settings_color_green: "Verde",
    settings_color_orange: "Laranja",
    settings_color_gray: "Cinza",
    settings_save: "Save Accessibility Settings",
    language_english: "english",
    language_french: "french",
    language_spanish: "spanish",
    language_portuguese: "portuguese",
    language_chinese: "chinese",
    language_kinyarwanda: "Ikinyarwanda",
    alert_valid_amount: "Digite um valor válido",
    time_updated: "Atualizado: ",
    alert_settings_saved: "Configurações salvas para todas as páginas.",
    announce_settings_applied: "Configurações de acessibilidade aplicadas.",
    details_title_suffix: "DETALHES",
    details_live_rate: "Taxa ao vivo: 1 USD = {rate} {currency}",
    details_app_usage_demand: "Demanda de uso no app: {demand}",
    details_compared_line: "1 USD ~= {rate} {currency}",
    details_trend_strong: "Moeda forte (alto uso no app)",
    details_trend_stable: "Moeda estável / baixo uso",
    chart_label: "Tendência de crescimento do mercado de {currency}"
},
zh: {
    nav_home: "首页",
    nav_converter: "转换器",
    nav_details: "详情",
    nav_history: "历史记录",
    nav_settings: "设置",
    header_main: "当前货币转换器 2026",
    header_details: "货币详情面板",
    hero_line1: "让货币更简单",
    hero_line2: "实时快速转换货币",
    label_from: "从:",
    label_to: "到:",
    btn_convert: "转换",
    text_for_more: "了解更多",
    btn_get_start: "开始使用",
    enter_amount: "输入金额",
    history_title: "转换历史",
    btn_clear_history: "清除历史",
    details_select_currency: "选择货币:",
    details_demand_impact: "需求影响",
    details_compared_usd: "与美元比较",
    details_trend_status: "趋势状态",
    details_historical_trend: "历史趋势（模拟图表）",
    details_strength_comparison: "货币强度比较（对比USD）",
    table_currency: "货币",
    table_rate: "汇率（对1 USD）",
    table_strength_bar: "强度条",
    settings_title: "无障碍设置",
    settings_display: "显示",
    settings_display_help: "调整视觉设置，使应用更易阅读和使用。",
    settings_text_size: "文字大小:",
    settings_text_default: "默认",
    settings_text_large: "大",
    settings_text_x_large: "特大",
    settings_contrast: "对比模式:",
    settings_contrast_normal: "正常",
    settings_contrast_high: "高对比度",
    settings_interaction: "交互",
    settings_interaction_help: "改善操作并减少视觉不适。",
    settings_reduce_motion: "减少动画效果",
    settings_keyboard_focus: "显示键盘焦点高亮",
    settings_screen_reader: "启用屏幕阅读器提示",
    settings_language_theme: "语言和主题",
    settings_language_theme_help: "选择您喜欢的语言和显示主题。",
    settings_language: "language:",
    settings_theme_mode: "主题模式:",
    settings_theme_system: "系统默认",
    settings_theme_light: "浅色",
    settings_theme_dark: "深色",
    settings_color_theme: "颜色主题:",
    settings_color_blue: "蓝色",
    settings_color_green: "绿色",
    settings_color_orange: "橙色",
    settings_color_gray: "灰色",
    settings_save: "Save Accessibility Settings",
    language_english: "english",
    language_french: "french",
    language_spanish: "spanish",
    language_portuguese: "portuguese",
    language_chinese: "chinese",
    language_kinyarwanda: "Ikinyarwanda",
    alert_valid_amount: "请输入有效金额",
    time_updated: "更新时间: ",
    alert_settings_saved: "设置已保存到所有页面。",
    announce_settings_applied: "无障碍设置已应用。",
    details_title_suffix: "详情",
    details_live_rate: "实时汇率: 1 USD = {rate} {currency}",
    details_app_usage_demand: "应用使用需求: {demand}",
    details_compared_line: "1 USD ≈ {rate} {currency}",
    details_trend_strong: "强势货币（应用中使用率高）",
    details_trend_stable: "稳定/低使用率货币",
    chart_label: "{currency} 市场增长趋势"
},
  rw: {
    nav_home: "Ahabanza",
    nav_converter: "Guhindura",
    nav_details: "Ibisobanuro",
    nav_history: "Amateka",
    nav_settings: "Igenamiterere",
    header_main: "MUCUNGUZI W'AMAFARANGA 2026",
    header_details: "DASHIBODI Y'IBISOBANURO BY'AMAFARANGA",
    hero_line1: "Guhindura amafaranga byoroshye",
    hero_line2: "Hindura amafaranga ako kanya mu gihe nyacyo",
    label_from: "KUVA:",
    label_to: "KUGEZA:",
    btn_convert: "Hindura",
    text_for_more: "Kubindi",
    btn_get_start: "Tangira",
    enter_amount: "SHYIRAMO AMAFARANGA",
    history_title: "Amateka y'Ivunjisha",
    btn_clear_history: "Siba Amateka",
    details_select_currency: "Hitamo ifaranga:",
    details_demand_impact: "Ingaruka z'Icyifuzo",
    details_compared_usd: "Ugereranyije na USD",
    details_trend_status: "Imiterere y'Isoko",
    details_historical_trend: "Imigendekere y'Amateka (Imbonerahamwe)",
    details_strength_comparison: "Kugereranya Imbaraga z'Amafaranga (na USD)",
    table_currency: "Ifaranga",
    table_rate: "Igipimo (ku 1 USD)",
    table_strength_bar: "Urwego rw'Imbaraga",
    settings_title: "Igenamiterere ryo Korohereza Gukoresha",
    settings_display: "Imigaragarire",
    settings_display_help: "Hindura imigaragarire kugira ngo porogaramu yorohere gusoma no gukoresha.",
    settings_text_size: "Ingano y'inyuguti:",
    settings_text_default: "Isanzwe",
    settings_text_large: "Nini",
    settings_text_x_large: "Nini cyane",
    settings_contrast: "Uburyo bw'itandukaniro:",
    settings_contrast_normal: "Busanzwe",
    settings_contrast_high: "Itandukaniro Rirenga",
    settings_interaction: "Imikoranire",
    settings_interaction_help: "Rinda guhindagurika kwinshi no korohereza igenzura rya porogaramu.",
    settings_reduce_motion: "Gabanya imyunyungugu ku rubuga",
    settings_keyboard_focus: "Erekana aho clavier ihagaze neza",
    settings_screen_reader: "Emera amatangazo afasha abasomyi ba ecran",
    settings_language_theme: "Ururimi n'Insanganyamatsiko",
    settings_language_theme_help: "Hitamo ururimi n'imiterere ushaka gukoresha.",
    settings_language: "language:",
    settings_theme_mode: "Uburyo bw'igaragaza:",
    settings_theme_system: "Imiterere ya Sisiteme",
    settings_theme_light: "Urumuri",
    settings_theme_dark: "Umwijima",
    settings_color_theme: "Ibara ry'insanganyamatsiko:",
    settings_color_blue: "Ubururu",
    settings_color_green: "Icyatsi",
    settings_color_orange: "Icunga",
    settings_color_gray: "Ikijuju",
    settings_save: "Save Accessibility Settings",
    language_english: "english",
    language_french: "french",
    language_spanish: "spanish",
    language_portuguese: "portuguese",
    language_chinese: "chinese",
    language_kinyarwanda: "Ikinyarwanda",
    alert_valid_amount: "Andika umubare wemewe",
    time_updated: "Byavuguruwe: ",
    alert_settings_saved: "Igenamiterere ryabitswe ku mapaji yose.",
    announce_settings_applied: "Igenamiterere ryo korohereza gukoresha ryashyizweho.",
    details_title_suffix: "IBISOBANURO",
    details_live_rate: "Igipimo kizima: 1 USD = {rate} {currency}",
    details_app_usage_demand: "Icyifuzo cyo gukoresha porogaramu: {demand}",
    details_compared_line: "1 USD ~= {rate} {currency}",
    details_trend_strong: "Ifaranga rikomeye (rikoreshwa cyane muri porogaramu)",
    details_trend_stable: "Ifaranga rihagaze neza / rikoreshwa gake",
    chart_label: "Imigendekere y'Isoko rya {currency}"
  }
};

function getText(language, key, values = {}) {
  const selected = I18N[language] || I18N.en;
  const fallback = I18N.en[key] || key;
  const template = selected[key] || fallback;

  return template.replace(/\{(\w+)\}/g, (_, token) => {
    return values[token] !== undefined ? values[token] : `{${token}}`;
  });
}

window.translateText = function translateText(key, values = {}) {
  const settings = getSavedSettings();
  return getText(settings.language, key, values);
};

function getSavedSettings() {
  try {
    const parsed = JSON.parse(localStorage.getItem(SETTINGS_KEY) || "{}");
    return { ...DEFAULT_SETTINGS, ...parsed };
  } catch (error) {
    return { ...DEFAULT_SETTINGS };
  }
}

function saveSettings(settings) {
  localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings));
}

function getResolvedTheme(mode) {
  if (mode === "dark") return "dark";
  if (mode === "light") return "light";
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function applyLanguage(language) {
  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    element.textContent = getText(language, key);
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.getAttribute("data-i18n-placeholder");
    element.setAttribute("placeholder", getText(language, key));
  });
}

function ensureAnnouncer() {
  let liveRegion = document.getElementById("screen-reader-announcer");
  if (!liveRegion) {
    liveRegion = document.createElement("div");
    liveRegion.id = "screen-reader-announcer";
    liveRegion.setAttribute("aria-live", "polite");
    liveRegion.className = "sr-only";
    document.body.appendChild(liveRegion);
  }
  return liveRegion;
}

function applySettingsToPage(settings) {
  const root = document.documentElement;
  const body = document.body;
  const theme = getResolvedTheme(settings.themeMode);

  root.classList.remove("text-default", "text-large", "text-x-large");
  body.classList.remove(
    "theme-light",
    "theme-dark",
    "text-default",
    "text-large",
    "text-x-large",
    "contrast-normal",
    "contrast-high",
    "color-blue",
    "color-green",
    "color-orange",
    "color-gray",
    "reduce-motion",
    "focus-strong"
  );

  root.classList.add(`text-${settings.textSize}`);
  body.classList.add(`theme-${theme}`);
  body.classList.add(`contrast-${settings.contrast}`);
  body.classList.add(`color-${settings.colorTheme}`);

  if (settings.reduceMotion) body.classList.add("reduce-motion");
  if (settings.keyboardFocus) body.classList.add("focus-strong");

  applyLanguage(settings.language);

  const announcer = ensureAnnouncer();
  if (settings.screenReader) {
    announcer.textContent = getText(settings.language, "announce_settings_applied");
  } else {
    announcer.textContent = "";
  }
}

function syncSettingsForm(settings) {
  const form = document.querySelector("section[aria-labelledby='accessibility-settings'] form");
  if (!form) return;

  const textSize = document.getElementById("text-size");
  const contrast = document.getElementById("contrast");
  const language = document.getElementById("language");
  const themeMode = document.getElementById("theme-mode");
  const colorTheme = document.getElementById("color-theme");
  const reduceMotion = form.querySelector("input[name='reduce-motion']");
  const keyboardFocus = form.querySelector("input[name='keyboard-focus']");
  const screenReader = form.querySelector("input[name='screen-reader']");

  if (textSize) textSize.value = settings.textSize;
  if (contrast) contrast.value = settings.contrast;
  if (language) language.value = settings.language;
  if (themeMode) themeMode.value = settings.themeMode;
  if (colorTheme) colorTheme.value = settings.colorTheme;
  if (reduceMotion) reduceMotion.checked = settings.reduceMotion;
  if (keyboardFocus) keyboardFocus.checked = settings.keyboardFocus;
  if (screenReader) screenReader.checked = settings.screenReader;
}

function getFormSettings() {
  const form = document.querySelector("section[aria-labelledby='accessibility-settings'] form");
  if (!form) return null;

  return {
    textSize: document.getElementById("text-size")?.value || "default",
    contrast: document.getElementById("contrast")?.value || "normal",
    reduceMotion: !!form.querySelector("input[name='reduce-motion']")?.checked,
    keyboardFocus: !!form.querySelector("input[name='keyboard-focus']")?.checked,
    screenReader: !!form.querySelector("input[name='screen-reader']")?.checked,
    language: document.getElementById("language")?.value || "en",
    themeMode: document.getElementById("theme-mode")?.value || "system",
    colorTheme: document.getElementById("color-theme")?.value || "blue"
  };
}

function initSettingsForm(settings) {
  const form = document.querySelector("section[aria-labelledby='accessibility-settings'] form");
  if (!form) return;

  syncSettingsForm(settings);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const updatedSettings = getFormSettings();
    if (!updatedSettings) return;
    saveSettings(updatedSettings);
    applySettingsToPage(updatedSettings);
    alert(getText(updatedSettings.language, "alert_settings_saved"));
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const settings = getSavedSettings();
  applySettingsToPage(settings);
  initSettingsForm(settings);
});
