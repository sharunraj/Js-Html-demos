function copyText(){
    // Select the text
    var text1 = document.getElementById('text1').value;
    document.getElementById('text2').value = text1;
}
function clearText(){
    // Clear the text
    document.getElementById('text1').value = '';
    document.getElementById('text2').value = '';

}