let clarificationBoxTitle = document.querySelector(".content-title").innerText;
let clarificationBox = document.getElementById("clarify-box");
let keyWordContained =
  clarificationBoxTitle === "Coronavirus" ||
  clarificationBoxTitle === "COVID-19";

// YouTube doesn't reload the page when you click a new video so the current display: none is persistent longer than you might want to. This could be extended with a background script that listens via chrome.tabs.onUpdated.addListener for URL changes and sends a message to this contentScript via chrome.extension.onMessage.addListener just whenever a new YouTube video was loaded.

clarificationBox && keyWordContained
  ? (clarificationBox.style.display = "none")
  : console.log("No coronavirus on this page detected!");
