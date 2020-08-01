function checkForYoutubeURL(setoffYoutube: Function): void {
  chrome.tabs.query(
    { active: true, windowId: chrome.windows.WINDOW_ID_CURRENT },
    function (tabs: any[]) {
      if (tabs[0].url.includes("https://www.youtube.com/watch")) {
        setoffYoutube(false);
      }
    }
  );
}

export default checkForYoutubeURL;
