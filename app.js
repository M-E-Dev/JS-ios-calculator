let output = document.querySelector(".output");
let value = "";
let done = false;

let content = document.querySelectorAll(".content");
for (let i = 0; i < content.length; i++) {
  content[i].addEventListener("click", () => {
     if(done) {
       output.innerHTML = "";
       done = false;
     }
    else if (
      output.innerHTML == "0,0" ||
      output.innerHTML == "+" ||
      output.innerHTML == "*" ||
      output.innerHTML == "-" ||
      output.innerHTML == "/"
    ) {
      output.innerHTML = "";
    }
    output.innerHTML += content[i].innerHTML;
    value += content[i].innerHTML;
    // done = true;
  });
}

let minus = document.querySelector(".minus");
minus.addEventListener("click", () => {
  if (output.innerHTML == "0,0") {
    output.innerHTML = "-";
    value = "-";
  } else {
    output.innerHTML = "";
    output.innerHTML += minus.innerHTML;
    value += minus.innerHTML;
  }
});

let operator = document.querySelectorAll(".operator");
operator.forEach((item) => {
  item.addEventListener("click", () => {
    if (output.innerHTML == "0,0") {
    } else if (output.innerHTML == "-") {
    } else if (output.innerHTML == value) {
      output.innerHTML = "";
      output.innerHTML += item.innerHTML;
      value += item.innerHTML;
    }
  });
});

let clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
  output.innerHTML = "0,0";
  value = "";
  done == false;
});

let equal = document.querySelector(".equal");
equal.addEventListener("click", () => {
  output.innerHTML = eval(value);
  done = true;
  value = eval(value);
});
