chrome.runtime.onMessage.addListener(function(request) {
	populateImagesPage(request.urls);
});

function populateImagesPage(urls, tabTitle) {
	google(urls);
}

function google(urls) {
	console.log(urls);
	for (let i = 0; i < urls[0].length; i++) {
		document.getElementById('content').append(
			getImage(urls[0][i])
		);
	}
}

function getImage(url) {
    
    let content;
	const img = document.createElement('img');
    img.setAttribute('src', url);
    content = img;

	return content;
}

