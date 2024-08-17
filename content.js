console.log("Content script running...");

// Example: Tracking time spent on a specific web page
let startTime = Date.now();

window.addEventListener('beforeunload', () => {
  let endTime = Date.now();
  let timeSpent = endTime - startTime;
  console.log("Time spent on this page:", timeSpent / 1000, "seconds");
  // Send data to background script or store locally
});
console.log("content script running....");
let startTime =Date.now();
