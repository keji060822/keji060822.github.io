(() => {
  const query = new URLSearchParams(window.location.search);
  const paperId = query.get("id");
  const paper = window.paperDetails && window.paperDetails[paperId];
  const state = {
    language: localStorage.getItem("research-site-language") || "zh",
    theme: localStorage.getItem("research-site-theme") || "light"
  };

  const $ = (id) => document.getElementById(id);
  const escapeHtml = (value) => String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");

  const labels = {
    zh: {
      journal: "期刊论文",
      conference: "会议论文",
      back: "← 返回论文列表",
      open: "在新标签页打开 PDF",
      download: "下载 PDF",
      abstractIndex: "01 / 摘要",
      abstractHeading: "摘要",
      highlightsIndex: "02 / 研究亮点",
      highlightsHeading: "研究亮点",
      keywords: "关键词",
      readerIndex: "03 / 完整阅读",
      readerHeading: "完整阅读",
      readerHint: "在页面内直接阅读完整论文；也可以打开或下载 PDF。",
      readerLoaded: "PDF 阅读器已加载。",
      readerError: "页面内 PDF 加载失败，请使用上方的打开或下载按钮。",
      notFoundTitle: "找不到这篇论文",
      notFoundCopy: "请从主页的论文列表重新进入。",
      notFoundBack: "返回主页"
    },
    en: {
      journal: "Journal article",
      conference: "Conference paper",
      back: "← Back to publications",
      open: "Open PDF in a new tab",
      download: "Download PDF",
      abstractIndex: "01 / Abstract",
      abstractHeading: "Abstract",
      highlightsIndex: "02 / Highlights",
      highlightsHeading: "Highlights",
      keywords: "Keywords",
      readerIndex: "03 / Full text",
      readerHeading: "Read the full paper",
      readerHint: "Read the complete paper in the page, or open and download the PDF.",
      readerLoaded: "PDF viewer loaded.",
      readerError: "The PDF could not be loaded here. Use Open PDF or Download PDF above.",
      notFoundTitle: "Paper not found",
      notFoundCopy: "Please return to the publications list and choose a paper.",
      notFoundBack: "Back to homepage"
    }
  };

  function setTheme(theme) {
    state.theme = theme;
    document.documentElement.dataset.theme = theme;
    localStorage.setItem("research-site-theme", theme);
    $("themeToggle").setAttribute("aria-label", theme === "light" ? "Switch to dark theme" : "Switch to light theme");
  }

  function showNotFound() {
    $("paperPage").hidden = true;
    $("paperNotFound").hidden = false;
    const copy = labels[state.language];
    $("paperNotFound").querySelector("h1").textContent = copy.notFoundTitle;
    $("paperNotFound").querySelector("p:not(.paper-kicker)").textContent = copy.notFoundCopy;
    $("paperNotFound").querySelector("a").innerHTML = copy.notFoundBack + " <span>↗</span>";
    $("langToggle").textContent = state.language === "zh" ? "EN" : "中";
    setTheme(state.theme);
  }

  function render() {
    const copy = labels[state.language];
    const data = paper[state.language];
    document.documentElement.lang = state.language === "zh" ? "zh-CN" : "en";
    document.title = data.title + " · Yicheng Ke";
    $("backLink").textContent = copy.back;
    $("paperCv").href = state.language === "zh" ? "assets/ke-yicheng-cv-cn.pdf" : "assets/ke-yicheng-cv-en.pdf";
    $("paperCv").textContent = "CV";
    $("paperKicker").textContent = copy[paper.type] + " · " + paper.year;
    $("paperTitle").textContent = data.title;
    $("paperAuthors").textContent = data.authors;
    $("paperVenue").textContent = data.venue;
    $("openPdf").innerHTML = copy.open + " <span>↗</span>";
    $("downloadPdf").innerHTML = copy.download + " <span>↓</span>";
    $("openPdf").href = paper.pdf;
    $("downloadPdf").href = paper.pdf;
    $("paperDoi").href = paper.doi || paper.pdf;
    $("paperDoi").textContent = paper.doi ? "DOI ↗" : "PDF ↗";
    $("abstractIndex").textContent = copy.abstractIndex;
    $("abstractHeading").textContent = copy.abstractHeading;
    $("paperAbstract").textContent = data.abstract;
    $("highlightsIndex").textContent = copy.highlightsIndex;
    $("highlightsHeading").textContent = copy.highlightsHeading;
    $("paperHighlights").innerHTML = data.highlights.map((item) => "<li>" + escapeHtml(item) + "</li>").join("");
    $("keywordsLabel").textContent = copy.keywords;
    $("paperKeywords").innerHTML = data.keywords.map((item) => "<span>" + escapeHtml(item) + "</span>").join("");
    $("readerIndex").textContent = copy.readerIndex;
    $("readerHeading").textContent = copy.readerHeading;
    $("readerHint").textContent = copy.readerHint;
    if ($("readerStatus").textContent) {
      $("readerStatus").textContent = $("readerStatus").classList.contains("is-error") ? copy.readerError : copy.readerLoaded;
    }
    $("paperFrame").title = data.title;
    $("paperFrame").src = paper.pdf;
    $("langToggle").textContent = state.language === "zh" ? "EN" : "中";
    $("langToggle").setAttribute("aria-label", state.language === "zh" ? "Switch to English" : "切换到中文");
    setTheme(state.theme);
  }

  $("langToggle").addEventListener("click", () => {
    state.language = state.language === "zh" ? "en" : "zh";
    localStorage.setItem("research-site-language", state.language);
    if (paper) render();
    else showNotFound();
  });

  $("themeToggle").addEventListener("click", () => {
    setTheme(state.theme === "light" ? "dark" : "light");
  });

  $("paperFrame").addEventListener("load", () => {
    $("readerStatus").textContent = labels[state.language].readerLoaded;
    $("readerStatus").classList.remove("is-error");
  });
  $("paperFrame").addEventListener("error", () => {
    $("readerStatus").textContent = labels[state.language].readerError;
    $("readerStatus").classList.add("is-error");
  });

  if (paper) {
    render();
    if ("IntersectionObserver" in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      }, { threshold: 0.12 });
      document.querySelectorAll(".section-reveal").forEach((section) => observer.observe(section));
    }
  } else {
    showNotFound();
  }
})();
