let runningTotal=0;
let buffer ="0";
let previousOperator;

const screen = document.querySelector('.scrren');


function buttonClick(value){
    if(isNaN(value)){
        handleSymbol(value);
    }else{
        handleNumber(value);
    }
    screen.innerText = buffer;
}

function handleSymbol(symbol){
    switch(symbol){
        case 'C':
            buffer='0';
            runningTotal = 0;
            break;

        case '=':
            if(previousOperator===Null){
                return 
            }
            flushOperation(parseInt(buffer));
            previousOperator=null;
            buffer=runningTotal;
            runningTotal=0;
            break;

        case '←':
            
    }
}