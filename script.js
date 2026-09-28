(() => {
  const content = window.siteContent;
  const papers = window.paperDetails;
  const state = {
    language: localStorage.getItem("research-site-language") || "zh",
    showcaseId: "nand-prediction"
  };

  const $ = (id) => document.getElementById(id);
  const escapeHtml = (value) => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  const showcaseMeta = {
    "nand-prediction": {
      code: "EDL",
      visual: "edl",
      chartLabel: { zh: "VTH 分布", en: "VTH distribution" },
      axes: { zh: ["低温", "编程态", "高温"], en: ["cold", "program state", "hot"] },
      type: { zh: "期刊研究", en: "Journal study" },
      windowTitle: { zh: "均值 / Sigma 预测模型", en: "Mean / Sigma model" },
      temperature: "−55 → 125°C",
      metric: "↓ 66.9%",
      states: "P1 — P7",
      hint: { zh: "机理约束预测", en: "mechanism-informed" },
      status: { zh: "模型就绪 · 跨温度视图", en: "Model ready · cross-temperature view" },
      title: { zh: "3D NAND 阈值电压分布的机理约束预测", en: "Mechanism-informed prediction of 3D NAND threshold distributions" },
      year: "2026",
      copy: { zh: "构建联合预测 VTH 均值与 Sigma 的机制约束模型，平均 RMSE 降低 66.9%。", en: "A mechanism-constrained model jointly predicts VTH mean and Sigma across extreme temperatures, lowering average RMSE by 66.9%." },
      bullets: { zh: ["显式建模陷阱、电势垒与迁移率效应。", "覆盖极端温度、非线性与外推场景。"], en: ["Makes trap, barrier, and mobility effects explicit.", "Covers extreme-temperature, nonlinear, and extrapolation regimes."] },
      tags: { zh: ["3D NAND", "VTH / Sigma", "可靠性"], en: ["3D NAND", "VTH / Sigma", "Reliability"] }
    },
    "nand-compensation": {
      code: "TED",
      visual: "ted",
      chartLabel: { zh: "TC on / off", en: "TC on / off" },
      axes: { zh: ["低温", "补偿分离", "高温"], en: ["cold", "compensation split", "hot"] },
      type: { zh: "期刊研究", en: "Journal study" },
      windowTitle: { zh: "温度补偿非对称性", en: "Temperature compensation asymmetry" },
      temperature: "−55 → 125°C",
      metric: "P5 — P7",
      states: "TC on / off",
      hint: { zh: "状态依赖机制", en: "state-dependent physics" },
      status: { zh: "TCAD 就绪 · 状态响应视图", en: "TCAD ready · state-response view" },
      title: { zh: "商用 3D NAND 极端温区温度补偿非对称性", en: "Temperature-compensation asymmetry in commercial 3D NAND" },
      year: "2026",
      copy: { zh: "从 TC on/off 成对测量出发，解释低温补偿不足、高状态高温过补偿与均值漂移反转。", en: "Paired TC on/off measurements explain low-temperature under-compensation, high-state over-compensation, and mean-drift reversal." },
      bullets: { zh: ["连接陷阱占据、Poole–Frenkel 发射与迁移率。", "重点观察高编程态 P5–P7。"], en: ["Connects trap occupancy, Poole–Frenkel emission, and mobility.", "Focuses on the high programmed states P5–P7."] },
      tags: { zh: ["3D NAND", "温度补偿", "TCAD"], en: ["3D NAND", "Temperature compensation", "TCAD"] }
    },
    "fefet-tcam": {
      code: "TDMR",
      visual: "tdmr",
      chartLabel: { zh: "畴密度与搜索失效", en: "Domain density / failure" },
      axes: { zh: ["低密度", "畴密度", "稳健区"], en: ["low density", "domain density", "robust"] },
      type: { zh: "期刊研究", en: "Journal study" },
      windowTitle: { zh: "畴密度 / 搜索失效", en: "Domain density / search failure" },
      temperature: "100 → 700/μm²",
      metric: "↓ 80%",
      states: "2FeFET TCAM",
      hint: { zh: "阵列级 Monte Carlo", en: "array-level Monte Carlo" },
      status: { zh: "阵列就绪 · 可靠性视图", en: "Array ready · reliability view" },
      title: { zh: "2FeFET TCAM 畴密度离散性与搜索可靠性", en: "Domain-density variation and search reliability in 2FeFET TCAM" },
      year: "2026",
      copy: { zh: "建立畴密度、阈值波动、存储窗口与搜索失效之间的跨尺度映射。", en: "Maps domain density across threshold variation, memory window, and search failure at array scale." },
      bullets: { zh: ["低于约 100/μm² 时搜索失效可超过 80%。", "高于约 700/μm² 时进入稳健设计区。"], en: ["Search failure can exceed 80% below roughly 100/μm².", "Densities above roughly 700/μm² form a robust design region."] },
      tags: { zh: ["FeFET", "TCAM", "Monte Carlo"], en: ["FeFET", "TCAM", "Monte Carlo"] }
    },
    ipfa: {
      code: "IPFA",
      visual: "ipfa",
      chartLabel: { zh: "分段温度系数", en: "Piecewise temperature response" },
      axes: { zh: ["低温机制", "响应转折", "高温机制"], en: ["low-temp physics", "transition", "high-temp physics"] },
      type: { zh: "会议论文", en: "Conference paper" },
      windowTitle: { zh: "跨温度表征", en: "Cross-temperature characterization" },
      temperature: "−30 → 125°C",
      metric: "P1 — P7",
      states: "piecewise TC",
      hint: { zh: "分段温度响应", en: "piecewise response" },
      status: { zh: "表征就绪 · 新观察", en: "Characterization ready · new observations" },
      title: { zh: "3D NAND 跨温表征的新观察", en: "New observations from 3D NAND cross-temperature characterization" },
      year: "2026",
      copy: { zh: "报告高状态过补偿与均值漂移反转，并用陷阱输运、PF 发射和迁移率解释分段响应。", en: "Reports high-state over-compensation and mean-drift reversal with a piecewise response from traps, PF emission, and mobility." },
      bullets: { zh: ["覆盖 −30°C 至 125°C 的 P1–P7 数据。", "IPFA 2026 accepted。"], en: ["Covers P1–P7 from −30°C to 125°C.", "Accepted at IPFA 2026."] },
      tags: { zh: ["IPFA", "3D NAND", "跨温表征"], en: ["IPFA", "3D NAND", "Characterization"] }
    }
  };

  const experienceGroups = {
    zh: [
      {
        title: "学术与专业活动",
        items: [
          { logo: "SYSU", org: "中山大学", title: "微电子科学与技术本科生", range: "2024.09 – 2028.06（预计）" },
          { logo: "IPFA", org: "IEEE IPFA 2026", title: "学术会议参会与论文录用", range: "2026" }
        ]
      },
      {
        title: "项目经历",
        items: [
          { logo: "NAND", org: "器件可靠性研究", title: "商用 3D NAND 极端温区温度补偿非对称性", range: "2025.08 – 至今" },
          { logo: "EDL", org: "器件可靠性研究", title: "3D NAND 阈值电压分布的机理约束预测与可靠性建模", range: "2025.08 – 2026.05" },
          { logo: "TCAM", org: "器件可靠性研究", title: "2FeFET TCAM 畴密度离散性与搜索可靠性", range: "2025.01 – 2025.08" }
        ]
      },
      {
        title: "获奖经历",
        items: [
          { logo: "CUMCM", org: "高教杯全国大学生数学建模竞赛（CUMCM）", title: "省部级一等奖 · 队长", range: "2025.09" },
          { logo: "IC", org: "第十届全国大学生集成电路创新创业大赛", title: "省部级二等奖 · 队长", range: "2026.08" },
          { logo: "HSC", org: "2026 华数杯数学建模竞赛", title: "国家级一等奖 · 队长", range: "2026.08" },
          { logo: "HSC", org: "2025 华数杯数学建模竞赛", title: "国家级二等奖 · 队长", range: "2025.08" }
        ]
      }
    ],
    en: [
      {
        title: "Academic and professional activities",
        items: [
          { logo: "SYSU", org: "Sun Yat-sen University", title: "B.Eng. Candidate, Microelectronics Science and Engineering", range: "Sep. 2024 – Jun. 2028 (Expected)" },
          { logo: "IPFA", org: "IEEE IPFA 2026", title: "Conference participation · Accepted paper", range: "2026" }
        ]
      },
      {
        title: "Projects",
        items: [
          { logo: "NAND", org: "Device reliability research", title: "Temperature-Compensation Asymmetry at Thermal Extremes in 3D NAND Flash", range: "Aug. 2025 – Present" },
          { logo: "EDL", org: "Device reliability research", title: "Mechanism-Informed VTH/Sigma Prediction for 3D NAND Flash", range: "Aug. 2025 – May 2026" },
          { logo: "TCAM", org: "Device reliability research", title: "Domain-Density-Dependent Variability and Search Reliability in 2FeFET TCAM", range: "Jan. 2025 – Aug. 2025" }
        ]
      },
      {
        title: "Awards",
        items: [
          { logo: "CUMCM", org: "2025 China Undergraduate Mathematical Contest in Modeling", title: "Provincial First Prize · Team Leader", range: "2025" },
          { logo: "IC", org: "10th National Undergraduate Integrated Circuit Innovation & Entrepreneurship Competition", title: "Provincial / Ministerial Second Prize · Team Leader", range: "2026" },
          { logo: "HSC", org: "2026 Huashu Cup Mathematical Modeling Competition", title: "National First Prize · Team Leader", range: "2026" },
          { logo: "HSC", org: "2025 Huashu Cup Mathematical Modeling Competition", title: "National Second Prize · Team Leader", range: "2025" }
        ]
      }
    ]
  };

  function linkMarkup(label, href, primary) {
    return "<a class=\"btn" + (primary ? " primary" : "") + "\" href=\"" + escapeHtml(href) + "\"" +
      (/^https?:\/\//i.test(href) ? " target=\"_blank\" rel=\"noopener\"" : "") + ">" + escapeHtml(label) + "</a>";
  }

  function renderHero() {
    const zh = state.language === "zh";
    $("profileName").textContent = zh ? "柯毅成" : "Yicheng Ke";
    $("heroKicker").textContent = content[state.language].heroKicker;
    $("heroIntro").textContent = content[state.language].heroIntro;
    $("heroContact").innerHTML = (zh ? "如果你想交流，欢迎给我发邮件：" : "If you'd like to chat, feel free to ") +
      "<a id=\"introEmail\" href=\"" + escapeHtml(content[state.language].contactEmailHref) + "\">" +
      escapeHtml(content[state.language].contactEmail) + "</a>.";
    $("interestLead").textContent = zh ? "目前，我主要关注这些问题：" : "Currently, I'm interested in the following questions:";
    $("projectsTitle").textContent = "Selected Projects";
    $("publicationsTitle").textContent = "Recent Publications";
    $("experienceTitle").textContent = zh ? "经历" : "Experience";
    $("footerName").textContent = "© " + new Date().getFullYear() + " " + content[state.language].footerName;
    $("footerEmail").textContent = zh ? "邮箱" : "Email";
    const cvHref = zh ? "assets/ke-yicheng-cv-cn.pdf" : "assets/ke-yicheng-cv-en.pdf";
    $("cvNav").href = cvHref;
    $("footerCv").href = cvHref;
    document.title = zh ? "柯毅成 — 存储器可靠性" : "Yicheng Ke — Memory Reliability";
    document.documentElement.lang = zh ? "zh-CN" : "en";
  }

  function renderQuestions() {
    $("questionGrid").innerHTML = content[state.language].questions.map((item) =>
      "<li>" + escapeHtml(item.title) + "</li>"
    ).join("");
  }

  function renderShowcase() {
    const meta = showcaseMeta[state.showcaseId];
    const zh = state.language === "zh";
    $("showcaseSelect").value = state.showcaseId;
    $("desktopStage").dataset.mode = meta.visual;
    $("desktopChartLabel").textContent = meta.chartLabel[state.language];
    $("desktopAxisLeft").textContent = meta.axes[state.language][0];
    $("desktopAxisMid").textContent = meta.axes[state.language][1];
    $("desktopAxisRight").textContent = meta.axes[state.language][2];
    $("showcaseLabel").textContent = zh ? "选择展示项目" : "Select a project";
    $("desktopProjectCode").textContent = meta.code;
    $("desktopProjectType").textContent = meta.type[state.language];
    $("desktopWindowTitle").textContent = meta.windowTitle[state.language];
    $("desktopTemp").textContent = meta.temperature;
    $("desktopMetric").textContent = meta.metric;
    $("desktopStates").textContent = meta.states;
    $("desktopChartHint").textContent = meta.hint[state.language];
    $("desktopStatus").textContent = meta.status[state.language];
    $("showcaseTitle").textContent = meta.title[state.language];
    $("showcaseYear").textContent = meta.year;
    $("showcaseCopy").textContent = meta.copy[state.language];
    $("showcaseBullets").innerHTML = meta.bullets[state.language].map((item) => "<li>" + escapeHtml(item) + "</li>").join("");
    $("showcaseTags").innerHTML = meta.tags[state.language].map((item) => "<span class=\"tag\">" + escapeHtml(item) + "</span>").join("");
    $("showcaseLinks").innerHTML = linkMarkup(zh ? "论文详情" : "Paper", "paper.html?id=" + state.showcaseId, true) +
      linkMarkup("DOI / PDF", papers[state.showcaseId].doi);
  }

  function formatAuthors(authorText) {
    const safe = escapeHtml(authorText);
    return safe.replaceAll("Yicheng Ke", "<strong>Yicheng Ke</strong>");
  }

  function renderPublications() {
    const zh = state.language === "zh";
    $("publicationList").innerHTML = content[state.language].publications.map((entry) => {
      const detail = papers[entry.id] && papers[entry.id][state.language];
      const links = entry.links || [];
      return "<div class=\"pub-card\" role=\"group\" aria-expanded=\"false\">" +
        "<h4 class=\"pub-title\">" + escapeHtml(entry.title) + "</h4>" +
        "<div class=\"pub-authors\">" + formatAuthors(entry.authors) + "</div>" +
        "<div class=\"pub-meta\">" + escapeHtml(entry.venue) + "</div>" +
        "<div class=\"pub-actions\">" +
        links.map((link, index) => linkMarkup(link.label, link.href, index === 0)).join("") +
        "<button class=\"btn toggle\" type=\"button\">" + (zh ? "展开详情" : "Show details") + "</button>" +
        "</div><div class=\"pub-expand\">" +
        "<p>" + escapeHtml(detail ? detail.abstract : "") + "</p>" +
        "<div class=\"links\">" + linkMarkup(zh ? "打开完整论文" : "Read full paper", "paper.html?id=" + entry.id, true) + "</div>" +
        "</div></div>";
    }).join("");

    document.querySelectorAll(".pub-card .toggle").forEach((button) => {
      button.addEventListener("click", () => {
        const card = button.closest(".pub-card");
        const open = card.getAttribute("aria-expanded") === "true";
        card.setAttribute("aria-expanded", open ? "false" : "true");
        button.textContent = open ? (state.language === "zh" ? "展开详情" : "Show details") : (state.language === "zh" ? "收起详情" : "Hide details");
      });
    });
  }

  function renderExperience() {
    $("experienceList").innerHTML = experienceGroups[state.language].map((group) =>
      "<section class=\"experience-group\"><h3 class=\"experience-group-title\">" + escapeHtml(group.title) + "</h3>" +
      "<div class=\"timeline\">" + group.items.map((item) =>
        "<div class=\"timeline-item\"><div class=\"timeline-card\"><div class=\"timeline-header\">" +
        "<div class=\"timeline-logo\">" + escapeHtml(item.logo) + "</div><div class=\"timeline-main\">" +
        "<div class=\"timeline-top\"><div class=\"timeline-org\">" + escapeHtml(item.org) + "</div></div>" +
        "<div class=\"timeline-title\">" + escapeHtml(item.title) + "</div>" +
        "<div class=\"timeline-range\">" + escapeHtml(item.range) + "</div></div></div></div></div>"
      ).join("") + "</div></section>"
    ).join("");
  }

  function renderLanguageButton() {
    $("langToggle").textContent = state.language === "zh" ? "EN" : "中";
    $("langToggle").setAttribute("aria-label", state.language === "zh" ? "Switch to English" : "切换到中文");
  }

  function renderAll() {
    renderHero();
    renderQuestions();
    renderShowcase();
    renderPublications();
    renderExperience();
    renderLanguageButton();
  }

  $("showcaseSelect").addEventListener("change", (event) => {
    state.showcaseId = event.target.value;
    renderShowcase();
  });
  $("langToggle").addEventListener("click", () => {
    state.language = state.language === "zh" ? "en" : "zh";
    localStorage.setItem("research-site-language", state.language);
    renderAll();
  });

  renderAll();
})();
