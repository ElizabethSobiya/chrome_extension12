chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    let html = document.documentElement.outerHTML;
    navigator.clipboard.writeText(html);
  });
  