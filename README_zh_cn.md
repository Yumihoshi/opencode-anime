# opencode-anime

[![](https://starry-trace-sky-moe-counter.vercel.app/get/@opencode-anime?theme=rule34)](https://github.com/Yumihoshi/opencode-anime)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](LICENSE)
![CSS3](https://img.shields.io/badge/CSS3-%231572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-%23F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Stylus](https://img.shields.io/badge/Stylus-%23333333?style=for-the-badge&logo=stylus&logoColor=white)
![Tampermonkey](https://img.shields.io/badge/Tampermonkey-%2300485B?style=for-the-badge&logo=tampermonkey&logoColor=white)

> ⚠️ **适用范围**：本项目只适用于通过 `opencode web` 命令启动的 Web UI 版本美化，不适用于终端 CLI 等其他使用方式。
>
> 自用的 opencode Web UI 二次元主题 —— **Dracula 紫粉霓虹配色 + 随机二次元壁纸背景**。

用 Stylus 注入纯 CSS 换肤，配合 Tampermonkey 脚本注入带时间戳的随机背景图，实现刷新即换图。仅覆盖 CSS 变量与稳定 `data-*` 属性，**不改布局结构、不隐藏任何功能元素**。

[English](./README.md) | **中文**

## 📸 预览

<p align="center">
  <img src="img/home.png" alt="首页预览" width="49%" />
  <img src="img/session.png" alt="对话预览" width="49%" />
</p>

## ✨ 特性

- 🎨 **Dracula 紫粉霓虹配色**：主强调紫 `#BD93F9`、次强调粉 `#FF79C6`，状态色沿用 Dracula 官方色板
- 🖼️ **随机二次元背景**：来自 [t.alcy.cc](https://t.alcy.cc/pc/) 图源，脚本注入时间戳绕过 30 天缓存，**刷新即换图**
- 🧊 **毛玻璃质感**：侧栏 / 弹层 / 对话框 / 菜单统一 `blur(14px) + saturate(1.2)`
- 📜 **自定义滚动条**：隐藏原生条与组件灰色细条，单条 4px 紫粉渐变胶囊
- 🌈 **diff 高亮**：修复 shadow DOM 内 diff 行颜色（新增绿 `#50FA7B` / 删除红 `#FF5555`，VSCode 风格）
- 💬 **消息区分**：user 紫色描边 / assistant 深色描边
- ⌨️ **输入框霓虹聚焦**：半透明玻璃底 + 聚焦粉色光晕，placeholder 独立提亮
- 🚀 **紫粉渐变发送按钮**：直角扁平 → 紫粉渐变胶囊 + 玻璃高光 + 光晕，hover 提亮上浮
- 🔘 **玻璃风开关**：设置面板开关改为紫粉玻璃胶囊，选中渐变淡入 + 圆钮滑动动画

## 📦 文件说明

| 文件 | 作用 |
|------|------|
| `opencode-anime.user.css` | Stylus 主题样式（纯 CSS，无 UserCSS 头部） |
| `opencode-anime-bg.user.js` | Tampermonkey 脚本：为背景图注入时间戳防缓存 |

## 🍜 食用指南

> 前置：已在本机运行 opencode Web UI（访问地址形如 `http://127.0.0.1:端口`），且使用 Chrome / Edge / Firefox 等支持扩展的浏览器。
>
> **重要：本主题基于深色模式 + 官方 TokyoNight 主题改造，请先在 opencode 设置中把主题切换为官方 TokyoNight 并选择深色模式**，否则样式可能显示异常。

<p align="center">
  <img src="img/setting.png" alt="主题与深色模式设置" width="80%" />
</p>

### 第一步：安装 Stylus 主题

1. 安装 [Stylus](https://chromewebstore.google.com/detail/stylus/clngdbkpkpeebahjckkjfobafhncgmne) 浏览器扩展；
2. 点击扩展图标 → **管理** → **新建样式**；
3. 将 [`opencode-anime.user.css`](opencode-anime.user.css) 的**全部内容**粘贴到编辑器，保存；
4. 在样式设置页中，代码编辑顶部设置前缀 URL（**端口记得改成你自己的**，例如 opencode 跑在 8765 端口就填 `http://127.0.0.1:8765/*`）：
   - `http://127.0.0.1:你的端口/*`
   - `http://localhost:你的端口/*`

   <p align="center">
     <img src="img/setting2.png" alt="Stylus 应用于配置" width="80%" />
   </p>
5. 刷新 opencode 页面，主题即生效。

> [!IMPORTANT]
> 本文件是**纯 CSS，没有 UserCSS 头部**（`==UserStyle==`）。带 `@match` 的头部被 Stylus 注入后，浏览器会把 `@match` 当作无效 at-rule，**吞掉整个变量块导致主题失效**。所以匹配必须通过界面的「应用于」配置，不要手动添加 `@match`。

### 第二步：安装随机背景脚本（强烈推荐）

> 背景图源接口带 `Cache-Control: max-age=2592000`（30 天缓存）。不装脚本时背景仍可用，但 30 天内刷新不换图。

1. 安装 [Tampermonkey](https://www.tampermonkey.net/) 浏览器扩展；
2. 点击扩展图标 → **添加新脚本**，将 [`opencode-anime-bg.user.js`](opencode-anime-bg.user.js) 全部内容粘贴替换，保存；
3. 打开脚本编辑页，把 `@match` 里的端口改成**你自己的 opencode 端口**（默认写的是 `http://127.0.0.1:*/*` 通配所有端口，如果你的 opencode 跑在指定端口，如 8765，就改成 `http://127.0.0.1:8765/*`），保存并确认脚本处于**启用**状态；
4. 刷新 opencode 页面。

### 完成 🎉

刷新后应看到：Dracula 紫粉配色 + 随机二次元壁纸背景 + 毛玻璃侧栏。每次刷新都会换一张背景图。

## ⚙️ 调参

所有可调参数集中在 CSS 顶部 `html[data-theme]` 的 `--anime-*` 变量区：

| 变量 | 默认值 | 说明 |
|------|--------|------|
| `--anime-bg-opacity` | `0.55` | 背景图浓度（0.50–0.60 区间） |
| `--anime-glass-blur` | `14px` | 毛玻璃模糊半径 |
| `--anime-shell-alpha` | `0.32` | 内容容器底透明度（0.30–0.38 区间） |
| `--anime-review-alpha` | `0.12` | 审查面板容器叠加透明度 |

修改后保存，刷新页面生效。想换主题色，直接改 `--primary`（紫）/ `--accent`（粉）即可。

> [!NOTE]
> Stylus 样式每次修改后需要**手动重新粘贴**（无热更新）。

## 🖼️ 随机背景 API

背景图源为 [https://t.alcy.cc/pc/](https://t.alcy.cc/pc/)：每次请求随机返回一张二次元 PC 壁纸（HTTPS，符合 opencode 的 `img-src https:` CSP）。脚本每次加载页面都会追加 `?_=<时间戳>` 参数绕过缓存。图片加载失败时自动回退为纯色 `#282A36`，其余样式不受影响。

## 📄 许可证

[MIT](LICENSE) © 2026 绘星tsuki

## 🤖 关于本项目

本项目由 **DeepSeek V4 Flash** 通过 **Vibe Coding** 方式创作（本人负责提需求、验收与微调，AI 负责实现）。欢迎任何人在此基础上自由修改、魔改、扩展，也欢迎提交 Issue 与 PR 一起完善～
