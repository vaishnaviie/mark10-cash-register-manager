var billAmount=document.querySelector("#bill-amount");
var cashGiven=document.querySelector("#cash-given");
var buttonCalculate=document.querySelector("#btn-calculte");
var errorMsg=document.querySelector("#error-msg");
var displayNotes=document.querySelectorAll(".noOfNotes");

var arr=[2000,500,100,10,5,1];

function helper(amountToBeReturned){
    for(let i=0;i<arr.length;i++){
        var amount=Math.trunc(amountToBeReturned/arr[i]); 
        amountToBeReturned=amountToBeReturned%arr[i];
 
        displayNotes[i].innerText=amount;
    }
}

function displayMessage(msg){
    errorMsg.innerText=msg;
}

function calculate(){
    
    if(Number(billAmount.value)>0 && Number(cashGiven.value)>0){
        
        if(Number(cashGiven.value)>Number(billAmount.value)){
            var amountToBeReturned=(cashGiven.value)-(billAmount.value);
            helper(amountToBeReturned);
            displayMessage(`₹ ${amountToBeReturned} needs to return.`);
        }

        else if(Number(cashGiven.value)===Number(billAmount.value)){
            displayMessage(`No amount needs to return.`);
        }

        else{
            displayMessage("Bill amount should at least be equal to cash given.");
        }
    }
    
    else{
        displayMessage("Enter positive value. Make sure all the fields are filled");
        
    }   
}

buttonCalculate.addEventListener("click",calculate);