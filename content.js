/*
 * Personal content for 柯毅成 / Yicheng Ke.
 * Keep this file separate from the layout so future updates stay simple.
 */
window.siteContent = {
  zh: {
    siteTitle: "柯毅成 Yicheng Ke — 研究札记",
    brand: "柯毅成 · 研究札记",
    navResearch: "研究",
    navProjects: "项目",
    navPublications: "论文",
    navNotes: "动态",
    heroKicker: "微电子科学与技术 · 中山大学",
    heroTitle: "让先进存储器在极端条件下也能被<em>理解、预测和设计。</em>",
    heroIntro: "我是一名微电子科学与技术本科生，关注 3D NAND 与 FeFET 器件在极端温度、统计变异和阵列级应用中的可靠性。我的工作连接跨温表征、物理机制、紧凑建模与器件—电路协同分析。",
    heroPrimary: "浏览研究项目",
    heroSecondary: "下载中文简历",
    heroSecondaryHref: "assets/ke-yicheng-cv-cn.pdf",
    factAffiliationLabel: "所在机构",
    heroAffiliation: "中山大学 · 广州，中国",
    factStatusLabel: "当前状态",
    heroStatus: "本科三年级 · 开放科研交流",
    visualLabel: "先进存储研究地图",
    visualCaption: "从阈值电压分布出发，把器件物理一路连接到可靠性与设计决策。",
    mapCore: "可靠性",
    mapOne: "3D NAND",
    mapTwo: "FeFET",
    mapThree: "TCAD",
    researchIndex: "研究",
    researchTitle: "从三个问题开始。",
    researchLead: "我的研究围绕先进存储器的温度响应、物理机制与统计可靠性展开。",
    projectsIndex: "项目",
    projectsTitle: "把器件物理带到设计里。",
    projectsLead: "每个项目都从表征出发，经过机制建模，最后落到可验证的可靠性判断。",
    publicationsIndex: "论文",
    publicationsTitle: "一份持续更新的记录。",
    allPublicationsLink: "查看完整列表",
    notesIndex: "动态",
    notesTitle: "研究仍在继续。",
    notesLead: "用简短的日期记录研究节点，让成果、方法和下一步保持可追踪。",
    asideKicker: "开放成果",
    asideCopy: "跨温表征、VTH 分布重构、Sentaurus TCAD、Verilog-A 与 Monte Carlo 分析，共同构成我目前的研究工具箱。",
    notesLink: "查看全部动态",
    contactIndex: "联系",
    contactTitle: "欢迎讨论器件、模型和可靠性问题。",
    contactCopy: "如果你对先进存储器、极端温度可靠性或器件—电路协同分析感兴趣，欢迎通过邮箱联系我。",
    contactEmail: "keych@mail2.sysu.edu.cn",
    contactEmailHref: "mailto:keych@mail2.sysu.edu.cn",
    footerName: "柯毅成 / Yicheng Ke",
    footerNote: "Microelectronics · Memory reliability",
    filters: { all: "全部", selected: "已发表 / 已录用", working: "在研" },
    questions: [
      { number: "01", title: "极端温度如何改变 3D NAND 的写入与读取？", copy: "从 −55 °C 到 125 °C 的跨温编程与读取表征，追踪 P1–P7 阈值电压分布、读窗口和可读裕量的变化。", tag: "3D NAND" },
      { number: "02", title: "阈值电压分布能否被机制约束地预测？", copy: "把陷阱响应、电势垒调制和沟道迁移率变化带入模型，联合预测 VTH 均值与 σ 的温度演化。", tag: "物理建模" },
      { number: "03", title: "器件统计变异如何传导到 TCAM 搜索可靠性？", copy: "从 FeFET 畴密度出发连接存储窗口、阈值离散性与 2FeFET-TCAM 搜索失效，寻找可执行的设计优化。", tag: "FeFET / TCAM" }
    ],
    projects: [
      { number: "01", year: "2025.08 — 至今 · TED / IPFA 2026", title: "商用 3D NAND 极端温区温度补偿非对称性", copy: "通过 P1–P7 阈值分布重构、分段温度系数和 Sentaurus TCAD，分析低温补偿不足、高编程态高温过补偿及均值漂移反转的物理来源。", tags: ["跨温表征", "物理机制", "TCAD"], links: [{ label: "TED 论文", href: "paper.html?id=nand-compensation" }, { label: "研究问题", href: "#research" }] },
      { number: "02", year: "2025.08 — 2026.05 · EDL 2026", title: "3D NAND 阈值电压分布的机理约束预测", copy: "构建联合预测 VTH 均值与 σ 的机制约束模型，在极端温区、非线性区域和外推场景下提升分布级预测能力，平均 RMSE 降低 66.9%。", tags: ["VTH / σ", "可靠性", "预测模型"], links: [{ label: "EDL 论文", href: "paper.html?id=nand-prediction" }, { label: "方法概览", href: "#research" }] },
      { number: "03", year: "2025.01 — 2025.08 · TDMR 2026", title: "2FeFET TCAM 畴密度离散性与搜索可靠性", copy: "扩展 NLS-FeFET Verilog-A 模型，结合阵列级 Monte Carlo 分析建立畴密度、存储窗口与搜索失效之间的跨尺度映射，并完成面向可靠性的参数优化。", tags: ["FeFET", "Monte Carlo", "DTCO"], links: [{ label: "TDMR 论文", href: "paper.html?id=fefet-tcam" }, { label: "项目主题", href: "#research" }] }
    ],
    publications: [
      { id: "nand-prediction", type: "selected", venue: "IEEE Electron Device Letters · 47(8) · Aug. 2026", title: "A Mechanism-Informed Predictive Model for Mean and Sigma of 3D NAND Threshold-Voltage Distributions at Extreme Temperatures", authors: "Yicheng Ke, Minghui Dong, Linlin Cai, and Wangyong Chen*", links: [{ label: "Read paper", href: "paper.html?id=nand-prediction" }, { label: "DOI", href: "https://doi.org/10.1109/LED.2026.3704253" }] },
      { id: "nand-compensation", type: "selected", venue: "IEEE Transactions on Electron Devices · 73(8) · Aug. 2026", title: "Temperature Compensation Asymmetry at Thermal Extremes in 3D NAND Flash: Physical Mechanisms and State Dependence", authors: "Yicheng Ke, Minghui Dong, Linlin Cai, and Wangyong Chen*", links: [{ label: "Read paper", href: "paper.html?id=nand-compensation" }, { label: "DOI", href: "https://doi.org/10.1109/TED.2026.3708111" }] },
      { id: "fefet-tcam", type: "selected", venue: "IEEE Transactions on Device and Materials Reliability · Early Access · 2026", title: "Domain Density Dependence in 2FeFET-Based TCAM Bit-Cell: Search Failure Analysis and Design Optimization", authors: "Yicheng Ke et al.", links: [{ label: "Read paper", href: "paper.html?id=fefet-tcam" }, { label: "DOI", href: "https://doi.org/10.1109/TDMR.2026.3707975" }] },
      { id: "ipfa", type: "selected", venue: "IEEE IPFA · Accepted · 2026", title: "State-Dependent Overcompensation and Piecewise Temperature Response: New Observations from 3D NAND Cross-Temperature Characterization", authors: "Yicheng Ke, Minghui Dong, Linlin Cai, and Wangyong Chen*", links: [{ label: "Read paper", href: "paper.html?id=ipfa" }, { label: "Accepted", href: "#contact" }] }
    ],
    timeline: [
      { date: "2026.08", title: "三项器件可靠性研究进入发表 / 录用阶段", copy: "围绕 3D NAND 跨温补偿、阈值分布预测和 2FeFET-TCAM 可靠性形成连续研究线索。" },
      { date: "2026.05", title: "完成机制约束预测模型", copy: "完成 VTH 均值与 σ 的联合建模、外推验证和极端温区可靠性分析。" },
      { date: "2025.08", title: "开始 3D NAND 跨温研究", copy: "从多温度点 Vref 扫描和 P1–P7 阈值分布重构开始，持续追踪补偿策略与本征响应的失配。" }
    ],
    socials: [
      { label: "Email", href: "mailto:keych@mail2.sysu.edu.cn" },
      { label: "CV", href: "assets/ke-yicheng-cv-cn.pdf" },
      { label: "Research focus", href: "#research" }
    ]
  },
  en: {
    siteTitle: "Yicheng Ke — Research notes",
    brand: "Yicheng Ke · Research notes",
    navResearch: "Research",
    navProjects: "Projects",
    navPublications: "Publications",
    navNotes: "Notes",
    heroKicker: "Microelectronics · Sun Yat-sen University",
    heroTitle: "Making advanced memory devices <em>understandable, predictable, and designable.</em>",
    heroIntro: "I am an undergraduate researcher in Microelectronics Science and Technology, studying the reliability of 3D NAND and FeFET devices under extreme temperature, statistical variation, and array-level operation.",
    heroPrimary: "Explore the work",
    heroSecondary: "Download Chinese CV",
    heroSecondaryHref: "assets/ke-yicheng-cv-cn.pdf",
    factAffiliationLabel: "Based at",
    heroAffiliation: "Sun Yat-sen University · Guangzhou, China",
    factStatusLabel: "Currently",
    heroStatus: "Third-year undergraduate · Open to research conversations",
    visualLabel: "Advanced memory research map",
    visualCaption: "Starting from threshold-voltage distributions, I connect device physics to reliability and design decisions.",
    mapCore: "reliability",
    mapOne: "3D NAND",
    mapTwo: "FeFET",
    mapThree: "TCAD",
    researchIndex: "Research",
    researchTitle: "Three questions to begin with.",
    researchLead: "My work studies temperature response, physical mechanisms, and statistical reliability in advanced memory devices.",
    projectsIndex: "Projects",
    projectsTitle: "Bring device physics into design.",
    projectsLead: "Each project starts with characterization, moves through mechanism-informed modeling, and ends with a testable reliability decision.",
    publicationsIndex: "Publications",
    publicationsTitle: "A record that keeps moving.",
    allPublicationsLink: "View the full list",
    notesIndex: "Notes",
    notesTitle: "The work continues.",
    notesLead: "A short, dated log keeps the research traceable across results, methods, and next steps.",
    asideKicker: "Open outputs",
    asideCopy: "Cross-temperature characterization, VTH distribution reconstruction, Sentaurus TCAD, Verilog-A, and Monte Carlo analysis form my current research toolkit.",
    notesLink: "Read all notes",
    contactIndex: "Contact",
    contactTitle: "Let's talk devices, models, and reliability.",
    contactCopy: "If you are interested in advanced memory, extreme-temperature reliability, or device–circuit co-design, I would be happy to hear from you.",
    contactEmail: "keych@mail2.sysu.edu.cn",
    contactEmailHref: "mailto:keych@mail2.sysu.edu.cn",
    footerName: "Yicheng Ke / 柯毅成",
    footerNote: "Microelectronics · Memory reliability",
    filters: { all: "All", selected: "Published / accepted", working: "Working" },
    questions: [
      { number: "01", title: "How do extremes change 3D NAND program and read behavior?", copy: "Cross-temperature characterization from −55 °C to 125 °C tracks P1–P7 threshold-voltage distributions, read windows, and sensing margins.", tag: "3D NAND" },
      { number: "02", title: "Can threshold-voltage distributions be predicted with physical constraints?", copy: "Trap response, barrier modulation, and channel mobility become model ingredients for the joint evolution of VTH mean and σ.", tag: "Physics" },
      { number: "03", title: "How does device variation reach TCAM search reliability?", copy: "A cross-scale path from FeFET domain density to memory window, threshold variation, and 2FeFET-TCAM search failure suggests concrete design levers.", tag: "FeFET / TCAM" }
    ],
    projects: [
      { number: "01", year: "2025.08 — present · TED / IPFA 2026", title: "Temperature-compensation asymmetry in commercial 3D NAND", copy: "P1–P7 distribution reconstruction, piecewise temperature coefficients, and Sentaurus TCAD reveal low-temperature under-compensation, high-state over-compensation, and mean-drift reversal.", tags: ["Characterization", "Physics", "TCAD"], links: [{ label: "TED paper", href: "paper.html?id=nand-compensation" }, { label: "Research question", href: "#research" }] },
      { number: "02", year: "2025.08 — 2026.05 · EDL 2026", title: "Mechanism-informed prediction of 3D NAND threshold distributions", copy: "A mechanism-constrained model jointly predicts VTH mean and σ, improving distribution-level prediction in extreme-temperature, nonlinear, and extrapolation regimes with a 66.9% lower average RMSE.", tags: ["VTH / σ", "Reliability", "Prediction"], links: [{ label: "EDL paper", href: "paper.html?id=nand-prediction" }, { label: "Method", href: "#research" }] },
      { number: "03", year: "2025.01 — 2025.08 · TDMR 2026", title: "Domain-density variation and search reliability in 2FeFET TCAM", copy: "An extended NLS-FeFET Verilog-A model and array-level Monte Carlo analysis map domain density to memory-window variation and search failure, enabling reliability-oriented parameter optimization.", tags: ["FeFET", "Monte Carlo", "DTCO"], links: [{ label: "TDMR paper", href: "paper.html?id=fefet-tcam" }, { label: "Project theme", href: "#research" }] }
    ],
    publications: [
      { id: "nand-prediction", type: "selected", venue: "IEEE Electron Device Letters · 47(8) · Aug. 2026", title: "A Mechanism-Informed Predictive Model for Mean and Sigma of 3D NAND Threshold-Voltage Distributions at Extreme Temperatures", authors: "Yicheng Ke, Minghui Dong, Linlin Cai, and Wangyong Chen*", links: [{ label: "Read paper", href: "paper.html?id=nand-prediction" }, { label: "DOI", href: "https://doi.org/10.1109/LED.2026.3704253" }] },
      { id: "nand-compensation", type: "selected", venue: "IEEE Transactions on Electron Devices · 73(8) · Aug. 2026", title: "Temperature Compensation Asymmetry at Thermal Extremes in 3D NAND Flash: Physical Mechanisms and State Dependence", authors: "Yicheng Ke, Minghui Dong, Linlin Cai, and Wangyong Chen*", links: [{ label: "Read paper", href: "paper.html?id=nand-compensation" }, { label: "DOI", href: "https://doi.org/10.1109/TED.2026.3708111" }] },
      { id: "fefet-tcam", type: "selected", venue: "IEEE Transactions on Device and Materials Reliability · Early Access · 2026", title: "Domain Density Dependence in 2FeFET-Based TCAM Bit-Cell: Search Failure Analysis and Design Optimization", authors: "Yicheng Ke et al.", links: [{ label: "Read paper", href: "paper.html?id=fefet-tcam" }, { label: "DOI", href: "https://doi.org/10.1109/TDMR.2026.3707975" }] },
      { id: "ipfa", type: "selected", venue: "IEEE IPFA · Accepted · 2026", title: "State-Dependent Overcompensation and Piecewise Temperature Response: New Observations from 3D NAND Cross-Temperature Characterization", authors: "Yicheng Ke, Minghui Dong, Linlin Cai, and Wangyong Chen*", links: [{ label: "Read paper", href: "paper.html?id=ipfa" }, { label: "Accepted", href: "#contact" }] }
    ],
    timeline: [
      { date: "2026.08", title: "Three device-reliability studies reach publication / acceptance", copy: "A connected research thread now covers 3D NAND temperature compensation, threshold-distribution prediction, and 2FeFET-TCAM reliability." },
      { date: "2026.05", title: "Complete the mechanism-informed prediction model", copy: "Finish joint modeling of VTH mean and σ, extrapolation validation, and extreme-temperature reliability analysis." },
      { date: "2025.08", title: "Begin cross-temperature 3D NAND research", copy: "Start with multi-temperature Vref scans and P1–P7 threshold-distribution reconstruction, then follow the mismatch between compensation and intrinsic response." }
    ],
    socials: [
      { label: "Email", href: "mailto:keych@mail2.sysu.edu.cn" },
      { label: "CV", href: "assets/ke-yicheng-cv-cn.pdf" },
      { label: "Research focus", href: "#research" }
    ]
  }
};
