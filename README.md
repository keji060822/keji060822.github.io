# Research notes

一个不依赖构建工具的科研人员个人主页，采用简洁的科研主页布局，包含动态项目展示、论文详情页和 PDF 全文阅读器，适合直接放到 GitHub Pages、静态托管或任意普通 Web 服务器上。

## 修改个人内容

打开 content.js，在 zh 和 en 两组内容中替换姓名、机构、研究方向、项目、论文、动态和链接。论文详情元数据位于 papers.js；主页的展示选择器默认选中 EDL，页面结构和视觉样式分别位于 index.html、styles.css 与 paper.css。

论文详情页使用 paper.html?id=... 打开，例如：

- paper.html?id=nand-prediction
- paper.html?id=nand-compensation
- paper.html?id=fefet-tcam
- paper.html?id=ipfa

对应的 PDF 放在 assets/papers/。中文页面使用 assets/ke-yicheng-cv-cn.pdf，切换到英文后使用 assets/ke-yicheng-cv-en.pdf。主页论文列表保持现有四篇，不会自动加入 CV 中的其他文章。

## 本地预览

在项目目录运行：

    python -m http.server 4173

然后打开 http://localhost:4173。直接双击 index.html 也可以查看，但本地服务器更接近正式部署环境。
