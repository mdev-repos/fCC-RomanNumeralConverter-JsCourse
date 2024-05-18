const userInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputContainer = document.getElementById("output");


function convertToRoman(value){
    const romanNum = [
        ['', "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
        ['', "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"],
        ['', "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
        ['', "M", "MM", "MMM"]
    ];
    let numArr = String(value).split("").map((value) => { return Number(value) });
    let numLeng = value.length - 1; var str = '';
    for (let index = 0; index < value.length; index++) {
        str += romanNum[numLeng][numArr[index]];
        numLeng--;
    };
 return str;
}

convertBtn.addEventListener('click', (e) => {
    //Prevent default actions
    e.preventDefault();
    let value = userInput.value;

    //Create a P element to show the results
    while(outputContainer.firstChild){
        outputContainer.removeChild(outputContainer.firstChild);
        outputContainer.classList.toggle("hidden");
    }
    const outputElement = document.createElement("p");
    outputContainer.classList.toggle("hidden");

    //Validation paths
   if(value == ''){
    outputElement.textContent = "Please enter a valid number";
   }
   else if(value <= 0){
    outputElement.textContent = "Please enter a number greater than or equal to 1";
   }
   else if(value >= 4000){
    outputElement.textContent = "Please enter a number less than or equal to 3999";
   }
   else{
    outputElement.textContent = `${convertToRoman(value)}`;
   }

   //Add the outputElement to outputContainer
   outputContainer.appendChild(outputElement);
});