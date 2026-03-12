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

// ── Live Mining News (multiple sources) ──────────────────────────

// codetabs proxy returns the page HTML directly as text (no JSON wrapper)
const PROXY_BASE = "https://api.codetabs.com/v1/proxy?quest=";
const REFRESH_INTERVAL_MS = 10 * 60 * 1000; // 10 minutes

const FEEDS = [
  { id: "reporte", name: "Reporte Minero", url: "https://www.reporteminero.cl/", label: "Reporte Minero" },
  { id: "mining", name: "Mining.com", url: "https://www.mining.com/", label: "Mining.com" },
  { id: "panorama", name: "Panorama Minero", url: "https://panoramaminero.com/", label: "Panorama Minero" }
];

let currentFeedId = FEEDS[0].id;

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

function renderFeedItems(items, sourceLabel) {
  return items
    .map(
      (item) => `
      <a class="feed-item" href="${escapeHtml(item.link)}" target="_blank" rel="noopener noreferrer">
        <p class="feed-item-title">${escapeHtml(item.title)}</p>
        <span class="feed-item-source">${escapeHtml(sourceLabel)}</span>
        <span class="feed-item-date">${escapeHtml(item.date || "")}</span>
      </a>
    `
    )
    .join("");
}

async function fetchFeed(feedId) {
  const liveFeed = document.getElementById("liveFeed");
  const timestamp = document.getElementById("newsFeedTimestamp");
  const feed = FEEDS.find((f) => f.id === feedId);
  if (!feed) return;

  try {
    const res = await fetch(PROXY_BASE + encodeURIComponent(feed.url));
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const html = await res.text();
    let items = [];
    if (feed.id === "reporte") items = parseReporteMineroItems(html);
    else if (feed.id === "mining") items = parseMiningComItems(html, feed.url);
    else if (feed.id === "panorama") items = parsePanoramaMineroItems(html, feed.url);
    else items = parseGenericItems(html, feed.url);

    if (items.length === 0) throw new Error("No items found");

    liveFeed.innerHTML = renderFeedItems(items, feed.label || feed.name);
    timestamp.textContent =
      "Updated " + new Date().toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });
  } catch (err) {
    console.warn(err);
    liveFeed.innerHTML = `<div class="feed-error">Unable to load ${escapeHtml(feed.label || feed.name)} — check back shortly.</div>`;
    timestamp.textContent = "";
  }
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

function createFeedTabs() {
  const tabs = document.getElementById("feedTabs");
  // include an "All sources" tab first
  tabs.innerHTML = `<button class="feed-tab" data-feed="all">All sources</button>` + FEEDS.map((f) => `<button class="feed-tab" data-feed="${f.id}">${f.label}</button>`).join("");
  tabs.querySelectorAll("button").forEach((btn) => {
    btn.addEventListener("click", () => {
      const feedId = btn.dataset.feed;
      currentFeedId = feedId;
      tabs.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const pagination = document.getElementById("feedPagination");
      if (feedId === "all") {
        pagination.innerHTML = "";
        fetchAllFeeds();
      } else {
        pagination.innerHTML = "";
        fetchFeed(feedId);
      }
    });
  });
  // make first active (prefer the currentFeedId, fallback to 'all')
  const first = tabs.querySelector("button[data-feed=\"" + currentFeedId + "\"]") || tabs.querySelector("button[data-feed=\"all\"]");
  if (first) first.classList.add("active");
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

createFeedTabs();
fetchFeed(currentFeedId);
setInterval(() => fetchFeed(currentFeedId), REFRESH_INTERVAL_MS);

// ── Events / Calendar ─────────────────────────────────────────

const EVENTS = [
  {
    title: "International Critical Raw Materials Summit",
    start: "2026-05-20",
    end: "2026-05-22",
    location: "Madrid, Spain",
    url: "https://example.com/icrms-2026",
    category: "critical",
    description: "Focused on policy, supply chains and strategic sourcing for critical raw materials."
  },
  {
    title: "Pan-American Mining Congress",
    start: "2026-06-10",
    end: "2026-06-12",
    location: "Santiago, Chile",
    url: "https://example.com/pamc-2026",
    category: "general",
    description: "Regional mining policy and investment conference for Latin America."
  },
  {
    title: "Critical Minerals Forum Latin America",
    start: "2026-07-08",
    end: "2026-07-09",
    location: "Buenos Aires, Argentina",
    url: "https://example.com/cmf-la-2026",
    category: "critical",
    description: "Workshops and panels on securing supply chains for critical minerals in Latin America."
  },
  {
    title: "Mining Expo",
    start: "2026-09-15",
    end: "2026-09-17",
    location: "Lima, Peru",
    url: "https://example.com/mining-expo-2026",
    category: "general",
    description: "Exhibition of mining technologies, equipment and services."
  }
];

function parseIsoDate(d) {
  if (!d) return null;
  const t = new Date(d);
  return isNaN(t) ? null : t.getTime();
}

function formatEventDateRange(startIso, endIso) {
  const s = parseIsoDate(startIso);
  const e = parseIsoDate(endIso);
  if (!s) return "";
  if (!e || s === e) return new Date(s).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" });
  return `${new Date(s).toLocaleDateString(undefined, { month: "short", day: "numeric" })} — ${new Date(e).toLocaleDateString(undefined, { month: "short", day: "numeric", year: "numeric" })}`;
}

function renderEvents(filter = "all") {
  const container = document.getElementById("eventsList");
  const now = Date.now();
  const filtered = EVENTS.filter((ev) => {
    if (filter === "critical") return ev.category === "critical";
    return true;
  })
    .map((ev) => ({ ...ev, ts: parseIsoDate(ev.start) || 0 }))
    .filter((ev) => ev.ts === 0 || ev.ts >= now - 1000 * 60 * 60 * 24) // include upcoming or undated
    .sort((a, b) => a.ts - b.ts)
    .slice(0, 10); // max 10

  container.innerHTML = filtered
    .map(
      (ev) => `
    <article class="event-card">
      <h3><a href="${escapeHtml(ev.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(ev.title)}</a></h3>
      <div class="event-meta">
        <span class="event-date">${escapeHtml(formatEventDateRange(ev.start, ev.end))}</span>
        <span class="event-location">${escapeHtml(ev.location || "")}</span>
        <span class="event-category">${escapeHtml(ev.category)}</span>
      </div>
      <p class="event-desc">${escapeHtml(ev.description || "")}</p>
    </article>
  `
    )
    .join("");
}

document.getElementById("eventsShowAll").addEventListener("click", (e) => {
  document.getElementById("eventsShowAll").classList.add("active");
  document.getElementById("eventsShowCritical").classList.remove("active");
  renderEvents("all");
});

document.getElementById("eventsShowCritical").addEventListener("click", (e) => {
  document.getElementById("eventsShowCritical").classList.add("active");
  document.getElementById("eventsShowAll").classList.remove("active");
  renderEvents("critical");
});

// Initial render
renderEvents();

// ── End Events / Calendar ─────────────────────────────────────
