const JOURNALS = [
  {
    name: "Computational Statistics and Data Analysis",
    publisher: "Elsevier",
    quartile: "Q1",
    researchField: "Statistics & biostatistics",
    metrics: { impactFactor: "8.2", citeScore: "11.4", acceptanceRate: "18%", timeToFirstDecision: "6-9 weeks" },
    scopeKeywords: ["missing data", "multiple imputation", "bayesian", "fuzzy", "robust statistics", "nonlinear", "outliers", "statistical computing"],
    methodsFocus: ["bayesian model", "hierarchical model", "imputation", "benchmarking", "simulation study"],
    authorGuidelines: ["Strong methodological novelty and validation against baselines", "Clear statistical rationale and reproducible implementation", "Practical performance evidence on diverse datasets"],
    website: "https://www.sciencedirect.com/journal/computational-statistics-and-data-analysis",
    guideUrl: "https://www.elsevier.com/journals/computational-statistics-and-data-analysis/for-authors",
    similarPapers: [
      { title: "Multiple imputation under model uncertainty", url: "https://www.sciencedirect.com/search?qs=multiple%20imputation%20model%20uncertainty" },
      { title: "Robust missing data methods with outliers", url: "https://www.sciencedirect.com/search?qs=robust%20missing%20data%20outliers" }
    ]
  },
  {
    name: "Journal of Statistical Computation and Simulation",
    publisher: "Taylor & Francis",
    quartile: "Q2",
    researchField: "Statistics & biostatistics",
    metrics: { impactFactor: "2.1", citeScore: "4.3", acceptanceRate: "22%", timeToFirstDecision: "7-10 weeks" },
    scopeKeywords: ["missing data", "multiple imputation", "monte carlo", "bayesian", "fuzzy", "simulation", "algorithm"],
    methodsFocus: ["simulation study", "algorithm development", "bayesian inference", "sensitivity analysis"],
    authorGuidelines: ["Method papers should include simulation evidence", "Implementation details and assumptions must be explicit", "Comparative studies against established methods expected"],
    website: "https://www.tandfonline.com/journals/gscs20",
    guideUrl: "https://www.tandfonline.com/action/authorSubmission?show=instructions&journalCode=gscs20",
    similarPapers: [
      { title: "Simulation-driven evaluation of imputation algorithms", url: "https://www.tandfonline.com/action/doSearch?AllField=imputation+simulation" },
      { title: "Bayesian computational methods for incomplete data", url: "https://www.tandfonline.com/action/doSearch?AllField=bayesian+incomplete+data" }
    ]
  },
  {
    name: "Statistics and Computing",
    publisher: "Springer Nature",
    quartile: "Q1",
    researchField: "Statistics & computing",
    metrics: { impactFactor: "6.0", citeScore: "9.6", acceptanceRate: "16%", timeToFirstDecision: "8-12 weeks" },
    scopeKeywords: ["bayesian computation", "missing data", "multiple imputation", "statistical learning", "uncertainty quantification", "robust methods"],
    methodsFocus: ["bayesian model", "computational statistics", "algorithm benchmarking", "model uncertainty"],
    authorGuidelines: ["Contributions should blend statistical rigor and computational innovation", "Theory plus empirical evidence is preferred", "Reproducibility and open code are strongly encouraged"],
    website: "https://link.springer.com/journal/11222",
    guideUrl: "https://link.springer.com/journal/11222/submission-guidelines",
    similarPapers: [
      { title: "Computational approaches to multiple imputation", url: "https://link.springer.com/search?query=multiple+imputation+statistics+and+computing" },
      { title: "Bayesian uncertainty modeling in high dimensions", url: "https://link.springer.com/search?query=bayesian+uncertainty+high+dimensional" }
    ]
  },
  {
    name: "Journal of Statistical Software",
    publisher: "Foundation for Open Access Statistics",
    quartile: "Q1",
    researchField: "Statistical software & reproducibility",
    metrics: { impactFactor: "6.8", citeScore: "10.2", acceptanceRate: "14%", timeToFirstDecision: "8-14 weeks" },
    scopeKeywords: ["statistical software", "imputation package", "bayesian", "computational statistics", "reproducibility", "jags", "r"],
    methodsFocus: ["software implementation", "package development", "reproducible workflow", "benchmarking"],
    authorGuidelines: ["Paper must accompany usable and documented software", "Code quality and reproducibility are critical", "Method should be statistically justified and broadly useful"],
    website: "https://www.jstatsoft.org/",
    guideUrl: "https://www.jstatsoft.org/about/submissions",
    similarPapers: [
      { title: "Software for multiple imputation workflows", url: "https://www.jstatsoft.org/index/search/search?query=multiple+imputation" },
      { title: "Bayesian computation tools in R", url: "https://www.jstatsoft.org/index/search/search?query=bayesian" }
    ]
  },
  {
    name: "Expert Systems with Applications",
    publisher: "Elsevier",
    quartile: "Q1",
    researchField: "Computer science & intelligent systems",
    metrics: { impactFactor: "8.5", citeScore: "14.7", acceptanceRate: "15%", timeToFirstDecision: "4-8 weeks" },
    scopeKeywords: ["missing data", "machine learning", "deep learning", "fuzzy systems", "uncertainty", "imputation", "benchmarking"],
    methodsFocus: ["comparative study", "algorithm development", "fuzzy modeling", "predictive performance"],
    authorGuidelines: ["Must show strong application relevance and methodological advancement", "Comparisons with strong baselines are mandatory", "Interpretability and robustness discussion encouraged"],
    website: "https://www.sciencedirect.com/journal/expert-systems-with-applications",
    guideUrl: "https://www.elsevier.com/journals/expert-systems-with-applications/for-authors",
    similarPapers: [
      { title: "Fuzzy and deep models for missing value imputation", url: "https://www.sciencedirect.com/search?qs=fuzzy%20deep%20missing%20value%20imputation" },
      { title: "Comparative studies of imputation methods", url: "https://www.sciencedirect.com/search?qs=imputation%20comparative%20study" }
    ]
  },
  {
    name: "Applied Soft Computing",
    publisher: "Elsevier",
    quartile: "Q1",
    researchField: "Computer science & soft computing",
    metrics: { impactFactor: "8.7", citeScore: "14.1", acceptanceRate: "16%", timeToFirstDecision: "5-9 weeks" },
    scopeKeywords: ["fuzzy", "bayesian", "missing data", "imputation", "hybrid models", "machine learning", "uncertainty"],
    methodsFocus: ["hybrid algorithm", "fuzzy operations", "bayesian inference", "benchmarking"],
    authorGuidelines: ["Soft computing novelty must be clear", "Empirical validation on challenging datasets expected", "Positioning against existing fuzzy/ML methods required"],
    website: "https://www.sciencedirect.com/journal/applied-soft-computing",
    guideUrl: "https://www.elsevier.com/journals/applied-soft-computing/for-authors",
    similarPapers: [
      { title: "Hybrid fuzzy-Bayesian approaches", url: "https://www.sciencedirect.com/search?qs=hybrid%20fuzzy%20bayesian" },
      { title: "Robust imputation under data irregularities", url: "https://www.sciencedirect.com/search?qs=robust%20imputation%20outliers" }
    ]
  },
  {
    name: "Pattern Recognition Letters",
    publisher: "Elsevier",
    quartile: "Q2",
    researchField: "Computer science & pattern recognition",
    metrics: { impactFactor: "4.8", citeScore: "8.9", acceptanceRate: "20%", timeToFirstDecision: "4-7 weeks" },
    scopeKeywords: ["machine learning", "pattern recognition", "incomplete data", "imputation", "robust modeling", "nonlinear"],
    methodsFocus: ["algorithm development", "benchmarking", "performance analysis"],
    authorGuidelines: ["Concise method-focused contributions are preferred", "Strong computational comparisons are expected", "Applications with clear pattern-recognition context are favored"],
    website: "https://www.sciencedirect.com/journal/pattern-recognition-letters",
    guideUrl: "https://www.elsevier.com/journals/pattern-recognition-letters/for-authors",
    similarPapers: [
      { title: "Incomplete data handling in pattern analysis", url: "https://www.sciencedirect.com/search?qs=incomplete%20data%20pattern%20recognition" },
      { title: "Nonlinear robust modeling for noisy datasets", url: "https://www.sciencedirect.com/search?qs=nonlinear%20robust%20modeling" }
    ]
  },
  {
    name: "Knowledge-Based Systems",
    publisher: "Elsevier",
    quartile: "Q1",
    researchField: "Computer science & knowledge systems",
    metrics: { impactFactor: "8.8", citeScore: "16.0", acceptanceRate: "14%", timeToFirstDecision: "4-8 weeks" },
    scopeKeywords: ["fuzzy systems", "knowledge discovery", "missing data", "imputation", "uncertainty modeling", "hybrid intelligence"],
    methodsFocus: ["fuzzy logic", "knowledge-based modeling", "algorithm design", "comparative evaluation"],
    authorGuidelines: ["Knowledge-centric AI contribution should be explicit", "Methodological novelty and robust comparisons required", "Scalability and practical relevance encouraged"],
    website: "https://www.sciencedirect.com/journal/knowledge-based-systems",
    guideUrl: "https://www.elsevier.com/journals/knowledge-based-systems/for-authors",
    similarPapers: [
      { title: "Knowledge-based imputation under uncertainty", url: "https://www.sciencedirect.com/search?qs=knowledge-based%20imputation%20uncertainty" },
      { title: "Fuzzy intelligence for incomplete datasets", url: "https://www.sciencedirect.com/search?qs=fuzzy%20incomplete%20datasets" }
    ]
  },
  {
    name: "IEEE Access",
    publisher: "IEEE",
    quartile: "Q2",
    researchField: "Engineering & interdisciplinary",
    metrics: { impactFactor: "3.9", citeScore: "7.1", acceptanceRate: "28%", timeToFirstDecision: "4-6 weeks" },
    scopeKeywords: ["machine learning", "data mining", "missing data", "imputation", "benchmarking", "interdisciplinary"],
    methodsFocus: ["algorithm validation", "large-scale evaluation", "reproducibility"],
    authorGuidelines: ["Technical soundness and reproducibility are central", "Large and clear comparative studies are expected", "Interdisciplinary use-cases are welcome"],
    website: "https://ieeeaccess.ieee.org/",
    guideUrl: "https://ieeeaccess.ieee.org/authors/",
    similarPapers: [
      { title: "Imputation methods for large-scale real datasets", url: "https://ieeexplore.ieee.org/search/searchresult.jsp?queryText=missing%20data%20imputation" },
      { title: "Machine learning with incomplete data", url: "https://ieeexplore.ieee.org/search/searchresult.jsp?queryText=machine%20learning%20incomplete%20data" }
    ]
  },
  {
    name: "PLOS ONE",
    publisher: "PLOS",
    quartile: "Q2",
    researchField: "Multidisciplinary",
    metrics: { impactFactor: "3.7", citeScore: "6.9", acceptanceRate: "45%", timeToFirstDecision: "4-7 weeks" },
    scopeKeywords: ["multidisciplinary", "statistical methods", "missing data", "reproducibility", "data-driven"],
    methodsFocus: ["rigorous methods", "replicability", "transparent reporting"],
    authorGuidelines: ["Evaluation is based on scientific rigor", "Methods and statistical analysis must be robust", "Data availability statement is mandatory"],
    website: "https://journals.plos.org/plosone/",
    guideUrl: "https://journals.plos.org/plosone/s/submit-now",
    similarPapers: [
      { title: "Method-focused papers on missing data and reproducibility", url: "https://journals.plos.org/plosone/search?q=missing%20data%20imputation" },
      { title: "Comparative evaluation of computational methods", url: "https://journals.plos.org/plosone/search?q=comparative%20methods" }
    ]
  },
  {
    name: "Heliyon",
    publisher: "Elsevier",
    quartile: "Q3",
    researchField: "Multidisciplinary",
    metrics: { impactFactor: "4.0", citeScore: "6.6", acceptanceRate: "35%", timeToFirstDecision: "3-6 weeks" },
    scopeKeywords: ["multidisciplinary", "applied machine learning", "missing data", "data science", "reproducibility"],
    methodsFocus: ["sound methodology", "applied algorithm", "transparent reporting"],
    authorGuidelines: ["Broad scope with rigorous peer review", "Methodological validity is primary", "Clear field contribution required"],
    website: "https://www.cell.com/heliyon/home",
    guideUrl: "https://www.cell.com/heliyon/authors",
    similarPapers: [
      { title: "Applied imputation studies in real-world datasets", url: "https://www.cell.com/search?searchText=imputation%20Heliyon" },
      { title: "Robust data-science methodology papers", url: "https://www.cell.com/search?searchText=robust%20methodology%20Heliyon" }
    ]
  },
  {
    name: "Monthly Notices of the Royal Astronomical Society",
    publisher: "Oxford University Press",
    quartile: "Q1",
    researchField: "Astronomy & astrophysics",
    metrics: { impactFactor: "4.8", citeScore: "9.0", acceptanceRate: "N/A", timeToFirstDecision: "4-10 weeks" },
    scopeKeywords: ["astrophysics", "cosmology", "exoplanets", "stellar astronomy", "observational astronomy", "survey astronomy", "time-domain astronomy"],
    methodsFocus: ["statistical inference", "bayesian analysis", "machine learning for surveys", "data reduction pipelines"],
    authorGuidelines: ["Novel astrophysical results with rigorous uncertainty quantification", "Methods must be reproducible where data allow", "Clear observational or simulation context"],
    website: "https://academic.oup.com/mnras",
    guideUrl: "https://academic.oup.com/mnras/pages/author-guidelines",
    similarPapers: [
      { title: "Exoplanet detection and characterization", url: "https://academic.oup.com/mnras/search-results?allJournals=1&q=exoplanet" },
      { title: "Large-survey data analysis", url: "https://academic.oup.com/mnras/search-results?allJournals=1&q=survey" }
    ]
  },
  {
    name: "The Astronomical Journal",
    publisher: "IOP Publishing",
    quartile: "Q1",
    researchField: "Astronomy & astrophysics",
    metrics: { impactFactor: "5.4", citeScore: "8.6", acceptanceRate: "N/A", timeToFirstDecision: "6-12 weeks" },
    scopeKeywords: ["exoplanets", "stellar astrophysics", "solar system", "instrumentation", "time series photometry"],
    methodsFocus: ["observational analysis", "statistical modeling", "survey pipelines", "high precision measurements"],
    authorGuidelines: ["Strong observational or theoretical astronomy contribution", "Methods and data processing described in detail", "Appropriate error analysis"],
    website: "https://iopscience.iop.org/journal/1538-3881",
    guideUrl: "https://iopscience.iop.org/page/1538-3881/authors",
    similarPapers: [
      { title: "Exoplanet transit studies", url: "https://iopscience.iop.org/search?terms=exoplanet" },
      { title: "Stellar variability and surveys", url: "https://iopscience.iop.org/search?terms=stellar%20survey" }
    ]
  },
  {
    name: "Journal of Econometrics",
    publisher: "Elsevier",
    quartile: "Q1",
    researchField: "Economics & econometrics",
    metrics: { impactFactor: "9.9", citeScore: "14.2", acceptanceRate: "12%", timeToFirstDecision: "8-16 weeks" },
    scopeKeywords: ["econometrics", "panel data", "causal inference", "time series", "microeconometrics", "forecasting", "structural models"],
    methodsFocus: ["identification strategy", "asymptotic theory", "estimation", "model selection", "simulation evidence"],
    authorGuidelines: ["Econometric novelty with clear identification discussion", "Theory and/or credible empirical application", "Assumptions and limitations explicit"],
    website: "https://www.sciencedirect.com/journal/journal-of-econometrics",
    guideUrl: "https://www.elsevier.com/journals/journal-of-econometrics/for-authors",
    similarPapers: [
      { title: "Panel data and causal methods", url: "https://www.sciencedirect.com/search?qs=panel%20data%20econometrics" },
      { title: "Time series econometrics", url: "https://www.sciencedirect.com/search?qs=time%20series%20econometrics" }
    ]
  },
  {
    name: "Review of Economics and Statistics",
    publisher: "MIT Press",
    quartile: "Q1",
    researchField: "Economics & econometrics",
    metrics: { impactFactor: "6.7", citeScore: "10.8", acceptanceRate: "5%", timeToFirstDecision: "12-20 weeks" },
    scopeKeywords: ["applied economics", "policy evaluation", "labor economics", "development economics", "empirical methods"],
    methodsFocus: ["causal identification", "robust empirical design", "replication-friendly reporting"],
    authorGuidelines: ["High-quality applied economics with policy relevance", "Strong empirical design and diagnostics", "Data and code expectations per journal policy"],
    website: "https://direct.mit.edu/rest",
    guideUrl: "https://direct.mit.edu/rest/pages/submission-guidelines",
    similarPapers: [
      { title: "Policy evaluation studies", url: "https://direct.mit.edu/rest/search-results?page=1&q=policy" },
      { title: "Labor and education economics", url: "https://direct.mit.edu/rest/search-results?page=1&q=labor" }
    ]
  },
  {
    name: "JAMA Network Open",
    publisher: "American Medical Association",
    quartile: "Q1",
    researchField: "Medicine & health sciences",
    metrics: { impactFactor: "10.5", citeScore: "11.0", acceptanceRate: "N/A", timeToFirstDecision: "6-12 weeks" },
    scopeKeywords: ["clinical research", "health outcomes", "epidemiology", "digital health", "randomized trials", "biostatistics in medicine"],
    methodsFocus: ["clinical study design", "statistical analysis plans", "real-world evidence", "patient-centered outcomes"],
    authorGuidelines: ["Rigorous clinical or health-services research", "Ethics and reporting standards (CONSORT/STROBE as applicable)", "Transparent methods and limitations"],
    website: "https://jamanetwork.com/journals/jamanetworkopen",
    guideUrl: "https://jamanetwork.com/journals/jamanetworkopen/pages/instructions-for-authors",
    similarPapers: [
      { title: "Clinical trials and outcomes", url: "https://jamanetwork.com/searchresults?q=clinical%20trial" },
      { title: "Epidemiologic methods", url: "https://jamanetwork.com/searchresults?q=epidemiology" }
    ]
  },
  {
    name: "Environmental Modelling & Software",
    publisher: "Elsevier",
    quartile: "Q1",
    researchField: "Earth & environmental science",
    metrics: { impactFactor: "4.8", citeScore: "12.4", acceptanceRate: "20%", timeToFirstDecision: "8-14 weeks" },
    scopeKeywords: [
      "environmental modelling",
      "environmental informatics",
      "earth observation",
      "spatial data",
      "decision support",
      "machine learning",
      "remote sensing integration"
    ],
    methodsFocus: ["model development", "software architecture", "validation", "uncertainty", "case studies"],
    authorGuidelines: ["Clear environmental or sustainability problem motivation", "Software or model description with reproducibility", "Comparison to existing tools where applicable"],
    website: "https://www.sciencedirect.com/journal/environmental-modelling-and-software",
    guideUrl: "https://www.sciencedirect.com/journal/environmental-modelling-and-software/publish/guide-for-authors",
    similarPapers: [
      { title: "Environmental decision support systems", url: "https://www.sciencedirect.com/search?qs=environmental%20decision%20support" },
      { title: "Integration of remote sensing in modelling", url: "https://www.sciencedirect.com/search?qs=remote%20sensing%20environmental%20modelling" }
    ]
  },
  {
    name: "International Journal of Wildland Fire",
    publisher: "CSIRO Publishing",
    quartile: "Q1",
    researchField: "Earth & environmental science",
    metrics: { impactFactor: "3.2", citeScore: "5.8", acceptanceRate: "N/A", timeToFirstDecision: "8-16 weeks" },
    scopeKeywords: [
      "wildfire",
      "bushfire",
      "fire behaviour",
      "fire risk",
      "remote sensing",
      "fire monitoring",
      "landscape fire",
      "fire management"
    ],
    methodsFocus: ["empirical and modelling studies", "field and satellite data", "statistical and ML methods", "validation"],
    authorGuidelines: ["Wildland fire science or management focus", "Clear methods and data sources", "Appropriate spatial/temporal context"],
    website: "https://www.publish.csiro.au/ijwf",
    guideUrl: "https://www.publish.csiro.au/ijwf/forauthors",
    similarPapers: [
      { title: "Remote sensing of fire", url: "https://www.publish.csiro.au/ijwf/search?value1=remote+sensing" },
      { title: "Fire danger and risk modelling", url: "https://www.publish.csiro.au/ijwf/search?value1=fire+risk" }
    ]
  },
  {
    name: "Remote Sensing of Environment",
    publisher: "Elsevier",
    quartile: "Q1",
    researchField: "Earth & environmental science",
    metrics: { impactFactor: "13.5", citeScore: "20.0", acceptanceRate: "18%", timeToFirstDecision: "8-14 weeks" },
    scopeKeywords: ["remote sensing", "satellite imagery", "land cover", "environmental monitoring", "geospatial machine learning", "hyperspectral"],
    methodsFocus: ["sensor calibration", "classification", "change detection", "uncertainty quantification", "validation"],
    authorGuidelines: ["Clear remote-sensing science contribution", "Validation against independent data where possible", "Open data/code encouraged when feasible"],
    website: "https://www.sciencedirect.com/journal/remote-sensing-of-environment",
    guideUrl: "https://www.elsevier.com/journals/remote-sensing-of-environment/for-authors",
    similarPapers: [
      { title: "Land cover mapping", url: "https://www.sciencedirect.com/search?qs=land%20cover%20remote%20sensing" },
      { title: "Deep learning for Earth observation", url: "https://www.sciencedirect.com/search?qs=deep%20learning%20remote%20sensing" }
    ]
  },
  {
    name: "Water Resources Research",
    publisher: "Wiley",
    quartile: "Q1",
    researchField: "Earth & environmental science",
    metrics: { impactFactor: "4.8", citeScore: "9.2", acceptanceRate: "N/A", timeToFirstDecision: "8-16 weeks" },
    scopeKeywords: ["hydrology", "water resources", "groundwater", "watershed modeling", "climate-water interactions", "stochastic hydrology"],
    methodsFocus: ["process-based modeling", "uncertainty analysis", "data assimilation", "field calibration"],
    authorGuidelines: ["Advances hydrologic science or practice", "Methods and data sources clearly described", "Sensitivity/uncertainty discussion encouraged"],
    website: "https://agupubs.onlinelibrary.wiley.com/journal/19447973",
    guideUrl: "https://agupubs.onlinelibrary.wiley.com/hub/journal/19447973/for-authors",
    similarPapers: [
      { title: "Hydrologic modeling", url: "https://agupubs.onlinelibrary.wiley.com/action/doSearch?AllField=hydrology" },
      { title: "Groundwater and sustainability", url: "https://agupubs.onlinelibrary.wiley.com/action/doSearch?AllField=groundwater" }
    ]
  },
  {
    name: "International Journal of Computer Vision",
    publisher: "Springer Nature",
    quartile: "Q1",
    researchField: "Computer vision & robotics",
    metrics: { impactFactor: "11.6", citeScore: "18.4", acceptanceRate: "N/A", timeToFirstDecision: "8-18 weeks" },
    scopeKeywords: ["computer vision", "deep learning", "image segmentation", "object detection", "3d vision", "video understanding"],
    methodsFocus: ["algorithm design", "benchmarking", "theoretical analysis", "robust evaluation"],
    authorGuidelines: ["Substantial vision science/engineering novelty", "Strong empirical evaluation on standard or new datasets", "Reproducibility details expected"],
    website: "https://link.springer.com/journal/11263",
    guideUrl: "https://link.springer.com/journal/11263/submission-guidelines",
    similarPapers: [
      { title: "Object detection and segmentation", url: "https://link.springer.com/search?query=object+detection&facet-journal-id=11263" },
      { title: "3D reconstruction", url: "https://link.springer.com/search?query=3d+vision&facet-journal-id=11263" }
    ]
  },
  {
    name: "Journal of Informetrics",
    publisher: "Elsevier",
    quartile: "Q1",
    researchField: "Information science & scientometrics",
    metrics: { impactFactor: "3.4", citeScore: "6.8", acceptanceRate: "N/A", timeToFirstDecision: "6-12 weeks" },
    scopeKeywords: ["bibliometrics", "scientometrics", "citation analysis", "science mapping", "research evaluation", "open science metrics"],
    methodsFocus: ["statistical modeling of science", "network analysis", "indicator design", "validation"],
    authorGuidelines: ["Novel metrics or informetric methods with validation", "Clear data provenance", "Discussion of limitations and misuse risks"],
    website: "https://www.sciencedirect.com/journal/journal-of-informetrics",
    guideUrl: "https://www.elsevier.com/journals/journal-of-informetrics/for-authors",
    similarPapers: [
      { title: "Citation networks and indicators", url: "https://www.sciencedirect.com/search?qs=bibliometrics" },
      { title: "Science of science studies", url: "https://www.sciencedirect.com/search?qs=scientometrics" }
    ]
  }
];

const JOURNAL_SCOPE_IDF_WEIGHT = (function buildScopeKeywordWeights() {
  const df = {};
  for (let ji = 0; ji < JOURNALS.length; ji += 1) {
    const j = JOURNALS[ji];
    const seen = new Set();
    for (let ki = 0; ki < j.scopeKeywords.length; ki += 1) {
      const key = j.scopeKeywords[ki].toLowerCase();
      if (seen.has(key)) continue;
      seen.add(key);
      df[key] = (df[key] || 0) + 1;
    }
  }
  const N = JOURNALS.length;
  const w = {};
  const keys = Object.keys(df);
  for (let i = 0; i < keys.length; i += 1) {
    const k = keys[i];
    w[k] = Math.log((N + 1) / (df[k] + 0.5)) + 0.65;
  }
  return w;
})();

const MANUSCRIPT_DOMAIN_HINTS = [
  {
    re: /\b(exoplanet|exoplanets|astrophys|astronom|cosmolog|stellar|kepler\b|tess\b|gaia\b|super[-\s]?earth|transit\s+curve)/i,
    field: "Astronomy & astrophysics"
  },
  {
    re: /\b(econometr|microeconom|macroeconom|panel\s+data|instrumental\s+variable|did\b|difference[-\s]in[-\s]differences|auction\s+theor|portfolio\s+optim|asset\s+pricing)/i,
    field: "Economics & econometrics"
  },
  {
    re: /\b(patient|clinical\s+trial|randomized\s+controlled|rct\b|oncolog|tumor|cancer\s+therapy|hospital\s+admission|fda\b|diagnos[ei]s\b)/i,
    field: "Medicine & health sciences"
  },
  {
    re: /\b(remote\s+sensing|satellite\s+imag|landsat|sentinel[-\s]?2|hyperspectral|ndvi\b|land\s+cover\s+map)/i,
    field: "Earth & environmental science"
  },
  {
    re: /\b(bushfire|wildfire|forest\s+fire|fire\s+severity|burn\s+severity|fire\s+risk|fire\s+danger|fuel\s+moisture|burnt\s+area|post[-\s]?fire|fire\s+spread|emergency\s+management\s+.*\s+fire)/i,
    field: "Earth & environmental science"
  },
  {
    re: /\b(environmental\s+informatic|earth\s+monitor|earth\s+observation|ecoinformatic|landscape\s+monitor|environmental\s+monitor)/i,
    field: "Earth & environmental science"
  },
  {
    re: /\b(hydrolog|watershed|groundwater|flood\s+forecast|streamflow|evapotranspiration)/i,
    field: "Earth & environmental science"
  },
  {
    re: /\b(computer\s+vision|object\s+detect|image\s+segment|convnet|cnn\b|yolo\b|instance\s+segment|3d\s+reconstruction)/i,
    field: "Computer vision & robotics"
  },
  {
    re: /\b(machine\s+learning|deep\s+learning|neural\s+network|supervised\s+learning|unsupervised\s+learning)\b/i,
    field: "Computer science & intelligent systems"
  },
  {
    re: /\b(bibliometric|scientometric|citation\s+network|h[-\s]?index|science\s+mapping|altmetric)/i,
    field: "Information science & scientometrics"
  }
];

const LITERATURE_SEED = [
  {
    id: "vanbuuren2011mice",
    citeKey: "vanbuuren2011mice",
    title: "MICE: Multivariate Imputation by Chained Equations in R",
    authors: "Van Buuren, S., & Groothuis-Oudshoorn, K.",
    year: "2011",
    venue: "Journal of Statistical Software",
    keywords: ["multiple imputation", "missing data", "mice", "statistical software"],
    citationCount: 28450,
    abstract: "Describes the MICE algorithm for multivariate imputation by chained equations and its implementation in R, with guidance on model choice, convergence, and pooling for incomplete multivariate data."
  },
  {
    id: "yoon2018gain",
    citeKey: "yoon2018gain",
    title: "GAIN: Missing Data Imputation using Generative Adversarial Nets",
    authors: "Yoon, J., Jordon, J., & van der Schaar, M.",
    year: "2018",
    venue: "Proceedings of ICML",
    keywords: ["missing data", "imputation", "gan", "deep learning"],
    citationCount: 3120,
    abstract: "Proposes a generative adversarial framework for imputing missing values by learning the joint data distribution and a masking mechanism, with experiments on benchmark tabular datasets."
  },
  {
    id: "luengo2012fuzzy",
    citeKey: "luengo2012fuzzy",
    title: "Missing Data Imputation for Fuzzy Rule-Based Classification Systems",
    authors: "Luengo, J., Sáez, J. A., & Herrera, F.",
    year: "2012",
    venue: "Soft Computing",
    keywords: ["fuzzy", "imputation", "missing data", "classification"],
    citationCount: 890,
    abstract: "Integrates missing value imputation with fuzzy rule-based classifiers, comparing preprocessing strategies and analyzing impact on interpretability and accuracy."
  },
  {
    id: "benhamza2025medical",
    citeKey: "benhamza2025medical",
    title: "A Comprehensive Survey of Imputation Methods in Medical Missing Data Analysis",
    authors: "Benhamza, K., Benselim, R., Naidja, H., & Seridi, H.",
    year: "2025",
    venue: "Applied Intelligence",
    keywords: ["survey", "missing data", "imputation", "medical"],
    citationCount: 45,
    abstract: "Surveys statistical, machine learning, and hybrid imputation approaches in medical datasets, emphasizing evaluation metrics, bias, and clinical reporting standards."
  },
  {
    id: "park2019robustmi",
    citeKey: "park2019robustmi",
    title: "Robust Multiple Imputation Method for Missings with Boundary and Outliers",
    authors: "Park, Y., Oh, D. Y., & Kwon, T. Y.",
    year: "2019",
    venue: "Korean Journal of Applied Statistics",
    keywords: ["robust", "multiple imputation", "outliers"],
    citationCount: 120,
    abstract: "Develops a robust multiple imputation procedure resistant to boundary constraints and outlying observations, with simulation studies on skewed and contaminated data."
  },
  {
    id: "goel2020fuzzyiter",
    citeKey: "goel2020fuzzyiter",
    title: "A New Iterative Fuzzy Clustering Approach for Incomplete Data",
    authors: "Goel, S., & Tushir, M.",
    year: "2020",
    venue: "Journal of Statistics and Management Systems",
    keywords: ["fuzzy", "clustering", "incomplete data"],
    citationCount: 210,
    abstract: "Introduces iterative fuzzy clustering updates that jointly estimate cluster prototypes and impute missing entries, evaluated on synthetic and real incomplete datasets."
  },
  {
    id: "nounou2002bpca",
    citeKey: "nounou2002bpca",
    title: "Bayesian Principal Component Analysis",
    authors: "Nounou, M. N., Bakshi, B. R., Goel, P. K., & Shen, X.",
    year: "2002",
    venue: "Journal of Chemometrics",
    keywords: ["bayesian", "pca", "missing data"],
    citationCount: 780,
    abstract: "Presents a Bayesian formulation of PCA with missing data handled via latent variable models and MCMC inference for chemical and process monitoring applications."
  },
  {
    id: "white2011micepractice",
    citeKey: "white2011micepractice",
    title: "Multiple Imputation Using Chained Equations: Issues and Guidance for Practice",
    authors: "White, I. R., Royston, P., & Wood, A. M.",
    year: "2011",
    venue: "Statistics in Medicine",
    keywords: ["multiple imputation", "guidance", "missing data"],
    citationCount: 15200,
    abstract: "Discusses practical issues in MICE including compatibility of conditional models, passive imputation, derived variables, and reporting for applied medical research."
  },
  {
    id: "sun2023deeples",
    citeKey: "sun2023deeples",
    title: "Deep Learning Versus Conventional Methods for Missing Data Imputation: A Review and Comparative Study",
    authors: "Sun, Y., Li, J., Xu, Y., Zhang, T., & Wang, X.",
    year: "2023",
    venue: "Expert Systems with Applications",
    keywords: ["deep learning", "missing data", "comparative study"],
    citationCount: 890,
    abstract: "Reviews autoencoder, GAN, and recurrent architectures for imputation against classical methods, reporting comparative accuracy across heterogeneous missingness patterns."
  },
  {
    id: "sethia2024ifuzzy",
    citeKey: "sethia2024ifuzzy",
    title: "Handling Incomplete Data using Kernelized Intuitionistic Fuzzy C-Means",
    authors: "Sethia, K., Singh, J., & Gosain, A.",
    year: "2024",
    venue: "Procedia Computer Science",
    keywords: ["fuzzy", "incomplete data", "kernel methods"],
    citationCount: 38,
    abstract: "Extends intuitionistic fuzzy c-means with kernelization for incomplete feature vectors, demonstrating gains on benchmark clustering tasks with missing entries."
  },
  {
    id: "gawlikowski2023uqsurvey",
    citeKey: "gawlikowski2023uqsurvey",
    title: "A Survey of Uncertainty in Deep Neural Networks",
    authors: "Gawlikowski, J., et al.",
    year: "2023",
    venue: "Artificial Intelligence Review",
    keywords: ["uncertainty", "machine learning", "survey"],
    citationCount: 620,
    abstract: "Surveys probabilistic, Bayesian, and ensemble approaches to uncertainty quantification in deep learning, linking predictive uncertainty to decision risk and calibration."
  },
  {
    id: "pedrycz2021interpretable",
    citeKey: "pedrycz2021interpretable",
    title: "Interpretable Fuzzy Systems in Data-Driven Modeling",
    authors: "Pedrycz, W.",
    year: "2021",
    venue: "Information Sciences",
    keywords: ["fuzzy inference systems", "interpretable ml", "data-driven"],
    citationCount: 410,
    abstract: "Frames interpretable fuzzy models as a bridge between expert knowledge and data-driven optimization, covering rule induction, granularity, and transparency metrics."
  }
];

const LITERATURE_CITERS = [
  {
    id: "chen2024miSurvey",
    citeKey: "chen2024miSurvey",
    cites: ["vanbuuren2011mice", "white2011micepractice"],
    title: "Modern Multiple Imputation Workflows for Large-Scale Surveys",
    authors: "Chen, L., & Patel, R.",
    year: "2024",
    venue: "Survey Methodology",
    keywords: ["multiple imputation", "missing data", "survey", "mice"],
    citationCount: 28,
    abstract: "Proposes modular pipelines combining MICE with quality control for national surveys, emphasizing reproducibility and sensitivity analyses for non-ignorable missingness."
  },
  {
    id: "kumar2023ganVsMi",
    citeKey: "kumar2023ganVsMi",
    cites: ["yoon2018gain", "sun2023deeples"],
    title: "Benchmarking GAN-Based Imputation Against MICE on Tabular Health Records",
    authors: "Kumar, A., & Singh, P.",
    year: "2023",
    venue: "Journal of Biomedical Informatics",
    keywords: ["gan", "deep learning", "imputation", "benchmark"],
    citationCount: 67,
    abstract: "Compares GAIN-style architectures with chained equations on EHR-style tables under MCAR, MAR, and MNAR simulations, reporting calibration of imputed variance."
  },
  {
    id: "martinez2022fuzzyIncomplete",
    citeKey: "martinez2022fuzzyIncomplete",
    cites: ["luengo2012fuzzy", "goel2020fuzzyiter"],
    title: "Soft Computing Pipelines for Incomplete Pattern Recognition",
    authors: "Martinez, E., & Lopez, C.",
    year: "2022",
    venue: "Applied Soft Computing",
    keywords: ["fuzzy", "incomplete data", "pattern recognition", "clustering"],
    citationCount: 142,
    abstract: "Unifies fuzzy imputation and clustering stages for noisy industrial sensors, evaluating robustness when missingness correlates with fault states."
  },
  {
    id: "nguyen2021robustOutliers",
    citeKey: "nguyen2021robustOutliers",
    cites: ["park2019robustmi", "white2011micepractice"],
    title: "Robust Imputation Under Outliers: A Practitioner's Guide",
    authors: "Nguyen, T., & Brooks, H.",
    year: "2021",
    venue: "Computational Statistics & Data Analysis",
    keywords: ["robust", "multiple imputation", "outliers", "guidance"],
    citationCount: 95,
    abstract: "Reviews robust transformations and heavy-tailed error models within MICE, with case studies on economic panels contaminated by leverage points."
  },
  {
    id: "patel2020bpcaExt",
    citeKey: "patel2020bpcaExt",
    cites: ["nounou2002bpca"],
    title: "Scalable Bayesian PCA for High-Dimensional Incomplete Matrices",
    authors: "Patel, S., & Zhao, M.",
    year: "2020",
    venue: "IEEE Transactions on Knowledge and Data Engineering",
    keywords: ["bayesian", "pca", "missing data", "scalability"],
    citationCount: 201,
    abstract: "Extends Bayesian PCA with stochastic variational inference for large sparse matrices, targeting recommender and chemometric missing-value problems."
  },
  {
    id: "liu2024kernelFusion",
    citeKey: "liu2024kernelFusion",
    cites: ["sethia2024ifuzzy", "luengo2012fuzzy"],
    title: "Kernel Fuzzy Clustering with Joint Imputation for Mixed-Type Data",
    authors: "Liu, Y., & Carter, D.",
    year: "2024",
    venue: "Knowledge-Based Systems",
    keywords: ["kernel methods", "fuzzy", "incomplete data", "mixed data"],
    citationCount: 19,
    abstract: "Fuses kernelized fuzzy clustering with iterative imputation for categorical and numeric features, tested on UCI repositories with synthetic missingness."
  },
  {
    id: "ahmed2023uqMl",
    citeKey: "ahmed2023uqMl",
    cites: ["gawlikowski2023uqsurvey", "pedrycz2021interpretable"],
    title: "Trustworthy Uncertainty and Interpretability in Hybrid ML Systems",
    authors: "Ahmed, F., & Rossi, M.",
    year: "2023",
    venue: "Information Fusion",
    keywords: ["uncertainty", "interpretable ml", "fuzzy systems", "hybrid"],
    citationCount: 54,
    abstract: "Links deep uncertainty estimates with fuzzy rule explanations for regulated domains, proposing evaluation protocols for human-in-the-loop review."
  },
  {
    id: "singh2022clinicalMi",
    citeKey: "singh2022clinicalMi",
    cites: ["benhamza2025medical", "vanbuuren2011mice"],
    title: "Clinical Trial Reporting with Multiple Imputation: Pitfalls and Fixes",
    authors: "Singh, N., & Okafor, I.",
    year: "2022",
    venue: "Trials",
    keywords: ["medical", "multiple imputation", "reporting", "missing data"],
    citationCount: 88,
    abstract: "Audits CONSORT-style reporting of imputed outcomes, recommending sensitivity analyses and transparent pooling rules for regulatory submissions."
  },
  {
    id: "wong2023deepPipeline",
    citeKey: "wong2023deepPipeline",
    cites: ["sun2023deeples", "yoon2018gain"],
    title: "End-to-End Deep Imputation Pipelines for IoT Sensor Gaps",
    authors: "Wong, K., & Silva, J.",
    year: "2023",
    venue: "IEEE Internet of Things Journal",
    keywords: ["deep learning", "imputation", "time series", "gaps"],
    citationCount: 41,
    abstract: "Stacks recurrent imputers with GAN refinement for irregular IoT streams, benchmarking against spline and Kalman baselines under burst missingness."
  },
  {
    id: "taylor2021fuzzySoft",
    citeKey: "taylor2021fuzzySoft",
    cites: ["pedrycz2021interpretable", "goel2020fuzzyiter"],
    title: "Interpretable Fuzzy Clustering for Incomplete Customer Segments",
    authors: "Taylor, B., & Kim, S.",
    year: "2021",
    venue: "Expert Systems with Applications",
    keywords: ["fuzzy", "interpretable ml", "clustering", "incomplete data"],
    citationCount: 176,
    abstract: "Combines iterative fuzzy clustering with linguistically labeled rules for marketing analytics, emphasizing stakeholder-facing explanations."
  },
  {
    id: "brown2019miceR",
    citeKey: "brown2019miceR",
    cites: ["vanbuuren2011mice"],
    title: "Reproducible MICE Templates in R for Public Health Cohorts",
    authors: "Brown, J., & Lee, H.",
    year: "2019",
    venue: "BMC Medical Research Methodology",
    keywords: ["mice", "r", "reproducibility", "public health"],
    citationCount: 312,
    abstract: "Provides templated R workflows for MICE in longitudinal cohorts, including diagnostic plots and version-pinned package environments."
  },
  {
    id: "davis2022missingReview",
    citeKey: "davis2022missingReview",
    cites: ["white2011micepractice", "vanbuuren2011mice"],
    title: "Missing Data in Social Science Panel Studies: Methods and Ethics",
    authors: "Davis, M., & Clark, E.",
    year: "2022",
    venue: "Annual Review of Sociology",
    keywords: ["missing data", "multiple imputation", "panel", "ethics"],
    citationCount: 430,
    abstract: "Synthesizes econometric and statistical perspectives on attrition, refreshment samples, and ethical disclosure when imputing sensitive survey items."
  },
  {
    id: "evans2023eswaImpute",
    citeKey: "evans2023eswaImpute",
    cites: ["sun2023deeples"],
    title: "Attention-Augmented Imputation for Industrial Quality Control Data",
    authors: "Evans, R., & Moore, T.",
    year: "2023",
    venue: "Expert Systems with Applications",
    keywords: ["deep learning", "attention", "imputation", "industrial"],
    citationCount: 59,
    abstract: "Adapts transformer-style attention blocks to impute sparse defect logs, citing comparative deep learning reviews for baseline selection."
  },
  {
    id: "foster2020iterFuzzy",
    citeKey: "foster2020iterFuzzy",
    cites: ["goel2020fuzzyiter"],
    title: "Stability Analysis of Iterative Fuzzy Imputation Algorithms",
    authors: "Foster, G., & Ali, Z.",
    year: "2020",
    venue: "Fuzzy Sets and Systems",
    keywords: ["fuzzy", "iterative", "imputation", "stability"],
    citationCount: 73,
    abstract: "Derives convergence criteria for alternating fuzzy imputation-clustering schemes, with counterexamples when membership exponents are misspecified."
  },
  {
    id: "green2024trustworthyAi",
    citeKey: "green2024trustworthyAi",
    cites: ["gawlikowski2023uqsurvey"],
    title: "Calibration Checks for Uncertainty Estimates in Production ML",
    authors: "Green, P., & Adams, L.",
    year: "2024",
    venue: "Machine Learning",
    keywords: ["uncertainty", "calibration", "machine learning", "deployment"],
    citationCount: 22,
    abstract: "Operationalizes reliability diagrams and coverage tests for deployed models, referencing survey literature on neural network uncertainty families."
  }
];

const LITERATURE_BY_ID = Object.fromEntries(
  [...LITERATURE_SEED, ...LITERATURE_CITERS].map((p) => [p.id, p])
);

const publisherContainer = document.getElementById("publisherOptions");
const form = document.getElementById("journalForm");
const resultsEl = document.getElementById("results");
const validationEl = document.getElementById("validation");
const exportPdfBtn = document.getElementById("exportPdfBtn");
const literatureForm = document.getElementById("literatureForm");
const literatureResultsEl = document.getElementById("literatureResults");
const literatureValidationEl = document.getElementById("literatureValidation");
const tabJournal = document.getElementById("tabJournal");
const tabLiterature = document.getElementById("tabLiterature");
const tabNetwork = document.getElementById("tabNetwork");
const journalView = document.getElementById("journalView");
const literatureView = document.getElementById("literatureView");
const networkView = document.getElementById("networkView");
const literatureCountSelect = document.getElementById("literatureCount");
const deepDiveBtn = document.getElementById("deepDiveBtn");
const exportLiteratureExcelBtn = document.getElementById("exportLiteratureExcelBtn");
const literatureDisclaimerEl = document.getElementById("literatureDisclaimer");
const resetAppBtn = document.getElementById("resetAppBtn");
const networkForm = document.getElementById("networkForm");
const networkApaInputEl = document.getElementById("networkApaInput");
const networkValidationEl = document.getElementById("networkValidation");
const networkGraphEl = document.getElementById("networkGraph");
const networkListEl = document.getElementById("networkList");
const networkExpandBtn = document.getElementById("networkExpandBtn");
const networkModalEl = document.getElementById("networkModal");
const networkModalGraphEl = document.getElementById("networkModalGraph");
const networkModalCloseBtn = document.getElementById("networkModalCloseBtn");
const networkTooltipEl = document.getElementById("networkTooltip");

let literaturePrimaryRows = [];
let literatureDeepRows = [];
let literatureLastUserData = null;
let catalogueCursorState = null;
let catalogueAccumulatedResults = [];
let networkLastSeed = null;
let networkLastRows = [];
let networkTooltipPinned = false;

const uniquePublishers = [...new Set(JOURNALS.map((j) => j.publisher))].sort();

if (publisherContainer) {
  for (const publisher of uniquePublishers) {
    const label = document.createElement("label");
    label.innerHTML = `<input type="checkbox" name="publisher" value="${publisher}" checked />${publisher}`;
    publisherContainer.appendChild(label);
  }
}

if (literatureCountSelect) {
  for (let i = 1; i <= 30; i += 1) {
    const option = document.createElement("option");
    option.value = String(i);
    option.textContent = String(i);
    if (i === 5) option.selected = true;
    literatureCountSelect.appendChild(option);
  }
}

const literatureScholarBarEl = document.getElementById("literatureScholarBar");

const journalResultsDisclaimerEl = document.getElementById("journalResultsDisclaimer");
const literatureResultsDisclaimerEl = document.getElementById("literatureResultsDisclaimer");
const disclaimerShort =
  "These suggestions are algorithmic and may be wrong or incomplete. Confirm every journal and paper against official sources.";
if (journalResultsDisclaimerEl) journalResultsDisclaimerEl.textContent = disclaimerShort;
if (literatureResultsDisclaimerEl) literatureResultsDisclaimerEl.textContent = disclaimerShort;

const STOPWORDS = new Set([
  "the", "and", "for", "with", "from", "that", "this", "these", "those", "have", "has", "had", "into", "using", "used",
  "use", "our", "your", "their", "than", "then", "also", "were", "was", "are", "is", "be", "been", "being", "through",
  "between", "across", "under", "while", "such", "must", "can", "may", "more", "most", "less", "very", "paper", "study"
]);

const HIGH_VALUE_PHRASES = [
  "missing data", "missing values", "multiple imputation", "model uncertainty", "imputation uncertainty",
  "fuzzy bayesian", "fuzzy-bayesian", "gaussian fuzzy numbers", "hierarchical bayesian", "jags", "outliers", "nonlinear"
];

function tokenize(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, " ")
    .split(/\s+/)
    .filter((w) => w.length > 2 && !STOPWORDS.has(w));
}

function lines(text) {
  return text
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function toScholarUrl(query) {
  return `https://scholar.google.com/scholar?q=${encodeURIComponent(query)}`;
}

const OPENALEX_MAILTO = encodeURIComponent("scholarly-discovery@localhost");

function openAlexSourceHostDisplayName(source) {
  if (!source) return "";
  if (source.host_organization_name) return source.host_organization_name;
  if (source.host_institution_lineage_names && source.host_institution_lineage_names.length) {
    const a = source.host_institution_lineage_names;
    return a[a.length - 1];
  }
  return "";
}

async function fetchOpenAlexSourcesPage(search, perPage, cursor) {
  let url = `https://api.openalex.org/sources?search=${encodeURIComponent(search)}&filter=type:journal&per_page=${perPage}&mailto=${OPENALEX_MAILTO}`;
  if (cursor) url += `&cursor=${encodeURIComponent(cursor)}`;
  const res = await fetch(url);
  if (!res.ok) throw new Error("OpenAlex sources returned " + res.status);
  const json = await res.json();
  return {
    results: json.results || [],
    nextCursor: json.meta && json.meta.next_cursor ? json.meta.next_cursor : null,
    count: json.meta && json.meta.count != null ? json.meta.count : null
  };
}

function buildJournalFinderSearchQuery(userData) {
  const parts = [userData.keywords, userData.titleAbstract, userData.methodology].filter(Boolean).join(" ");
  return parts.replace(/\s+/g, " ").trim().slice(0, 480);
}

function manuscriptHintedFields(coreLower) {
  const hinted = [];
  for (let hi = 0; hi < MANUSCRIPT_DOMAIN_HINTS.length; hi += 1) {
    const h = MANUSCRIPT_DOMAIN_HINTS[hi];
    if (h.re.test(coreLower)) hinted.push(h.field);
  }
  return [...new Set(hinted)];
}

function openAlexSourceDomainMultiplier(source, coreLower, hintedFields) {
  const blob = `${source.display_name || ""} ${openAlexSourceHostDisplayName(source)}`.toLowerCase();
  let mult = 1;
  const wantsEarth = hintedFields.indexOf("Earth & environmental science") !== -1;
  const wantsAstro = hintedFields.indexOf("Astronomy & astrophysics") !== -1;
  const looksAstro =
    /\b(astronom|astrophys|cosmolog|planetary science|exoplanet|stellar\b|galax|mnras|astrophysical|royal astronomical)\b/i.test(blob);
  const looksEarth =
    /\b(remote sens|environment|hydrolog|geophys|earth system|climate\b|forest\b|ecolog|wildfire|bushfire|geospatial|copernicus|landsat|sentinel)\b/i.test(
      blob
    );
  if (looksAstro && wantsEarth && !wantsAstro) mult *= 0.06;
  if (looksEarth && wantsAstro && !wantsEarth) mult *= 0.12;
  return mult;
}

function scoreOpenAlexSourceAgainstManuscript(source, userData) {
  const core = manuscriptCoreText(userData);
  const coreLower = core.toLowerCase();
  const coreTokens = new Set(tokenize(core));
  const blob = `${source.display_name || ""} ${openAlexSourceHostDisplayName(source)}`.toLowerCase();
  let tokenScore = 0;
  const blobTokens = tokenize(blob);
  for (let i = 0; i < blobTokens.length; i += 1) {
    if (coreTokens.has(blobTokens[i])) tokenScore += 4;
  }
  const cc = source.cited_by_count != null ? source.cited_by_count : 0;
  const wc = source.works_count != null ? source.works_count : 0;
  let volumeBoost = Math.min(22, Math.log1p(cc) * 2) + Math.min(16, Math.log1p(wc) * 1.4);
  if (tokenScore < 8) volumeBoost *= 0.12;
  if (tokenScore < 4) volumeBoost = 0;
  const hinted = manuscriptHintedFields(coreLower);
  let s = (tokenScore + volumeBoost) * openAlexSourceDomainMultiplier(source, coreLower, hinted);
  return s;
}

function buildOpenAlexSourceFitReasons(source) {
  const r = [
    "Journal Finder–style match: OpenAlex “sources” search from your manuscript (many publishers—not limited to one house).",
    "Ranking blends token overlap with indexed works and citations in OpenAlex."
  ];
  const h = openAlexSourceHostDisplayName(source);
  if (h) r.push("Host / publisher (OpenAlex): " + h);
  return r;
}

function extractOpenAlexW(workId) {
  if (!workId) return null;
  const s = String(workId);
  const m = s.match(/W\d+/);
  return m ? m[0] : null;
}

function extractDoiFromApaLine(text) {
  const m = String(text).match(/\b(10\.\d{4,9}\/[^\s\])<>"',]+)/i);
  return m ? m[1].replace(/[.,;:]+$/, "") : null;
}

function parseApaLineForOpenAlexResolution(line) {
  const s = String(line || "").trim();
  const doi = extractDoiFromApaLine(s);
  if (doi) return { doi, titleGuess: null, year: null };
  const ym = s.match(/\(\s*(\d{4})\s*\)\s*\.\s*/);
  if (!ym) {
    return { doi: null, titleGuess: s.length > 25 ? s.slice(0, 220).trim() : null, year: null };
  }
  const year = ym[1];
  const rest = s.slice(ym.index + ym[0].length);
  const journalish = rest.search(/\.\s+(?=[A-Z][a-zA-Z\s&]{6,80},\s*\d|[A-Z][a-z]+\s+[A-Z][a-z]+\s*,\s*\d{4})/);
  let titleGuess =
    journalish > 18 ? rest.slice(0, journalish).trim() : rest.split(/\.\s+/)[0].trim();
  titleGuess = titleGuess.replace(/\s+/g, " ").slice(0, 320);
  if (titleGuess.length < 12) return { doi: null, titleGuess: s.slice(0, 200).trim(), year };
  return { doi: null, titleGuess, year };
}

async function resolveApaLineToOpenAlexWork(line) {
  const { doi, titleGuess, year } = parseApaLineForOpenAlexResolution(line);
  const mail = OPENALEX_MAILTO;
  if (doi) {
    const url = `https://api.openalex.org/works/https://doi.org/${encodeURIComponent(doi)}?mailto=${mail}`;
    try {
      const res = await fetch(url);
      if (res.ok) {
        const w = await res.json();
        if (w && w.id) return w;
      }
    } catch {
      /* continue */
    }
  }
  if (titleGuess && titleGuess.length > 10) {
    const url = `https://api.openalex.org/works?search=${encodeURIComponent(titleGuess.slice(0, 240))}&per_page=6&mailto=${mail}`;
    try {
      const res = await fetch(url);
      if (!res.ok) return null;
      const json = await res.json();
      const results = json.results || [];
      const yNum = year ? Number(year) : null;
      for (let i = 0; i < results.length; i += 1) {
        const w = results[i];
        if (yNum && w.publication_year && Math.abs(w.publication_year - yNum) > 2) continue;
        return w;
      }
      return results[0] || null;
    } catch {
      return null;
    }
  }
  return null;
}

async function fetchOpenAlexSourceEntity(source) {
  if (!source || !source.id) return source;
  if (source.summary_stats != null && source.works_api_url) return source;
  try {
    const res = await fetch(`${source.id}?mailto=${OPENALEX_MAILTO}`);
    if (!res.ok) return source;
    return await res.json();
  } catch {
    return source;
  }
}

async function collectReferenceDerivedJournalSources(userData) {
  const refs = userData.references || [];
  const out = [];
  const seenVenueIds = new Set();
  const maxRef = Math.min(refs.length, 6);
  for (let ri = 0; ri < maxRef; ri += 1) {
    const work = await resolveApaLineToOpenAlexWork(refs[ri]);
    if (!work) continue;
    const seedTitle = (work.display_name || work.title || "").slice(0, 140);
    const pl = work.primary_location;
    let src = pl && pl.source ? pl.source : null;
    if (src && src.id && !seenVenueIds.has(src.id)) {
      seenVenueIds.add(src.id);
      src = await fetchOpenAlexSourceEntity(src);
      const oaPart = scoreOpenAlexSourceAgainstManuscript(src, userData);
      out.push({
        source: src,
        rankScore: 96 + oaPart * 0.35,
        displayScore: 84,
        fitReasons: [
          `Your references include a work published in “${src.display_name || "this venue"}” (resolved via OpenAlex).`,
          "Treated as a high-priority venue match from your citation list."
        ]
      });
    }
    const wMag = extractOpenAlexW(work.id);
    if (wMag && seenVenueIds.size < 32) {
      try {
        const url = `https://api.openalex.org/works?filter=cites:${wMag}&per_page=14&mailto=${OPENALEX_MAILTO}`;
        const res = await fetch(url);
        if (res.ok) {
          const json = await res.json();
          const citing = json.results || [];
          for (let ci = 0; ci < citing.length; ci += 1) {
            const cw = citing[ci];
            const cs = cw.primary_location && cw.primary_location.source;
            if (!cs || !cs.id || seenVenueIds.has(cs.id)) continue;
            seenVenueIds.add(cs.id);
            const full = await fetchOpenAlexSourceEntity(cs);
            const oaP = scoreOpenAlexSourceAgainstManuscript(full, userData);
            out.push({
              source: full,
              rankScore: 72 + oaP * 0.3,
              displayScore: 64,
              fitReasons: [
                `Neighbourhood venue: publishes work citing “${seedTitle}…” — related to your reference graph (OpenAlex).`,
                buildOpenAlexSourceFitReasons(full)[0] || "OpenAlex source match."
              ]
            });
            if (out.length >= 30) break;
          }
        }
      } catch {
        /* skip */
      }
    }
  }
  return out;
}

function buildScholarQueryFromApaLine(line) {
  const { doi, titleGuess, year } = parseApaLineForOpenAlexResolution(line);
  if (doi) return `doi:${doi}`;
  if (titleGuess && titleGuess.length > 14) return `${titleGuess} ${year || ""}`.trim().slice(0, 400);
  return String(line || "").trim().slice(0, 320);
}

function buildLiteratureScholarLinksHtml(data) {
  if (!data) return "";
  const mainQ = buildOpenAlexSearchQuery(data).slice(0, 480);
  const parts = [
    `<a href="${escapeHtml(toScholarUrl(mainQ))}" target="_blank" rel="noopener noreferrer">Scholar — full query (theme + keywords + idea)</a>`
  ];
  const seeds = data.seedCitations || [];
  for (let si = 0; si < Math.min(seeds.length, 4); si += 1) {
    const q = buildScholarQueryFromApaLine(seeds[si]);
    if (!q || q.length < 8) continue;
    parts.push(
      `<a href="${escapeHtml(toScholarUrl(q))}" target="_blank" rel="noopener noreferrer">Scholar — seed ${si + 1}</a>`
    );
  }
  return parts.join(" · ");
}

async function fetchOpenAlexWorksCitingUserSeeds(data) {
  const lines = data.seedCitations || [];
  const rows = [];
  const seenIds = new Set();
  const maxLines = Math.min(lines.length, 4);
  for (let li = 0; li < maxLines; li += 1) {
    const work = await resolveApaLineToOpenAlexWork(lines[li]);
    if (!work) continue;
    const seedLabel = (work.display_name || "Seed paper").slice(0, 130);
    const wMag = extractOpenAlexW(work.id);
    if (!wMag) continue;
    try {
      const url = `https://api.openalex.org/works?filter=cites:${wMag}&per_page=22&mailto=${OPENALEX_MAILTO}`;
      const res = await fetch(url);
      if (!res.ok) continue;
      const json = await res.json();
      const list = json.results || [];
      for (let j = 0; j < list.length; j += 1) {
        const w = list[j];
        if (!w || !w.id || seenIds.has(w.id)) continue;
        if (!isAcceptableOpenAlexLiteratureWork(w)) continue;
        seenIds.add(w.id);
        const row = mapOpenAlexWorkToRow(w, data);
        row.fromSeedCitationNetwork = true;
        row.citedFromSeedTitle = seedLabel;
        rows.push(row);
        if (rows.length >= 40) return rows;
      }
    } catch {
      /* skip */
    }
  }
  return rows;
}

function openAlexAbstractToText(invertedIndex) {
  if (!invertedIndex || typeof invertedIndex !== "object") return "";
  let maxPos = -1;
  for (const positions of Object.values(invertedIndex)) {
    for (const pos of positions) {
      if (pos > maxPos) maxPos = pos;
    }
  }
  if (maxPos < 0) return "";
  const words = new Array(maxPos + 1);
  for (const [word, positions] of Object.entries(invertedIndex)) {
    for (const pos of positions) {
      words[pos] = word;
    }
  }
  return words.filter(Boolean).join(" ");
}

function openAlexAuthors(work) {
  const list = work.authorships || [];
  return list
    .map((a) => (a && a.author ? a.author.display_name : null))
    .filter(Boolean)
    .slice(0, 14)
    .join(", ");
}

function openAlexVenue(work) {
  const pl = work && work.primary_location ? work.primary_location : null;
  const plSource = pl && pl.source ? pl.source : null;
  const hv = work && work.host_venue ? work.host_venue : null;
  return (plSource && plSource.display_name) || (hv && hv.display_name) || (pl && pl.landing_page_url) || "Unknown venue";
}

function getLiteratureThemePhrase(data) {
  const t = data && data.mostImportantTheme ? String(data.mostImportantTheme).trim() : "";
  return t;
}

function getUserLiteratureCorpus(data) {
  const theme = getLiteratureThemePhrase(data);
  const themeBlock = theme ? `${theme} ${theme} ${theme} ${theme} ` : "";
  return `${themeBlock}${data.ideaKeywords} ${data.domainInfo} ${data.ideaDescription} ${data.seedCitations.join(" ")}`.toLowerCase();
}

function literatureTopicPenalty(userFull, paperFull) {
  let pen = 0;
  const u = userFull;
  const p = paperFull;
  const wantsTree =
    /\b(regression|decision)\s+trees?\b|\btree\s+based\b|\bfuzzy[-\s]?tree|\brule[-\s]?based\s+.*\s+trees?\b|\bdecision\s+trees?\b/i.test(
      u
    );
  const wantsImputation =
    /\bimputation\b|\bmissing\s+values?\b|\bmissing\s+data\b|\bmultiple\s+imputation\b|\bmice\b|\bgain\b.*\bimput/i.test(u);
  const paperAboutImputation =
    /\bimputation\b|\bmissing\s+data\b|\bmultiple\s+imputation\b|\bmice\b|\bimputing\s+missing/i.test(p);
  const paperAboutTree =
    /\b(regression|decision)\s+trees?\b|\bfuzzy[-\s]?tree|\btree\s+based\b|\brule[-\s]?based\s+.*\s+trees?\b|\bfuzzy\s+rule.*\s+tree/i.test(
      p
    );

  if (wantsTree && !wantsImputation && paperAboutImputation && !paperAboutTree) {
    pen += 50;
  }
  if (wantsImputation && !wantsTree && paperAboutTree && !paperAboutImputation) {
    pen += 55;
  }
  if (wantsTree && !wantsImputation && /\bgenerative\s+adversarial.*\bimput|\bgain\b.*\bimput/i.test(p) && !paperAboutTree) {
    pen += 40;
  }
  if (!wantsImputation && paperAboutImputation && /\bmedical\b|\bclinical\b/i.test(p) && !/\bmedical\b|\bclinical\b/i.test(u)) {
    pen += 20;
  }
  return pen;
}

function semanticQueryAlignment(queryLower, docLower) {
  let mult = 1;
  const wantsFuzzy = /\bfuzzy\b/i.test(queryLower);
  const wantsTree =
    /\b(regression|decision)\s+trees?\b|\bregression\s+tree\b|\bdecision\s+tree\b|\bfuzzy\s+tree/i.test(queryLower);
  const wantsGaussian = /\bgaussian\s+fuzzy|\bfuzzy\s+number/i.test(queryLower);
  const wantsImputation =
    /\bimputation\b|\bmissing\s+data\b|\bmissing\s+values?\b|\bmultiple\s+imputation\b|\bmice\b|\bjags\b/i.test(
      queryLower
    );
  if (wantsFuzzy && !/\bfuzzy\b/i.test(docLower)) mult *= 0.22;
  if (wantsTree && !/\b(tree|trees)\b/i.test(docLower)) mult *= 0.18;
  if (wantsGaussian && !/\b(gaussian|fuzzy\s+number|fuzzy\s+set)/i.test(docLower) && wantsFuzzy) mult *= 0.75;
  if (
    (wantsFuzzy || wantsTree) &&
    /\bintrusion\s+detection\b|\bcyber\s*attack\b|\bnetwork\s+intrusion\b|\biot\s+security\b/i.test(docLower) &&
    !/\bfuzzy\b/i.test(docLower)
  ) {
    mult *= 0.12;
  }
  if (
    (wantsFuzzy || wantsTree) &&
    /\binterpretable\s+machine\s+learning\b/i.test(docLower) &&
    /\bgrand\s+challenges?\b|\bten\s+grand/i.test(docLower) &&
    !/\b(tree|trees|fuzzy)\b/i.test(docLower)
  ) {
    mult *= 0.1;
  }
  if ((wantsFuzzy || wantsTree) && /\bcomputer\s+vision\b|\bimage\s+classification\b/i.test(docLower) && !/\b(tree|fuzzy)\b/i.test(docLower)) {
    mult *= 0.35;
  }
  if (wantsImputation && !wantsTree) {
    const paperTreeHeavy =
      /\b(regression|decision)\s+trees?\b|\bfuzzy[-\s]?tree\b/i.test(docLower) &&
      !/\bimputation|\bmissing\s+data|\bmultiple\s+imputation|\bincomplete\s+data/i.test(docLower);
    if (paperTreeHeavy) mult *= 0.2;
  }
  const themeLine = queryLower.match(/primary theme \(highest weight\):\s*([^\n]+)/i);
  if (themeLine && themeLine[1]) {
    const tp = themeLine[1].trim().toLowerCase();
    if (tp.length > 2 && docLower.includes(tp)) mult *= 1.18;
  }
  return mult;
}

function buildSemanticQueryText(data) {
  const theme = getLiteratureThemePhrase(data);
  const citeExtracted = data.seedCitations
    .map((line) => {
      const m = line.match(/\(\d{4}\)\.\s*([^.]{8,220})/);
      return m ? m[1].trim() : line.slice(0, 200).trim();
    })
    .join(" ");
  const core = [
    theme ? `Primary theme (highest weight): ${theme}` : "",
    data.ideaDescription,
    data.ideaKeywords,
    data.domainInfo,
    citeExtracted
  ]
    .filter(Boolean)
    .join("\n");
  const u = core.toLowerCase();
  const treeFuzzyHint =
    /\bfuzzy\b/i.test(u) && /\b(tree|trees|regression)\b/i.test(u)
      ? "\nRelated methods: fuzzy regression trees, fuzzy decision trees, fuzzy rule-based regression, Gaussian fuzzy numbers, fuzzy partition of attributes, tree induction with fuzzy boundaries."
      : "";
  return `${core}${treeFuzzyHint}`.slice(0, 3500);
}

function buildDynamicSpecializedQueries(data) {
  const u = getUserLiteratureCorpus(data);
  const theme = getLiteratureThemePhrase(data);
  const out = [];
  const withTheme = function (q) {
    const s = String(q || "").trim();
    if (!s) return "";
    if (!theme) return s;
    return `${theme} ${s}`.replace(/\s+/g, " ").trim().slice(0, 700);
  };
  if (/\bimputation|\bmissing|\bmice\b|\bjags\b|\bbayesian.*\bimput/i.test(u)) {
    out.push(
      withTheme(`${data.ideaKeywords} multiple imputation missing data`.trim()),
      withTheme("fuzzy Bayesian imputation Gaussian fuzzy numbers"),
      withTheme("JAGS Bayesian imputation incomplete data"),
      withTheme(`${data.domainInfo} imputation`.replace(/\s+/g, " ").trim().slice(0, 200))
    );
  }
  if (/\b(regression|decision)\s+tree|\bfuzzy\s+tree/i.test(u)) {
    out.push(
      withTheme(`${data.ideaKeywords} fuzzy regression tree decision tree`.trim()),
      withTheme("fuzzy rule based decision tree regression")
    );
  }
  if (/\bfuzzy\s+inference|\bfuzzy\s+logic/i.test(u) && !out.length) {
    out.push(withTheme(`${data.ideaKeywords} fuzzy inference systems`.trim()));
  }
  if (/\b(machine\s+learning|deep\s+learning|neural\s+network|classification|prediction)\b/i.test(u)) {
    out.push(
      withTheme(`${data.ideaKeywords} machine learning`.trim()),
      withTheme(`${data.domainInfo}`.replace(/\s+/g, " ").trim().slice(0, 220))
    );
  }
  if (theme && !out.length) {
    out.push(withTheme(data.ideaKeywords), withTheme(data.domainInfo));
  }
  return out.filter(Boolean).map((q) => q.replace(/\s+/g, " ").trim().slice(0, 700));
}

function buildOpenAlexSearchQueries(data) {
  const primary = buildOpenAlexSearchQuery(data);
  const compact = `${data.ideaKeywords} ${data.domainInfo} ${data.ideaDescription}`.replace(/\s+/g, " ").trim();
  const dynamic = buildDynamicSpecializedQueries(data);
  const out = [primary, compact.slice(0, 400), ...dynamic];
  return [...new Set(out.map((q) => q.replace(/\s+/g, " ").trim().slice(0, 700)))];
}

function literatureRelevancePhrases(userCorpus, data) {
  const u = userCorpus.toLowerCase();
  const phrases = [];
  const theme = data ? getLiteratureThemePhrase(data) : "";
  if (theme) {
    const tl = theme.toLowerCase();
    if (tl.length > 2) phrases.push(tl);
  }
  if (/\bimputation|\bmissing\s+data|\bmissing\s+values?\b|\bmultiple\s+imputation|\bmice\b|\bjags\b/i.test(u)) {
    phrases.push("multiple imputation", "missing data", "imputation", "incomplete data", "bayesian imputation");
  }
  if (/\b(regression|decision)\s+tree|\bfuzzy\s+tree/i.test(u)) {
    phrases.push("regression tree", "decision tree", "fuzzy rule", "fuzzy tree");
  }
  if (/\bfuzzy\b/i.test(u)) {
    phrases.push("fuzzy inference", "gaussian fuzzy", "fuzzy regression", "fuzzy logic", "rule based");
  }
  if (/\bexoplanet|extrasolar|transit\s+photometry|radial\s+velocity|habitable\s+zone/i.test(u)) {
    phrases.push("exoplanet", "exoplanetary", "extrasolar", "machine learning", "classification", "detection");
  }
  if (/\bmachine\s+learning|deep\s+learning|neural\s+network|convolutional|random\s+forest/i.test(u)) {
    phrases.push("machine learning", "deep learning", "neural network", "classification", "prediction");
  }
  return [...new Set(phrases)];
}

function isAcceptableOpenAlexLiteratureWork(work) {
  if (!work) return false;
  const t = String(work.type || "article").toLowerCase();
  if (t === "paratext" || t === "dataset" || t === "book" || t === "book chapter") return false;
  const title = work.display_name || work.title || "";
  if (String(title).trim().length > 360) return false;
  return true;
}

async function fetchOpenAlexCandidatesMerged(data) {
  const queries = buildOpenAlexSearchQueries(data).slice(0, 6);
  const perPage = 18;
  const lists = await Promise.all(
    queries.map(async (q) => {
      if (!q) return [];
      const url = `https://api.openalex.org/works?search=${encodeURIComponent(q)}&per_page=${perPage}&mailto=${OPENALEX_MAILTO}`;
      try {
        const res = await fetch(url);
        if (!res.ok) return [];
        const json = await res.json();
        return json.results || [];
      } catch {
        return [];
      }
    })
  );
  const seen = new Set();
  const merged = [];
  for (const list of lists) {
    for (const w of list) {
      const id = w.id;
      if (!id || seen.has(id)) continue;
      if (!isAcceptableOpenAlexLiteratureWork(w)) continue;
      seen.add(id);
      merged.push(w);
      if (merged.length >= 48) return merged;
    }
  }
  return merged;
}

function fastRerankLiterature(data, rows, downrankPhrases) {
  if (!rows.length) return rows;
  const queryRich = `${buildSemanticQueryText(data)} ${getUserLiteratureCorpus(data)}`.toLowerCase();
  const queryTokens = new Set(tokenize(queryRich));
  const userCorpus = getUserLiteratureCorpus(data);
  const phrases = literatureRelevancePhrases(userCorpus, data);
  const themeLower = getLiteratureThemePhrase(data).toLowerCase();

  for (const row of rows) {
    const doc = `${row.title} ${row.abstract || ""}`.toLowerCase();
    const docTokens = tokenize(doc);
    let overlap = 0;
    for (const t of docTokens) {
      if (queryTokens.has(t)) overlap += 1;
    }
    const phraseHits = phrases.filter((ph) => queryRich.includes(ph) && doc.includes(ph)).length;
    const align = semanticQueryAlignment(queryRich, doc);
    const topicPen = literatureTopicPenalty(userCorpus, doc) / 50;

    let seedBoost = 0;
    const titleLower = row.title.toLowerCase();
    for (const line of data.seedCitations) {
      const m = line.match(/\(\d{4}\)\.\s*([^.]{12,180})/);
      const frag = m ? m[1].trim().toLowerCase().slice(0, 55) : "";
      if (frag.length > 14 && titleLower.includes(frag.slice(0, Math.min(40, frag.length)))) {
        seedBoost += 10;
      }
    }

    let themeBoost = 0;
    if (themeLower.length > 2) {
      if (doc.includes(themeLower)) themeBoost += 58;
      if (titleLower.includes(themeLower)) themeBoost += 44;
    }

    let seedGraphBoost = 0;
    if (row.fromSeedCitationNetwork) seedGraphBoost += 28;

    const raw = overlap * 2.2 + phraseHits * 11 + seedBoost + themeBoost + seedGraphBoost;
    const denom = Math.max(12, Math.sqrt(queryTokens.size) * 1.8);
    let lexical = Math.min(100, Math.max(4, (raw / denom) * 28));
    lexical *= align * (1 - topicPen * 0.38);
    if (Array.isArray(downrankPhrases) && downrankPhrases.length) {
      for (const ph of downrankPhrases) {
        const pl = String(ph).toLowerCase();
        if (pl && doc.includes(pl)) {
          lexical *= 0.35;
          break;
        }
      }
    }

    const prior = row.similarityIndex != null ? row.similarityIndex : 50;
    let combined = Math.round(Math.min(100, Math.max(1, lexical * 0.72 + prior * 0.28)));
    const tlen = String(row.title || "").length;
    if (tlen > 220) combined = Math.round(combined * 0.9);
    if (tlen > 320) combined = Math.round(combined * 0.88);
    row.similarityIndex = Math.max(1, Math.min(100, combined));
    row.weightedScore = row.similarityIndex * 10 + overlap;
  }
  return rows;
}

function computeOpenAlexSimilarity(userData, title, abstract) {
  const userFull = getUserLiteratureCorpus(userData);
  const paperFull = `${title} ${abstract || ""}`.toLowerCase();
  const u = new Set(tokenize(userFull));
  const pTokens = tokenize(paperFull);
  const p = new Set(pTokens);
  let hits = 0;
  for (const t of p) {
    if (u.has(t)) hits += 1;
  }

  const phraseHits = [...literatureRelevancePhrases(userFull, userData), "fuzzy system"].filter(
    (ph) => userFull.includes(ph) && paperFull.includes(ph)
  ).length;

  const penalty = literatureTopicPenalty(userFull, paperFull);
  const overlapRatio = hits / Math.max(1, u.size);
  const themeT = getLiteratureThemePhrase(userData).toLowerCase();
  let themeBonus = 0;
  if (themeT.length > 2) {
    if (paperFull.includes(themeT)) themeBonus += 14;
    if (String(title).toLowerCase().includes(themeT)) themeBonus += 10;
  }
  let base = 18 + overlapRatio * 72 + phraseHits * 6 + themeBonus - penalty;
  const similarityIndex = Math.min(100, Math.max(1, Math.round(base)));
  const weightedScore = Math.round(similarityIndex * 10 + hits);
  return { weightedScore, similarityIndex };
}

function buildOpenAlexSearchQuery(data) {
  const theme = getLiteratureThemePhrase(data);
  const fromCites = data.seedCitations
    .map((line) => {
      const paren = line.match(/\(\d{4}\)\.\s*([^.]{10,180})/);
      if (paren) return paren[1].trim();
      return line.slice(0, 140).trim();
    })
    .join(" ");
  const parts = [theme, theme, data.ideaKeywords, data.domainInfo, data.ideaDescription, fromCites];
  return parts.filter(Boolean).join(" ").replace(/\s+/g, " ").trim().slice(0, 750);
}

function buildBibtexOpenAlex(paper) {
  const key = String(paper.citeKey || paper.id).replace(/[^a-zA-Z0-9_]/g, "");
  const safeTitle = paper.title.replace(/[{}]/g, "");
  const safeVenue = String(paper.venue).replace(/[{}]/g, "").slice(0, 240);
  const fields = [
    `  title={${safeTitle}},`,
    `  author={${bibtexBraceAuthors(paper.authors)}},`,
    `  journal={${safeVenue}},`,
    `  year={${paper.year}}`
  ];
  if (paper.doi) {
    const d = String(paper.doi).replace(/^https?:\/\/doi\.org\//i, "");
    fields.push(`  doi={${d}}`);
  }
  return `@article{${key},\n${fields.join("\n")}\n}`;
}

function mapOpenAlexWorkToRow(work, userData) {
  const title = work.display_name || work.title || "Untitled";
  const abstract = openAlexAbstractToText(work.abstract_inverted_index);
  const authors = openAlexAuthors(work) || "Unknown authors";
  const year = String(work.publication_year || "n.d.");
  const venue = openAlexVenue(work);
  const citationCount = work.cited_by_count != null ? work.cited_by_count : 0;
  const idUrl = work.id || "";
  const openAlexWId = extractOpenAlexW(idUrl);
  const conceptLabels = (work.concepts || [])
    .slice(0, 10)
    .map((c) => c.display_name)
    .filter(Boolean);
  const keywords = conceptLabels.length ? conceptLabels : tokenize(`${title} ${abstract}`).slice(0, 14);

  const scored = computeOpenAlexSimilarity(userData, title, abstract);
  const oaRel = typeof work.relevance_score === "number" ? work.relevance_score : 0;
  const oaBoost = oaRel > 0 ? Math.min(28, Math.log1p(oaRel) * 4.2) : 0;
  const blendedIndex = Math.min(100, Math.max(1, Math.round(scored.similarityIndex * 0.62 + oaBoost)));
  const paper = {
    id: openAlexWId || idUrl,
    citeKey: `openalex_${openAlexWId || "work"}`,
    title,
    authors,
    year,
    venue,
    keywords,
    abstract,
    citationCount,
    source: "openalex",
    openAlexUrl: idUrl,
    openAlexWId,
    doi: work.doi || null,
    weightedScore: scored.weightedScore + Math.round(oaBoost * 5),
    similarityIndex: blendedIndex
  };
  paper.apa = buildApaCitation(paper);
  paper.bibtex = buildBibtexOpenAlex(paper);
  return paper;
}

async function searchOpenAlexLiterature(data) {
  const works = await fetchOpenAlexCandidatesMerged(data);
  if (!works.length) {
    const q = buildOpenAlexSearchQuery(data);
    const url = `https://api.openalex.org/works?search=${encodeURIComponent(q)}&per_page=25&mailto=${OPENALEX_MAILTO}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error(`OpenAlex returned ${res.status}`);
    const json = await res.json();
    works.push(...(json.results || []));
  }
  let rows = works.map((w) => mapOpenAlexWorkToRow(w, data));
  fastRerankLiterature(data, rows, []);
  rows.sort((a, b) => {
    if (b.similarityIndex !== a.similarityIndex) return b.similarityIndex - a.similarityIndex;
    if (b.weightedScore !== a.weightedScore) return b.weightedScore - a.weightedScore;
    return b.citationCount - a.citationCount;
  });
  return rows.slice(0, data.literatureCount);
}

function mapSemanticScholarPaperToRow(paper, userData) {
  const title = paper && paper.title ? paper.title : "Untitled";
  const abstract = paper && paper.abstract ? paper.abstract : "";
  const year = paper && paper.year ? String(paper.year) : "n.d.";
  const venue = paper && paper.venue ? String(paper.venue) : "Unknown venue";
  const authors = paper && Array.isArray(paper.authors) ? paper.authors.map((a) => a && a.name).filter(Boolean).slice(0, 14).join(", ") : "Unknown authors";
  const citationCount = typeof paper.citationCount === "number" ? paper.citationCount : 0;
  const doi = paper && paper.externalIds && paper.externalIds.DOI ? String(paper.externalIds.DOI) : null;
  const url = paper && paper.url ? String(paper.url) : null;
  const keywords = tokenize(`${title} ${abstract}`).slice(0, 14);
  const scored = computeOpenAlexSimilarity(userData, title, abstract);
  const id = paper && paper.paperId ? `S2:${paper.paperId}` : `s2_${Math.random().toString(36).slice(2)}`;
  const row = {
    id,
    citeKey: `s2_${String(id).replace(/[^a-zA-Z0-9_]/g, "")}`,
    title,
    authors,
    year,
    venue,
    keywords,
    abstract,
    citationCount,
    source: "semanticscholar",
    openAlexUrl: url,
    openAlexWId: null,
    doi,
    weightedScore: scored.weightedScore,
    similarityIndex: scored.similarityIndex
  };
  row.apa = buildApaCitation(row);
  row.bibtex = buildBibtex(row);
  return row;
}

async function fetchSemanticScholarCandidatesMerged(data) {
  const queries = buildOpenAlexSearchQueries(data).slice(0, 4);
  const perQuery = 18;
  const fields = [
    "title",
    "abstract",
    "year",
    "venue",
    "authors",
    "citationCount",
    "externalIds",
    "url"
  ].join(",");

  const lists = await Promise.all(
    queries.map(async (q) => {
      if (!q) return [];
      const url = `https://api.semanticscholar.org/graph/v1/paper/search?query=${encodeURIComponent(q)}&limit=${perQuery}&fields=${encodeURIComponent(fields)}`;
      try {
        const res = await fetch(url);
        if (!res.ok) return [];
        const json = await res.json();
        return json.data || [];
      } catch {
        return [];
      }
    })
  );

  const out = [];
  const seen = new Set();
  for (const list of lists) {
    for (const p of list) {
      const pid = p && p.paperId ? String(p.paperId) : "";
      const key = pid ? `S2:${pid}` : `${(p && p.title ? p.title : "").slice(0, 80)}|${p && p.year ? p.year : ""}`;
      if (!key || seen.has(key)) continue;
      seen.add(key);
      out.push(p);
      if (out.length >= 48) return out;
    }
  }
  return out;
}

function crossrefAbstractToText(raw) {
  if (!raw || typeof raw !== "string") return "";
  return raw
    .replace(/<[^>]+>/g, " ")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();
}

const CROSSREF_DISALLOWED_TYPES = new Set([
  "journal-issue",
  "journal-volume",
  "journal",
  "book",
  "edited-book",
  "monograph",
  "reference-book",
  "book-series",
  "book-chapter",
  "proceedings",
  "report-series",
  "standard",
  "reference-entry",
  "other",
  "component",
  "peer-review"
]);

function isAcceptableCrossrefWork(item) {
  if (!item || !item.DOI) return false;
  const typ = String(item.type || "").toLowerCase();
  if (CROSSREF_DISALLOWED_TYPES.has(typ)) return false;
  if (typ && typ !== "journal-article" && typ !== "proceedings-article" && typ !== "posted-content" && typ !== "dissertation" && typ !== "report") {
    return false;
  }
  const rawTitle = item.title && item.title[0] ? String(item.title[0]).trim() : "";
  if (!rawTitle || rawTitle.length < 14 || rawTitle.length > 220) return false;
  const tl = rawTitle.toLowerCase();
  if (/view description/i.test(rawTitle)) return false;
  if (/special issue|table of contents|published papers|articles\s*\)|front matter|back matter|issue contents/i.test(tl)) return false;
  if (/volume\s*\d+\s*,\s*issue|issue\s*\d+\s*,\s*special/i.test(tl)) return false;
  const pageRefHits = (rawTitle.match(/\(\d+\)\s*[,;]\s*\d+\s*-\s*\d+/g) || []).length;
  if (pageRefHits >= 2) return false;
  if ((rawTitle.match(/;/g) || []).length > 3) return false;
  const authorCount = Array.isArray(item.author) ? item.author.length : 0;
  if (authorCount === 0 && rawTitle.length > 95) return false;
  const abbrevJournalNoise = (rawTitle.match(/\b[A-Za-z]{2,6}\.\s+[A-Za-z]{2,6}\./g) || []).length;
  if (abbrevJournalNoise >= 5) return false;
  return true;
}

async function fetchCrossrefForQuery(query, rows, workType) {
  const clean = String(query || "").trim();
  if (!clean) return [];
  const typeFilter = workType ? `&filter=type:${encodeURIComponent(workType)}` : "&filter=type:journal-article";
  const url = `https://api.crossref.org/works?query=${encodeURIComponent(clean)}&rows=${rows}&mailto=scholarly-discovery@localhost${typeFilter}`;
  try {
    const res = await fetch(url);
    if (!res.ok) return [];
    const json = await res.json();
    return (json.message && json.message.items) || [];
  } catch {
    return [];
  }
}

function mapCrossrefItemToRow(item, userData) {
  if (!isAcceptableCrossrefWork(item)) return null;
  const title = item.title && item.title[0] ? String(item.title[0]).trim().slice(0, 220) : "Untitled";
  let abstract = crossrefAbstractToText(item.abstract);
  if (abstract.length > 3200) abstract = `${abstract.slice(0, 3200)}…`;
  const authors = (item.author || [])
    .slice(0, 14)
    .map((a) => [a.given, a.family].filter(Boolean).join(" "))
    .filter(Boolean)
    .join(", ");
  const dp = item.issued && item.issued["date-parts"] && item.issued["date-parts"][0];
  const year = dp && dp[0] ? String(dp[0]) : "n.d.";
  let venue = "Unknown venue";
  if (item["container-title"] && item["container-title"][0]) venue = item["container-title"][0];
  const doi = item.DOI ? String(item.DOI) : null;
  const scored = computeOpenAlexSimilarity(userData, title, abstract);
  const idSlug = doi ? doi : `${title}|${year}`;
  const row = {
    id: doi ? `DOI:${doi}` : `cr_${String(Math.random()).slice(2, 11)}`,
    citeKey: `crossref_${String(idSlug).replace(/[^a-zA-Z0-9_]/g, "_").slice(0, 80)}`,
    title,
    authors: authors || "Unknown authors",
    year,
    venue,
    keywords: tokenize(`${title} ${abstract}`).slice(0, 14),
    abstract,
    citationCount: typeof item["is-referenced-by-count"] === "number" ? item["is-referenced-by-count"] : 0,
    source: "crossref",
    openAlexUrl: doi ? `https://doi.org/${doi}` : null,
    openAlexWId: null,
    doi,
    weightedScore: scored.weightedScore,
    similarityIndex: scored.similarityIndex
  };
  row.apa = buildApaCitation(row);
  row.bibtex = buildBibtex(row);
  return row;
}

async function fetchCrossrefCandidatesMerged(data) {
  const queries = buildOpenAlexSearchQueries(data).slice(0, 5);
  const seen = new Set();
  const items = [];
  function ingestBatch(batch) {
    for (let bi = 0; bi < batch.length; bi += 1) {
      const it = batch[bi];
      if (!isAcceptableCrossrefWork(it)) continue;
      const doi = it.DOI ? String(it.DOI).toLowerCase() : "";
      const k = doi || `${it.title && it.title[0] ? it.title[0] : ""}|blob`;
      if (seen.has(k)) continue;
      seen.add(k);
      items.push(it);
      if (items.length >= 52) return true;
    }
    return false;
  }
  for (let qi = 0; qi < queries.length; qi += 1) {
    const batchJa = await fetchCrossrefForQuery(queries[qi], 18, "journal-article");
    if (ingestBatch(batchJa)) return items;
    const batchPr = await fetchCrossrefForQuery(queries[qi], 10, "proceedings-article");
    if (ingestBatch(batchPr)) return items;
  }
  return items;
}

function buildBroadLiteratureQueries(data) {
  const theme = getLiteratureThemePhrase(data);
  const a = [theme, data.ideaKeywords, data.domainInfo].filter(Boolean).join(" ").trim();
  const b = [theme, data.ideaKeywords].filter(Boolean).join(" ").trim();
  const c = theme || data.ideaKeywords || data.domainInfo;
  const d = [data.ideaKeywords, data.ideaDescription.slice(0, 280)].filter(Boolean).join(" ").trim();
  const arr = [a, b, c, d].map((q) => q.replace(/\s+/g, " ").trim().slice(0, 380));
  const out = [];
  const seen = new Set();
  for (let i = 0; i < arr.length; i += 1) {
    if (!arr[i] || seen.has(arr[i])) continue;
    seen.add(arr[i]);
    out.push(arr[i]);
  }
  return out;
}

async function fetchOpenAlexWorksBroad(queries) {
  const seen = new Set();
  const works = [];
  for (let i = 0; i < queries.length; i += 1) {
    const q = queries[i];
    if (!q) continue;
    const url = `https://api.openalex.org/works?search=${encodeURIComponent(q)}&per_page=25&mailto=${OPENALEX_MAILTO}`;
    try {
      const res = await fetch(url);
      if (!res.ok) continue;
      const json = await res.json();
      const resList = json.results || [];
      for (let j = 0; j < resList.length; j += 1) {
        const w = resList[j];
        const id = w.id;
        if (!id || seen.has(id)) continue;
        if (!isAcceptableOpenAlexLiteratureWork(w)) continue;
        seen.add(id);
        works.push(w);
        if (works.length >= 55) return works;
      }
    } catch {
      /* continue */
    }
  }
  return works;
}

async function fetchSemanticScholarBroad(queries) {
  const fields = ["title", "abstract", "year", "venue", "authors", "citationCount", "externalIds", "url"].join(",");
  const seen = new Set();
  const papers = [];
  for (let i = 0; i < queries.length; i += 1) {
    const q = queries[i];
    if (!q) continue;
    const url = `https://api.semanticscholar.org/graph/v1/paper/search?query=${encodeURIComponent(q.slice(0, 340))}&limit=24&fields=${encodeURIComponent(fields)}`;
    try {
      const res = await fetch(url);
      if (!res.ok) continue;
      const json = await res.json();
      const dataList = json.data || [];
      for (let j = 0; j < dataList.length; j += 1) {
        const p = dataList[j];
        const pid = p && p.paperId ? String(p.paperId) : "";
        const k = pid || (p && p.title ? p.title : "");
        if (!k || seen.has(k)) continue;
        seen.add(k);
        papers.push(p);
        if (papers.length >= 48) return papers;
      }
    } catch {
      /* continue */
    }
  }
  return papers;
}

async function fetchCrossrefBroad(queries) {
  const seen = new Set();
  const items = [];
  for (let i = 0; i < queries.length; i += 1) {
    const batchJa = await fetchCrossrefForQuery(queries[i], 18, "journal-article");
    const batchPr = await fetchCrossrefForQuery(queries[i], 10, "proceedings-article");
    const batch = batchJa.concat(batchPr);
    for (let j = 0; j < batch.length; j += 1) {
      const it = batch[j];
      if (!isAcceptableCrossrefWork(it)) continue;
      const doi = it.DOI ? String(it.DOI).toLowerCase() : "";
      const k = doi || JSON.stringify(it.title || []);
      if (seen.has(k)) continue;
      seen.add(k);
      items.push(it);
      if (items.length >= 50) return items;
    }
  }
  return items;
}

function dedupeLiteratureRows(rows) {
  const byKey = new Map();
  for (const r of rows) {
    const doi = r && r.doi ? String(r.doi).toLowerCase().replace(/^https?:\/\/doi\.org\//i, "") : "";
    const t = r && r.title ? String(r.title).toLowerCase().replace(/\s+/g, " ").trim() : "";
    const y = r && r.year ? String(r.year) : "";
    const auth = r && r.authors ? String(r.authors).toLowerCase().slice(0, 48) : "";
    const key = doi || `${t}|${y}|${auth}`;
    if (!key.replace(/\|/g, "")) continue;
    const existing = byKey.get(key);
    if (!existing || (r.similarityIndex || 0) > (existing.similarityIndex || 0)) byKey.set(key, r);
  }
  return [...byKey.values()];
}

function sortLiteratureRows(rows) {
  rows.sort((a, b) => {
    if ((b.similarityIndex || 0) !== (a.similarityIndex || 0)) return (b.similarityIndex || 0) - (a.similarityIndex || 0);
    if ((b.weightedScore || 0) !== (a.weightedScore || 0)) return (b.weightedScore || 0) - (a.weightedScore || 0);
    return (b.citationCount || 0) - (a.citationCount || 0);
  });
  return rows;
}

async function searchLiterature(data) {
  const seedCitingRows = await fetchOpenAlexWorksCitingUserSeeds(data);
  const [openAlexWorks, s2Papers, crossrefItems] = await Promise.all([
    fetchOpenAlexCandidatesMerged(data),
    fetchSemanticScholarCandidatesMerged(data),
    fetchCrossrefCandidatesMerged(data)
  ]);
  const oaRows = (openAlexWorks || []).map((w) => mapOpenAlexWorkToRow(w, data));
  const s2Rows = (s2Papers || []).map((p) => mapSemanticScholarPaperToRow(p, data));
  const crRows = (crossrefItems || []).map((it) => mapCrossrefItemToRow(it, data)).filter(Boolean);

  let all = [...seedCitingRows, ...oaRows, ...s2Rows, ...crRows];
  fastRerankLiterature(data, all, []);
  let dedup = dedupeLiteratureRows(all);
  sortLiteratureRows(dedup);

  const needMore = dedup.length < data.literatureCount || dedup.length < 4;
  if (needMore) {
    const broad = buildBroadLiteratureQueries(data);
    const [oaBroad, s2Broad, crBroad] = await Promise.all([
      fetchOpenAlexWorksBroad(broad),
      fetchSemanticScholarBroad(broad),
      fetchCrossrefBroad(broad)
    ]);
    const extra = [
      ...oaBroad.map((w) => mapOpenAlexWorkToRow(w, data)),
      ...s2Broad.map((p) => mapSemanticScholarPaperToRow(p, data)),
      ...crBroad.map((it) => mapCrossrefItemToRow(it, data)).filter(Boolean)
    ];
    fastRerankLiterature(data, extra, []);
    dedup = dedupeLiteratureRows([...dedup, ...extra]);
    sortLiteratureRows(dedup);
  }

  return dedup.slice(0, data.literatureCount);
}

async function fetchOpenAlexCitingWorks(openAlexWId, userData) {
  const url = `https://api.openalex.org/works?filter=cites:${openAlexWId}&per_page=30&mailto=${OPENALEX_MAILTO}`;
  const res = await fetch(url);
  if (!res.ok) return [];
  const json = await res.json();
  return (json.results || []).map((w) => mapOpenAlexWorkToRow(w, userData));
}

function fallbackLocalLiterature(data) {
  return LITERATURE_SEED.map((paper) => enrichLiteratureRow(paper, data))
    .sort((a, b) => {
      if (b.similarityIndex !== a.similarityIndex) return b.similarityIndex - a.similarityIndex;
      return b.weightedScore - a.weightedScore;
    })
    .slice(0, data.literatureCount);
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

function buildApaCitation(paper) {
  return `${paper.authors} (${paper.year}). ${paper.title}. ${paper.venue}.`;
}

function bibtexBraceAuthors(authors) {
  return authors.replace(/&/g, "\\&");
}

function buildBibtex(paper) {
  const type = paper.venue && paper.venue.length < 80 && !paper.venue.includes("Proceedings") ? "article" : "inproceedings";
  const key = paper.citeKey || paper.id;
  const authorBrace = bibtexBraceAuthors(paper.authors);
  if (type === "article") {
    return `@article{${key},
  title={${paper.title}},
  author={${authorBrace}},
  journal={${paper.venue}},
  year={${paper.year}}
}`;
  }
  return `@inproceedings{${key},
  title={${paper.title}},
  author={${authorBrace}},
  booktitle={${paper.venue}},
  year={${paper.year}}
}`;
}

function csvEscapeCell(value) {
  const s = String(value != null ? value : "");
  if (/[",\n\r]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

function literatureSnapshotLabel() {
  return new Date().toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}

function bindLiteratureCitationToggles(root) {
  root.querySelectorAll(".cite-block").forEach((block) => {
    const toggles = block.querySelectorAll(".cite-toggle");
    const panels = block.querySelectorAll(".cite-panel");
    toggles.forEach((btn) => {
      btn.addEventListener("click", () => {
        const panelName = btn.dataset.panel;
        const target = block.querySelector(`.cite-panel[data-panel="${panelName}"]`);
        const isOpen = btn.classList.contains("active");
        toggles.forEach((b) => b.classList.remove("active"));
        panels.forEach((p) => p.classList.remove("visible"));
        if (!isOpen && target) {
          btn.classList.add("active");
          target.classList.add("visible");
        }
      });
    });
  });
}

function manuscriptCoreText(userData) {
  const ta = (userData.titleAbstract || "").toLowerCase();
  const meth = (userData.methodology || "").toLowerCase();
  const kw = (userData.keywords || "").toLowerCase();
  const refs = (userData.references || []).join(" ").toLowerCase();
  return `${ta} ${ta} ${meth} ${meth} ${kw} ${refs}`;
}

function journalProfileText(journal) {
  return `${journal.name} ${journal.scopeKeywords.join(" ")} ${journal.methodsFocus.join(" ")} ${journal.researchField || ""}`.toLowerCase();
}

function scoreJournal(journal, userData) {
  const core = manuscriptCoreText(userData);
  const coreTokens = new Set(tokenize(core));
  const methodLower = (userData.methodology || "").toLowerCase();
  const journalLower = journalProfileText(journal);
  const referencesTokens = new Set(tokenize((userData.references || []).join(" ").toLowerCase()));

  const scopeMatches = [];
  let scopeWeighted = 0;
  for (let i = 0; i < journal.scopeKeywords.length; i += 1) {
    const k = journal.scopeKeywords[i];
    const kLower = k.toLowerCase();
    const inCore = kLower.includes(" ") ? core.includes(kLower) : coreTokens.has(kLower) || core.includes(kLower);
    if (inCore) {
      scopeMatches.push(k);
      const w = JOURNAL_SCOPE_IDF_WEIGHT[kLower] != null ? JOURNAL_SCOPE_IDF_WEIGHT[kLower] : 1;
      scopeWeighted += 12 * w;
    }
  }

  const methodMatches = [];
  let methodWeighted = 0;
  for (let mi = 0; mi < journal.methodsFocus.length; mi += 1) {
    const m = journal.methodsFocus[mi];
    const mLower = m.toLowerCase();
    if (methodLower.includes(mLower) || core.includes(mLower)) {
      methodMatches.push(m);
      methodWeighted += 14;
    }
  }

  let score = scopeWeighted + methodWeighted;

  const highValueHits = HIGH_VALUE_PHRASES.filter((phrase) => core.includes(phrase));
  const journalBlob = `${journal.scopeKeywords.join(" ")} ${journal.methodsFocus.join(" ")}`.toLowerCase();
  const journalHighValueCoverage = highValueHits.filter((phrase) => journalBlob.includes(phrase.replace(/-/g, " ")));
  score += journalHighValueCoverage.length * 14;

  if (userData.selectedQuartiles.includes(journal.quartile)) score += 16;
  else score -= 22;

  if (userData.selectedPublishers.includes(journal.publisher)) score += 8;

  const refSignal = [...referencesTokens].filter((t) => journalBlob.includes(t)).length;
  score += Math.min(refSignal, 10) * 1.2;

  const refBlob = (userData.references || []).join(" ").toLowerCase();
  const jNameLow = journal.name.toLowerCase();
  let refVenueBoost = 0;
  if (jNameLow.length >= 10 && refBlob.includes(jNameLow)) {
    refVenueBoost += 22;
  } else {
    const jNameToks = tokenize(journal.name);
    const refToks = new Set(tokenize(refBlob));
    let nameHits = 0;
    for (let ni = 0; ni < jNameToks.length; ni += 1) {
      const t = jNameToks[ni];
      if (t.length > 4 && refToks.has(t)) nameHits += 1;
    }
    if (nameHits >= 3) refVenueBoost += 14;
  }
  score += refVenueBoost;

  const hintedFields = manuscriptHintedFields(core);
  const jField = journal.researchField || "";
  if (hintedFields.length) {
    const matchHint = hintedFields.indexOf(jField) !== -1;
    if (matchHint) score += 42;
    else score -= 28;
  }

  const wantsEarth = hintedFields.indexOf("Earth & environmental science") !== -1;
  const wantsAstro = hintedFields.indexOf("Astronomy & astrophysics") !== -1;
  if (wantsEarth && !wantsAstro && jField === "Astronomy & astrophysics") {
    score -= 140;
  }
  const manuscriptEarthStrong =
    /\b(bushfire|wildfire|remote\s+sensing|satellite|landsat|sentinel|ndvi|environmental\s+monitor|earth\s+observation|geospatial|burnt\s+area|fire\s+risk)\b/i.test(
      core
    );
  const journalGeoSignal = /\b(remote|satellite|environment|hydrolog|earth|climate|geospatial|ecolog|forest|wildfire|bushfire|geophys)\b/i.test(
    `${journal.name} ${journalBlob}`
  );
  if (manuscriptEarthStrong && jField !== "Earth & environmental science" && !journalGeoSignal) {
    score -= 85;
  }

  const negativeDomains = ["energy", "genomics", "cell biology", "sustainability", "decarbonization", "clinical", "iot"];
  const offDomain = negativeDomains.filter((term) => {
    return journalBlob.includes(term) && !core.includes(term);
  }).length;
  score -= offDomain * 8;

  const fitReasons = [];
  if (scopeMatches.length) fitReasons.push(`Thematic overlap (IDF-weighted): ${scopeMatches.slice(0, 5).join(", ")}`);
  if (methodMatches.length) fitReasons.push(`Methods alignment: ${methodMatches.slice(0, 4).join(", ")}`);
  if (journalHighValueCoverage.length) fitReasons.push(`Keyword phrase match: ${journalHighValueCoverage.slice(0, 3).join(", ")}`);
  if (hintedFields.length && jField) {
    if (hintedFields.indexOf(jField) !== -1) fitReasons.push(`Research-area signal matches catalogue field: ${jField}`);
    else fitReasons.push(`Catalogue field (${jField}) differs from detected manuscript domain cues—verify fit carefully`);
  }
  if (userData.selectedQuartiles.includes(journal.quartile)) fitReasons.push(`Matches your quartile filter (${journal.quartile})`);
  if (userData.selectedPublishers.includes(journal.publisher)) fitReasons.push(`Matches preferred publisher (${journal.publisher})`);
  if (refVenueBoost >= 14) {
    fitReasons.push("Journal name (or distinctive title words) appears in your reference list—strong signal you already publish or cite this venue family.");
  }
  if (!fitReasons.length) fitReasons.push("Weak direct match—results are heuristic from your text vs. this app’s journal catalogue");

  return {
    journal,
    score: Math.round(score),
    fitReasons
  };
}

function collectFormData() {
  const keywords = document.getElementById("keywords").value.trim();
  const titleAbstract = document.getElementById("titleAbstract").value.trim();
  const methodology = document.getElementById("methodology").value.trim();
  const references = lines(document.getElementById("references").value.trim());

  const selectedQuartiles = [...document.querySelectorAll('input[name="quartile"]:checked')].map((el) => el.value);
  const selectedPublishers = [...document.querySelectorAll('input[name="publisher"]:checked')].map((el) => el.value);
  const rawCount = Number(document.getElementById("resultCount").value || "5");
  const resultCount = Math.max(1, Math.min(100, Number.isFinite(rawCount) ? Math.round(rawCount) : 5));

  return {
    keywords,
    titleAbstract,
    methodology,
    references,
    selectedQuartiles: selectedQuartiles.length ? selectedQuartiles : ["Q1", "Q2", "Q3", "Q4"],
    selectedPublishers: selectedPublishers.length ? selectedPublishers : uniquePublishers.slice(),
    resultCount
  };
}

function validate(data) {
  if (!data.keywords && !data.titleAbstract && !data.methodology && !data.references.length) {
    return "Please provide at least one substantive input (keywords, title/abstract, methodology, or references).";
  }
  return "";
}

function journalMissingFieldWarning(data) {
  const missing = [];
  if (!data.keywords) missing.push("keywords");
  if (!data.titleAbstract) missing.push("title/abstract");
  if (!data.methodology) missing.push("methodology");
  if (!data.references.length) missing.push("references");
  if (!missing.length) return "";
  return `Warning: blank fields (${missing.join(", ")}) may reduce recommendation accuracy.`;
}

function normalizeJournalKey(name) {
  return String(name || "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\b(the|journal|review|letters)\b/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function findCuratedJournalMatchForOpenAlexName(displayName) {
  const nk = normalizeJournalKey(displayName);
  if (!nk) return null;
  for (let i = 0; i < JOURNALS.length; i += 1) {
    const j = JOURNALS[i];
    if (normalizeJournalKey(j.name) === nk) return j;
  }
  let best = null;
  let bestLen = 0;
  for (let i = 0; i < JOURNALS.length; i += 1) {
    const j = JOURNALS[i];
    const jk = normalizeJournalKey(j.name);
    if (jk.length < 14) continue;
    if (nk.includes(jk) && jk.length > bestLen) {
      best = j;
      bestLen = jk.length;
    } else if (jk.includes(nk) && nk.length >= 14 && jk.length > bestLen) {
      best = j;
      bestLen = jk.length;
    }
  }
  return best;
}

function renderOpenAlexSourceCardHtml(source, indexOneBased, scoreDisplay, fitReasons, scoreLabel) {
  const name = source.display_name || "Untitled source";
  const host = openAlexSourceHostDisplayName(source);
  const sUrl = source.id ? String(source.id) : "";
  const wc = source.works_count != null ? String(source.works_count) : "—";
  const cc = source.cited_by_count != null ? String(source.cited_by_count) : "—";
  const fitHtml = fitReasons.map((r) => `<li>${escapeHtml(r)}</li>`).join("");
  const link =
    sUrl && /^https?:\/\//i.test(sUrl)
      ? `<a href="${escapeHtml(sUrl)}" target="_blank" rel="noopener noreferrer">OpenAlex source record</a>`
      : "";
  const issn = source.issn_l || (Array.isArray(source.issn) && source.issn.length ? source.issn[0] : "") || "—";
  const ss = source.summary_stats || {};
  const twoYr = ss["2yr_mean_citedness"];
  const hIdx = ss.h_index;
  const i10 = ss.i10_index;
  let twoYrStr = "—";
  if (twoYr != null && !Number.isNaN(Number(twoYr))) twoYrStr = Number(twoYr).toFixed(2);
  const hStr = hIdx != null ? String(hIdx) : "—";
  const i10Str = i10 != null ? String(i10) : "—";
  const curated = findCuratedJournalMatchForOpenAlexName(name);
  const cm = curated && curated.metrics ? curated.metrics : {};
  let catalogueStatsBlock = "";
  if (curated) {
    catalogueStatsBlock = `
        <p><strong>Matched app catalogue (name match)</strong></p>
        <div class="stats-grid">
          <div><strong>Quartile (curated sample):</strong> ${escapeHtml(curated.quartile || "N/A")}</div>
          <div><strong>Impact Factor:</strong> ${escapeHtml(cm.impactFactor || "N/A")}</div>
          <div><strong>CiteScore:</strong> ${escapeHtml(cm.citeScore || "N/A")}</div>
          <div><strong>Acceptance / decision (sample):</strong> ${escapeHtml(cm.acceptanceRate || "N/A")} / ${escapeHtml(cm.timeToFirstDecision || "N/A")}</div>
        </div>`;
  }
  const worksBrowse =
    source.works_api_url && /^https?:\/\//i.test(source.works_api_url)
      ? ` · <a href="${escapeHtml(source.works_api_url)}" target="_blank" rel="noopener noreferrer">Works in OpenAlex</a>`
      : "";
  return `
      <article class="journal-card journal-card-openalex">
        <h3>#${indexOneBased} ${escapeHtml(name)}</h3>
        <div class="score">${escapeHtml(scoreLabel)}: ${escapeHtml(String(scoreDisplay))}</div>
        <p><strong>Host / publisher (OpenAlex):</strong> ${escapeHtml(host || "—")}</p>
        <p><strong>ISSN (OpenAlex):</strong> ${escapeHtml(issn)}</p>
        <p><strong>Journal statistics (OpenAlex source-level)</strong></p>
        <div class="stats-grid">
          <div><strong>Works indexed:</strong> ${escapeHtml(wc)}</div>
          <div><strong>Citing papers (all-time):</strong> ${escapeHtml(cc)}</div>
          <div><strong>2-yr mean citedness:</strong> ${escapeHtml(twoYrStr)}</div>
          <div><strong>h-index / i10-index:</strong> ${escapeHtml(hStr)} / ${escapeHtml(i10Str)}</div>
        </div>
        ${catalogueStatsBlock}
        <p><strong>Why suggested</strong></p>
        <ul>${fitHtml}</ul>
        <p class="note">OpenAlex does not ship Scimago SJR quartiles. Values above are from OpenAlex’s source record; quartile / IF / CiteScore appear only when this title matches the app’s small curated list. For official rankings use <a href="https://www.scimagojr.com/journalsearch.php" target="_blank" rel="noopener noreferrer">Scimago</a> or the publisher.</p>
        <p class="links">${link}${worksBrowse}</p>
      </article>`;
}

async function buildMergedJournalMatches(userData) {
  const n = userData.resultCount;
  const q = buildJournalFinderSearchQuery(userData);
  const searchQ = q.length > 12 ? q : `${userData.keywords} ${userData.titleAbstract}`.replace(/\s+/g, " ").trim().slice(0, 420);

  const pageRes = await Promise.allSettled([
    fetchOpenAlexSourcesPage(searchQ || userData.keywords || "research", 40, null),
    collectReferenceDerivedJournalSources(userData)
  ]);
  let oaSources =
    pageRes[0].status === "fulfilled" && pageRes[0].value && pageRes[0].value.results ? pageRes[0].value.results : [];
  let refDerived = pageRes[1].status === "fulfilled" && pageRes[1].value ? pageRes[1].value : [];
  if (pageRes[0].status !== "fulfilled") {
    try {
      oaSources = (await fetchOpenAlexSourcesPage(searchQ || userData.keywords || "research", 40, null)).results || [];
    } catch {
      oaSources = [];
    }
  }

  const oaItems = oaSources.map((source) => ({
    source,
    score: scoreOpenAlexSourceAgainstManuscript(source, userData),
    fitReasons: buildOpenAlexSourceFitReasons(source)
  }));

  const curatedScored = JOURNALS.map((journal) => scoreJournal(journal, userData)).sort((a, b) => b.score - a.score);
  const curatedByKey = new Map();
  for (let ci = 0; ci < curatedScored.length; ci += 1) {
    const c = curatedScored[ci];
    curatedByKey.set(normalizeJournalKey(c.journal.name), c);
  }

  const OA_MIN_SCORE = 5.5;
  const pool = new Map();

  function upsertCandidate(rankKey, candidate) {
    if (!rankKey) return;
    const prev = pool.get(rankKey);
    if (!prev || candidate.rankScore > prev.rankScore) pool.set(rankKey, candidate);
  }

  for (let ci = 0; ci < curatedScored.length; ci += 1) {
    const c = curatedScored[ci];
    const k = normalizeJournalKey(c.journal.name);
    upsertCandidate(k, {
      kind: "curated",
      curated: c,
      displayScore: c.score,
      rankScore: c.score
    });
  }

  for (let rdi = 0; rdi < refDerived.length; rdi += 1) {
    const rd = refDerived[rdi];
    const src = rd.source;
    if (!src || !src.display_name) continue;
    const k = normalizeJournalKey(src.display_name);
    const enriched = curatedByKey.get(k);
    if (enriched) {
      upsertCandidate(k, {
        kind: "merged",
        curated: enriched,
        oa: src,
        displayScore: Math.round(enriched.score + 48 + Math.min(40, rd.rankScore * 0.08)),
        rankScore: enriched.score + 52 + rd.rankScore * 0.12,
        extraReasons: rd.fitReasons
      });
    } else {
      upsertCandidate(k, {
        kind: "openalex",
        oa: src,
        displayScore: Math.round(rd.displayScore),
        fitReasons: rd.fitReasons,
        rankScore: rd.rankScore
      });
    }
  }

  for (let oi = 0; oi < oaItems.length; oi += 1) {
    const oa = oaItems[oi];
    if (oa.score < OA_MIN_SCORE) continue;
    const k = normalizeJournalKey(oa.source.display_name);
    const enriched = curatedByKey.get(k);
    if (enriched) {
      upsertCandidate(k, {
        kind: "merged",
        curated: enriched,
        oa: oa.source,
        displayScore: Math.round(enriched.score + 12 + Math.min(28, oa.score * 0.35)),
        rankScore: enriched.score + 15 + oa.score * 0.45
      });
    } else {
      upsertCandidate(k, {
        kind: "openalex",
        oa: oa.source,
        displayScore: Math.round(oa.score),
        fitReasons: oa.fitReasons,
        rankScore: oa.score * 2.85
      });
    }
  }

  const sorted = [...pool.values()].sort((a, b) => b.rankScore - a.rankScore);
  const picked = [];
  const publisherCounts = new Map();
  const fieldCounts = new Map();
  const remaining = sorted.slice();
  while (remaining.length && picked.length < n) {
    let bestIdx = 0;
    let bestEff = -Infinity;
    for (let i = 0; i < remaining.length; i += 1) {
      const c = remaining[i];
      const curated = c.curated && c.curated.journal ? c.curated.journal : null;
      const pub = curated ? curated.publisher : "";
      const field = curated ? curated.researchField || "" : "";
      const pCount = pub ? publisherCounts.get(pub) || 0 : 0;
      const fCount = field ? fieldCounts.get(field) || 0 : 0;
      const diversityPenalty = pCount * 10 + fCount * 12;
      const eff = c.rankScore - diversityPenalty;
      if (eff > bestEff) {
        bestEff = eff;
        bestIdx = i;
      }
    }
    const chosen = remaining.splice(bestIdx, 1)[0];
    picked.push(chosen);
    const curated = chosen.curated && chosen.curated.journal ? chosen.curated.journal : null;
    if (curated) {
      if (curated.publisher) publisherCounts.set(curated.publisher, (publisherCounts.get(curated.publisher) || 0) + 1);
      if (curated.researchField) fieldCounts.set(curated.researchField, (fieldCounts.get(curated.researchField) || 0) + 1);
    }
  }
  return picked;
}

function renderMergedJournalResults(items, userData) {
  if (!resultsEl) return;
  if (!items.length) {
    resultsEl.innerHTML = "<p class='placeholder'>No matching journals found with current filters.</p>";
    return;
  }
  resultsEl.innerHTML = items
    .map((item, idx) => {
      const i = idx + 1;
      if (item.kind === "merged") {
        const { journal, fitReasons } = item.curated;
        const refExtra = Array.isArray(item.extraReasons) ? item.extraReasons : [];
        const extra = [
          ...fitReasons,
          ...refExtra,
          "OpenAlex matched this journal to your manuscript and/or reference resolution."
        ];
        return renderJournalCardHtml(journal, i, item.displayScore, extra, "Fit score", userData);
      }
      if (item.kind === "curated") {
        const { journal, score, fitReasons } = item.curated;
        return renderJournalCardHtml(journal, i, score, fitReasons, "Fit score", userData);
      }
      return renderOpenAlexSourceCardHtml(item.oa, i, item.displayScore, item.fitReasons, "Match score");
    })
    .join("");
}

function renderJournalCardHtml(journal, indexOneBased, scoreDisplay, fitReasons, scoreLabel, userData) {
  const similarPapersHtml = journal.similarPapers
    .map((paper) => `<li><a href="${escapeHtml(paper.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(paper.title)}</a></li>`)
    .join("");

  const scholarJournalQuery = userData
    ? `${journal.name} ${userData.keywords} ${(userData.titleAbstract || "").slice(0, 160)}`.replace(/\s+/g, " ").trim()
    : "";
  const scholarLine =
    scholarJournalQuery.length > 8
      ? `<p><strong>Find papers like yours in this venue:</strong> <a href="${escapeHtml(toScholarUrl(scholarJournalQuery.slice(0, 420)))}" target="_blank" rel="noopener noreferrer">Google Scholar (journal name + your keywords)</a></p>`
      : "";

  const requirementsHtml = journal.authorGuidelines.map((r) => `<li>${escapeHtml(r)}</li>`).join("");
  const fitHtml = fitReasons.map((r) => `<li>${escapeHtml(r)}</li>`).join("");
  const stats = journal.metrics || {};
  const fieldLine = journal.researchField
    ? `<p><strong>Catalogue field:</strong> ${escapeHtml(journal.researchField)}</p>`
    : "";

  return `
      <article class="journal-card">
        <h3>#${indexOneBased} ${escapeHtml(journal.name)}</h3>
        <div class="score">${escapeHtml(scoreLabel)}: ${escapeHtml(String(scoreDisplay))}</div>
        <p><strong>Publisher:</strong> ${escapeHtml(journal.publisher)} | <strong>Quartile:</strong> ${escapeHtml(journal.quartile)}</p>
        ${fieldLine}
        <p><strong>Journal Statistics</strong></p>
        <div class="stats-grid">
          <div><strong>Impact Factor:</strong> ${escapeHtml(stats.impactFactor || "N/A")}</div>
          <div><strong>CiteScore:</strong> ${escapeHtml(stats.citeScore || "N/A")}</div>
          <div><strong>Acceptance Rate:</strong> ${escapeHtml(stats.acceptanceRate || "N/A")}</div>
          <div><strong>1st Decision:</strong> ${escapeHtml(stats.timeToFirstDecision || "N/A")}</div>
        </div>
        <p><strong>Why this journal is a good fit</strong></p>
        <ul>${fitHtml}</ul>
        <p><strong>Key requirements from journal site</strong></p>
        <ul>${requirementsHtml}</ul>
        <p class="note">The links below are <strong>static examples</strong> bundled with the app’s small demo catalogue (originally for a missing-data / fuzzy-methods tutorial). They are <em>not</em> inferred from your manuscript.</p>
        <p><strong>Example publisher search shortcuts (demo only)</strong></p>
        <ul>${similarPapersHtml}</ul>
        ${scholarLine}
        <p class="links">
          <a href="${escapeHtml(journal.website)}" target="_blank" rel="noopener noreferrer">Journal Homepage</a>
          <a href="${escapeHtml(journal.guideUrl)}" target="_blank" rel="noopener noreferrer">Author Guidelines</a>
        </p>
      </article>`;
}

function renderResults(scoredJournals, userData) {
  if (!scoredJournals.length) {
    resultsEl.innerHTML = "<p class='placeholder'>No matching journals found with current filters.</p>";
    return;
  }

  resultsEl.innerHTML = scoredJournals
    .map(({ journal, score, fitReasons }, idx) =>
      renderJournalCardHtml(journal, idx + 1, score, fitReasons, "Fit score", userData)
    )
    .join("");
}

function getUniqueResearchFields() {
  const s = new Set();
  for (let i = 0; i < JOURNALS.length; i += 1) {
    const f = JOURNALS[i].researchField;
    if (f) s.add(f);
  }
  return [...s].sort();
}

async function renderCatalogueResults(reset) {
  const el = document.getElementById("catalogueResults");
  const loadMoreBtn = document.getElementById("catalogueLoadMoreBtn");
  if (!el) return;

  const nameQ = ((document.getElementById("catalogueNameQuery") || {}).value || "").trim();
  const hostF = ((document.getElementById("catalogueHostFilter") || {}).value || "").trim().toLowerCase();

  if (reset) {
    catalogueCursorState = null;
    catalogueAccumulatedResults = [];
  }

  if (!nameQ && reset) {
    el.innerHTML =
      "<p class='placeholder'>Enter a journal name or subject keyword to search OpenAlex’s global journal catalogue (many publishers).</p>";
    if (loadMoreBtn) loadMoreBtn.disabled = true;
    return;
  }

  const searchTerm = nameQ || "journal";
  if (reset) {
    el.innerHTML = "<p class='placeholder'>Loading journals from OpenAlex…</p>";
  }

  try {
    const { results, nextCursor } = await fetchOpenAlexSourcesPage(searchTerm, 25, reset ? null : catalogueCursorState);
    catalogueCursorState = nextCursor;
    catalogueAccumulatedResults = catalogueAccumulatedResults.concat(results || []);
  } catch (err) {
    el.innerHTML = `<p class='placeholder'>Catalogue search failed (${escapeHtml(err.message)}). Check your connection and try again.</p>`;
    if (loadMoreBtn) loadMoreBtn.disabled = true;
    return;
  }

  let list = catalogueAccumulatedResults;
  if (hostF) {
    list = list.filter((s) => {
      const h = openAlexSourceHostDisplayName(s).toLowerCase();
      const n = (s.display_name || "").toLowerCase();
      return h.includes(hostF) || n.includes(hostF);
    });
  }

  if (!list.length) {
    el.innerHTML =
      "<p class='placeholder'>No journals match the current filters. Try other keywords, clear the host filter, or use “Load more results” to fetch additional pages.</p>";
    if (loadMoreBtn) loadMoreBtn.disabled = !catalogueCursorState;
    return;
  }

  el.innerHTML = list
    .map((source, idx) =>
      renderOpenAlexSourceCardHtml(source, idx + 1, "—", [
        "Live OpenAlex “source” record (journal-level). Scimago-style quartiles are not part of this feed—verify metrics separately."
      ], "Catalogue")
    )
    .join("");

  if (loadMoreBtn) loadMoreBtn.disabled = !catalogueCursorState;
}

function switchJournalSubtab(which) {
  const matchPanel = document.getElementById("journalMatchPanel");
  const catPanel = document.getElementById("journalCataloguePanel");
  const bMatch = document.getElementById("journalSubTabMatch");
  const bCat = document.getElementById("journalSubTabCatalogue");
  const isMatch = which === "match";
  if (matchPanel) matchPanel.style.display = isMatch ? "" : "none";
  if (catPanel) catPanel.style.display = isMatch ? "none" : "";
  if (bMatch) {
    bMatch.classList.toggle("active", isMatch);
    bMatch.setAttribute("aria-selected", isMatch ? "true" : "false");
  }
  if (bCat) {
    bCat.classList.toggle("active", !isMatch);
    bCat.setAttribute("aria-selected", isMatch ? "false" : "true");
  }
  if (!isMatch) renderCatalogueResults(true);
}

function networkWorkText(work) {
  const t = work && (work.display_name || work.title) ? work.display_name || work.title : "";
  const a = work ? openAlexAbstractToText(work.abstract_inverted_index) : "";
  return `${t} ${a}`.toLowerCase();
}

function jaccardSet(aSet, bSet) {
  const a = aSet instanceof Set ? aSet : new Set(aSet || []);
  const b = bSet instanceof Set ? bSet : new Set(bSet || []);
  if (!a.size && !b.size) return 0;
  let inter = 0;
  for (const t of a) {
    if (b.has(t)) inter += 1;
  }
  const uni = a.size + b.size - inter;
  return uni > 0 ? inter / uni : 0;
}

function networkMethodFlags(textLower) {
  const t = String(textLower || "");
  return {
    bayesian: /\bbayes|bayesian|mcmc|posterior\b/i.test(t),
    fuzzy: /\bfuzzy|fuzzification|defuzzification\b/i.test(t),
    deep: /\bdeep\s+learning|neural\s+network|cnn\b|transformer\b/i.test(t),
    tree: /\bdecision\s+tree|random\s+forest|xgboost|gradient\s+boost/i.test(t),
    svm: /\bsvm|support\s+vector\s+machine\b/i.test(t),
    remote: /\bremote\s+sensing|satellite|landsat|sentinel|earth\s+observation\b/i.test(t),
    simulation: /\bsimulation|monte\s+carlo|synthetic\s+data\b/i.test(t),
    optimization: /\boptimization|integer\s+programming|linear\s+programming|heuristic\b/i.test(t),
    causal: /\bcausal|instrumental\s+variable|difference[-\s]in[-\s]differences\b/i.test(t)
  };
}

function similarityToSeedWork(seedWork, candidateWork) {
  const seedTitle = String(seedWork && (seedWork.display_name || seedWork.title) ? seedWork.display_name || seedWork.title : "");
  const candTitle = String(
    candidateWork && (candidateWork.display_name || candidateWork.title) ? candidateWork.display_name || candidateWork.title : ""
  );
  const seedAbs = openAlexAbstractToText(seedWork && seedWork.abstract_inverted_index);
  const candAbs = openAlexAbstractToText(candidateWork && candidateWork.abstract_inverted_index);

  const seedTitleSet = new Set(tokenize(seedTitle.toLowerCase()));
  const candTitleSet = new Set(tokenize(candTitle.toLowerCase()));
  const seedAbsSet = new Set(tokenize(seedAbs.toLowerCase()));
  const candAbsSet = new Set(tokenize(candAbs.toLowerCase()));

  const titleJac = jaccardSet(seedTitleSet, candTitleSet);
  const absJac = jaccardSet(seedAbsSet, candAbsSet);
  const allSeed = new Set([...seedTitleSet, ...seedAbsSet]);
  const allCand = new Set([...candTitleSet, ...candAbsSet]);
  const globalJac = jaccardSet(allSeed, allCand);

  const seedFlags = networkMethodFlags(`${seedTitle} ${seedAbs}`.toLowerCase());
  const candFlags = networkMethodFlags(`${candTitle} ${candAbs}`.toLowerCase());
  let methodPenalty = 0;
  const keys = Object.keys(seedFlags);
  for (let i = 0; i < keys.length; i += 1) {
    const k = keys[i];
    if (seedFlags[k] && !candFlags[k]) methodPenalty += 4.2;
  }
  methodPenalty = Math.min(26, methodPenalty);

  const seedY = seedWork && seedWork.publication_year ? Number(seedWork.publication_year) : null;
  const candY = candidateWork && candidateWork.publication_year ? Number(candidateWork.publication_year) : null;
  let yearPenalty = 0;
  if (seedY && candY) {
    const gap = Math.abs(seedY - candY);
    if (gap >= 5) yearPenalty += 6;
    if (gap >= 10) yearPenalty += 8;
  }

  let raw = titleJac * 52 + absJac * 26 + globalJac * 22;
  if (titleJac < 0.06 && absJac < 0.035) raw *= 0.72;
  raw -= methodPenalty + yearPenalty;
  raw = Math.max(3, Math.min(92, raw));
  const strict = Math.pow(raw / 100, 1.18) * 100;
  return Math.max(2, Math.min(92, Math.round(strict)));
}

async function fetchOpenAlexWorkById(idUrl) {
  if (!idUrl) return null;
  try {
    const res = await fetch(`${idUrl}?mailto=${OPENALEX_MAILTO}`);
    if (!res.ok) return null;
    return await res.json();
  } catch {
    return null;
  }
}

async function fetchNetworkCandidateWorks(seedWork) {
  const merged = [];
  const seen = new Set();
  const seedTitle = String(seedWork.display_name || seedWork.title || "").slice(0, 220);
  const seedW = extractOpenAlexW(seedWork.id);

  const pushIf = (w, relType) => {
    if (!w || !w.id || seen.has(w.id)) return;
    if (!isAcceptableOpenAlexLiteratureWork(w)) return;
    if (w.id === seedWork.id) return;
    seen.add(w.id);
    merged.push({ work: w, relType });
  };

  if (seedTitle) {
    try {
      const sRes = await fetch(
        `https://api.openalex.org/works?search=${encodeURIComponent(seedTitle)}&per_page=60&mailto=${OPENALEX_MAILTO}`
      );
      if (sRes.ok) {
        const sJson = await sRes.json();
        (sJson.results || []).forEach((w) => pushIf(w, "title-search"));
      }
    } catch {
      /* skip */
    }
  }

  if (seedW) {
    try {
      const cRes = await fetch(
        `https://api.openalex.org/works?filter=cites:${seedW}&per_page=120&mailto=${OPENALEX_MAILTO}`
      );
      if (cRes.ok) {
        const cJson = await cRes.json();
        (cJson.results || []).forEach((w) => pushIf(w, "cites-seed"));
      }
    } catch {
      /* skip */
    }
  }

  const refs = Array.isArray(seedWork.referenced_works) ? seedWork.referenced_works.slice(0, 16) : [];
  if (refs.length) {
    const refWorks = await Promise.all(refs.map((idUrl) => fetchOpenAlexWorkById(idUrl)));
    refWorks.forEach((w) => pushIf(w, "referenced-by-seed"));
    const refMagIds = refWorks.map((w) => extractOpenAlexW(w && w.id)).filter(Boolean).slice(0, 5);
    for (let i = 0; i < refMagIds.length; i += 1) {
      try {
        const cr = await fetch(
          `https://api.openalex.org/works?filter=cites:${refMagIds[i]}&per_page=20&mailto=${OPENALEX_MAILTO}`
        );
        if (!cr.ok) continue;
        const cj = await cr.json();
        (cj.results || []).forEach((w) => pushIf(w, "neighbourhood-citer"));
      } catch {
        /* skip */
      }
    }
  }

  const related = Array.isArray(seedWork.related_works) ? seedWork.related_works.slice(0, 30) : [];
  if (related.length) {
    const relWorks = await Promise.all(related.map((idUrl) => fetchOpenAlexWorkById(idUrl)));
    relWorks.forEach((w) => pushIf(w, "related-work"));
  }

  return merged.slice(0, 160);
}

function relationLabel(relType) {
  if (relType === "cites-seed") return "Cites your seed paper";
  if (relType === "referenced-by-seed") return "Referenced by your seed paper";
  if (relType === "neighbourhood-citer") return "Cites papers in your seed paper neighbourhood";
  if (relType === "related-work") return "OpenAlex related-work graph";
  return "Topically similar (title/abstract search)";
}

function buildNetworkSvg(seedWork, rankedRows) {
  const width = 900;
  const height = 560;
  const cx = 450;
  const cy = 280;
  const seedTitle = String(seedWork.display_name || seedWork.title || "Seed paper");
  const maxNodes = Math.min(24, rankedRows.length);
  const nodes = rankedRows.slice(0, maxNodes);
  const simVals = nodes.map((n) => Number(n.similarity || 0));
  const minSim = simVals.length ? Math.min(...simVals) : 0;
  const maxSim = simVals.length ? Math.max(...simVals) : 100;
  const simRange = Math.max(1, maxSim - minSim);

  const edgeSvg = [];
  const nodeSvg = [];
  const textSvg = [];
  const step = (Math.PI * 2) / Math.max(1, nodes.length);

  for (let i = 0; i < nodes.length; i += 1) {
    const item = nodes[i];
    const sim = item.similarity;
    const simNorm = Math.max(0, Math.min(1, (sim - minSim) / simRange));
    const closeWeight = Math.pow(simNorm, 0.42);
    const minDist = 54;
    const maxDist = 355;
    const dist = maxDist - closeWeight * (maxDist - minDist);
    const angle = step * i;
    const x = cx + Math.cos(angle) * dist;
    const y = cy + Math.sin(angle) * dist;
    const r = 5.8 + simNorm * 9.6;
    const op = 0.16 + simNorm * 0.72;
    const label = `${i + 1} (${sim}%)`;
    const nodeColor = simNorm > 0.72 ? "#2563eb" : simNorm > 0.38 ? "#3b82f6" : "#60a5fa";
    edgeSvg.push(
      `<line x1="${cx}" y1="${cy}" x2="${x.toFixed(1)}" y2="${y.toFixed(
        1
      )}" stroke="#93c5fd" stroke-width="${(0.9 + simNorm * 1.6).toFixed(2)}" stroke-opacity="${op.toFixed(2)}" />`
    );
    nodeSvg.push(
      `<circle cx="${(x + 2.2).toFixed(1)}" cy="${(y + 2.6).toFixed(1)}" r="${(r + 0.15).toFixed(
        1
      )}" fill="#0f172a" fill-opacity="0.18"></circle>`
    );
    nodeSvg.push(
      `<circle class="network-node" data-node-idx="${i}" cx="${x.toFixed(1)}" cy="${y.toFixed(
        1
      )}" r="${r.toFixed(1)}" fill="${nodeColor}" fill-opacity="0.95"></circle>`
    );
    nodeSvg.push(
      `<circle cx="${(x - r * 0.28).toFixed(1)}" cy="${(y - r * 0.32).toFixed(1)}" r="${(r * 0.42).toFixed(
        1
      )}" fill="#ffffff" fill-opacity="0.38"></circle>`
    );
    textSvg.push(
      `<text x="${(x + 10).toFixed(1)}" y="${(y + 4).toFixed(
        1
      )}" font-size="11" font-weight="700" fill="#0f172a">${escapeHtml(label)}</text>`
    );
  }

  const seedNode = `
    <circle cx="${cx + 2}" cy="${cy + 2.8}" r="20.5" fill="#0f172a" fill-opacity="0.2"></circle>
    <circle cx="${cx}" cy="${cy}" r="20" fill="url(#seedGrad)" filter="url(#seedGlow)"><title>${escapeHtml(seedTitle)}</title></circle>
    <circle cx="${cx - 6.2}" cy="${cy - 7.4}" r="6.2" fill="#ffffff" fill-opacity="0.34"></circle>
  `;
  const seedText = `<text x="${cx + 27}" y="${cy + 5}" font-size="13" font-weight="700" fill="#0f172a">Seed paper</text>`;

  return `<svg viewBox="0 0 ${width} ${height}" role="img" aria-label="Literature similarity network graph">
    <defs>
      <linearGradient id="bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#f8fbff" />
        <stop offset="100%" stop-color="#eef2ff" />
      </linearGradient>
      <radialGradient id="seedGrad" cx="32%" cy="28%" r="78%">
        <stop offset="0%" stop-color="#8b5cf6" />
        <stop offset="100%" stop-color="#5b21b6" />
      </radialGradient>
      <filter id="seedGlow" x="-60%" y="-60%" width="220%" height="220%">
        <feGaussianBlur stdDeviation="3.5" result="b" />
        <feMerge>
          <feMergeNode in="b" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>
    </defs>
    <rect x="0" y="0" width="${width}" height="${height}" fill="url(#bgGrad)" />
    <circle cx="${cx}" cy="${cy}" r="365" fill="none" stroke="#dbeafe" stroke-width="1.2"></circle>
    <circle cx="${cx}" cy="${cy}" r="255" fill="none" stroke="#e2e8f0" stroke-width="1"></circle>
    <circle cx="${cx}" cy="${cy}" r="145" fill="none" stroke="#e5e7eb" stroke-width="1"></circle>
    ${edgeSvg.join("")}
    ${seedNode}
    ${seedText}
    ${nodeSvg.join("")}
    ${textSvg.join("")}
  </svg>`;
}

function hideNetworkTooltip() {
  if (!networkTooltipEl) return;
  if (networkTooltipPinned) return;
  networkTooltipEl.hidden = true;
  networkTooltipEl.innerHTML = "";
}

function showNetworkTooltip(row, clientX, clientY) {
  if (!networkTooltipEl || !row) return;
  const abstract = escapeHtml(String(row.abstract || "No abstract available.").slice(0, 460));
  const cit = Number(row.citationCount || 0).toLocaleString();
  const scholar = toScholarUrl(`${row.title} ${row.year || ""}`);
  networkTooltipEl.innerHTML = `
    <div><strong>${escapeHtml(String(row.title).slice(0, 160))}</strong></div>
    <div><strong>Similarity:</strong> ${escapeHtml(String(row.similarity))}%</div>
    <div><strong>Year:</strong> ${escapeHtml(String(row.year || "n.d."))}</div>
    <div><strong>Citations:</strong> ${escapeHtml(cit)}</div>
    <div class="network-tooltip-abs">${abstract}</div>
    <div><a href="${escapeHtml(scholar)}" target="_blank" rel="noopener noreferrer">Google Scholar</a></div>
  `;
  networkTooltipEl.hidden = false;
  networkTooltipEl.style.pointerEvents = "none";
  networkTooltipEl.style.left = `${clientX + 14}px`;
  networkTooltipEl.style.top = `${clientY + 14}px`;
}

function pinNetworkTooltip(row) {
  if (!networkTooltipEl || !row) return;
  networkTooltipPinned = true;
  const abstract = escapeHtml(String(row.abstract || "No abstract available.").slice(0, 460));
  const cit = Number(row.citationCount || 0).toLocaleString();
  const scholar = toScholarUrl(`${row.title} ${row.year || ""}`);
  networkTooltipEl.innerHTML = `
    <div><strong>${escapeHtml(String(row.title).slice(0, 170))}</strong></div>
    <div><strong>Similarity:</strong> ${escapeHtml(String(row.similarity))}%</div>
    <div><strong>Year:</strong> ${escapeHtml(String(row.year || "n.d."))}</div>
    <div><strong>Citations:</strong> ${escapeHtml(cit)}</div>
    <div class="network-tooltip-abs">${abstract}</div>
    <div><a href="${escapeHtml(scholar)}" target="_blank" rel="noopener noreferrer">Google Scholar</a></div>
    <div class="network-tooltip-note">Click outside to close this detail panel.</div>
  `;
  networkTooltipEl.hidden = false;
  networkTooltipEl.style.pointerEvents = "auto";
  networkTooltipEl.style.left = "16px";
  networkTooltipEl.style.top = "16px";
}

function bindNetworkGraphHover(containerEl, rows) {
  if (!containerEl || !Array.isArray(rows)) return;
  const nodes = containerEl.querySelectorAll(".network-node");
  nodes.forEach((node) => {
    const idx = Number(node.getAttribute("data-node-idx") || "-1");
    const row = idx >= 0 && idx < rows.length ? rows[idx] : null;
    node.addEventListener("mouseenter", (event) => {
      if (!networkTooltipPinned) showNetworkTooltip(row, event.clientX, event.clientY);
    });
    node.addEventListener("mousemove", (event) => {
      if (!networkTooltipPinned) showNetworkTooltip(row, event.clientX, event.clientY);
    });
    node.addEventListener("mouseleave", () => {
      if (!networkTooltipPinned) hideNetworkTooltip();
    });
    node.addEventListener("click", () => pinNetworkTooltip(row));
  });
}

function openNetworkModal() {
  if (!networkModalEl || !networkModalGraphEl || !networkGraphEl) return;
  if (!networkGraphEl.querySelector("svg")) return;
  networkModalGraphEl.innerHTML = networkGraphEl.innerHTML;
  networkModalEl.hidden = false;
  document.body.style.overflow = "hidden";
  bindNetworkGraphHover(networkModalGraphEl, networkLastRows);
}

function closeNetworkModal() {
  if (!networkModalEl || !networkModalGraphEl) return;
  networkModalEl.hidden = true;
  networkModalGraphEl.innerHTML = "";
  document.body.style.overflow = "";
  networkTooltipPinned = false;
  hideNetworkTooltip();
}

function renderNetworkResults(seedWork, rankedRows) {
  if (!networkGraphEl || !networkListEl) return;
  if (!rankedRows.length) {
    networkGraphEl.innerHTML =
      "<p class='placeholder'>No related papers were found. Try a citation with DOI or a clearer APA title.</p>";
    networkListEl.innerHTML = "";
    if (networkExpandBtn) networkExpandBtn.disabled = true;
    return;
  }

  networkLastRows = rankedRows.slice(0, 24);
  networkGraphEl.innerHTML = buildNetworkSvg(seedWork, rankedRows);
  bindNetworkGraphHover(networkGraphEl, networkLastRows);
  if (networkExpandBtn) networkExpandBtn.disabled = false;
  const list = rankedRows.map((row, idx) => {
    const title = escapeHtml(String(row.title).slice(0, 220));
    const rel = escapeHtml(relationLabel(row.relType));
    const venue = escapeHtml(row.venue || "Unknown venue");
    const year = escapeHtml(row.year || "n.d.");
    const url = row.url ? `<a href="${escapeHtml(row.url)}" target="_blank" rel="noopener noreferrer">Open record</a>` : "";
    const scholar = `<a href="${toScholarUrl(row.title)}" target="_blank" rel="noopener noreferrer">Google Scholar</a>`;
    return `<article class="paper-card">
      <h3>#${idx + 1} ${title}</h3>
      <div class="score">Similarity: ${row.similarity}%</div>
      <p class="paper-meta"><strong>Relation:</strong> ${rel}</p>
      <p class="paper-meta"><strong>Year / Venue:</strong> ${year} | ${venue}</p>
      <p class="links">${url ? `${url} · ` : ""}${scholar}</p>
    </article>`;
  });
  networkListEl.innerHTML = list.join("");
}

async function runNetworkSearchFromApa(apaLine) {
  if (!apaLine || !apaLine.trim()) throw new Error("Please provide one APA citation.");
  const seedWork = await resolveApaLineToOpenAlexWork(apaLine.trim());
  if (!seedWork || !seedWork.id) {
    throw new Error("Could not resolve this citation to a paper. Add DOI if possible.");
  }
  networkLastSeed = seedWork;
  const candidates = await fetchNetworkCandidateWorks(seedWork);
  const ranked = candidates
    .map(({ work, relType }) => {
      const venue = openAlexVenue(work);
      const title = work.display_name || work.title || "Untitled";
      const similarity = similarityToSeedWork(seedWork, work);
      return {
        id: work.id,
        title,
        venue,
        year: String(work.publication_year || "n.d."),
        abstract: openAlexAbstractToText(work.abstract_inverted_index) || "",
        citationCount: typeof work.cited_by_count === "number" ? work.cited_by_count : 0,
        similarity,
        relType,
        url: work.id || null
      };
    })
    .sort((a, b) => b.similarity - a.similarity);

  return { seedWork, ranked };
}

function switchWorkspace(target) {
  if (typeof window.sdaSwitchTab === "function") {
    window.sdaSwitchTab(target);
    return;
  }
  const isJournal = target === "journal";
  const isLiterature = target === "literature";
  const isNetwork = target === "network";
  if (tabJournal) tabJournal.classList.toggle("active", isJournal);
  if (tabLiterature) tabLiterature.classList.toggle("active", isLiterature);
  if (tabNetwork) tabNetwork.classList.toggle("active", isNetwork);
  if (journalView) journalView.classList.toggle("active-workspace", isJournal);
  if (literatureView) literatureView.classList.toggle("active-workspace", isLiterature);
  if (networkView) networkView.classList.toggle("active-workspace", isNetwork);
}

function resetApp() {
  if (form) form.reset();
  if (literatureForm) literatureForm.reset();
  if (networkForm) networkForm.reset();

  if (form) {
    form.querySelectorAll('input[name="quartile"]').forEach((el) => {
      el.checked = el.value === "Q1" || el.value === "Q2";
    });
  }
  if (publisherContainer) {
    publisherContainer.querySelectorAll('input[type="checkbox"]').forEach((el) => {
      el.checked = true;
    });
  }
  const rc = document.getElementById("resultCount");
  if (rc) rc.value = "5";
  if (literatureCountSelect) literatureCountSelect.value = "5";

  if (validationEl) validationEl.textContent = "";
  if (resultsEl) resultsEl.innerHTML = "<p class='placeholder'>Submit manuscript details to see recommendations.</p>";

  literaturePrimaryRows = [];
  literatureDeepRows = [];
  literatureLastUserData = null;
  if (literatureValidationEl) literatureValidationEl.textContent = "";
  if (literatureDisclaimerEl) literatureDisclaimerEl.textContent = "";
  if (literatureResultsEl) {
    literatureResultsEl.innerHTML = "<p class='placeholder'>Submit your research idea to discover relevant papers.</p>";
  }
  if (literatureScholarBarEl) {
    literatureScholarBarEl.hidden = true;
    literatureScholarBarEl.innerHTML = "";
  }
  if (deepDiveBtn) {
    deepDiveBtn.disabled = true;
    deepDiveBtn.textContent = "Deep dive (citing papers)";
  }
  if (exportLiteratureExcelBtn) exportLiteratureExcelBtn.disabled = true;
  networkLastSeed = null;
  if (networkValidationEl) networkValidationEl.textContent = "";
  if (networkGraphEl) networkGraphEl.innerHTML = "<p class='placeholder'>Submit one APA citation to generate a similarity network.</p>";
  if (networkListEl) networkListEl.innerHTML = "";
  networkLastRows = [];
  if (networkExpandBtn) networkExpandBtn.disabled = true;
  closeNetworkModal();

  catalogueCursorState = null;
  catalogueAccumulatedResults = [];

  switchWorkspace("journal");
  switchJournalSubtab("match");
}

function exportResultsAsPdf() {
  const outputHtml = resultsEl.innerHTML.trim();
  if (!outputHtml || outputHtml.includes("placeholder")) {
    validationEl.textContent = "Generate journal results first, then export to PDF.";
    return;
  }

  const printWindow = window.open("", "_blank", "width=900,height=700");
  if (!printWindow) {
    validationEl.textContent = "Popup blocked by browser. Please allow popups and try again.";
    return;
  }

  printWindow.document.write(`
    <!doctype html>
    <html>
    <head>
      <meta charset="utf-8" />
      <title>Journal Match Results</title>
      <style>
        body { font-family: Arial, sans-serif; color: #111827; margin: 24px; }
        h1 { margin-top: 0; }
        .journal-card { border: 1px solid #e5e7eb; border-radius: 8px; padding: 12px; margin-bottom: 12px; }
        .score { display:inline-block; background:#ecfeff; border:1px solid #a5f3fc; border-radius:999px; padding:2px 10px; margin-bottom:8px; }
        .stats-grid { display:grid; grid-template-columns: 1fr 1fr; gap: 4px 16px; margin: 6px 0 10px; }
        ul { margin-top: 6px; }
      </style>
    </head>
    <body>
      <h1>Journal Match Results</h1>
      ${outputHtml}
    </body>
    </html>
  `);
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
}

function scorePaper(candidate, data) {
  const researchText = getUserLiteratureCorpus(data);
  const baseTokens = new Set(tokenize(researchText));
  const seedTokens = new Set(tokenize(data.seedCitations.join(" ")));
  const candidateText = `${candidate.title} ${candidate.abstract || ""} ${candidate.keywords.join(" ")} ${candidate.venue || ""}`.toLowerCase();
  const keywordHits = candidate.keywords.filter((k) => {
    const low = k.toLowerCase();
    return low.includes(" ") ? researchText.includes(low) : baseTokens.has(low.toLowerCase());
  }).length;
  const seedHits = [...seedTokens].filter((token) => candidateText.includes(token)).length;
  const titleHits = tokenize(candidate.title).filter((t) => baseTokens.has(t)).length;
  const weightedScore = keywordHits * 12 + Math.min(seedHits, 10) + titleHits * 5;
  const maxPossible = Math.max(1, candidate.keywords.length) * 12 + 10 + 25;
  let similarityIndex = Math.min(100, Math.round((weightedScore / maxPossible) * 100));
  const penalty = literatureTopicPenalty(researchText, candidateText);
  similarityIndex = Math.min(100, Math.max(0, similarityIndex - penalty));
  return { weightedScore: weightedScore - penalty * 2, similarityIndex };
}

function collectLiteratureData() {
  const themeEl = document.getElementById("literatureTheme");
  return {
    mostImportantTheme: themeEl ? themeEl.value.trim() : "",
    ideaKeywords: document.getElementById("ideaKeywords").value.trim(),
    domainInfo: document.getElementById("domainInfo").value.trim(),
    ideaDescription: document.getElementById("ideaDescription").value.trim(),
    seedCitations: lines(document.getElementById("seedCitations").value.trim()),
    literatureCount: Number(document.getElementById("literatureCount").value || "5")
  };
}

function validateLiteratureData(data) {
  if (!data.ideaKeywords && !data.domainInfo && !data.ideaDescription && !data.seedCitations.length && !data.mostImportantTheme) {
    return "Please provide at least one input (theme, keywords, domain, idea description, or seed citations).";
  }
  return "";
}

function literatureMissingFieldWarning(data) {
  const missing = [];
  if (!data.mostImportantTheme) missing.push("theme");
  if (!data.ideaKeywords) missing.push("keywords");
  if (!data.domainInfo) missing.push("domain information");
  if (!data.ideaDescription) missing.push("idea description");
  if (!data.seedCitations.length) missing.push("seed citations");
  if (!missing.length) return "";
  return `Warning: blank fields (${missing.join(", ")}) may reduce literature search accuracy.`;
}

function enrichLiteratureRow(paper, userData) {
  const scored = scorePaper(paper, userData);
  return {
    ...paper,
    source: paper.source || "local",
    weightedScore: scored.weightedScore,
    similarityIndex: scored.similarityIndex,
    apa: buildApaCitation(paper),
    bibtex: buildBibtex(paper)
  };
}

function formatPaperTitleForCard(title) {
  const s = String(title || "").trim();
  if (s.length <= 220) return s;
  return `${s.slice(0, 217)}…`;
}

function paperCardHtml(item, index, options = {}) {
  const { showDeepBadge } = options;
  const displayTitle = formatPaperTitleForCard(item.title);
  const scholarQuery = `${item.title} ${item.authors}`;
  const snapshot = literatureSnapshotLabel();
  const apaEsc = escapeHtml(item.apa);
  const bibEsc = escapeHtml(item.bibtex);
  const abstractEsc = escapeHtml(
    item.abstract || "Abstract not available. Open the work on OpenAlex or Scholar for full text metadata."
  );
  const deepClass = showDeepBadge ? " paper-card deep-dive" : "";
  const badges = [];
  if (showDeepBadge) badges.push('<span class="paper-badge deep">Deep dive</span>');
  let sourceBadge = '<span class="paper-badge">Offline catalog</span>';
  if (item.source === "openalex") sourceBadge = '<span class="paper-badge">OpenAlex</span>';
  else if (item.source === "semanticscholar") sourceBadge = '<span class="paper-badge">Semantic Scholar</span>';
  else if (item.source === "crossref") sourceBadge = '<span class="paper-badge">Crossref</span>';
  badges.push(sourceBadge);
  if (item.fromSeedCitationNetwork) badges.push('<span class="paper-badge seed-cite">Cites your seed paper</span>');
  const citedLine = item.citedFromTitle
    ? `<p class="paper-meta"><strong>Cites result:</strong> ${escapeHtml(item.citedFromTitle)}</p>`
    : "";
  const seedCiteLine = item.citedFromSeedTitle
    ? `<p class="paper-meta"><strong>Citation graph:</strong> OpenAlex lists this work as citing “${escapeHtml(String(item.citedFromSeedTitle).slice(0, 140))}” (one of your example citations). For the same query inside Google Scholar’s UI, use the Scholar links above — Scholar cannot be queried from this page.</p>`
    : "";
  let citeLine = `<p class="paper-meta"><strong>Citations (curated snapshot, ${snapshot}):</strong> ${Number(item.citationCount).toLocaleString()}</p>`;
  if (item.source === "openalex") {
    citeLine = `<p class="paper-meta"><strong>Citations (OpenAlex, ${snapshot}):</strong> ${Number(item.citationCount).toLocaleString()}</p>`;
  } else if (item.source === "crossref") {
    citeLine = `<p class="paper-meta"><strong>Citations (Crossref, ${snapshot}):</strong> ${Number(item.citationCount).toLocaleString()}</p>`;
  } else if (item.source === "semanticscholar") {
    citeLine = `<p class="paper-meta"><strong>Citations (Semantic Scholar, ${snapshot}):</strong> ${Number(item.citationCount).toLocaleString()}</p>`;
  }
  let primaryRecordLabel = "Open record";
  if (item.source === "openalex") primaryRecordLabel = "OpenAlex record";
  else if (item.source === "crossref") primaryRecordLabel = "DOI / record";
  else if (item.source === "semanticscholar") primaryRecordLabel = "Semantic Scholar";
  else if (item.doi) primaryRecordLabel = "DOI / record";
  const openAlexLink =
    item.openAlexUrl
      ? `<a href="${escapeHtml(item.openAlexUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(primaryRecordLabel)}</a>`
      : "";

  return `
      <article class="paper-card${deepClass}" data-paper-id="${escapeHtml(String(item.id))}">
        <div class="paper-badges">${badges.join("")}</div>
        <h3>#${index + 1} ${escapeHtml(displayTitle)}</h3>
        <div class="score">Relevance: ${item.similarityIndex}%</div>
        ${citeLine}
        <p class="paper-meta"><strong>Authors:</strong> ${escapeHtml(item.authors)}</p>
        <p class="paper-meta"><strong>Year / Venue:</strong> ${escapeHtml(item.year)} | ${escapeHtml(item.venue)}</p>
        ${citedLine}
        ${seedCiteLine}
        <p class="paper-meta"><strong>Why relevant:</strong> ${escapeHtml((item.keywords || []).slice(0, 6).join(", "))}</p>
        <details class="abstract-details">
          <summary>Abstract</summary>
          <div class="abstract-body">${abstractEsc}</div>
        </details>
        <div class="cite-block">
          <div class="cite-toggle-row">
            <button type="button" class="cite-toggle" data-panel="apa">APA</button>
            <button type="button" class="cite-toggle" data-panel="bibtex">BibTeX</button>
          </div>
          <div class="cite-panel" data-panel="apa"><pre>${apaEsc}</pre></div>
          <div class="cite-panel" data-panel="bibtex"><pre>${bibEsc}</pre></div>
        </div>
        <p class="links">
          ${openAlexLink ? `${openAlexLink} · ` : ""}
          <a href="${toScholarUrl(scholarQuery)}" target="_blank" rel="noopener noreferrer">Google Scholar</a>
          <a href="${toScholarUrl(item.title)}" target="_blank" rel="noopener noreferrer">Scholar (title)</a>
        </p>
      </article>`;
}

function computeDeepDiveLocal(primaryRows, userData) {
  const primaryIds = new Set(primaryRows.map((r) => r.id));
  const collected = [];

  primaryRows.forEach((seedPaper) => {
    const citers = LITERATURE_CITERS.filter((c) => c.cites && c.cites.includes(seedPaper.id));
    const ranked = citers
      .map((c) => {
        const base = enrichLiteratureRow(c, userData);
        return { ...base, citedFromTitle: seedPaper.title };
      })
      .sort((a, b) => {
        if (b.similarityIndex !== a.similarityIndex) return b.similarityIndex - a.similarityIndex;
        return b.weightedScore - a.weightedScore;
      })
      .slice(0, 3);

    ranked.forEach((row) => collected.push(row));
  });

  const dedup = new Map();
  collected.forEach((row) => {
    if (primaryIds.has(row.id)) return;
    const existing = dedup.get(row.id);
    if (!existing || row.similarityIndex > existing.similarityIndex) {
      dedup.set(row.id, row);
    }
  });

  return [...dedup.values()].sort((a, b) => {
    if (b.similarityIndex !== a.similarityIndex) return b.similarityIndex - a.similarityIndex;
    return b.weightedScore - a.weightedScore;
  });
}

async function computeDeepDiveAsync(primaryRows, userData) {
  const primaryIds = new Set(primaryRows.map((r) => String(r.id)));
  const collected = [];

  for (const seedPaper of primaryRows) {
    if (seedPaper.openAlexWId) {
      try {
        const citing = await fetchOpenAlexCitingWorks(seedPaper.openAlexWId, userData);
        const ranked = citing
          .filter((r) => !primaryIds.has(String(r.id)))
          .sort((a, b) => {
            if (b.similarityIndex !== a.similarityIndex) return b.similarityIndex - a.similarityIndex;
            return b.weightedScore - a.weightedScore;
          })
          .slice(0, 3)
          .map((r) => ({ ...r, citedFromTitle: seedPaper.title }));
        ranked.forEach((row) => collected.push(row));
      } catch {
        /* continue with local graph if needed */
      }
    } else {
      const citers = LITERATURE_CITERS.filter((c) => c.cites && c.cites.includes(seedPaper.id));
      const ranked = citers
        .map((c) => {
          const base = enrichLiteratureRow(c, userData);
          return { ...base, citedFromTitle: seedPaper.title };
        })
        .sort((a, b) => {
          if (b.similarityIndex !== a.similarityIndex) return b.similarityIndex - a.similarityIndex;
          return b.weightedScore - a.weightedScore;
        })
        .slice(0, 3);
      ranked.forEach((row) => collected.push(row));
    }
  }

  const dedup = new Map();
  collected.forEach((row) => {
    if (primaryIds.has(String(row.id))) return;
    const existing = dedup.get(row.id);
    if (!existing || row.similarityIndex > existing.similarityIndex) {
      dedup.set(row.id, row);
    }
  });

  const out = [...dedup.values()];
  fastRerankLiterature(userData, out, []);
  return out.sort((a, b) => {
    if (b.similarityIndex !== a.similarityIndex) return b.similarityIndex - a.similarityIndex;
    return b.weightedScore - a.weightedScore;
  });
}

function renderLiteratureWorkspace() {
  if (!literatureResultsEl) return;
  const usesLive = literaturePrimaryRows.some((r) => r.source !== "local");
  if (literatureScholarBarEl) {
    if (literatureLastUserData) {
      literatureScholarBarEl.hidden = false;
      literatureScholarBarEl.innerHTML = `<strong>Google Scholar (opens in your browser — there is no official Scholar API):</strong> ${buildLiteratureScholarLinksHtml(literatureLastUserData)}<br /><span class="scholar-note">In-app results use OpenAlex (including papers that cite your seed citations), Semantic Scholar, and Crossref. Scholar links repeat the same logical queries you would type manually for a Scholar-like discovery pass.</span>`;
    } else {
      literatureScholarBarEl.hidden = true;
      literatureScholarBarEl.innerHTML = "";
    }
  }
  if (literatureDisclaimerEl) {
    literatureDisclaimerEl.textContent = usesLive
      ? "Literature merges (1) works that cite your seed citations from OpenAlex, (2) keyword search across OpenAlex, Semantic Scholar, and Crossref, plus broader fallbacks when thin—all re-ranked in your browser. Google Scholar cannot be scraped here; use the Scholar links for the familiar Google UI. Verify every hit."
      : "Showing the offline fallback catalog (no network or API error). Citation counts are illustrative. Reconnect to the internet or try again for live results.";
  }

  if (!literaturePrimaryRows.length) {
    literatureResultsEl.innerHTML = "<p class='placeholder'>No relevant literature found. Try broader keywords.</p>";
    if (deepDiveBtn) deepDiveBtn.disabled = true;
    if (exportLiteratureExcelBtn) exportLiteratureExcelBtn.disabled = true;
    return;
  }

  if (deepDiveBtn) deepDiveBtn.disabled = false;
  if (exportLiteratureExcelBtn) exportLiteratureExcelBtn.disabled = false;

  const primaryHtml = literaturePrimaryRows
    .map((row, idx) => paperCardHtml(row, idx + 1, { showDeepBadge: false }))
    .join("");

  let deepSection = "";
  if (literatureDeepRows.length) {
    const deepHtml = literatureDeepRows
      .map((row, idx) => paperCardHtml(row, literaturePrimaryRows.length + idx + 1, { showDeepBadge: true }))
      .join("");
    deepSection = `<h3 class="literature-section-title">Deep dive — highly relevant papers citing your results</h3>${deepHtml}`;
  }

  literatureResultsEl.innerHTML = `${primaryHtml}${deepSection}`;
  bindLiteratureCitationToggles(literatureResultsEl);
}

if (form) {
  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (validationEl) validationEl.textContent = "";

    const data = collectFormData();
    const validationError = validate(data);

    if (validationError) {
      if (resultsEl) resultsEl.innerHTML = "<p class='placeholder'>Fix validation issues and submit again.</p>";
      if (validationEl) validationEl.textContent = validationError;
      return;
    }
    const journalWarning = journalMissingFieldWarning(data);

    if (resultsEl) {
      resultsEl.innerHTML =
        "<p class='placeholder'>Resolving your references in OpenAlex, then ranking journals (venues from your citations + neighbourhood + catalogue)…</p>";
    }

    try {
      const merged = await buildMergedJournalMatches(data);
      renderMergedJournalResults(merged, data);
      if (validationEl) validationEl.textContent = journalWarning || "";
    } catch (err) {
      if (validationEl) {
        validationEl.textContent = `${journalWarning ? `${journalWarning} ` : ""}OpenAlex journal search failed (${err.message}). Showing curated catalogue only.`;
      }
      const top = JOURNALS.map((journal) => scoreJournal(journal, data))
        .sort((a, b) => b.score - a.score)
        .slice(0, data.resultCount);
      renderResults(top, data);
    }
  });
}

if (exportPdfBtn) exportPdfBtn.addEventListener("click", exportResultsAsPdf);

/* Tabs use onclick + sdaSwitchTab in index.html so they work if listener registration below is skipped */
if (tabJournal) tabJournal.addEventListener("click", () => switchWorkspace("journal"));
if (tabLiterature) tabLiterature.addEventListener("click", () => switchWorkspace("literature"));
if (tabNetwork) tabNetwork.addEventListener("click", () => switchWorkspace("network"));
if (resetAppBtn) resetAppBtn.addEventListener("click", resetApp);
if (networkExpandBtn) networkExpandBtn.addEventListener("click", openNetworkModal);
if (networkModalCloseBtn) networkModalCloseBtn.addEventListener("click", closeNetworkModal);
if (networkModalEl) {
  networkModalEl.addEventListener("click", (event) => {
    if (event.target === networkModalEl) closeNetworkModal();
  });
}
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && networkModalEl && !networkModalEl.hidden) {
    closeNetworkModal();
  }
});
document.addEventListener("click", (event) => {
  if (!networkTooltipPinned || !networkTooltipEl) return;
  const target = event.target;
  const inTooltip = networkTooltipEl.contains(target);
  const inNode = target && target.classList && target.classList.contains("network-node");
  if (!inTooltip && !inNode) {
    networkTooltipPinned = false;
    hideNetworkTooltip();
  }
});

const journalSubTabMatchBtn = document.getElementById("journalSubTabMatch");
const journalSubTabCatalogueBtn = document.getElementById("journalSubTabCatalogue");
if (journalSubTabMatchBtn) journalSubTabMatchBtn.addEventListener("click", () => switchJournalSubtab("match"));
if (journalSubTabCatalogueBtn) journalSubTabCatalogueBtn.addEventListener("click", () => switchJournalSubtab("catalogue"));
const catalogueApplyBtn = document.getElementById("catalogueApplyBtn");
if (catalogueApplyBtn) catalogueApplyBtn.addEventListener("click", () => renderCatalogueResults(true));
const catalogueLoadMoreBtn = document.getElementById("catalogueLoadMoreBtn");
if (catalogueLoadMoreBtn) catalogueLoadMoreBtn.addEventListener("click", () => renderCatalogueResults(false));

if (literatureForm) {
  literatureForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (literatureValidationEl) literatureValidationEl.textContent = "";
    const data = collectLiteratureData();
    const validationError = validateLiteratureData(data);
    if (validationError) {
      if (literatureValidationEl) literatureValidationEl.textContent = validationError;
      if (literatureResultsEl) literatureResultsEl.innerHTML = "<p class='placeholder'>Fix validation issues and submit again.</p>";
      literaturePrimaryRows = [];
      literatureDeepRows = [];
      literatureLastUserData = null;
      if (deepDiveBtn) {
        deepDiveBtn.disabled = true;
        deepDiveBtn.textContent = "Deep dive (citing papers)";
      }
      if (exportLiteratureExcelBtn) exportLiteratureExcelBtn.disabled = true;
      if (literatureDisclaimerEl) literatureDisclaimerEl.textContent = "";
      if (literatureScholarBarEl) literatureScholarBarEl.hidden = true;
      return;
    }
    const literatureWarning = literatureMissingFieldWarning(data);

    literatureLastUserData = data;
    literatureDeepRows = [];
    if (deepDiveBtn) deepDiveBtn.disabled = true;
    if (deepDiveBtn) deepDiveBtn.textContent = "Deep dive (citing papers)";
    if (literatureResultsEl) {
      literatureResultsEl.innerHTML =
        "<p class='placeholder'>Fetching papers that cite your seed citations, then OpenAlex + Semantic Scholar + Crossref…</p>";
    }

    try {
      const rankedPapers = await searchLiterature(data);
      literaturePrimaryRows = rankedPapers.length ? rankedPapers : fallbackLocalLiterature(data);
      if (literatureValidationEl) {
        if (!rankedPapers.length) {
          literatureValidationEl.textContent =
            `${literatureWarning ? `${literatureWarning} ` : ""}Live APIs still returned no works for this query; showing ranked offline catalog instead. Try shorter keywords or open Google Scholar via the link below.`;
        } else {
          literatureValidationEl.textContent = literatureWarning || "";
        }
      }
    } catch (err) {
      if (literatureValidationEl) {
        literatureValidationEl.textContent = `${literatureWarning ? `${literatureWarning} ` : ""}Live search failed (${err.message}). Using offline catalog.`;
      }
      literaturePrimaryRows = fallbackLocalLiterature(data);
    }

    if (deepDiveBtn) deepDiveBtn.textContent = "Deep dive (citing papers)";
    renderLiteratureWorkspace();
  });
}

if (networkForm) {
  networkForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (networkValidationEl) networkValidationEl.textContent = "";
    const apaLine = networkApaInputEl ? networkApaInputEl.value.trim() : "";
    if (!apaLine) {
      if (networkValidationEl) networkValidationEl.textContent = "Please enter one APA citation.";
      return;
    }
    if (networkGraphEl) {
      networkGraphEl.innerHTML = "<p class='placeholder'>Resolving citation and building network graph...</p>";
    }
    if (networkListEl) networkListEl.innerHTML = "";
    if (networkExpandBtn) networkExpandBtn.disabled = true;
    try {
      const { seedWork, ranked } = await runNetworkSearchFromApa(apaLine);
      if (networkValidationEl) {
        const seedTitle = String(seedWork.display_name || seedWork.title || "Seed paper");
        networkValidationEl.innerHTML = `Resolved seed paper: <strong>${escapeHtml(
          seedTitle
        )}</strong>. Showing related works ranked by lexical similarity to this seed.`;
      }
      renderNetworkResults(seedWork, ranked);
    } catch (err) {
      if (networkValidationEl) networkValidationEl.textContent = err.message || "Network search failed.";
      if (networkGraphEl) {
        networkGraphEl.innerHTML = "<p class='placeholder'>Could not build network for this citation. Try adding DOI.</p>";
      }
      if (networkListEl) networkListEl.innerHTML = "";
      if (networkExpandBtn) networkExpandBtn.disabled = true;
    }
  });
}

if (deepDiveBtn) {
  deepDiveBtn.addEventListener("click", async () => {
    if (!literaturePrimaryRows.length || !literatureLastUserData) return;
    deepDiveBtn.disabled = true;
    deepDiveBtn.textContent = "Loading citing works…";
    try {
      literatureDeepRows = await computeDeepDiveAsync(
        literaturePrimaryRows,
        literatureLastUserData
      );
    } catch {
      literatureDeepRows = computeDeepDiveLocal(literaturePrimaryRows, literatureLastUserData);
    }
    deepDiveBtn.textContent = "Deep dive applied";
    renderLiteratureWorkspace();
  });
}

if (exportLiteratureExcelBtn) {
  exportLiteratureExcelBtn.addEventListener("click", () => {
    const rows = [...literaturePrimaryRows, ...literatureDeepRows];
    if (!rows.length) return;
    const header = ["APA reference", "BibTeX reference", "year of publication", "Citations", "relevance score", "Abstract"];
    const csvLines = [header.map(csvEscapeCell).join(",")];
    rows.forEach((r) => {
      csvLines.push(
        [
          csvEscapeCell(r.apa),
          csvEscapeCell(r.bibtex),
          csvEscapeCell(r.year),
          csvEscapeCell(r.citationCount),
          csvEscapeCell(r.similarityIndex),
          csvEscapeCell(r.abstract || "")
        ].join(",")
      );
    });
    const blob = new Blob([`\ufeff${csvLines.join("\r\n")}`], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `literature_results_${new Date().toISOString().slice(0, 10)}.csv`;
    anchor.click();
    URL.revokeObjectURL(url);
  });
}
