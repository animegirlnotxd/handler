chrome.contextMenus.onClicked.addListener(function(info, tab) {
    if(info.menuItemId == "load") {
        chrome.tabs.sendMessage(
            tab.id,
            {action: 'menuItemClicked', tabTitle: tab.title.toLowerCase()}, function(response) {
                sendImages(tab.id, response, tab.title.toLowerCase());
                console.log(response);
        });
	}
});
let pendingTabs = new Array();

chrome.tabs.onUpdated.addListener(
	function(tabId, changeInfo, tab) {

		//Execute the handler
        const magic = pendingTabs[tabId];
        magic(tabId);
		// Delete the handler
		delete pendingTabs[`foobar`];
});

function sendImages(tabId, response, tabTitle) {
    const urls = response.urls;
    
    chrome.tabs.create({url: chrome.runtime.getURL('html/images.html')}, function(tab) {            


        function handler(tabId) {
            chrome.tabs.sendMessage(tabId, {urls: urls});
        };
        
        pendingTabs[tab.id] = handler;
    });
}