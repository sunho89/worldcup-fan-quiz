# ⚽ 足球趣味测试

> 通过有趣的测试，测出你的球迷人格或匹配你的本命球队。

**一款适合世界杯期间传播的趣味测试 H5，支持生成分享卡片**

---

## 🎯 项目亮点

| 亮点 | 说明 |
|------|------|
| 多个测试 | 首页选择球迷类型测试或球队匹配测试 |
| 社交货币 | 一张专属结果卡片，发朋友圈/群聊自带话题 |
| 梗文化密集 | "越位型人格"、"我奶奶都能进的球"等球迷黑话 |
| 分享卡片 | 自动生成可保存/分享的结果卡片 |
| 知乎同步 | 一键发布到知乎想法（需配置 API Key） |

---

## 🕹️ 测试类型

### 你是哪种球迷？（10道题）
测出你是 8 种球迷类型中的哪一种：豪门铁粉、懂王型、数据流、氛围组、赌神型、云球迷、佛系养生球迷、战术分析师。

### 本命球队匹配器（6道题）
根据你的足球偏好，匹配 16 支顶级球队（曼城、皇马、巴萨、拜仁、利物浦等），输出匹配度和匹配原因。

---

## 🏆 球迷类型（8种）

| 类型 | emoji | 匹配球队 | 金句 |
|------|-------|----------|------|
| 豪门铁粉 | 🏆 | 巴西/德国/法国/西班牙 | 我们不是赢在现在，是赢在底蕴。 |
| 懂王型 | 🧠 | 意大利/阿根廷/英格兰 | 这球索斯盖特必须背锅。 |
| 数据流 | 📊 | 英格兰/比利时 | 这场预期进球是 2.3，你跟我说 1-0？ |
| 氛围组 | 🎉 | 谁赢支持谁 | 走！反正我支持好看的！ |
| 赌神型 | 🎰 | 赔率决定主队 | 这场不博一下对不起看球的时间。 |
| 云球迷 | ☁️ | 只认识姆巴佩和梅西 | 我就看了集锦，这球姆巴佩太牛了。 |
| 佛系养生 | 🧘 | 北欧/中小国家队 | 足球嘛，图个乐子，何必呢。 |
| 战术分析师 | 📺 | 意大利/德国 | 这球不是个人能力问题，是体系问题。 |

---

## 🛠️ 技术栈

| 层级 | 技术 |
|------|------|
| 前端框架 | React 18 + TypeScript |
| 构建工具 | Vite |
| 样式 | Tailwind CSS |
| 动效 | Framer Motion |
| 状态管理 | Zustand |
| 卡片生成 | html2canvas |
| 部署 | Vercel / Netlify / 任意静态托管 |

---

## 📁 项目结构

```
worldcup-fan-quiz/
├── PRD.md                    # 产品需求文档
├── README.md                 # 项目说明
├── index.html
├── package.json
├── vite.config.ts
├── tailwind.config.js
├── tsconfig.json
└── src/
    ├── main.tsx
    ├── App.tsx               # 主应用 + 路由
    ├── index.css
    ├── components/
    │   ├── Home.tsx          # 首页（测试类型选择）
    │   ├── Guide.tsx         # 引导页
    │   ├── Question.tsx      # 答题页
    │   ├── Reveal.tsx        # 命运揭示动画
    │   ├── Result.tsx        # 球迷结果页
    │   ├── TeamResult.tsx    # 球队匹配结果页
    │   └── ShareCard.tsx     # 分享卡片
    ├── data/
    │   ├── questions.ts      # 题目数据（球迷题+球队题）
    │   ├── fanTypes.ts       # 球迷类型定义
    │   └── teams.ts          # 球队数据 + 匹配算法
    ├── hooks/
    │   └── useQuiz.ts        # 答题状态与计算逻辑
    └── utils/
        ├── scoring.ts        # 球迷测试计分算法
        └── zhihuApi.ts       # 知乎发布 API
```

---

## 🚀 快速开始

```bash
# 克隆项目
git clone https://github.com/sunho89/worldcup-fan-quiz.git
cd worldcup-fan-quiz

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 构建生产版本
npm run build
```

---

## 🌐 部署

### Netlify（最简单）
```bash
npm run build
# 把 dist 文件夹拖到 https://app.netlify.com/drop
```

### Vercel
```bash
npm i -g vercel
vercel
```

---

## 🔐 知乎同步功能

「同步到知乎想法」功能默认是演示模式（模拟成功提示）。

如需启用真实发布，需要配置知乎开放平台的 App Key 和 App Secret：

### 配置方法

1. 打开 `src/utils/zhihuApi.ts`
2. 找到以下两行：

```typescript
const APP_KEY = ''    // 填入你的 App Key
const APP_SECRET = '' // 填入你的 App Secret
```

3. 填入你的知乎开放平台应用凭证
4. 重新 `npm run build` 部署即可

### 如何获取凭证

1. 前往 [知乎开放平台](https://openapi.zhihu.com)
2. 创建应用，获取 App Key 和 App Secret
3. 确保应用已开通「发布想法」权限

> ⚠️ 注意：凭证会暴露在前端 JS 中，适合个人使用或内部活动。如需更安全方案，建议搭建后端代理。

---

good luck！
