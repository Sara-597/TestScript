// ==UserScript==
// @name Themed BC
// @namespace https://www.bondageprojects.com/
// @version 0.1
// @description idk
// @author  Sara597
// @match https://bondageprojects.elementfx.com/*
// @match https://www.bondageprojects.elementfx.com/*
// @match https://bondage-europe.com/*
// @match https://www.bondage-europe.com/*

// @grant none
// @run-at document-end
// ==/UserScript==

(function () {
  "use strict";
  const script = document.createElement("script");
  script.type = "module";
  script.setAttribute("crossorigin", "anonymous");
  script.src = `https://sara-597.github.io/TestScript/test.ts?v=${Date.now()}`;
  document.head.appendChild(script);
})();
