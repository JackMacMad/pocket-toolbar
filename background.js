browser.browserAction.onClicked.addListener((tab) => {
    browser.tabs.create({ //sync
        url: "https://getpocket.com" 
    })
});