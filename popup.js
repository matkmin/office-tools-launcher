document.querySelectorAll("button").forEach((btn) => {
  btn.addEventListener("click", () => {
    const url = btn.getAttribute("data-url");
    chrome.tabs.create({ url });
  });
});
