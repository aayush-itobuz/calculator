const number = document.querySelectorAll('.num');
const output = document.querySelector('.output');
const operator = document.querySelectorAll('.operator');
const equalSign = document.querySelector('.equalSign');
const dot = document.querySelector('.dot')
const allClear = document.querySelector('.allClear');
const clear = document.querySelector('.clear');
const signChange = document.querySelector('.signChange')

let prevNum = '';
let currNum = '0';
let calOperator = '';

const display = (number) => {
  output.innerHTML = number;
}

const clearAll = () => {
  prevNum = '';
  currNum = '';
  calOperator = '';
}

const inputNum = (number) => {
  if(currNum === '0'){
    currNum = number;
  }else {
    currNum += number;
  }
  console.log("op " + calOperator, "prev " + prevNum, "curr " +currNum);
}

const inputDot = (dot) => {
  currNum = String(currNum);
  if(currNum.includes('.')){
    return;
  }
  currNum += dot;
}

const changeSign = () => {
  currNum *= -1;
}

const clearNum = () => {
  if((currNum == "Infinity") || (currNum == "-Infinity") || (currNum == "NaN")){
    clearAll();
  }
  currNum = String(currNum);
  currNum = currNum.substring(0,currNum.length-1);
  display(currNum);
}

const inputOperator = (operator) => {
  console.log("op " + calOperator, "prev " + prevNum, "curr " +currNum);
  if(currNum != ''){
    prevNum = currNum;
  }else if(currNum === 0){
    prevNum = 0;
  }
  calOperator = operator;
  currNum = '';
  console.log("op " + calOperator, "prev " + prevNum, "curr " +currNum);
}

const calculate = () => {
  let res = '';
  console.log("op " + calOperator, "prev " + prevNum, "curr " +currNum);
  prevNum = parseFloat(prevNum);
  currNum = parseFloat(currNum);
  
  switch(calOperator) {
    case '+':
      res = prevNum + currNum;
      break;
    case '-':
      res = prevNum - currNum;
      break;
    case 'X':
      res = prevNum * currNum;
      break;
    case '/':
      res = prevNum / currNum;
      break;
    case '%':
      if(String(currNum) === ''){
        res = prevNum / 100;
      }else {
        res = prevNum % currNum;
      }
      break;
    default:
      return;
  }

  currNum = res;
  calOperator = '';
  console.log("op " + calOperator, "prev " + prevNum, "curr " +currNum);
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
    inputOperator(operator.innerHTML);
    display(operator.innerHTML);
  })
})

equalSign.addEventListener('click', () => {
  calculate();
  display(currNum);
  console.log(currNum);
})

dot.addEventListener('click', () => {
  inputDot(dot.innerHTML);
  display(currNum);
} )

allClear.addEventListener('click', () => {
  clearAll();
  display(currNum);
})

signChange.addEventListener('click', () => {
  changeSign();
  display(currNum);
})

clear.addEventListener('click', () => {
  console.log("clear");
  clearNum();
})



