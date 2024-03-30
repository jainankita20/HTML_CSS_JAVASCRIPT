let str = "";
//
let buttons = document.querySelectorAll(".button"); //here we select all the elements with class button
console.log(buttons);
Array.from(buttons).forEach((button) => {
  {
    button.addEventListener("click", (e) => {
      if (e.target.innerHTML == "=") {
        console.log("insideif");
        str = eval(str); //evaluates the expression
        document.querySelector("input").value = str;
        console.log(str);
      } else if (e.target.innerHTML == "C") {
        str = "";
        document.querySelector("input").value = str;
      } else {
        console.log("insideelse");
        console.log(e.target);
        str = str + e.target.innerHTML; //innerHTML used for getting value
        console.log(str);
        document.querySelector("input").value = str;
      }
    });
  }
});
