let arr=[];
let indx=0;
let i=0;
let n= prompt("Enter faultiness of the calculator: ");

// obj for modification purpose
let obj={
    "+": "-",
    "-": "/",
    "*": "+",
    "/" : "**"
}
//For any%
faultyPerchantage(n);
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

function faultyPerchantage(n){
    for(let i=0; i<n;i++){
        let random= getRandomInt(100);
        
        while(arr.includes(random)){
            random = getRandomInt(100);  // Generate a new random number
        }
        arr[i]=random;
}
    arr.sort((a,b)=>a-b);
    console.log(`Random values are: ${arr}`);
}


newPrompt();
function newPrompt(){ 
     firstVal = prompt("Enter the First number: ");
     secondVal = prompt("Enter the Second number: ");
     symbol= prompt("Enter desirable calculation(+,-,*,/): ");
     calculator(firstVal, secondVal, symbol);
}

//printing the output
function printValue(value){
    console.log(`Answer: ${value}`);
}

function increement(){
    indx++;
    i++;
}

/*

function calculator(firstVal, secondVal, symbol){
        if(indx==arr[i]){
            if(symbol=="+"){
            let result=Number(firstVal)-Number(secondVal);
                printValue(result);
                increement();
                newPrompt();
            }
            else if(symbol=="-") {
            let result=Number(firstVal)/Number(secondVal);
                printValue(result);
                increement();
                newPrompt();
            }
          
            else if(symbol=="*") {
            let result= Number(firstVal)+Number(secondVal);
                printValue(result);
                increement();
                newPrompt();
            }
            else if(symbol=="/") {
            let result= Number(firstVal)**Number(secondVal);
                printValue(result);
                increement();
                newPrompt();
            }
            
        }
        else {
            if(symbol=="+"){
            let result= Number(firstVal)+Number(secondVal);
                printValue(result);
                indx++;
                newPrompt();
            }
           
            else if(symbol=="-") {
            let result= Number(firstVal)-Number(secondVal);
                printValue(result);
                indx++;
                newPrompt();
            }
            else if(symbol=="*") {
            let result= Number(firstVal)*Number(secondVal);
                printValue(result);
                indx++;
                newPrompt();
            }
            else if(symbol=="/") {
            let result= Number(firstVal)/Number(secondVal);
                printValue(result);
                indx++;
                newPrompt();
            }
        }
    
    if(indx==100)indx=0;
    if(i==n)i=0;
  
}*/


//Modified version using eval()


function calculator(firstVal, secondVal, symbol){
if(indx==arr[i]){
    //wrong calculation
    symbol= obj[symbol];
    console.log(`Answer: ${eval(`${firstVal} ${symbol} ${secondVal}`)}`);
    increement();
    newPrompt();
    
}
else{
    // right calculation
    console.log(`Answer: ${eval(`${firstVal} ${symbol} ${secondVal}`)}`);
    indx++;
    newPrompt();
}
}