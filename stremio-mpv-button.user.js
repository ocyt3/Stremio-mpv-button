// ==UserScript==
// @name        Stremio mpv button
// @namespace   Violentmonkey Scripts
// @match       https://web.stremio.com/*
// @grant       none
// @version     0.1
// @author      ocyt3
// @description 2/8/2024, 8:50:17 PM
// ==/UserScript==

let mpvIcon = '<svg viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg" xml:space="preserve" x="0" y="0" style="flex: none; height: 2.5rem; width: 2.5rem; color: rgba(255,255,255,0.9);" version="1.1"><style>.st0,.st1{fill:none;stroke:currentcolor;stroke-width:12;stroke-miterlimit:10}.st1{stroke-width:6}</style><circle cx="96" cy="96" r="74" class="st0"/><path d="M112.8 94.1 85.5 78.4c-1.4-.9-3.4.2-3.4 1.9v31.5c0 1.6 1.9 2.8 3.4 1.9L112.7 98c1.5-1 1.5-3.1.1-3.9z" class="st0"/><circle cx="96" cy="96" r="39" class="st1"/><circle cx="98" cy="92.4" r="52.5" class="st1"/></svg>'

async function waitForElement(selector, timeout = 15000) {
  const start = Date.now();

  while (Date.now() - start < timeout) {
    const el = document.querySelectorAll(selector);
    if (el.length == 1) {
      return el;
    }
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  return null;
}

waitForElement('[ class^="control-bar-buttons-menu-container" ]').then(menubarContainer => {
  let buttonContainer = document.createElement("a")
  buttonContainer.style.cssText = 'align-items: center; display: flex; flex: none; height: 5rem; justify-content: center; width: 4rem;'
  buttonContainer.insertAdjacentHTML("afterbegin", mpvIcon);
  buttonContainer.href = 'mpvurl://'

  menubarContainer[0].childNodes[menubarContainer[0].childElementCount - 1].before(buttonContainer)
});

