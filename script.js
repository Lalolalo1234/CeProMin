// ── Internationalisation ─────────────────────────────────────────

let currentLang = "en";
let currentFilter = "all";

const i18n = {
  en: {
    "header-chip": "Strategic Foresight Portal",
    eyebrow: "Argentine Mining Strategic Foresight Center",
    "hero-h1": "Global markets define mineral demand. Strategy defines what Argentina should mine.",
    "hero-p": "CeProMin is designed as the intelligence architecture that translates demand signals from global value chains into differentiated mineral policy, investment priorities, and coordinated federal execution.",
    "news-heading": "Live Mining News",
    "news-loading": "Loading latest mining news\u2026",
    "strategic-heading": "Strategic Logic",
    "strategic-sub": "Demand-led mining model",
    "demand-heading": "Market Demand to Mineral Priorities",
    "demand-sub": "Filter by demand cluster",
    "filter-all": "All clusters",
    "filter-electrification": "Electrification",
    "filter-technology": "Technology and defense",
    "filter-financial": "Financial demand",
    "filter-agrochemical": "Agrochemical demand",
    "gaps-heading": "Strategic Gaps CeProMin Addresses",
    "gaps-sub": "Current constraints in Argentina",
    "pillar-measure": "Measure",
    "pillar-anticipate": "Anticipate",
    "pillar-guide": "Guide",
    "outcomes-heading": "Expected Strategic Impact",
    "governance-heading": "Institutional Execution Model",
    "director-heading": "Programme Director",
    "director-sub": "Leadership profile",
    "events-heading": "Upcoming Mining Events",
    "events-loading": "Loading upcoming events\u2026",
    "card-market-signal": "Market signal",
    "card-demand-driver": "Demand driver",
    "card-mineral-priority": "Mineral priority",
    "card-strategic-response": "Strategic response",
    footer: "CeProMin concept portal aligned to a demand-led strategic model: markets generate mineral demand, and mineral demand should shape extraction strategy and policy."
  },
  es: {
    "header-chip": "Portal de Prospectiva Estrat\u00e9gica",
    eyebrow: "Centro Argentino de Prospectiva Minera",
    "hero-h1": "Los mercados globales definen la demanda mineral. La estrategia define lo que Argentina debe extraer.",
    "hero-p": "CeProMin est\u00e1 dise\u00f1ado como la arquitectura de inteligencia que traduce las se\u00f1ales de demanda de las cadenas de valor globales en pol\u00edtica mineral diferenciada, prioridades de inversi\u00f3n y ejecuci\u00f3n federal coordinada.",
    "news-heading": "Noticias Mineras en Vivo",
    "news-loading": "Cargando \u00faltimas noticias mineras\u2026",
    "strategic-heading": "L\u00f3gica Estrat\u00e9gica",
    "strategic-sub": "Modelo minero orientado por la demanda",
    "demand-heading": "Demanda de Mercado a Prioridades Minerales",
    "demand-sub": "Filtrar por cluster de demanda",
    "filter-all": "Todos los clusters",
    "filter-electrification": "Electrificaci\u00f3n",
    "filter-technology": "Tecnolog\u00eda y defensa",
    "filter-financial": "Demanda financiera",
    "filter-agrochemical": "Demanda agroquímica",
    "gaps-heading": "Brechas Estrat\u00e9gicas que CeProMin Aborda",
    "gaps-sub": "Restricciones actuales en Argentina",
    "pillar-measure": "Medir",
    "pillar-anticipate": "Anticipar",
    "pillar-guide": "Guiar",
    "outcomes-heading": "Impacto Estrat\u00e9gico Esperado",
    "governance-heading": "Modelo de Ejecuci\u00f3n Institucional",
    "director-heading": "Director del Programa",
    "director-sub": "Perfil de liderazgo",
    "events-heading": "Pr\u00f3ximos Eventos Mineros",
    "events-loading": "Cargando pr\u00f3ximos eventos\u2026",
    "card-market-signal": "Se\u00f1al de mercado",
    "card-demand-driver": "Motor de demanda",
    "card-mineral-priority": "Prioridad mineral",
    "card-strategic-response": "Respuesta estrat\u00e9gica",
    footer: "Portal de concepto CeProMin alineado a un modelo minero orientado por la demanda: los mercados generan demanda mineral, y la demanda mineral debe orientar la estrategia de extracci\u00f3n y la pol\u00edtica p\u00fablica."
  }
};

function applyTranslations(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (i18n[lang][key] !== undefined) el.textContent = i18n[lang][key];
  });
  document.documentElement.lang = lang;
}

function setLanguage(lang) {
  currentLang = lang;
  applyTranslations(lang);
  renderTicker();
  renderFlowSteps();
  renderDemandCards(currentFilter);
  renderList(diagnosisList, lang === "es" ? diagnosis_es : diagnosis);
  renderList(functionsList, lang === "es" ? measurePillar_es : measurePillar);
  renderList(impactList, lang === "es" ? anticipatePillar_es : anticipatePillar);
  renderList(architectureList, lang === "es" ? guidePillar_es : guidePillar);
  renderList(outcomesList, lang === "es" ? outcomes_es : outcomes);
  renderList(governanceList, lang === "es" ? governance_es : governance);
  directorProfileNode.textContent = lang === "es" ? directorProfile_es : directorProfile;
  const btn = document.getElementById("langToggle");
  btn.textContent = lang === "en" ? "ES" : "EN";
  btn.title = lang === "en" ? "Cambiar a español" : "Switch to English";
}

// ── End Internationalisation ──────────────────────────────────────

const flowSteps = [
  {
    step: "1",
    title: "Read global demand",
    description:
      "Track how energy transition, technology chains, geopolitics, and financial cycles reshape mineral demand."
  },
  {
    step: "2",
    title: "Map mineral ecosystems",
    description:
      "Translate each demand signal into mineral-specific ecosystems with differentiated market, ESG, and risk dynamics."
  },
  {
    step: "3",
    title: "Define strategic response",
    description:
      "Prioritize policy, infrastructure, and investment tools by mineral instead of applying one generic framework."
  },
  {
    step: "4",
    title: "Execute federally",
    description:
      "Coordinate provinces, national government, and private actors under a stable public-private institutional architecture."
  }
];

const demandMineralLinks = [
  {
    title: "Electrification and grid expansion",
    marketNeed: "Power grids, transmission, and heavy manufacturing are scaling rapidly.",
    minerals: "Copper and silver",
    response:
      "Prioritize logistics competitiveness, permitting visibility, and industrial corridor planning.",
    category: "electrification"
  },
  {
    title: "Battery and mobility transition",
    marketNeed: "Battery value chains continue to require secure long-term input supply.",
    minerals: "Lithium",
    response:
      "Develop differentiated integration strategies linked to downstream processing and export positioning.",
    category: "electrification"
  },
  {
    title: "Advanced technology and strategic autonomy",
    marketNeed: "AI, magnetics, and high-tech manufacturing increase demand concentration risk.",
    minerals: "Rare Earth elements",
    response:
      "Build geopolitical risk intelligence and pursue strategic agreements with major partner regions.",
    category: "technology"
  },
  {
    title: "Macro uncertainty and reserve behavior",
    marketNeed: "Periods of volatility increase demand for safe-haven financial assets.",
    minerals: "Gold",
    response:
      "Integrate macro-financial foresight with stable institutional rules and long-term investor certainty.",
    category: "financial"
  },
  {
    title: "Food systems and fertilizer demand",
    marketNeed: "Agricultural productivity pressures sustain demand for chemical and fertilizer inputs.",
    minerals: "Potassium and industrial minerals",
    response:
      "Align regional infrastructure, territorial development models, and chemical value-chain strategy.",
    category: "agrochemical"
  }
];

const diagnosis = [
  "Argentina has strong geological endowment but lacks a permanent institution that converts market intelligence into coordinated strategy.",
  "There are no unified national and provincial indicators for competitiveness, permits, infrastructure, and investment performance.",
  "Prospective 2030-2050 scenarios that integrate demand, prices, technologies, and geopolitics are not institutionalized.",
  "Coordination mechanisms between provinces, national authorities, and private actors remain structurally fragmented.",
  "Stable frameworks that reduce uncertainty for investors and communities are still insufficient."
];

const measurePillar = [
  "National and provincial indicators by mineral ecosystem.",
  "Fiscal, regulatory, and logistical competitiveness benchmarking.",
  "ESG performance tracking with homogeneous metrics.",
  "Technological maturity diagnostics for each mineral chain."
];

const anticipatePillar = [
  "2030-2050 demand and supply scenarios by mineral.",
  "Integrated market, technology, and geopolitical risk analysis.",
  "Scenario-based signals for project sequencing and investment timing.",
  "Early warning intelligence for critical shifts in global value chains."
];

const guidePillar = [
  "Differentiated policies for each mineral ecosystem.",
  "International integration strategy with the EU, US, and Asia.",
  "Regional development models linked to mining clusters.",
  "Actionable policy roadmaps connecting foresight with execution."
];

const outcomes = [
  "Attract investment by reducing uncertainty through consistent strategic signals.",
  "Improve competitiveness with evidence-based policy design.",
  "Align provincial and national agendas under a federal framework.",
  "Strengthen local supply chains and industrial integration.",
  "Reinforce social license through predictable long-term governance.",
  "Position Argentina as a reliable long-term supplier of critical minerals."
];

const governance = [
  "Public-private institutional entity with technical autonomy.",
  "Federal governance with representation from producing provinces.",
  "Mixed funding model: government, private sector, and international cooperation.",
  "Mission focus: turn geological potential into a coordinated national project."
];

const tickerItems = [
  "Markets create demand signals",
  "Demand signals define mineral priorities",
  "Mineral priorities require differentiated policy",
  "Differentiated policy needs federal execution",
  "Federal execution builds long-term reliability"
];

// ── Spanish content ───────────────────────────────────────────────

const flowSteps_es = [
  { step: "1", title: "Leer la demanda global", description: "Seguir cómo la transición energética, las cadenas tecnológicas, la geopolítica y los ciclos financieros reconfiguran la demanda mineral." },
  { step: "2", title: "Mapear ecosistemas minerales", description: "Traducir cada señal de demanda en ecosistemas específicos por mineral con dinámicas diferenciadas de mercado, ESG y riesgo." },
  { step: "3", title: "Definir la respuesta estratégica", description: "Priorizar herramientas de política, infraestructura e inversión por mineral en lugar de aplicar un marco genérico." },
  { step: "4", title: "Ejecutar federalmente", description: "Coordinar provincias, gobierno nacional y actores privados bajo una arquitectura institucional público-privada estable." }
];

const demandMineralLinks_es = [
  { title: "Electrificación y expansión de redes", marketNeed: "Las redes eléctricas, la transmisión y la manufactura pesada escalan rápidamente.", minerals: "Cobre y plata", response: "Priorizar la competitividad logística, la visibilidad en permisos y la planificación de corredores industriales.", category: "electrification" },
  { title: "Transición de baterías y movilidad", marketNeed: "Las cadenas de valor de baterías requieren suministros de insumos seguros a largo plazo.", minerals: "Litio", response: "Desarrollar estrategias de integración diferenciadas vinculadas al procesamiento aguas abajo y al posicionamiento exportador.", category: "electrification" },
  { title: "Tecnología avanzada y autonomía estratégica", marketNeed: "La IA, la magnética y la manufactura de alta tecnología aumentan el riesgo de concentración de demanda.", minerals: "Tierras raras", response: "Construir inteligencia sobre riesgos geopolíticos y celebrar acuerdos estratégicos con regiones asociadas clave.", category: "technology" },
  { title: "Incertidumbre macro y comportamiento de reservas", marketNeed: "Los períodos de volatilidad aumentan la demanda de activos financieros de refugio seguro.", minerals: "Oro", response: "Integrar la prospectiva macrofinanciera con reglas institucionales estables y certeza para el inversor a largo plazo.", category: "financial" },
  { title: "Sistemas alimentarios y demanda de fertilizantes", marketNeed: "Las presiones sobre la productividad agrícola sostienen la demanda de insumos químicos y fertilizantes.", minerals: "Potasio y minerales industriales", response: "Alinear la infraestructura regional, los modelos de desarrollo territorial y la estrategia de cadena de valor química.", category: "agrochemical" }
];

const diagnosis_es = [
  "Argentina tiene un sólido potencial geológico pero carece de una institución permanente que convierta la inteligencia de mercado en estrategia coordinada.",
  "No existen indicadores unificados nacionales y provinciales de competitividad, permisos, infraestructura y desempeño de inversión.",
  "Los escenarios prospectivos 2030-2050 que integran demanda, precios, tecnologías y geopolítica no están institucionalizados.",
  "Los mecanismos de coordinación entre provincias, autoridades nacionales y actores privados siguen estructuralmente fragmentados.",
  "Los marcos estables que reducen la incertidumbre para inversores y comunidades aún son insuficientes."
];

const measurePillar_es = [
  "Indicadores nacionales y provinciales por ecosistema mineral.",
  "Benchmarking de competitividad fiscal, regulatoria y logística.",
  "Seguimiento del desempeño ESG con métricas homogéneas.",
  "Diagnósticos de madurez tecnológica por cadena mineral."
];

const anticipatePillar_es = [
  "Escenarios de demanda y oferta 2030-2050 por mineral.",
  "Análisis integrado de riesgos de mercado, tecnología y geopolítica.",
  "Señales basadas en escenarios para la secuencia de proyectos y el timing de inversión.",
  "Inteligencia de alerta temprana ante cambios críticos en cadenas de valor globales."
];

const guidePillar_es = [
  "Políticas diferenciadas por ecosistema mineral.",
  "Estrategia de integración internacional con la UE, EE.UU. y Asia.",
  "Modelos de desarrollo regional vinculados a clusters mineros.",
  "Hojas de ruta de política accionables que conectan la prospectiva con la ejecución."
];

const outcomes_es = [
  "Atraer inversión reduciendo la incertidumbre mediante señales estratégicas consistentes.",
  "Mejorar la competitividad con diseño de políticas basado en evidencia.",
  "Alinear agendas provinciales y nacionales bajo un marco federal.",
  "Fortalecer cadenas de suministro locales e integración industrial.",
  "Reforzar la licencia social mediante una gobernanza predecible a largo plazo.",
  "Posicionar a Argentina como proveedor confiable a largo plazo de minerales críticos."
];

const governance_es = [
  "Entidad institucional público-privada con autonomía técnica.",
  "Gobernanza federal con representación de las provincias productoras.",
  "Modelo de financiamiento mixto: gobierno, sector privado y cooperación internacional.",
  "Foco misional: convertir el potencial geológico en un proyecto nacional coordinado."
];

const tickerItems_es = [
  "Los mercados generan señales de demanda",
  "Las señales de demanda definen las prioridades minerales",
  "Las prioridades minerales requieren política diferenciada",
  "La política diferenciada necesita ejecución federal",
  "La ejecución federal construye confiabilidad a largo plazo"
];

const directorProfile_es = "Juan Eduardo Barrera es Doctor en Ingeniería de Minas por la Universidad Politécnica de Madrid, diploma del PNUMA, y cuenta con más de 30 años de experiencia en organizaciones como el Banco Mundial, BID, ONU, BERD y la UE, combinando liderazgo en política minera, finanzas de proyectos y asesoría estratégica internacional.";

// ── End Spanish content ───────────────────────────────────────────

// ── Live Mining News (multiple sources) ──────────────────────────

// codetabs proxy returns the page HTML directly as text (no JSON wrapper)
const PROXY_BASE = "https://api.codetabs.com/v1/proxy?quest=";
const REFRESH_INTERVAL_MS = 10 * 60 * 1000; // 10 minutes

const FEEDS = [
  { id: "reporte", name: "Reporte Minero", url: "https://www.reporteminero.cl/", label: "Reporte Minero" },
  { id: "mining", name: "Mining.com", url: "https://www.mining.com/", label: "Mining.com" },
  { id: "panorama", name: "Panorama Minero", url: "https://panoramaminero.com/", label: "Panorama Minero" }
];


function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

// Extract YYYY and MM from a /noticia/…/YYYY/MM/slug URL
function dateFromNoticia(href) {
  const m = href.match(/\/noticia\/[^/]+\/(\d{4})\/(\d{2})\//);
  if (!m) return null;
  const d = new Date(`${m[1]}-${m[2]}-01`);
  return isNaN(d) ? null : d.getTime();
}

function formatDateTs(ts) {
  if (!ts) return "";
  return new Date(ts).toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" });
}

function parseDateString(str) {
  if (!str) return null;
  const s = str.trim().replace(/\s+/g, " ");
  let dt = new Date(s);
  if (!isNaN(dt)) return dt.getTime();

  // try Spanish month names replacement
  const months = {
    enero: "January",
    febrero: "February",
    marzo: "March",
    abril: "April",
    mayo: "May",
    junio: "June",
    julio: "July",
    agosto: "August",
    septiembre: "September",
    setiembre: "September",
    octubre: "October",
    noviembre: "November",
    diciembre: "December"
  };

  let normalized = s.toLowerCase();
  Object.keys(months).forEach((sp) => {
    normalized = normalized.replace(new RegExp(sp, "g"), months[sp]);
  });

  dt = new Date(normalized);
  if (!isNaN(dt)) return dt.getTime();

  // try to extract common date patterns like "12 March 2024" or "March 12, 2024"
  const m = normalized.match(/(\d{1,2})\s+(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{4})/i);
  if (m) {
    const d = new Date(`${m[2]} ${m[1]}, ${m[3]}`);
    if (!isNaN(d)) return d.getTime();
  }

  return null;
}

async function fetchArticleDate(url) {
  try {
    const res = await fetch(PROXY_BASE + encodeURIComponent(url));
    if (!res.ok) return null;
    const html = await res.text();
    const doc = new DOMParser().parseFromString(html, "text/html");

    // meta tags
    const metaSelectors = [
      'meta[property="article:published_time"]',
      'meta[name="pubdate"]',
      'meta[name="publication_date"]',
      'meta[name="date"]',
      'meta[itemprop="datePublished"]',
      'meta[name="DC.date.issued"]',
      'meta[name="twitter:label1"][content]'
    ];
    for (const sel of metaSelectors) {
      const el = doc.querySelector(sel);
      if (el) {
        const content = el.getAttribute("content") || el.getAttribute("value") || el.textContent;
        const ts = parseDateString(content);
        if (ts) return ts;
      }
    }

    // time elements
    const timeEl = doc.querySelector('time[datetime]') || doc.querySelector('time');
    if (timeEl) {
      const dtStr = timeEl.getAttribute("datetime") || timeEl.textContent;
      const ts = parseDateString(dtStr);
      if (ts) return ts;
    }

    // common class selectors (span.date, .post-date, .fecha, .entry-date, .published)
    const classSelectors = [".post-date", ".entry-date", ".published", ".fecha", ".date", ".post-meta time", ".meta-date", ".article-date"];
    for (const sel of classSelectors) {
      const el = doc.querySelector(sel);
      if (el) {
        const ts = parseDateString(el.getAttribute("datetime") || el.textContent);
        if (ts) return ts;
      }
    }

    // try the first paragraph text for a leading date (e.g., "12 de marzo de 2024 — ...")
    const article = doc.querySelector("article") || doc.body;
    const p = article.querySelector("p");
    if (p) {
      // remove leading non-date parentheses
      const txt = p.textContent.trim().split("\n")[0].trim();
      // common Spanish connectors like 'de' and 'de' between day month year
      const txtNormalized = txt.replace(/(\sde\s)/gi, " ");
      const ts = parseDateString(txtNormalized);
      if (ts) return ts;
    }

    return null;
  } catch (err) {
    console.warn("fetchArticleDate error", err);
    return null;
  }
}

function parseReporteMineroItems(html) {
  const doc = new DOMParser().parseFromString(html, "text/html");
  const seen = new Set();
  const items = [];

  doc.querySelectorAll("a[href]").forEach((a) => {
    const href = a.getAttribute("href") || "";
    // Only article links; resolve relative URLs
    const fullHref = href.startsWith("http") ? href : `https://www.reporteminero.cl${href}`;
    if (!/\/noticia\//.test(fullHref)) return;
    if (seen.has(fullHref)) return;

    const title = a.textContent.trim().replace(/\s+/g, " ");
    if (title.length < 20) return; // skip icon-only or nav links

    seen.add(fullHref);
    const ts = dateFromNoticia(fullHref);
    items.push({ title, link: fullHref, date: ts ? formatDateTs(ts) : "", timestamp: ts });
  });

  return items.slice(0, 8);
}

function parseGenericItems(html, baseHost) {
  const doc = new DOMParser().parseFromString(html, "text/html");
  const seen = new Set();
  const items = [];

  doc.querySelectorAll("a[href]").forEach((a) => {
    const href = a.getAttribute("href") || "";
    const fullHref = href.startsWith("http") ? href : `${baseHost.replace(/\/+$/, "")}${href.startsWith("/") ? "" : "/"}${href}`;
    // Only include links that appear to be from the same host or are absolute
    if (!fullHref.includes(new URL(baseHost).host) && !href.startsWith("http")) return;
    if (seen.has(fullHref)) return;

    const title = a.textContent.trim().replace(/\s+/g, " ");
    if (title.length < 20) return;

    seen.add(fullHref);
    // Attempt to infer date from URL or nearby elements
    let ts = null;
    const urlDate = fullHref.match(/\/(\d{4})\/(\d{2})\/(\d{2})\//) || fullHref.match(/\/(\d{4})\/(\d{2})\//);
    if (urlDate) {
      const y = urlDate[1];
      const m = urlDate[2] || "01";
      const d = urlDate[3] || "01";
      const dt = new Date(`${y}-${m}-${d}`);
      if (!isNaN(dt)) ts = dt.getTime();
    }

    if (!ts) {
      const article = a.closest("article");
      const timeEl = article && article.querySelector("time");
      if (timeEl) {
        const dt = new Date(timeEl.getAttribute("datetime") || timeEl.textContent);
        if (!isNaN(dt)) ts = dt.getTime();
      }
    }

    items.push({ title, link: fullHref, date: ts ? formatDateTs(ts) : "", timestamp: ts });
  });

  return items.slice(0, 8);
}

function parseMiningComItems(html, baseHost) {
  const doc = new DOMParser().parseFromString(html, "text/html");
  const seen = new Set();
  const items = [];

  // Prefer article blocks, fall back to links
  const articleEls = doc.querySelectorAll("article");
  articleEls.forEach((article) => {
    const a = article.querySelector("a[href]");
    if (!a) return;
    const href = a.getAttribute("href") || "";
    const fullHref = href.startsWith("http") ? href : `${baseHost.replace(/\/+$/, "")}${href.startsWith("/") ? "" : "/"}${href}`;
    if (seen.has(fullHref)) return;
    const title = a.textContent.trim().replace(/\s+/g, " ");
    if (title.length < 10) return;

    // Try to extract date from time element or metadata inside the article
    let ts = null;
    const timeEl = article.querySelector('time[datetime]') || article.querySelector('time');
    if (timeEl) ts = parseDateString(timeEl.getAttribute("datetime") || timeEl.textContent);

    // URL date fallback
    if (!ts) {
      const urlDate = fullHref.match(/\/(\d{4})\/(\d{2})\/(\d{2})\//) || fullHref.match(/\/(\d{4})\/(\d{2})\//);
      if (urlDate) {
        const y = urlDate[1];
        const m = urlDate[2] || "01";
        const d = urlDate[3] || "01";
        const dt = new Date(`${y}-${m}-${d}`);
        if (!isNaN(dt)) ts = dt.getTime();
      }
    }

    seen.add(fullHref);
    items.push({ title, link: fullHref, date: ts ? formatDateTs(ts) : "", timestamp: ts });
  });

  if (items.length > 0) return items.slice(0, 12);

  // Fallback: generic link scan
  return parseGenericItems(html, baseHost);
}

function parsePanoramaMineroItems(html, baseHost) {
  const doc = new DOMParser().parseFromString(html, "text/html");
  const seen = new Set();
  const items = [];

  // Panorama often uses article or .noticia containers
  const articleEls = doc.querySelectorAll("article, .noticia, .post");
  articleEls.forEach((article) => {
    const a = article.querySelector("a[href]");
    if (!a) return;
    const href = a.getAttribute("href") || "";
    const fullHref = href.startsWith("http") ? href : `${baseHost.replace(/\/+$/, "")}${href.startsWith("/") ? "" : "/"}${href}`;
    if (seen.has(fullHref)) return;
    const title = a.textContent.trim().replace(/\s+/g, " ");
    if (title.length < 10) return;

    let ts = null;
    // look for .fecha, time, or meta in the article
    const dateEl = article.querySelector('.fecha, time, .date, .post-date');
    if (dateEl) ts = parseDateString(dateEl.getAttribute("datetime") || dateEl.textContent);

    if (!ts) {
      const urlDate = fullHref.match(/\/(\d{4})\/(\d{2})\/(\d{2})\//) || fullHref.match(/\/(\d{4})\/(\d{2})\//);
      if (urlDate) {
        const y = urlDate[1];
        const m = urlDate[2] || "01";
        const d = urlDate[3] || "01";
        const dt = new Date(`${y}-${m}-${d}`);
        if (!isNaN(dt)) ts = dt.getTime();
      }
    }

    seen.add(fullHref);
    items.push({ title, link: fullHref, date: ts ? formatDateTs(ts) : "", timestamp: ts });
  });

  if (items.length > 0) return items.slice(0, 12);
  return parseGenericItems(html, baseHost);
}



// Combined feed state and pagination
let combinedItems = [];
const ITEMS_PER_PAGE = 10;
let currentCombinedPage = 1;

async function fetchAllFeeds() {
  const liveFeed = document.getElementById("liveFeed");
  const timestamp = document.getElementById("newsFeedTimestamp");
  try {
    const promises = FEEDS.map((feed) =>
      fetch(PROXY_BASE + encodeURIComponent(feed.url))
        .then((res) => {
          if (!res.ok) throw new Error(`HTTP ${res.status}`);
          return res.text().then((html) => ({ feed, html }));
        })
        .catch((err) => {
          console.warn(`Failed to fetch ${feed.url}`, err);
          return { feed, html: "" };
        })
    );

    const results = await Promise.all(promises);
    const all = [];
    results.forEach(({ feed, html }) => {
      let items = [];
      if (!html) return;
      if (feed.id === "reporte") items = parseReporteMineroItems(html);
      else if (feed.id === "mining") items = parseMiningComItems(html, feed.url);
      else if (feed.id === "panorama") items = parsePanoramaMineroItems(html, feed.url);
      else items = parseGenericItems(html, feed.url);
      items.forEach((it) => (it.source = feed.label || feed.name));
      all.push(...items);
    });

    // Normalize timestamp (treat missing as 0) and sort newest-first
    combinedItems = all
      .map((it) => ({
        title: it.title,
        link: it.link,
        source: it.source,
        date: it.date || "",
        timestamp: it.timestamp || 0
      }))
      .sort((a, b) => b.timestamp - a.timestamp);

    // For items without timestamps, try to fetch article pages to extract dates (limit to first 30)
    const needs = combinedItems.filter((c) => !c.timestamp).slice(0, 30);
    if (needs.length > 0) {
      await Promise.all(
        needs.map(async (it) => {
          const ts = await fetchArticleDate(it.link);
          if (ts) {
            it.timestamp = ts;
            it.date = formatDateTs(ts);
          }
        })
      );
      // re-sort after fetching timestamps
      combinedItems.sort((a, b) => b.timestamp - a.timestamp);
    }

    currentCombinedPage = 1;
    renderCombinedPage(currentCombinedPage);
    timestamp.textContent =
      "Updated " + new Date().toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });
  } catch (err) {
    console.warn(err);
    liveFeed.innerHTML = `<div class="feed-error">Unable to load combined feed — check back shortly.</div>`;
    timestamp.textContent = "";
  }
}

function renderCombinedPage(page) {
  const liveFeed = document.getElementById("liveFeed");
  const pagination = document.getElementById("feedPagination");
  const total = combinedItems.length;
  const totalPages = Math.max(1, Math.ceil(total / ITEMS_PER_PAGE));
  if (page < 1) page = 1;
  if (page > totalPages) page = totalPages;
  currentCombinedPage = page;

  const start = (page - 1) * ITEMS_PER_PAGE;
  const slice = combinedItems.slice(start, start + ITEMS_PER_PAGE);

  liveFeed.innerHTML =
    slice
      .map(
        (item) => `
      <a class="feed-item" href="${escapeHtml(item.link)}" target="_blank" rel="noopener noreferrer">
        <p class="feed-item-title">${escapeHtml(item.title)}</p>
        <span class="feed-item-source">${escapeHtml(item.source)}</span>
        <span class="feed-item-date">${escapeHtml(item.date)}</span>
      </a>
    `
      )
      .join("") || `<div class="feed-empty">No items available.</div>`;

  // simple pagination controls
  pagination.innerHTML = `
    <button class="page-btn" data-page="${page - 1}" ${page <= 1 ? "disabled" : ""}>Prev</button>
    <span class="page-info">Page ${page} of ${totalPages}</span>
    <button class="page-btn" data-page="${page + 1}" ${page >= totalPages ? "disabled" : ""}>Next</button>
  `;

  pagination.querySelectorAll(".page-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const p = Number(btn.dataset.page);
      if (isNaN(p)) return;
      renderCombinedPage(p);
    });
  });
}


// ── End Live Mining News ─────────────────────────────────────────

const directorProfile =
  "Juan Eduardo Barrera holds a PhD in Mining Engineering from the Polytechnic University of Madrid, a UNEP diploma, and has more than 30 years of experience with organizations including the World Bank, IDB, UN, EBRD, and the EU, combining mining policy leadership, project finance, and international strategic advisory work.";

const flowStepsNode = document.getElementById("flowSteps");
const newsGrid = document.getElementById("newsGrid");
const diagnosisList = document.getElementById("diagnosisList");
const functionsList = document.getElementById("functionsList");
const impactList = document.getElementById("impactList");
const architectureList = document.getElementById("architectureList");
const outcomesList = document.getElementById("outcomesList");
const governanceList = document.getElementById("governanceList");
const tickerTrack = document.getElementById("tickerTrack");
const currentDate = document.getElementById("currentDate");
const directorProfileNode = document.getElementById("directorProfile");
const filterButtons = document.querySelectorAll(".filter-btn");

function renderFlowSteps() {
  const steps = currentLang === "es" ? flowSteps_es : flowSteps;
  flowStepsNode.innerHTML = steps
    .map(
      (item) => `
      <article class="flow-card">
        <div class="flow-step">Step ${item.step}</div>
        <h3>${item.title}</h3>
        <p>${item.description}</p>
      </article>
    `
    )
    .join("");
}

function renderDemandCards(filter) {
  const source = currentLang === "es" ? demandMineralLinks_es : demandMineralLinks;
  const t = i18n[currentLang];
  const selected = filter === "all" ? source : source.filter((item) => item.category === filter);
  newsGrid.innerHTML = selected
    .map(
      (item) => `
      <article class="news-card">
        <div class="meta">${t["card-market-signal"]}</div>
        <h3>${item.title}</h3>
        <p><strong>${t["card-demand-driver"]}:</strong> ${item.marketNeed}</p>
        <p><strong>${t["card-mineral-priority"]}:</strong> ${item.minerals}</p>
        <p><strong>${t["card-strategic-response"]}:</strong> ${item.response}</p>
        <span class="tag">${item.category}</span>
      </article>
    `
    )
    .join("");
}

function renderTicker() {
  const items = currentLang === "es" ? tickerItems_es : tickerItems;
  const doubled = [...items, ...items];
  tickerTrack.innerHTML = doubled.map((item) => `<span class="ticker-item">${item}</span>`).join("");
}

function renderList(targetNode, items) {
  targetNode.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

function setCurrentDate() {
  currentDate.textContent = new Date().toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");
    currentFilter = button.dataset.filter;
    renderDemandCards(currentFilter);
  });
});

document.getElementById("langToggle").addEventListener("click", () => {
  setLanguage(currentLang === "en" ? "es" : "en");
});

setCurrentDate();
renderTicker();
renderFlowSteps();
renderDemandCards("all");
renderList(diagnosisList, diagnosis);
renderList(functionsList, measurePillar);
renderList(impactList, anticipatePillar);
renderList(architectureList, guidePillar);
renderList(outcomesList, outcomes);
renderList(governanceList, governance);
directorProfileNode.textContent = directorProfile;

fetchAllFeeds();
setInterval(fetchAllFeeds, REFRESH_INTERVAL_MS);

// ── Events / Calendar ─────────────────────────────────────────

const EVENTS = [];

function parseIsoDate(d) {
  if (!d) return null;
  const t = new Date(d);
  return isNaN(t) ? null : t.getTime();
}

function renderEvents() {
  const container = document.getElementById("eventsList");
  const now = Date.now();
  const sorted = EVENTS
    .map((ev) => ({ ...ev, ts: ev.timestamp || parseIsoDate(ev.start) || 0 }))
    .filter((ev) => ev.ts === 0 || ev.ts >= now - 86400000)
    .sort((a, b) => {
      if (a.ts && b.ts) return a.ts - b.ts;
      if (a.ts) return -1;
      if (b.ts) return 1;
      return 0;
    })
    .slice(0, 15);

  if (sorted.length === 0) {
    container.innerHTML = '<div class="feed-error">No upcoming events found — check back soon.</div>';
    return;
  }

  container.innerHTML = sorted.map((ev) => {
    const d = ev.ts ? new Date(ev.ts) : null;
    const month = d ? d.toLocaleDateString(undefined, { month: "short" }).toUpperCase() : "TBD";
    const day = d ? d.getDate() : "";
    const endTs = ev.end ? parseIsoDate(ev.end) : null;
    const endStr = endTs && endTs !== ev.ts
      ? ` – ${new Date(endTs).toLocaleDateString(undefined, { month: "short", day: "numeric" })}`
      : "";
    return `
      <article class="event-card">
        <div class="event-date-block">
          <span class="event-month">${escapeHtml(month)}</span>
          <span class="event-day">${day}${escapeHtml(endStr)}</span>
        </div>
        <div class="event-body">
          <h3>${ev.url ? `<a href="${escapeHtml(ev.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(ev.title)}</a>` : escapeHtml(ev.title)}</h3>
          <div class="event-meta-row">
            ${ev.location ? `<span class="event-location">${escapeHtml(ev.location)}</span>` : ""}
            ${ev.source ? `<span class="event-source-tag">${escapeHtml(ev.source)}</span>` : ""}
          </div>
          ${ev.description ? `<p class="event-desc">${escapeHtml(ev.description)}</p>` : ""}
        </div>
      </article>`;
  }).join("");
}

const EVENT_SOURCES = [
  { id: "mining_events",    name: "Mining.com",          url: "https://www.mining.com/events/" },
  { id: "minesandmoney",   name: "Mines & Money",        url: "https://www.minesandmoney.com/events/" },
  { id: "mining_weekly",   name: "Mining Weekly",        url: "https://www.miningweekly.com/events" },
  { id: "northernminer",   name: "Northern Miner",       url: "https://www.northernminer.com/category/events/" },
  { id: "pdac",            name: "PDAC",                 url: "https://www.pdac.ca/convention" },
  { id: "indaba",          name: "Mining Indaba",        url: "https://miningindaba.com/agenda" },
  { id: "argentinamining", name: "Argentina Mining",     url: "https://www.argentinamining.com/eventos/" },
  { id: "exponor",         name: "Exponor Chile",        url: "https://www.exponor.cl/" },
  { id: "perumin",         name: "Perumin",              url: "https://www.perumin.com.pe/" },
  { id: "cesco",           name: "CESCO",                url: "https://www.cesco.cl/eventos/" }
];

function parseEventsFromHtml(html, baseHost) {
  const doc = new DOMParser().parseFromString(html, "text/html");
  const found = [];

  const candidates = doc.querySelectorAll('article, .event, .evento, .card, .list-item, [role="article"]');
  candidates.forEach((el) => {
    const a = el.querySelector('a[href]');
    const titleEl = el.querySelector('h3, h2, h4, .title');
    const rawTitle = a ? a.textContent.trim() : (titleEl ? titleEl.textContent.trim() : "");
    if (!rawTitle || rawTitle.length < 10) return;
    const href = a ? a.getAttribute('href') : null;
    const link = href ? (href.startsWith('http') ? href : `${baseHost.replace(/\/+$/, '')}${href.startsWith('/') ? '' : '/'}${href}`) : '';

    let ts = null;
    const timeEl = el.querySelector('time[datetime], time');
    if (timeEl) ts = parseDateString(timeEl.getAttribute('datetime') || timeEl.textContent);
    if (!ts) {
      const dateEl = el.querySelector('.date, .fecha, .event-date, .meta-date, .event-time');
      if (dateEl) ts = parseDateString(dateEl.getAttribute('datetime') || dateEl.textContent);
    }
    if (!ts) {
      const urlDate = link.match(/\/(\d{4})\/(\d{2})\/(\d{2})\//) || link.match(/\/(\d{4})\/(\d{2})\//);
      if (urlDate) {
        const dt = new Date(`${urlDate[1]}-${urlDate[2]}-${urlDate[3] || "01"}`);
        if (!isNaN(dt)) ts = dt.getTime();
      }
    }

    found.push({ title: rawTitle.replace(/\s+/g, ' '), link, timestamp: ts, date: ts ? formatDateTs(ts) : '' });
  });

  if (found.length === 0) {
    doc.querySelectorAll('a[href]').forEach((a) => {
      const txt = (a.textContent || '').trim();
      if (!txt || txt.length < 15) return;
      const href = a.getAttribute('href') || '';
      if (!/event|conference|congress|expo|summit|forum|seminar/i.test(href + txt)) return;
      const link = href.startsWith('http') ? href : `${baseHost.replace(/\/+$/, '')}${href.startsWith('/') ? '' : '/'}${href}`;
      const parent = a.closest('li, article, div');
      let ts = null;
      if (parent) {
        const timeEl = parent.querySelector('time, .date, .fecha');
        if (timeEl) ts = parseDateString(timeEl.getAttribute('datetime') || timeEl.textContent);
      }
      found.push({ title: txt.replace(/\s+/g, ' '), link, timestamp: ts, date: ts ? formatDateTs(ts) : '' });
    });
  }

  return found.slice(0, 20);
}

async function fetchExternalEvents() {
  const imported = [];
  const delay = (ms) => new Promise((r) => setTimeout(r, ms));

  // Fetch sequentially in batches of 2 to avoid proxy rate limits
  const BATCH = 2;
  for (let i = 0; i < EVENT_SOURCES.length; i += BATCH) {
    const batch = EVENT_SOURCES.slice(i, i + BATCH);
    await Promise.all(
      batch.map(async (src) => {
        try {
          const res = await fetch(PROXY_BASE + encodeURIComponent(src.url));
          if (!res.ok) return;
          const html = await res.text();
          const items = parseEventsFromHtml(html, src.url);
          // Limit article date-scraping to 4 per source to avoid hammering proxy
          const needDates = items.filter((it) => !it.timestamp).slice(0, 4);
          for (const it of needDates) {
            if (!it.link) continue;
            const ts = await fetchArticleDate(it.link);
            if (ts) { it.timestamp = ts; it.date = formatDateTs(ts); }
            await delay(200);
          }
          items.forEach((it) => {
            const isoStart = it.timestamp ? new Date(it.timestamp).toISOString().split("T")[0] : "";
            imported.push({ title: it.title, start: isoStart, end: "", location: "", url: it.link, source: src.name, timestamp: it.timestamp || 0, description: "" });
          });
        } catch (err) {
          console.warn("fetchExternalEvents error", src.id, err);
        }
      })
    );
    if (i + BATCH < EVENT_SOURCES.length) await delay(600);
  }

  const existingUrls = new Set(EVENTS.map((e) => e.url));
  const newOnes = imported.filter((i) => i.url && !existingUrls.has(i.url));
  newOnes.forEach((n) => EVENTS.push(n));
  EVENTS.sort((a, b) => (a.timestamp || 0) - (b.timestamp || 0));
  return newOnes.length;
}

// Auto-load events on startup
(async () => {
  await fetchExternalEvents();
  const ts = document.getElementById("eventsTimestamp");
  if (EVENTS.length > 0) {
    renderEvents();
    ts.textContent = "Updated " + new Date().toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });
  } else {
    document.getElementById("eventsList").innerHTML = '<div class="feed-error">Could not load events — check back shortly.</div>';
  }
})();

// ── End Events / Calendar ─────────────────────────────────────
