const number = document.querySelectorAll(".num");
const output = document.querySelector(".output");
const operator = document.querySelectorAll(".operator");
const equalSign = document.querySelector('.equalSign');

let prevNum = '';
let currNum = '';
let calOperator = '';

const display = (number) => {
  output.innerHTML = number;
}

const inputNum = (number) => {
  currNum += number;
}

const inputOperator = (operator) => {
  prevNum = currNum;
  calOperator = operator;
  currNum = '';
}

const calculate = () => {
  let res = '';
  prevNum = parseInt(prevNum);
  currNum = parseInt(currNum);
  // console.log(currNum);
  
  switch(calOperator) {
    case '+':
      console.log(currNum,prevNum);
      res = prevNum + currNum;
      return res;
      break;
    case '-':
      res = prevNum - currNum;
      break;
    case 'x':
      res = prevNum * currNum;
      break;
    case '/':
      res = prevNum / currNum;
      break;
    case '%':
    res = prevNum % currNum;
    break;
    default:
      return NaN;
  }

  currNum = res;
  calOperator = '';
}

number.forEach( (num) => {
  num.addEventListener('click', () => {
    console.log(num.innerHTML);
    inputNum(num.innerHTML);
    display(currNum);
  })
})

operator.forEach( (operator) => {
  operator.addEventListener('click', () => {
    console.log(operator.innerHTML);
    inputOperator(operator.innerHTML);
    display(operator.innerHTML);
  })
})

equalSign.addEventListener('click', () => {
  console.log("equal");
  calculate();
  display(currNum);
})



