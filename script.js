// let btns = document.querySelectorAll(".item");
// let msg = document.querySelector(".msg");
// let string = "";


// Array.from(btns).forEach((btn)=>{

// btn.addEventListener("click",(e)=>{
//     string = string + e.target.innerHTML;
//     // msg.innerHTML = string;
//     if(e.target.innerHTML === "="){
//          let result = eval(string.slice(0, -1)); 
//          msg.innerHTML = result; 
//          string = result; 
//     }else if(e.target.innerHTML === "x"){
//          string = string + "*" ;

//     }else{
//          msg.innerHTML = string;
//     }

   
        
    
// });
// });
   


let btns = document.querySelectorAll(".item");
let msg = document.querySelector(".msg");
let string = "";

Array.from(btns).forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let value = e.target.innerHTML;

    if (value === "=") {
      try {
        let result = eval(string); // to calculate
        msg.innerHTML = result;
        string = result.toString(); // for more calculation
      } catch {
        msg.innerHTML = "Error";
        string = "";
      }
    } else if (value === "AC") {
      string = "";
      msg.innerHTML = "";
    } else if (value === "x") {
      string += "*";
      msg.innerHTML = string;
    } else if (value === "÷") {
      string += "/";
      msg.innerHTML = string;
    }else if(value === "Del"){
      string = string.slice(0, -1);
      msg.innerHTML = string;
    } else {
      string += value;
      msg.innerHTML = string;
    }
  });
});
