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
    "news-loading": "Loading latest mining news…",
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
    "fusion-heading": "Fusion Energy Research",
    "fusion-sub": "AI foundation models for plasma science",
    "fusion-intro": "IBM Research, UKAEA, and STFC Hartree Centre built TokaMind, the first AI foundation model for fusion plasma analysis. Fusion's commercial path will reshape global demand for lithium, tungsten, beryllium, and rare earth minerals — a direct strategic signal for Argentina's mineral priorities.",
    "fusion-tokamind-label": "Foundation Model",
    "fusion-tokamind-desc": "9M-parameter model trained on MAST tokamak data. Harmonises 40 sensor signals, outperforms task-specific models, and recovers corrupted readings via masked pre-training.",
    "fusion-tokamark-label": "Benchmark Suite",
    "fusion-tokamark-desc": "14-task benchmark suite for plasma-analysis AI. TokaMind outperforms all task-specific baselines across the full suite.",
    "events-heading": "Upcoming Mining Events",
    "events-loading": "Loading upcoming events…",
    "card-market-signal": "Market signal",
    "card-demand-driver": "Demand driver",
    "card-mineral-priority": "Mineral priority",
    "card-strategic-response": "Strategic response",
    "foresight-heading": "Mining Demand Foresight — Copper, Lithium & Rare Earths",
    "foresight-sub": "2030 / 2040 / 2050 demand outlook",
    "foresight-intro": "Internal foresight work quantifying global demand for the three minerals central to Argentina's mining strategy, benchmarked against IEA, S&P Global, Wood Mackenzie, ICSG, USGS and Adamas Intelligence, with source, year and scenario tagged on every figure.",
    "foresight-th-mineral": "Mineral",
    "foresight-th-base": "Base demand (2024-25)",
    "foresight-th-2040": "2040 range",
    "foresight-th-multiple": "Growth multiple",
    "foresight-th-driver": "Best-quantified driver",
    "foresight-cross-heading": "Cross-cutting signals",
    "foresight-ar-copper-heading": "Argentina — Copper: artisanal-scale today, global-scale pipeline",
    "foresight-ar-lithium-heading": "Argentina — Lithium: producing & pipeline",
    "foresight-ar-ree-heading": "Argentina — Rare Earths: exploration stage",
    "foresight-sources": "Sources: IEA Global Critical Minerals Outlook 2025/2026, S&P Global, Wood Mackenzie, ICSG, USGS Mineral Commodity Summaries 2026, Adamas Intelligence, Rio Tinto / Lithium Argentina / Zijin company filings, Segemar, Panorama Minero, Buenos Aires Herald (2025-2026).",
    footer: "CeProMin concept portal aligned to a demand-led strategic model: markets generate mineral demand, and mineral demand should shape extraction strategy and policy."
  },
  es: {
    "header-chip": "Portal de Prospectiva Estratégica",
    eyebrow: "Centro Argentino de Prospectiva Minera",
    "hero-h1": "Los mercados globales definen la demanda mineral. La estrategia define lo que Argentina debe extraer.",
    "hero-p": "CeProMin está diseñado como la arquitectura de inteligencia que traduce las señales de demanda de las cadenas de valor globales en política mineral diferenciada, prioridades de inversión y ejecución federal coordinada.",
    "news-heading": "Noticias Mineras en Vivo",
    "news-loading": "Cargando últimas noticias mineras…",
    "strategic-heading": "Lógica Estratégica",
    "strategic-sub": "Modelo minero orientado por la demanda",
    "demand-heading": "Demanda de Mercado a Prioridades Minerales",
    "demand-sub": "Filtrar por cluster de demanda",
    "filter-all": "Todos los clusters",
    "filter-electrification": "Electrificación",
    "filter-technology": "Tecnología y defensa",
    "filter-financial": "Demanda financiera",
    "filter-agrochemical": "Demanda agroquímica",
    "gaps-heading": "Brechas Estratégicas que CeProMin Aborda",
    "gaps-sub": "Restricciones actuales en Argentina",
    "pillar-measure": "Medir",
    "pillar-anticipate": "Anticipar",
    "pillar-guide": "Guiar",
    "outcomes-heading": "Impacto Estratégico Esperado",
    "governance-heading": "Modelo de Ejecución Institucional",
    "director-heading": "Director del Programa",
    "director-sub": "Perfil de liderazgo",
    "fusion-heading": "Investigación en Energía de Fusión",
    "fusion-sub": "Modelos fundacionales de IA para la ciencia del plasma",
    "fusion-intro": "IBM Research, la UKAEA y el STFC Hartree Centre construyeron TokaMind, el primer modelo fundacional de IA para el análisis de plasma de fusión. La trayectoria comercial de la fusión redefinirá la demanda global de litio, tungsteno, berilio y minerales de tierras raras — una señal estratégica directa para las prioridades minerales de Argentina.",
    "fusion-tokamind-label": "Modelo Fundacional",
    "fusion-tokamind-desc": "Modelo de 9M de parámetros entrenado con datos del tokamak MAST. Armoniza 40 señales de sensores, supera a los modelos por tarea y recupera lecturas corruptas mediante pre-entrenamiento enmascarado.",
    "fusion-tokamark-label": "Suite de Evaluación",
    "fusion-tokamark-desc": "Suite de 14 tareas para IA de análisis de plasma. TokaMind supera a todos los modelos base específicos en la suite completa.",
    "events-heading": "Próximos Eventos Mineros",
    "events-loading": "Cargando próximos eventos…",
    "card-market-signal": "Señal de mercado",
    "card-demand-driver": "Motor de demanda",
    "card-mineral-priority": "Prioridad mineral",
    "card-strategic-response": "Respuesta estratégica",
    "foresight-heading": "Prospectiva de Demanda Minera — Cobre, Litio y Tierras Raras",
    "foresight-sub": "Perspectiva de demanda 2030 / 2040 / 2050",
    "foresight-intro": "Trabajo de prospectiva propio que cuantifica la demanda global de los tres minerales centrales de la estrategia minera argentina, contrastado contra IEA, S&P Global, Wood Mackenzie, ICSG, USGS y Adamas Intelligence, con fuente, año y escenario en cada cifra.",
    "foresight-th-mineral": "Mineral",
    "foresight-th-base": "Demanda base (2024-25)",
    "foresight-th-2040": "Rango 2040",
    "foresight-th-multiple": "Múltiplo de crecimiento",
    "foresight-th-driver": "Driver mejor cuantificado",
    "foresight-cross-heading": "Señales transversales",
    "foresight-ar-copper-heading": "Argentina — Cobre: escala artesanal hoy, cartera de escala global",
    "foresight-ar-lithium-heading": "Argentina — Litio: en producción y en cartera",
    "foresight-ar-ree-heading": "Argentina — Tierras Raras: etapa de exploración",
    "foresight-sources": "Fuentes: IEA Global Critical Minerals Outlook 2025/2026, S&P Global, Wood Mackenzie, ICSG, USGS Mineral Commodity Summaries 2026, Adamas Intelligence, informes de Rio Tinto / Lithium Argentina / Zijin, Segemar, Panorama Minero, Buenos Aires Herald (2025-2026).",
    footer: "Portal de concepto CeProMin alineado a un modelo minero orientado por la demanda: los mercados generan demanda mineral, y la demanda mineral debe orientar la estrategia de extracción y la política pública."
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
  renderForesightTable(lang);
  renderForesightMinerals(lang);
  renderList(foresightCrossList, lang === "es" ? foresightCross_es : foresightCross);
  renderList(foresightCopperList, lang === "es" ? foresightCopper_es : foresightCopper);
  renderList(foresightLithiumList, lang === "es" ? foresightLithium_es : foresightLithium);
  renderList(foresightReeList, lang === "es" ? foresightRee_es : foresightRee);
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
      "Prioritize policy, infrastructure, and investment tools by mineral instead of applying one generic framework.",
    pdf: "static/CRM_CircularEconomy_ReliabilityNote.pdf"
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

// ── Mining Demand Foresight content (EN) ──────────────────────────

const foresightComparison = [
  {
    mineral: "Copper",
    base: "25–28 Mt",
    range2040: "42–43 Mt",
    multiple: "~1.5–2x",
    driver: "Grid electrification + EVs"
  },
  {
    mineral: "Lithium",
    base: "1.3–1.8 Mt LCE",
    range2040: "5.6–13.2 Mt LCE",
    multiple: "~3–4x (highest of the three)",
    driver: "EV batteries (72–80% of demand by 2050)"
  },
  {
    mineral: "Rare earths (magnets)",
    base: "91–197 kt (scope-dependent)",
    range2040: "123–150 kt by 2030*",
    multiple: "~1.3–1.6x",
    driver: "NdFeB magnets for EVs + offshore wind"
  }
];

const foresightMinerals = [
  {
    name: "Copper",
    stat: "42–43 Mt by 2040",
    bullets: [
      "Grid electrification alone reaches ~13 Mt/yr by 2030 and ~23 Mt/yr by 2050 (BNEF NZE).",
      "AI/datacenter demand is the most dispersed estimate of any sector — over 4x range between sources.",
      "Argentina's four advanced projects (Josemaría, Filo del Sol, Los Azules, Pachón) enter production 2027–2030, aligned with the best-quantified drivers."
    ]
  },
  {
    name: "Lithium",
    stat: "3–4x growth by 2040 — fastest of the three",
    bullets: [
      "88% of global demand is battery-bound (USGS), with no official breakdown of the remaining sub-uses.",
      "Stationary storage is the “sleeper” driver: qualitatively strong, but with no reliable tonnage series from any source.",
      "Argentina is the 4th global producer and the most demand-concentrated of the three minerals — nearly the whole market rides a single electrification curve."
    ]
  },
  {
    name: "Rare Earths",
    stat: "China controls 85–94% of magnet production",
    bullets: [
      "Nd-Pr-Dy-Tb (magnet elements) face structural scarcity while La-Ce (catalysts, glass) are in structural surplus — same ore, opposite price dynamics.",
      "REE-free traction motors are already in pilot production (Tesla, BMW, Renault) — the only material of the three with a documented substitution escape valve.",
      "Argentina has no production yet; the opportunity is framed as security-of-supply for magnet elements vs. an offtake challenge for surplus byproducts."
    ]
  }
];

const foresightCross = [
  "EVs and offshore wind are the only two demand drivers with solid, quantified data shared across all three minerals.",
  "AI/datacenter demand is strong for copper, qualitative-only for rare earths, and absent for lithium.",
  "Defense demand systematically hides inside “civilian” trade categories rather than appearing as its own line item, in both copper and rare earths.",
  "2050 is the weakest-data horizon for all three minerals; the choice of climate-policy scenario matters more than any single technology assumption."
];

const foresightCopper = [
  "Today's only operating mine is small: Martín Bronce (Sierra de Santa Bárbara, Jujuy), 100% Jujuy-capital (MOM Mining), exports exceptionally high-grade ore/concentrate (5–14% Cu vs. ~0.5% average in Chile) to Chile; a concentration plant is now under construction, with an estimated 18–20 years of resource life on the current 28 ha.",
  "Vicuña District — Josemaría + Filo del Sol (San Juan, BHP/Lundin Mining JV): $7B initial investment, capital deployment from 2027, first production targeted for 2030; expected to average ~395,000 t/yr of copper (plus gold and silver) over its first 25 years — one of the largest new copper districts in the world.",
  "Los Azules (San Juan, McEwen Copper — backed by Stellantis and Rio Tinto): designed as a low-carbon operation (conveyor haulage, renewable/hydro power); targeting ~150,000 t/yr of copper cathode via SX-EW, among the world's top 25 copper mines once in production.",
  "El Pachón (San Juan, Glencore): discovered in 1964, one of the largest undeveloped porphyry deposits globally; RIGI approval expected H1 2027, construction start 2029, first production 2034, ~280,000 t/yr.",
  "Taca Taca (Salta, First Quantum Minerals): $3.6–5.2B investment, ~227,000 t/yr of copper via flotation, concentrate to be shipped by rail through the port of Mejillones, Chile (permits expected late 2026).",
  "Combined, these four advanced projects could put Argentina among the world's top copper producers by the early-to-mid 2030s; RIGI's committed investment is already ~95% concentrated in copper and lithium."
];

const foresightLithium = [
  "Producing (~186,000 t/yr LCE installed, 7 plants): Fénix / Hombre Muerto (Catamarca), Olaroz (Jujuy, 42,400 t/yr), Cauchari-Olaroz (Jujuy, commercial since Oct. 2024, ~35–40kt in 2026), Sal de Oro and Centenario-Ratones (Salta), Mariana (Salta, 20,000 t/yr), Tres Quebradas (Catamarca, Phase 2 approved July 2026, +40,000 t/yr).",
  "Ramping up: Rincón (Salta, Rio Tinto) shipped its first export cargo in March 2026, targeting 60,000 t/yr by 2028.",
  "Near-term (2026–2027): Sal de Vida Phase 1 (15,000 t/yr) and Fénix 1B (10,000 t/yr), both Catamarca; Sal de los Ángeles (Salta, 10,000 t/yr).",
  "Medium-term (2028–2029): Pozuelos-Pastos Grandes JV (up to 150,000 t/yr capacity), Rincón at full scale.",
  "Longer term (2030–2033): Kachi, Candelas, HM South and further expansion phases.",
  "Government target: 15 plants and ~650,000 t/yr installed capacity by 2035 — enough for Argentina to reach the world's top 3 producers."
];

const foresightRee = [
  "Segemar has identified 19 REE occurrences across Jujuy, Salta, La Rioja and northern Mendoza, totaling 190,395 t of inferred/low-certainty TREO — undiscovered potential estimated at up to 3.3 Mt.",
  "No project has defined a reserve yet.",
  "Litica Resources holds ~320,000 ha across the Lithium Triangle, with an environmental impact study underway (pre-permitting stage).",
  "A February 2026 tripartite agreement (American Minerals, provincial EMSE, and Segemar) is funding REE prospecting in La Rioja and Salta.",
  "Argentina Metals holds a 146,000 ha exploration portfolio.",
  "Industry experts estimate 5–10 years just to establish solid, internationally-standard resource estimates."
];

// ── End Spanish-independent Foresight content ─────────────────────

// ── Spanish content ───────────────────────────────────────────────

const flowSteps_es = [
  { step: "1", title: "Leer la demanda global", description: "Seguir cómo la transición energética, las cadenas tecnológicas, la geopolítica y los ciclos financieros reconfiguran la demanda mineral." },
  { step: "2", title: "Mapear ecosistemas minerales", description: "Traducir cada señal de demanda en ecosistemas específicos por mineral con dinámicas diferenciadas de mercado, ESG y riesgo." },
  { step: "3", title: "Definir la respuesta estratégica", description: "Priorizar herramientas de política, infraestructura e inversión por mineral en lugar de aplicar un marco genérico.", pdf: "static/CRM_CircularEconomy_ReliabilityNote.pdf" },
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

// ── Mining Demand Foresight content (ES) ──────────────────────────

const foresightComparison_es = [
  {
    mineral: "Cobre",
    base: "25–28 Mt",
    range2040: "42–43 Mt",
    multiple: "~1,5–2x",
    driver: "Electrificación de red + VE"
  },
  {
    mineral: "Litio",
    base: "1,3–1,8 Mt LCE",
    range2040: "5,6–13,2 Mt LCE",
    multiple: "~3–4x (la más alta de los tres)",
    driver: "Baterías de VE (72–80% de la demanda hacia 2050)"
  },
  {
    mineral: "Tierras raras (imanes)",
    base: "91–197 kt (según alcance)",
    range2040: "123–150 kt hacia 2030*",
    multiple: "~1,3–1,6x",
    driver: "Imanes NdFeB para VE + eólica offshore"
  }
];

const foresightMinerals_es = [
  {
    name: "Cobre",
    stat: "42–43 Mt hacia 2040",
    bullets: [
      "La electrificación de red por sí sola llega a ~13 Mt/año hacia 2030 y ~23 Mt/año hacia 2050 (BNEF NZE).",
      "La demanda de datacenters/IA es la estimación más dispersa de cualquier sector — rango de más de 4x entre fuentes.",
      "Los cuatro proyectos avanzados de Argentina (Josemaría, Filo del Sol, Los Azules, Pachón) entran en producción 2027–2030, alineados con los drivers mejor cuantificados."
    ]
  },
  {
    name: "Litio",
    stat: "Crecimiento de 3–4x hacia 2040 — el más alto de los tres",
    bullets: [
      "El 88% de la demanda global depende de baterías (USGS), sin desagregación oficial de los usos internos.",
      "El almacenamiento estacionario es el driver “sleeper”: sólido cualitativamente, pero sin serie de tonelaje confiable en ninguna fuente.",
      "Argentina es el 4º productor mundial y el más concentrado en demanda de los tres minerales — casi todo el mercado depende de una sola curva de electrificación."
    ]
  },
  {
    name: "Tierras Raras",
    stat: "China controla 85–94% de la producción de imanes",
    bullets: [
      "Nd-Pr-Dy-Tb (elementos de imán) enfrentan escasez estructural mientras que La-Ce (catalizadores, vidrio) están en superávit estructural — mismo mineral, dinámicas de precio opuestas.",
      "Ya existen motores de tracción sin tierras raras en producción piloto (Tesla, BMW, Renault) — el único de los tres materiales con una válvula de escape de sustitución documentada.",
      "Argentina no tiene producción todavía; la oportunidad se plantea como seguridad de suministro para los elementos de imán vs. un desafío de mercado de salida para los subproductos en superávit."
    ]
  }
];

const foresightCross_es = [
  "VE y eólica offshore son los únicos dos drivers de demanda con datos sólidos y cuantificados compartidos por los tres minerales.",
  "La demanda de datacenters/IA es fuerte en cobre, solo cualitativa en tierras raras, y ausente en litio.",
  "La demanda de defensa se oculta sistemáticamente dentro de categorías “civiles” en vez de aparecer como línea propia, tanto en cobre como en tierras raras.",
  "2050 es el horizonte con menos datos para los tres minerales; la elección de escenario de política climática pesa más que cualquier supuesto tecnológico."
];

const foresightCopper_es = [
  "La única mina en explotación hoy es pequeña: Martín Bronce (Sierra de Santa Bárbara, Jujuy), de capital 100% jujeño (MOM Mining), exporta a Chile mineral/concentrado de altísima ley (5–14% Cu frente a ~0,5% de promedio en Chile); ya está en construcción una planta de concentración, con una vida útil estimada de 18 a 20 años sobre las 28 ha actuales.",
  "Distrito Vicuña — Josemaría + Filo del Sol (San Juan, JV BHP/Lundin Mining): inversión inicial de US$7.000 M, despliegue de capital desde 2027, primera producción prevista para 2030; se espera un promedio de ~395.000 t/año de cobre (más oro y plata) durante sus primeros 25 años — uno de los distritos de cobre nuevos más grandes del mundo.",
  "Los Azules (San Juan, McEwen Copper — respaldada por Stellantis y Rio Tinto): diseñado como operación de bajo carbono (transporte por cinta, energía renovable/hidroeléctrica); apunta a ~150.000 t/año de cátodo de cobre vía SX-EW, entre las 25 mayores minas de cobre del mundo una vez en producción.",
  "El Pachón (San Juan, Glencore): descubierto en 1964, uno de los mayores yacimientos pórfidos sin desarrollar del mundo; aprobación RIGI esperada en el primer semestre de 2027, inicio de construcción en 2029, primera producción en 2034, ~280.000 t/año.",
  "Taca Taca (Salta, First Quantum Minerals): inversión de US$3.600–5.200 M, ~227.000 t/año de cobre vía flotación, concentrado a exportar por ferrocarril a través del puerto de Mejillones, Chile (permisos esperados a fines de 2026).",
  "En conjunto, estos cuatro proyectos avanzados podrían ubicar a Argentina entre los mayores productores mundiales de cobre hacia inicios/mediados de la década de 2030; el monto comprometido del RIGI ya está concentrado en ~95% en cobre y litio."
];

const foresightLithium_es = [
  "En producción (~186.000 t/año LCE instaladas, 7 plantas): Fénix / Hombre Muerto (Catamarca), Olaroz (Jujuy, 42.400 t/año), Cauchari-Olaroz (Jujuy, producción comercial desde oct. 2024, ~35–40 mil t en 2026), Sal de Oro y Centenario-Ratones (Salta), Mariana (Salta, 20.000 t/año), Tres Quebradas (Catamarca, Fase 2 aprobada en julio 2026, +40.000 t/año).",
  "En rampa: Rincón (Salta, Rio Tinto) despachó su primer cargamento de exportación en marzo 2026, con meta de 60.000 t/año hacia 2028.",
  "Corto plazo (2026–2027): Sal de Vida Fase 1 (15.000 t/año) y Fénix 1B (10.000 t/año), ambos en Catamarca; Sal de los Ángeles (Salta, 10.000 t/año).",
  "Mediano plazo (2028–2029): JV Pozuelos-Pastos Grandes (hasta 150.000 t/año de capacidad), Rincón a escala plena.",
  "Más largo plazo (2030–2033): Kachi, Candelas, HM South y nuevas fases de expansión.",
  "Meta oficial: 15 plantas y ~650.000 t/año de capacidad instalada hacia 2035 — suficiente para ubicar a Argentina entre los 3 principales productores mundiales."
];

const foresightRee_es = [
  "Segemar identificó 19 ocurrencias de tierras raras en Jujuy, Salta, La Rioja y el norte de Mendoza, totalizando 190.395 t de recursos TREO inferidos/de baja certeza — potencial no descubierto estimado en hasta 3,3 Mt.",
  "Ningún proyecto definió todavía una reserva.",
  "Litica Resources posee ~320.000 ha en el Triángulo del Litio, con un estudio de impacto ambiental en curso (etapa de pre-permisos).",
  "Un acuerdo tripartito de febrero 2026 (American Minerals, la EMSE provincial y Segemar) financia la prospección de tierras raras en La Rioja y Salta.",
  "Argentina Metals posee un portafolio de exploración de 146.000 ha.",
  "Expertos del sector estiman de 5 a 10 años solo para establecer estimaciones de recursos sólidas y bajo estándares internacionales."
];

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
const foresightTableBody = document.getElementById("foresightTableBody");
const foresightMineralsGrid = document.getElementById("foresightMineralsGrid");
const foresightCrossList = document.getElementById("foresightCrossList");
const foresightCopperList = document.getElementById("foresightCopperList");
const foresightLithiumList = document.getElementById("foresightLithiumList");
const foresightReeList = document.getElementById("foresightReeList");

function renderFlowSteps() {
  const steps = currentLang === "es" ? flowSteps_es : flowSteps;
  flowStepsNode.innerHTML = steps
    .map(
      (item) => `
    <article class="flow-card${item.pdf ? " flow-card--pdf" : ""}" ${item.pdf ? `data-pdf="${item.pdf}"` : ""}${item.download ? ' data-download="true"' : ""}>
      <div class="flow-step">Step ${item.step}</div>
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      ${item.pdf ? `<span class="flow-card__pdf-hint">${item.download ? "Download Excel ↓" : "View report ↗"}</span>` : ""}
    </article>
  `
    )
    .join("");
}

flowStepsNode.addEventListener("click", (e) => {
  const card = e.target.closest(".flow-card--pdf");
  if (!card) return;
  if (card.dataset.download) {
    const a = document.createElement("a");
    a.href = card.dataset.pdf;
    a.download = card.dataset.pdf.split("/").pop();
    a.click();
  } else {
    openPdfModal(card.dataset.pdf);
  }
});

function openPdfModal(src) {
  const modal = document.getElementById("pdfModal");
  const iframe = document.getElementById("pdfModalFrame");
  iframe.src = src;
  modal.classList.add("pdf-modal--open");
  document.body.style.overflow = "hidden";
}

function closePdfModal() {
  const modal = document.getElementById("pdfModal");
  const iframe = document.getElementById("pdfModalFrame");
  modal.classList.remove("pdf-modal--open");
  iframe.src = "";
  document.body.style.overflow = "";
}

document.getElementById("pdfModalClose").addEventListener("click", closePdfModal);
document.getElementById("pdfModal").addEventListener("click", (e) => {
  if (e.target === e.currentTarget) closePdfModal();
});

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

function renderForesightTable(lang) {
  const rows = lang === "es" ? foresightComparison_es : foresightComparison;
  foresightTableBody.innerHTML = rows
    .map(
      (r) => `
    <tr>
      <td>${r.mineral}</td>
      <td>${r.base}</td>
      <td>${r.range2040}</td>
      <td>${r.multiple}</td>
      <td>${r.driver}</td>
    </tr>
  `
    )
    .join("");
}

function renderForesightMinerals(lang) {
  const items = lang === "es" ? foresightMinerals_es : foresightMinerals;
  foresightMineralsGrid.innerHTML = items
    .map(
      (item) => `
    <article class="framework-card">
      <h3>${item.name}</h3>
      <p class="foresight-stat">${item.stat}</p>
      <ul class="flat-list">${item.bullets.map((b) => `<li>${b}</li>`).join("")}</ul>
    </article>
  `
    )
    .join("");
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
renderForesightTable("en");
renderForesightMinerals("en");
renderList(foresightCrossList, foresightCross);
renderList(foresightCopperList, foresightCopper);
renderList(foresightLithiumList, foresightLithium);
renderList(foresightReeList, foresightRee);

fetchAllFeeds();
setInterval(fetchAllFeeds, REFRESH_INTERVAL_MS);

// ── End Events / Calendar ─────────────────────────────────────
