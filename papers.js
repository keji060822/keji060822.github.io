/*
 * Paper metadata for the public reading pages.
 * The PDF files themselves live in assets/papers.
 */
window.paperDetails = {
  "nand-prediction": {
    type: "journal",
    year: "2026",
    pdf: "assets/papers/nand-vth-prediction.pdf",
    doi: "https://doi.org/10.1109/LED.2026.3704253",
    zh: {
      title: "极端温度下 3D NAND 阈值电压分布均值与 Sigma 的机理约束预测模型",
      authors: "柯毅成，董明辉，蔡琳琳，陈旺勇*",
      venue: "IEEE Electron Device Letters · 47(8) · 2026",
      abstract: "本文提出一种机理约束的紧凑预测模型，用于描述 −55 °C 至 125 °C 范围内 3D NAND 各编程态阈值电压分布的均值与标准差。模型将俘获响应、电势垒调制和沟道迁移率变化拆解为可解释项，并在温度变化、非线性响应和外推场景下保持稳定预测。相较基线模型，平均 RMSE 降低 66.9%。",
      keywords: ["3D NAND", "阈值电压分布", "极端温度", "机理建模"],
      highlights: [
        "联合预测每个编程态的 VTH 均值与 Sigma。",
        "把陷阱、电势垒和迁移率效应显式写入模型。",
        "平均 RMSE 相比基线降低 66.9%。"
      ]
    },
    en: {
      title: "A Mechanism-Informed Predictive Model for Mean and Sigma of 3D NAND Threshold-Voltage Distributions at Extreme Temperatures",
      authors: "Yicheng Ke, Minghui Dong, Linlin Cai, and Wangyong Chen*",
      venue: "IEEE Electron Device Letters · 47(8) · 2026",
      abstract: "This work develops a mechanism-informed compact model for the mean and standard deviation of 3D NAND threshold-voltage distributions from −55 °C to 125 °C. Trap response, barrier modulation, and channel mobility are separated into interpretable terms so the model remains reliable across nonlinear and extrapolation regimes. The average RMSE is reduced by 66.9% versus the baseline.",
      keywords: ["3D NAND", "VTH distribution", "Extreme temperature", "Physics-informed modeling"],
      highlights: [
        "Jointly predicts VTH mean and Sigma for each state.",
        "Makes trap, barrier, and mobility effects explicit.",
        "Reduces average RMSE by 66.9% versus the baseline."
      ]
    }
  },
  "nand-compensation": {
    type: "journal",
    year: "2026",
    pdf: "assets/papers/nand-temperature-compensation.pdf",
    doi: "https://doi.org/10.1109/TED.2026.3708111",
    zh: {
      title: "3D NAND 极端温区温度补偿非对称性：物理机制与状态依赖",
      authors: "柯毅成，董明辉，蔡琳琳，陈旺勇*",
      venue: "IEEE Transactions on Electron Devices · 73(8) · 2026",
      abstract: "本文通过温度补偿开启与关闭的成对测试，研究商业 3D NAND 在极端温度下的状态依赖响应。结果显示，低温区域存在补偿不足，高编程态在高温区域出现过补偿，且均值漂移方向发生反转。Sentaurus TCAD 进一步把这些现象连接到俘获占据、Poole–Frenkel 发射和迁移率变化。",
      keywords: ["3D NAND", "温度补偿", "状态依赖", "Poole–Frenkel"],
      highlights: [
        "用 TC on/off 成对测量分离控制策略与器件本征响应。",
        "揭示 P5–P7 高状态的高温过补偿。",
        "通过 TCAD 追踪陷阱占据、PF 发射与迁移率变化。"
      ]
    },
    en: {
      title: "Temperature Compensation Asymmetry at Thermal Extremes in 3D NAND Flash: Physical Mechanisms and State Dependence",
      authors: "Yicheng Ke, Minghui Dong, Linlin Cai, and Wangyong Chen*",
      venue: "IEEE Transactions on Electron Devices · 73(8) · 2026",
      abstract: "Paired measurements with temperature compensation enabled and disabled expose the state-dependent response of commercial 3D NAND at thermal extremes. Under-compensation appears at low temperature, while high programmed states show over-compensation at high temperature and a reversal in mean drift. Sentaurus TCAD links the observations to trap occupancy, Poole–Frenkel emission, and mobility change.",
      keywords: ["3D NAND", "Temperature compensation", "State dependence", "Poole–Frenkel"],
      highlights: [
        "Paired TC on/off measurements separate control and intrinsic response.",
        "High states P5–P7 show high-temperature over-compensation.",
        "TCAD connects the effect to traps, PF emission, and mobility."
      ]
    }
  },
  "fefet-tcam": {
    type: "journal",
    year: "2026",
    pdf: "assets/papers/fefet-tcam.pdf",
    doi: "https://doi.org/10.1109/TDMR.2026.3707975",
    zh: {
      title: "2FeFET TCAM 位单元中的畴密度依赖：搜索失效分析与设计优化",
      authors: "柯毅成等",
      venue: "IEEE Transactions on Device and Materials Reliability · Early Access · 2026",
      abstract: "本文建立 FeFET 畴密度到 2FeFET-TCAM 搜索可靠性的跨尺度分析。基于 NLS-FeFET 紧凑模型和阵列级 Monte Carlo 仿真，研究畴密度离散性对阈值波动、存储窗口和搜索失效的影响。结果表明，畴密度增加可显著降低阈值变异与窗口损失；当畴密度低于约 100/μm² 时，搜索失效概率可超过 80%，而高于约 700/μm² 时更稳健。",
      keywords: ["FeFET", "TCAM", "畴密度", "Monte Carlo"],
      highlights: [
        "把畴密度统计直接传递到阵列搜索失效。",
        "阈值变异系数最高降低约 80%，存储窗口损失降低约 79%。",
        "给出约 700/μm² 以上的稳健设计区域。"
      ]
    },
    en: {
      title: "Domain Density Dependence in 2FeFET-Based TCAM Bit-Cell: Search Failure Analysis and Design Optimization",
      authors: "Yicheng Ke et al.",
      venue: "IEEE Transactions on Device and Materials Reliability · Early Access · 2026",
      abstract: "This work builds a cross-scale path from FeFET domain density to 2FeFET-TCAM search reliability. An NLS-FeFET compact model and array-level Monte Carlo simulations quantify the impact on threshold variation, memory window, and search failure. Search failure can exceed 80% below roughly 100/μm², while densities above roughly 700/μm² provide a robust design region.",
      keywords: ["FeFET", "TCAM", "Domain density", "Monte Carlo"],
      highlights: [
        "Propagates domain-density statistics into array search failure.",
        "Reduces threshold variation and memory-window loss by up to about 80%.",
        "Identifies a robust design region above roughly 700/μm²."
      ]
    }
  },
  "ipfa": {
    type: "conference",
    year: "2026",
    pdf: "assets/papers/ipfa-3d-nand.pdf",
    zh: {
      title: "状态依赖的过补偿与分段温度响应：3D NAND 跨温表征的新观察",
      authors: "柯毅成，董明辉，蔡琳琳，陈旺勇*",
      venue: "IEEE IPFA 2026 · Accepted",
      abstract: "本文报告商业 3D NAND 在 −30 °C 至 125 °C 范围内的跨温表征结果。对 P1–P7 阈值分布和温度补偿策略的比较显示，高状态存在明显过补偿，且均值漂移在温区变化时出现反转。结果支持一种分段温度系数解释：低温主要受陷阱输运控制，高温则更多由 Poole–Frenkel 发射和迁移率变化决定。",
      keywords: ["IPFA", "3D NAND", "跨温表征", "温度补偿"],
      highlights: [
        "覆盖 −30 °C 至 125 °C 的 P1–P7 跨温数据。",
        "观察到高状态过补偿与均值漂移反转。",
        "提出由陷阱输运、PF 发射和迁移率共同形成的分段响应。"
      ]
    },
    en: {
      title: "State-Dependent Overcompensation and Piecewise Temperature Response: New Observations from 3D NAND Cross-Temperature Characterization",
      authors: "Yicheng Ke, Minghui Dong, Linlin Cai, and Wangyong Chen*",
      venue: "IEEE IPFA 2026 · Accepted",
      abstract: "Cross-temperature characterization of commercial 3D NAND from −30 °C to 125 °C compares P1–P7 threshold distributions with the temperature-compensation strategy. High states show clear over-compensation and a reversal in mean drift across temperature regions. A piecewise temperature coefficient is consistent with trap transport at low temperature and Poole–Frenkel emission plus mobility change at high temperature.",
      keywords: ["IPFA", "3D NAND", "Cross-temperature characterization", "Temperature compensation"],
      highlights: [
        "Covers P1–P7 across −30 °C to 125 °C.",
        "Observes high-state over-compensation and mean-drift reversal.",
        "Supports a piecewise response from traps, PF emission, and mobility."
      ]
    }
  }
};
