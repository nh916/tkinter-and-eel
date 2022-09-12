/*
document.querySelector("#auth_form").addEventListener("submit",
    function (event) {
//    TODO validate token
//    after validation, pass to excel uploader to validate and if errors then output the errors
//    hand over the data in json from js to eel python and then to excel uploader
        console.log("hello world!");
        // console.log(event);
        event.preventDefault();
        return false;
    }
);
*/

function formValidation(host, apiToken, projectName, collectionName, isDataPublic, excelFile) {
//    host validation
    if (host === "") {

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

    // show validation errors
    formValidation(host, apiToken, projectName, collectionName, isDataPublic, excelFile);


    const userInput = {
        "host": host,
        "api-token": apiToken,
        "project-name": projectName,
        "collection-name": collectionName,
        "data-privacy-option": isDataPublic
    }

}
