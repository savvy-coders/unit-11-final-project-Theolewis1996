// Add your script below this line, but above the next comment!
function getBtnAndShow() {
    function displayDateAndTime() {
        document.getElementById('time').innerHTML = Date();
    }
    document.getElementById('timeCheckBtn').addEventListener('click', displayDateAndTime);
}




// This export is to enable testing of your two testable primary functions.
// PLEASE DO NOT EDIT below this line!!!

module.exports.getBtnAndShow = getBtnAndShow;
module.exports.clearDateAndTime = clearDateAndTime;


