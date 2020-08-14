chrome.runtime.onMessage.addListener(function(request, sender, respond) {	
	if (request.action == "menuItemClicked") {

        let tabTitle = request.tabTitle;
        if(tabTitle.includes("google")) {
            respond({urls: google()});
        }
    }
});

function google() {
    const images = [
        "https://image.shutterstock.com/image-photo/vintage-background-little-flowers-nature-600w-1064827904.jpg",
        "https://image.shutterstock.com/image-photo/field-cosmos-flower-600w-1011699703.jpg",
        "https://image.shutterstock.com/image-photo/light-blue-flower-on-white-600w-526400839.jpg"];

    return [images];
}