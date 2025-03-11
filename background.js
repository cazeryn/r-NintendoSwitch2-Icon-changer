chrome.runtime.onInstalled.addListener(() => {
  chrome.scripting.registerContentScripts([
    {
      id: "replaceIcons",
      matches: ["*://www.reddit.com/*"],
      js: ["content.js"],
      runAt: "document_idle"
    }
  ]);
});
