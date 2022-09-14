// TODO could use some refactoring to get it a lot cleaner and simpler

// base url of the app
const rootUrl = "http://localhost:8000/templates"

// file name variables used to change screens
const start_URL = "start_screen.html";
const loading_URL = "loading_screen.html";
const error_URL = "error_screen.html";
const success_URL = "success_screen.html";

// navigate to start screen
eel.expose(goToStartScreen);

function goToStartScreen() {
    window.location.replace(`${rootUrl}/${start_URL}`);
}


// navigate to loading screen
eel.expose(goToLoadingScreen);

function goToLoadingScreen() {
    window.location.replace(`${rootUrl}/${loading_URL}`);
}

// navigate to error screen
eel.expose(goToErrorScreen);

function goToErrorScreen() {
    window.location.replace(`${rootUrl}/${error_URL}`);
}

// navigate to Success screen
eel.expose(goToSuccessScreen);

function goToSuccessScreen() {
    window.location.replace(`${rootUrl}/${success_URL}`);
}
