const number = document.querySelectorAll(".num");
const output = document.querySelector(".output")
const operator = document.querySelectorAll(".operator")

console.log(operator);

number.forEach(num => {
  num.addEventListener('click', () => {
    console.log(num.innerHTML);
    display(num.innerHTML);
  })
})

operator.forEach(operator => {
  operator.addEventListener('click', () => {
    console.log(operator.innerHTML);
    display(operator.innerHTML);
  })
})

const displayNum = (number) => {
  output.innerHTML = number;
}

const display = (operator) => {
  output.innerHTML = operator;
}

