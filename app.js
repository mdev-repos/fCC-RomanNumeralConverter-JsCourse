const userInput = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const outputContainer = document.getElementById("output");



convertBtn.addEventListener('click', ()=>{
    /*/While div already have a p, erase p
    while(outputContainer.firstChild){
        outputContainer.removeChild(outputContainer.firstChild);
    }

    outputElement = document.createElement("p");

    switch(userInput.value){

    }
    */
   console.log(userInput.value);
})


/*
const resultElement = document.createElement("p");


//Functions

function inputValidation(inputValue){

    resultElement.innerText = '';

    //Validation paths
    if(inputValue==''){
        resultElement.innerText = "Please enter a valid number";
    }
    else if(inputValue<=0){
        resultElement.innerText = "Please enter a number greater than or equal to 1";
    }
    else if(inputValue=4000){
        resultElement.innerText = "Please enter a number less than or equal to 3999";
    }
    else{
        convertToRoman();
    }

    outputContainer.appendChild(resultElement);
}

function convertToRoman(value){

}


//Event handler
convertBtn.addEventListener('click', inputValidation(userInput.value));

*/