
// get input elements, pack them inside JSON, and return JSON package
function getInputElements() {
    // get all input elements
    const host = document.getElementById("host-input");
    const apiToken = document.getElementById("api-token-input");
    const projectName = document.getElementById("project-name");
    const collectionName = document.getElementById("collection-name");

    // TODO might want to enforce boolean so it can't become anything else in the middle
    const isDataPublic = document.getElementById("public-data");

    const excelFilePath = document.getElementById("excel-file-path");

    return {
        "host": host,
        "apiToken": apiToken,
        "projectName": projectName,
        "collectionName": collectionName,
        "isDataPublic": isDataPublic,
        "excelFile": excelFilePath
    }
}


// if form is invalid it returns false
// if form is valid it returns true
// TODO refactor since function is doing 2 things
//    1. rendering out errors
//    2. checking for validation
// TODO refactor function to be more obvious that it returns a boolean
// TODO refactor and rename function
function formValidation(userInput, inputElements) {

    /*
    isvalid is a boolean flag used to figure out if form is valid or not
    if it doesn't hit any of the validation errors, then it is valid
    if it hits any of the validations then it becomes false
    the flag gets returned at the end
    */
    let isvalid = true;

    // adds the appropriate class to the element and removes the other if it exists

    //  host: if left empty
    if (userInput.host === "") {
        inputElements.host.classList.add("is-invalid");
        inputElements.host.classList.remove("is-valid");
        isvalid = false;
    } else {
        inputElements.host.classList.add("is-valid");
        inputElements.host.classList.remove("is-invalid");
    }

    // api token: if left empty
    if (userInput.apiToken === "") {
        inputElements.apiToken.classList.add("is-invalid");
        inputElements.apiToken.classList.remove("is-valid");
        isvalid = false;
    } else {
        inputElements.apiToken.classList.add("is-valid");
        inputElements.apiToken.classList.remove("is-invalid");
    }

    // project name: if left empty
    if (userInput.projectName === "") {
        inputElements.projectName.classList.add("is-invalid");
        inputElements.projectName.classList.remove("is-valid");
        isvalid = false;
    } else {
        inputElements.projectName.classList.add("is-valid");
        inputElements.projectName.classList.remove("is-invalid");
    }

    // collection name: if left empty
    if (userInput.collectionName === "") {
        inputElements.collectionName.classList.add("is-invalid");
        inputElements.collectionName.classList.remove("is-valid");
        isvalid = false;
    } else {
        inputElements.collectionName.classList.add("is-valid");
        inputElements.collectionName.classList.remove("is-invalid");
    }

    // check if there is an Excel file path
    if (userInput.excelFile === "") {
        inputElements.excelFile.classList.add("is-invalid");
        inputElements.excelFile.classList.remove("is-valid");
        isvalid = false;
    } else {
        inputElements.excelFile.classList.add("is-valid");
        inputElements.excelFile.classList.remove("is-invalid");
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

    // TODO refactor to change excelFile to excelFilePath, isDataPublic to dataIsPublic
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
    if (formValidation(userInput, getInputElements())) {
        console.log("form is valid");
        eel.set_auth_variables(userInput);
        eel.connect_to_cript();
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
