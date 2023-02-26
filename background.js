chrome.contextMenus.create({
    id: "copyPageContent",
    title: "Copy Page Content",
    contexts: ["page"]
  });
  
  chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "copyPageContent") {
      chrome.scripting.executeScript({
        target: {tabId: tab.id},
        func: () => {
          let html = document.documentElement.outerHTML;
          navigator.clipboard.writeText(html);
        }
      });
    }
  });