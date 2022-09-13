function getErrorElements() {
    // get all error elements
    const hostError = document.getElementById("host-error");
    const apiTokenError = document.getElementById("api-token-error");
    const projectNameError = document.getElementById("project-name-error");
    const collectionNameError = document.getElementById("collection-name-error");
    const excelFileError = document.getElementById("excel-file-error");
    const dataPrivacyError = document.getElementById("data-privacy-error");

    return {
        "hostError": hostError,
        "apiTokenError": apiTokenError,
        "projectNameError": projectNameError,
        "collectionNameError": collectionNameError,
        "excelFileError": excelFileError,
        "dataPrivacyError": dataPrivacyError,
    }
}


// TODO future refactoring
// loop through userInput json and error elements (both have exactly 5 elements)
// at the same time when there is an error in userInput then put up the error
// you can use the same pointer for both
function formValidation(userInput, errorElements) {

    //  host: if left empty
    if (userInput.host === "") {
        errorElements.hostError.textContent = "Error: Please input your Host";
        errorElements.hostError.classList.remove("hidden");
    } else {
        errorElements.hostError.classList.add("hidden");
    }

    // api token: if left empty
    if (userInput.apiToken === "") {
        errorElements.apiTokenError.textContent = "Error: Please input your API Token";
        errorElements.apiTokenError.classList.remove("hidden");
    } else {
        errorElements.apiTokenError.classList.add("hidden");
    }

    // project name: if left empty
    if (userInput.projectName === "") {
        errorElements.projectNameError.textContent = "Error: Please input your Project name";
        errorElements.projectNameError.classList.remove("hidden");
    } else {
        errorElements.projectNameError.classList.add("hidden");
    }

    // collection name: if left empty
    if (userInput.collectionName === "") {
        errorElements.collectionNameError.textContent = "Error: Please input your Collection Name";
        errorElements.collectionNameError.classList.remove("hidden");
    } else {
        errorElements.collectionNameError.classList.add("hidden");
    }

    // check if there is an Excel file
    if (userInput.excelFile.length < 1) {
        errorElements.excelFileError.textContent = "Error: Please select your Excel file";
        errorElements.excelFileError.classList.remove("hidden");
    } else {
        errorElements.excelFileError.classList.add("hidden");
    }


}

function submitForm(event) {
    // get all input values
    const host = document.getElementById("host-input").value;
    const apiToken = document.getElementById("api-token-input").value;
    const projectName = document.getElementById("project-name").value;
    const collectionName = document.getElementById("collection-name").value;

    // TODO might want to enforce boolean so it can't become anything else in the middle
    const isDataPublic = document.getElementById("public-data").checked;

    const excelFile = document.getElementById("excel-file").files;
    console.log(excelFile);

    const userInput = {
        "host": host,
        "apiToken": apiToken,
        "projectName": projectName,
        "collectionName": collectionName,
        "dataPrivacyOption": isDataPublic,
        "excelFile": excelFile
    }

    // show validation errors
    formValidation(userInput, getErrorElements());


}
