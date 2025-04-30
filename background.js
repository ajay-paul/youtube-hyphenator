// Listen for navigation events
chrome.webNavigation.onBeforeNavigate.addListener(
    async (details) => {
      if (details.frameId !== 0) {
        return;
      }
  
      const data = await chrome.storage.sync.get(['isEnabled']);
      const isEnabled = data.isEnabled === undefined ? true : data.isEnabled;
  
      if (!isEnabled) {
          console.log('YouTube Hyphenator is disabled. Skipping redirect.');
          return;
      }
  
      const url = new URL(details.url);
  
      if (url.hostname === 'www.youtube.com' || url.hostname === 'youtube.com') {
        console.log(`Original YouTube URL detected: ${details.url}`);
  
        const newHostname = url.hostname.replace('youtube.com', 'yout-ube.com');
        const newUrl = details.url.replace(url.hostname, newHostname);
  
        console.log(`Redirecting tab ${details.tabId} to: ${newUrl}`);
  
        // Perform the redirect
        chrome.tabs.update(details.tabId, { url: newUrl });
      }
    },
    {
      url: [{ hostContains: '.youtube.com' }]
    }
  );
  
  chrome.runtime.onStartup.addListener(() => {
    console.log("YouTube Hyphenator service worker started on browser startup.");
  });
  chrome.runtime.onInstalled.addListener(() => {
    console.log("YouTube Hyphenator service worker installed/updated.");
    chrome.storage.sync.get(['isEnabled'], (result) => {
      if (result.isEnabled === undefined) {
        chrome.storage.sync.set({ isEnabled: true });
        console.log("Default state (enabled) set.");
      }
    });
  });
  
  console.log("YouTube Hyphenator service worker initialized.");