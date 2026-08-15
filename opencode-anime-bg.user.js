// ==UserScript==
// @name         opencode Anime — 随机背景图（动态时间戳防缓存）
// @namespace    local.opencode.anime
// @version      1.0.0
// @description  opencode Web UI 二次元主题配套脚本：每次加载页面时为背景图注入带新时间戳的 URL，绕过 t.alcy.cc 的 30 天缓存，保证刷新即换图。配合 Stylus 样式 opencode-anime.user.css 使用。
// @author       you
// @match        http://127.0.0.1:4096/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  const BG_URL = 'https://t.alcy.cc/pc/';

  function applyBg() {
    const url = BG_URL + '?_=' + Date.now();
    // 写入根元素 CSS 变量 --anime-bg，主题样式 html::before 读取它
    document.documentElement.style.setProperty('--anime-bg', 'url("' + url + '")');
  }

  // document-start 时根元素可能尚未就绪，等 DOMContentLoaded 再注入
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', applyBg);
  } else {
    applyBg();
  }
})();
