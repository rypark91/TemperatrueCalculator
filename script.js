var body = document.querySelector("body");

var fahrenheitText = document.querySelector("#fahrenheit");
var celciusText = document.querySelector("#celcius");

var fButton = document.querySelector("#fButton");
var cButton = document.querySelector("#cButton");

fButton.addEventListener("click", function(){
    var key = validateInput(String(fahrenheitText.value).split(''));
    if(key){
        calculateC(fahrenheitText.value);
    }
    else{
        alert("Input must not contain letters, special characters, spaces, or more than one decimal point.")
    }
    
});
cButton.addEventListener("click", function(){

    calculateF(celciusText.value);
});

function calculateC(far){
    var answer = (far - 32) * (5/9);
    celciusText.value = answer;
    changeBackground(far);
}
function calculateF(cel){
    var answer = Math.floor((cel * 1.8) + 32);
    fahrenheitText.value = answer;
    changeBackground(answer);
}
function changeBackground(temp){
    console.log(Number(temp));
    if(Number(temp) > 101){
        body.style.background = `red`;
    }
    else if(Number(temp) < 1){
        body.style.background = `blue`;
        
    }
    else{
        if(Number(temp) > 50){
            var tempVal = (102 - temp) * 5;
            body.style.background = `rgb(255,0,${tempVal})`;
        }
        else{
            var tempVal = temp * 5
            body.style.background = `rgb(${tempVal},0,255)`;
        }
    }
}
function validateInput(input){
    var input = String(fahrenheitText.value).split('');
    var characterArray = Array.from(input);
    var calcluationKey = true;
    var decimalCount = 0;
    for(var i = 0; i< characterArray.length; i++){
        if(characterArray[i] == ' '){
            calcluationKey = false;
            break;
        }
        else if(!isNaN(characterArray[i] * 1)){
            continue;
        }
        else if(characterArray[i] == '.'){
            if(decimalCount == 0){
                decimalCount = 1;
            }
            else{
                calcluationKey = false;
                break;
            }
        }
        else if(characterArray[i] == characterArray[i].toUpperCase()){
            calcluationKey = false;
            break;
        }
        else if(characterArray[i] == characterArray[i].toLowerCase()){
            calcluationKey = false;
            break;
        }
        
        else{
            calcluationKey = false;
            break;
        }
    }
    decimalCount = 0;
    return calcluationKey;
}
