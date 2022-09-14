/*
// takes a string error and creates it into a good html error and attaches it to screen
result is:
    <div class="alert alert-danger" role="alert">
        <b>Sheet:</b> Material
        <br>

        <b>Column:</b> H
        <br>

        <b>Row:</b> 14
        <br>

        <b>Issue:</b> sample_preparation does not have a corresponding data node
    </div>
*/
function addErrorsToScreen(error) {
    // TODO could this be a security risk?
    let errorAlert = $(`<div class="alert alert-danger" role="alert">${error} </div>`);
    $("#error-window").append(errorAlert);
}
// TODO need to take into consideration about how to give the total number of errors ie "15 Errors"
















