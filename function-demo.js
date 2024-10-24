let sum = (x,y) =>(x + y);
// document.write(`<h3>The sum of 5 and 7 is ${sum(5,7)}<h3><br>`);

function Calculate(event){
    event.preventDefault();
    // Get values from input fields and calculate sum
    let x = parseFloat(document.getElementById('num1').value);
    let y = parseFloat(document.getElementById('num2').value);
    let result = sum(x,y);
    console.log(`The sum of ${x} and ${y} is ${result}`);
    document.getElementById('result').innerHTML = `The sum of ${x} and ${y} is ${result}<br>`;
}