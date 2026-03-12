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

// ── Live Mining News ────────────────────────────────────────────

const REPORTE_MINERO_URL = "https://www.reporteminero.cl/";
// codetabs proxy returns the page HTML directly as text (no JSON wrapper)
const PROXY_BASE = "https://api.codetabs.com/v1/proxy?quest=";
const REFRESH_INTERVAL_MS = 10 * 60 * 1000; // 10 minutes

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
  if (!m) return "";
  const d = new Date(`${m[1]}-${m[2]}-01`);
  return isNaN(d) ? "" : d.toLocaleDateString(undefined, { year: "numeric", month: "short" });
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
    items.push({ title, link: fullHref, date: dateFromNoticia(fullHref) });
  });

  return items.slice(0, 8);
}

function renderFeedItems(items) {
  return items
    .map(
      (item) => `
      <a class="feed-item" href="${escapeHtml(item.link)}" target="_blank" rel="noopener noreferrer">
        <p class="feed-item-title">${escapeHtml(item.title)}</p>
        <span class="feed-item-source">Reporte Minero</span>
        <span class="feed-item-date">${escapeHtml(item.date)}</span>
      </a>
    `
    )
    .join("");
}

async function fetchMiningNews() {
  const liveFeed = document.getElementById("liveFeed");
  const timestamp = document.getElementById("newsFeedTimestamp");

  try {
    const res = await fetch(PROXY_BASE + encodeURIComponent(REPORTE_MINERO_URL));
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const html = await res.text();
    const items = parseReporteMineroItems(html);
    if (items.length === 0) throw new Error("No items found");

    liveFeed.innerHTML = renderFeedItems(items);
    timestamp.textContent =
      "Updated " +
      new Date().toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });
  } catch {
    liveFeed.innerHTML = `<div class="feed-error">Unable to load live feed — check back shortly.</div>`;
    timestamp.textContent = "";
  }
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
  flowStepsNode.innerHTML = flowSteps
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
  const selected =
    filter === "all"
      ? demandMineralLinks
      : demandMineralLinks.filter((item) => item.category === filter);

  newsGrid.innerHTML = selected
    .map(
      (item) => `
      <article class="news-card">
        <div class="meta">Market signal</div>
        <h3>${item.title}</h3>
        <p><strong>Demand driver:</strong> ${item.marketNeed}</p>
        <p><strong>Mineral priority:</strong> ${item.minerals}</p>
        <p><strong>Strategic response:</strong> ${item.response}</p>
        <span class="tag">${item.category}</span>
      </article>
    `
    )
    .join("");
}

function renderTicker() {
  const doubled = [...tickerItems, ...tickerItems];
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
    renderDemandCards(button.dataset.filter);
  });
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

fetchMiningNews();
setInterval(fetchMiningNews, REFRESH_INTERVAL_MS);
