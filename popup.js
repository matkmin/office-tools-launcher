document.querySelectorAll(".card").forEach((btn) => {
  btn.addEventListener("click", () => {
    const url = btn.getAttribute("data-url");
    if (url) {
      chrome.tabs.create({ url });
    }
  });
});
