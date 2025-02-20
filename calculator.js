
const display = document.querySelector("#display");


function addToDisplay(input){
   
    try{
        display.value += input;
    }
    catch(error){
        display.value = "Error"
    }
}

function clearDisplay(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value);
    }
    catch(error){
        display.value = "Error";
    }
    
}

// Adds a negative sign to the display number,
// if pressed again, it will remove it.
function changeSign(){
    
    if (display.value[0] == "-"){
        display.value = display.value.slice(1);
    }
    else{
        let sign = "-";
        display.value = sign.concat(display.value)
    }
}

function percentage(){

    display.value = display.value * .01;
}