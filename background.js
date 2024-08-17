console.log("Background script running...");

// Example: Listener for active tab updates
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (changeInfo.status === 'complete' && tab.active) {
    console.log("Active tab updated:", tab.url);
    // Add your time tracking logic here
  }
});

