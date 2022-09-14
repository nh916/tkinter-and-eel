// handles if user clicks cancel button while uploading
function cancelUpload() {
    // when cancel button is clicked indicate to user that their upload has been canceled
    eel.cancel_upload();
}


// handles updating progress bar and can be called from python code
eel.expose(updateLoadingBar);

function updateLoadingBar(progressNumber) {
    // must change aria-valuenow, text content, style width
    const progressbar = document.getElementById("uploader-progress");

    // converts 10 to 10%
    const progressPercent = `${progressNumber}%`;

    // aria-value-now (accessibility) needs raw number
    progressbar.ariaValueNow = progressNumber;

    // width and text content both use percentage
    progressbar.style.width = progressPercent;
    progressbar.textContent = progressPercent;

    // TODO test make this correct
    // if reaches 100% then go to success screen
    if (progressNumber === 100) {

        // TODO wait a second and then navigate to success screen so the user can see progress bar reached 100
        goToSuccessScreen();
    }
}