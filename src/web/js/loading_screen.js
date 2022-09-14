

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

    console.log(`style width: ${progressbar.style.width}, text: ${progressbar.textContent}, aria value now: ${progressbar.ariaValueNow}`);
}