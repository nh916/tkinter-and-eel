
// gets all the div elements that are hidden that contain errors
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


// if form is invalid it returns false
// if form is valid it returns true
// TODO function seems hardcoded, see if you can have a way to have it more dynamic
// TODO instead of removing .hidden class, use validation feedback
// TODO refactor since function is doing 2 things
//    1. rendering out errors
//    2. checking for validation
// TODO refactor function to be more obvious that it returns a boolean
// TODO refactor and rename function
function formValidation(userInput, errorElements) {

    /*
    isvalid is a boolean flag used to figure out if form is valid or not
    if it doesn't hit any of the validation errors, then it is valid
    if it hits any of the validations then it becomes false
    the flag gets returned at the end
    */
    let isvalid = true;

    //  host: if left empty
    if (userInput.host === "") {
        errorElements.hostError.textContent = "Error: Please input your Host";
        errorElements.hostError.classList.remove("hidden");
        isvalid = false;
    } else {
        errorElements.hostError.classList.add("hidden");
    }

    // api token: if left empty
    if (userInput.apiToken === "") {
        errorElements.apiTokenError.textContent = "Error: Please input your API Token";
        errorElements.apiTokenError.classList.remove("hidden");
        isvalid = false;
    } else {
        errorElements.apiTokenError.classList.add("hidden");
    }

    // project name: if left empty
    if (userInput.projectName === "") {
        errorElements.projectNameError.textContent = "Error: Please input your Project name";
        errorElements.projectNameError.classList.remove("hidden");
        isvalid = false;
    } else {
        errorElements.projectNameError.classList.add("hidden");
    }

    // collection name: if left empty
    if (userInput.collectionName === "") {
        errorElements.collectionNameError.textContent = "Error: Please input your Collection Name";
        errorElements.collectionNameError.classList.remove("hidden");
        isvalid = false;
    } else {
        errorElements.collectionNameError.classList.add("hidden");
    }

    // check if there is an Excel file
    if (userInput.excelFile === "") {
        errorElements.excelFileError.textContent = "Error: Please select your Excel file";
        errorElements.excelFileError.classList.remove("hidden");
        isvalid = false;
    } else {
        errorElements.excelFileError.classList.add("hidden");
    }
    return isvalid;
}

function submitForm(event) {
    // get all input values
    const host = document.getElementById("host-input").value;
    const apiToken = document.getElementById("api-token-input").value;
    const projectName = document.getElementById("project-name").value;
    const collectionName = document.getElementById("collection-name").value;

    // TODO might want to enforce boolean so it can't become anything else in the middle
    const isDataPublic = document.getElementById("public-data").checked;

    const excelFilePath = document.getElementById("excel-file-path").value;

    // Json pack of user input from UI
    const userInput = {
        "host": host,
        "apiToken": apiToken,
        "projectName": projectName,
        "collectionName": collectionName,
        "isDataPublic": isDataPublic,
        "excelFile": excelFilePath
    }

    // if form is valid
    if (formValidation(userInput, getErrorElements())) {
        eel.submit_start_screen_form(userInput);
    }

    // if is invalid
    else {
        console.log("form invalid")
    }
}

// launches a tkinter dialog box and gets the Excel file path
function getFilePathPython() {
    eel.get_excel_file_path();
}

// gets excel absolute path from python tkinter and sets the input text value
eel.expose(setExcelFilePath);
function setExcelFilePath(excelAbsolutePath) {
    const excelFilepath = document.getElementById("excel-file-path");
    excelFilepath.value = excelAbsolutePath;
}
