//Writing the function
function CheckMyNumber(){

//First I will make a new promise object
let valNum = new Promise((resolve, reject) =>{

    let Num = document.getElementById("posNegNumber");

    //conditional statement to check if number is good or bad according to input
    if(Num.value >= 0){
        resolve("Good");
    } 
   
    else{
        reject("Bad");
    }
});

//Printing out the confirmation message

let confirmation = document.getElementById("paraConfirm");

valNum
  .then((message) =>{
   confirmation.innerHTML = message;
  })

  .catch((errorMessage) =>{
    confirmation.innerHTML = errorMessage;
  })
 
  
 
}

//assigning event listener to the button
  let checkNum = document.getElementById("check"); 

  // Adding a delay of 3 seconds after button clicked
  //inserted the setTimeout inside an anonymous faunction and put the fuction as an argument for settimeout
  checkNum.addEventListener("click", function() {
    setTimeout(CheckMyNumber, 3000); 
  });
 