

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




function formValidation(userInput, errorElements) {

    console.log(`userInput: ${userInput}, errors: ${errorElements}`)

    console.log(`userInput: ${userInput[0]}`)

//todo this method is not working
    // loop through userInput json and error elements (both have exactly 5 elements)
    // at the same time when there is an error in userInput then put up the error
    // you can use the same pointer for both
    for (let i = 0; (i < userInput.length && i < errorElements.length); i++) {

        console.log(i)

        if (userInput[i] === "") {
            errorElements[i].className.remove("hidden");
        }
        else {
            errorElements[i].className.add("hidden");
        }
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
        "api-token": apiToken,
        "project-name": projectName,
        "collection-name": collectionName,
        "data-privacy-option": isDataPublic,
        "excel-file": excelFile
    }

    // show validation errors
    formValidation(userInput, getErrorElements());


}
