'use strict';
const newsPosts = [
  {
    "title": "西门子 Eigen Engineering Agent 新增美国销售渠道",
    "cat": "PLC 控制",
    "date": "2026-11-16",
    "tags": [
      "PLC",
      "TIA Portal",
      "工业 AI"
    ],
    "source": "Siemens 官方新闻稿",
    "url": "https://news.siemens.com/en-us/electro-matic-siemens-eigen-engineering-agent/",
    "intro": "西门子宣布 Electro-Matic 成为 Eigen Engineering Agent 首家美国经销商。这是自动化工程 AI 工具的渠道扩展，并非产品首次发布。",
    "sections": [
      [
        "资讯要点",
        "公告介绍，该助手与 TIA Portal 配合，用于自动化工程任务；产品已于 2026 年 4 月推出。本次协议为美国客户增加购买渠道。"
      ],
      [
        "本站观察",
        "对 PLC 工程师而言，可关注它对现有工程流程的适配、授权条件及任务验证方式。厂商给出的效率收益需要结合实际项目评估。"
      ]
    ],
    "kind": "资讯摘要",
    "checked": "2026-11-17",
    "art": ""
  },
  {
    "title": "工业 AI 连接机器人夹爪设计与增材制造",
    "cat": "PLC 控制",
    "date": "2026-11-16",
    "tags": [
      "工业 AI",
      "数字孪生",
      "机器人"
    ],
    "source": "Siemens 官方新闻稿",
    "url": "https://press.siemens.com/global/en/pressrelease/siemens-combines-industrial-ai-and-additive-manufacturing-adaptive-product-development",
    "intro": "西门子展示以工业 AI 串联设计与制造的方向：围绕定制机器人夹爪，连接提示词驱动的工程流程和自适应生产环境。",
    "sections": [
      [
        "资讯要点",
        "官方介绍的智能体流程覆盖设计调整、虚拟验证和制造准备，并计划通过自适应生产单元把工程流程延伸到生产环节。"
      ],
      [
        "本站观察",
        "值得关注的是设计数据、验证结果与制造准备如何衔接。这是一条产品与技术动态，不能直接视为任意产线都可复制的成熟部署方案。"
      ]
    ],
    "kind": "资讯摘要",
    "checked": "2026-11-17",
    "art": ""
  },
  {
    "title": "Hugging Face 携手 OpenRouter，调整语言模型推理路由",
    "cat": "AI 学习",
    "date": "2026-11-16",
    "tags": [
      "AI",
      "开源模型",
      "推理"
    ],
    "source": "Hugging Face 官方博客",
    "url": "https://huggingface.co/blog/openrouter",
    "intro": "Hugging Face 宣布将语言模型的 Inference Providers 路由切换到 OpenRouter，根据价格、速度与可靠性选择提供商，并支持失败重试。",
    "sections": [
      [
        "资讯要点",
        "公告说明，语言模型请求通过新的路由处理；图像、视频和音频生成仍沿用原有 Hugging Face 推理提供商路径。"
      ],
      [
        "本站观察",
        "学习多模型调用时，可以比较服务提供商选择和失败重试对结果的影响。接入前应阅读原文的迁移说明，特别是自定义提供商密钥相关变更。"
      ]
    ],
    "kind": "资讯摘要",
    "checked": "2026-11-17",
    "art": ""
  },
  {
    "title": "NVIDIA 新教程：用 SimReady 资产搭建机器人抓放仿真",
    "cat": "AI 学习",
    "date": "2026-11-13",
    "tags": [
      "机器人",
      "数字孪生",
      "AI"
    ],
    "source": "NVIDIA 团队文章 · Hugging Face",
    "url": "https://huggingface.co/blog/nvidia/simready-assets-robot-pick-and-place",
    "intro": "NVIDIA 团队发布抓放仿真教程，使用机械臂、夹爪和饮料罐资产，在 Isaac Sim 中组装场景、检查物理行为并执行任务。",
    "sections": [
      [
        "教程重点",
        "示例采用 UR17G 机械臂与 Robotiq 2F-140 夹爪，强调关节、碰撞和质量等仿真属性。资产检查通过后，仍需验证组装场景中的抓取行为。"
      ],
      [
        "学习切入点",
        "可先复现关节运动、夹爪开合和接触测试，再尝试完整任务。本文是仿真学习入口；生成的控制代码和仿真结果都需要人工检查。"
      ]
    ],
    "kind": "资讯摘要",
    "checked": "2026-11-17",
    "art": ""
  },
  {
    "title": "llama.cpp 与 ggml 发布 v1.0.0 库版本",
    "cat": "AI 学习",
    "date": "2026-11-13",
    "tags": [
      "AI",
      "本地模型",
      "边缘计算"
    ],
    "source": "ggml-org 团队文章 · Hugging Face",
    "url": "https://huggingface.co/blog/ggml-org/llama-cpp-v1",
    "intro": "ggml-org 宣布 llama.cpp 与 ggml 库的 v1.0.0 版本，并明确用主版本变化标识 API、ABI 不兼容，为本地 AI 应用集成提供版本边界。",
    "sections": [
      [
        "发布重点",
        "团队将公开 C API 的破坏性变更与主版本升级关联；向后兼容功能、后端与模型支持归入次版本，修复归入补丁版本。"
      ],
      [
        "本站观察",
        "对本地知识助手或边缘推理项目，稳定的接口边界有助于管理升级。学习时可以先记录硬件、模型与库版本，再评估具体性能，不应仅依据版本号推断速度提升。"
      ]
    ],
    "kind": "资讯摘要",
    "checked": "2026-11-17",
    "art": ""
  },
  {
    "title": "Sinamics E210：面向 AGV 与 AMR 的 24/48 V 驱动方案",
    "cat": "PLC 控制",
    "date": "2026-11-02",
    "tags": [
      "电气控制",
      "运动控制",
      "TIA Portal"
    ],
    "source": "Siemens 官方新闻稿",
    "url": "https://press.siemens.com/global/en/pressrelease/siemens-launches-new-elv-drive-solution-agvs-and-mobile-robotics",
    "intro": "西门子推出 Sinamics E210 变频器与 Simotics E-1EE1 伺服电机组合，面向电池供电的移动机器人与无人搬运应用。",
    "sections": [
      [
        "产品要点",
        "官方将其定位于 24 V、48 V 特低电压应用，并说明方案可集成到 TIA Portal 和 Simove 模块化系统中。"
      ],
      [
        "本站观察",
        "电气工程师可以围绕供电、电机匹配、通信与调试流程进一步阅读产品资料。新闻稿用于了解产品方向，实际选型仍应依据型号手册与应用条件。"
      ]
    ],
    "kind": "资讯摘要",
    "checked": "2026-11-17",
    "art": ""
  }
];
