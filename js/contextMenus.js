chrome.runtime.onInstalled.addListener(function() {
    let contextMenuSites = [
        "https://www.google.be/"
    ];
    
    let contextMenuOptions = {
        "id": "load",
        "title": "Load",
        "documentUrlPatterns": contextMenuSites,
        "contexts": ["all"]
    };
    
    chrome.contextMenus.create(contextMenuOptions);
});