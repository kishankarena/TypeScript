const display:any= document.querySelector('#screen') as HTMLInputElement;
display.innerText = '0';
const number = document.querySelectorAll('.number');
const operator = document.querySelectorAll('.operator');
const dropFunction = document.querySelectorAll('#dropFunction');
const trigonometry = document.querySelectorAll('#trigonometry');
const deg = document.querySelector('.deg');
const changeBtn = document.querySelectorAll('#changeBtn');
const secondBtn = document.getElementById('secondBtn');
const mathFunction = document.querySelectorAll('.mathFunction');
const memoryBtns = document.querySelectorAll('.memoryBtns');
const mrc = document.querySelectorAll('#mrc');

// Types
type booleanOrString = boolean | string ;

let screenVal:any = '';
let checkDot = false;
let checkTrigono:booleanOrString = false; 
let checkFunction:booleanOrString  = false;
let checkDegree = true;
let checkSecond = true;
let memory = [];
// numbers
number.forEach(number => {
  number.addEventListener('click', e => {
    const ev = e.target as HTMLElement;
    if (ev.innerText === '.' && !checkDot) {
      checkDot = true;
    }
    else if (ev.innerText === '.' && checkDot) {
      return;
    }
    screenVal += ev.innerText;
    if (checkTrigono) {
      display.innerText = checkTrigono + screenVal;
    }
    else if (checkFunction) {

      display.innerText = checkFunction + screenVal;
    }
    else {
      display.innerText = screenVal;
    }

  })
})
//Operators
operator.forEach(operator => {
  operator.addEventListener('click', e => {
    const ev = e.target as HTMLInputElement;
    screenVal += ev.value;
    display.innerText = screenVal;
  })

})
// Dropdown Functions
dropFunction.forEach(dropFunction => {
  dropFunction.addEventListener('click', e => {
   const  ev = e.target as HTMLElement;
    if (ev.innerText == 'random') {
      display.innerText = Math.random().toFixed(4);
    }
    else {
      checkFunction = ev.innerText;
      display.innerText = checkFunction
    }

  })
})
function calculateFunction(mathFunc, value) {
  switch (mathFunc) {
    case 'ceil':
      return Math.ceil(value);
      break;
    case 'floor':
      return Math.floor(value);
      break;
    case 'trunc':
      return Math.trunc(value);
      break;

  }
}
// set degree
deg.addEventListener('click', e => {
  const ev = e.target as HTMLElement;
  if (checkDegree) {
    ev.innerText = 'RAD';
    checkDegree = false;
  }
  else {
    ev.innerText = 'DEG'
    checkDegree = true;
  }
})

// Trigonometry Functions

trigonometry.forEach(trigonometry => {

  trigonometry.addEventListener('click', e => {

    const ev = e.target as HTMLElement;
    checkTrigono = ev.innerText;
    display.innerText = checkTrigono;

  })
})

function calculateTrigono(trigoFunc:string | boolean, degree:number):number {
  if (checkDegree) {
    degree = degree * Math.PI / 180;
  }
  else {
    degree = degree;
  }
  switch (trigoFunc) {
    case 'sin':
      return Math.sin(degree);
      
      break;
    case 'cos':
      return Math.cos(degree);
      
      break;
    case 'tan':
      return Math.tan(degree);
      
      break;

  }
}

// change Buttons
function changeBtnText() {
  if (checkSecond) {
    secondBtn.innerHTML = '1<sup>st</sup>';
    checkSecond = false;
    changeBtn.forEach(changeBtn => {
      let btnVal = (changeBtn as HTMLInputElement).value;


      switch (btnVal) {
        case 'xpow2':
          changeBtn.innerHTML = 'x<sup>3</sup>';
          (changeBtn as HTMLInputElement).value = 'cube';
          break;
        case 'sqrt':
          changeBtn.innerHTML = '&#8731;';
          (changeBtn as HTMLInputElement).value = 'cbrt';
          break;
        case 'pow':
          changeBtn.innerHTML = '2<sup>x</sup>';
          (changeBtn as HTMLInputElement).value = 'exp2';
          break;
        case 'exp10':
          changeBtn.innerHTML = 'x10<sup>y</sup>';
          (changeBtn as HTMLInputElement).value = 'xexp10';
          break;
        case 'log10':
          changeBtn.innerHTML = 'log1p';
          (changeBtn as HTMLInputElement).value = 'log1p';
          break;
        case 'log':
          changeBtn.innerHTML = 'log2';
          (changeBtn as HTMLInputElement).value = 'log2';
          break;

      }
    })

  }
  else {
    secondBtn.innerHTML = '2<sup>nd</sup>';
    checkSecond = true;
    changeBtn.forEach(changeBtn => {
      let btnVal = (changeBtn as HTMLInputElement).value;

      switch (btnVal) {
        case 'cube':
          changeBtn.innerHTML = 'x<sup>2</sup>';
          (changeBtn as HTMLInputElement).value = 'xpow2';
          break;
        case 'cbrt':
          changeBtn.innerHTML = '&radic;';
          (changeBtn as HTMLInputElement).value = 'sqrt';
          break;
        case 'exp2':

          changeBtn.innerHTML = 'x<sup>y</sup>';
          (changeBtn as HTMLInputElement).value = 'pow';
          break;
        case 'xexp10':
          changeBtn.innerHTML = '10<sup>x</sup>';
          (changeBtn as HTMLInputElement).value = 'exp10';
          break;
        case 'log1p':
          changeBtn.innerHTML = 'log';
          (changeBtn as HTMLInputElement).value = 'log10';
          break;
        case 'log2':
          changeBtn.innerHTML = 'ln';
          (changeBtn as HTMLInputElement).value = 'log';
          break;

      }
    })

  }
}
// Math Function
mathFunction.forEach(mathFunction => {
  mathFunction.addEventListener('click', e => {
    const ev = e.target as HTMLInputElement;

    switch (ev.value) {
      case 'FE':
        display.innerText = Math.pow(10, parseFloat(display.innerText));
        break;
      case 'E':
        screenVal += Math.E.toFixed(5);
        display.innerText = screenVal;
        break;
      case 'xpow2':
        screenVal = Math.pow(parseFloat(screenVal), 2);
        display.innerText = screenVal;
        break;
      case 'inverse':
        
        screenVal = (1/parseFloat(screenVal)).toFixed(4);
        display.innerText = screenVal;
        break;
      case 'modx':
        if (screenVal < 0) {
          screenVal = (-1) * screenVal;
          display.innerText = screenVal;
        }
        break;
      case 'exp':
        screenVal = Math.exp(screenVal).toFixed(3);
        display.innerText = screenVal;
        break;
      case 'sqrt':
        screenVal = Math.sqrt(screenVal).toFixed(5);
        display.innerText = screenVal;
        break;
      case 'fact':
        screenVal = factorial(screenVal);
        display.innerText = screenVal;
        break;
      case 'pow':
        screenVal = screenVal + '**';
        display.innerText = screenVal;
        break;
      case 'exp10':
        screenVal = Math.pow(10, screenVal);
        display.innerText = screenVal;
        break;
      case 'log10':
        screenVal = Math.log10(screenVal).toFixed(4);
        display.innerText = screenVal;
        break;
      case 'log':
        screenVal = Math.log(screenVal).toFixed(4);
        display.innerText = screenVal;
        break;
      case 'cube':
        screenVal = Math.pow(screenVal, 3);
        display.innerText = screenVal;
        break;
      case 'cbrt':
        screenVal = Math.cbrt(screenVal);
        display.innerText = screenVal;
        break;
      case 'exp2':
        screenVal = Math.pow(2, screenVal);
        display.innerText = screenVal;
        break;
      case 'xexp10':
        screenVal = screenVal + '*10**';
        display.innerText = screenVal;
        break;
      case 'log1p':
        screenVal = Math.log1p(screenVal).toFixed(4);
        display.innerText = screenVal;
        break;
      case 'log2':
        screenVal = Math.log2(screenVal).toFixed(4);
        display.innerText = screenVal;
        break;

    }
  })
})
// factorial function
function factorial(n) {
  if (n == 0) return 1;
  return n * factorial(n - 1);
}
// PI function 
function calculatePi() {
  screenVal += Math.PI.toFixed(5);
  display.innerText = screenVal;
}
// plusOrMinus Function
function plusOrMinus() {

  screenVal = (-1) * screenVal;
  display.innerText = screenVal;



}

//  Memory Section

memoryBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    const ev = e.target as HTMLElement;
    if (ev.innerText === 'M+' || ev.innerText === 'M-' || ev.innerText === 'MS') {
      mrc.forEach(btn => {
        btn.classList.remove('disabled');
      })
    }
    else {
      mrc.forEach(btn => {
        btn.classList.add('disabled');
      })
    }
    switch (ev.innerText) {
      case 'MC':
        for (let i = 0; i < memory.length; i++) {
          memory.pop();
        }

        break;
      case 'MR':
        memory = memory.reduce((sum, cur) => {
          sum += cur;
          return sum;
        }, 0);
        display.innerText = memory;
        console.log(memory);
        break;

      case 'M+':
        memory.push(parseFloat(display.innerText));
        console.log(memory);
        break;
      case 'M-':
        memory.push((-1) * parseFloat(display.innerText));
        console.log(memory);
        break;

      case 'MS':
        memory.push(parseFloat(display.innerText));
        console.log(memory);
        break;

    }


  })
})

// Clear Screen

function screenClear() {

  display.innerText = '0';
  screenVal = '';
  checkDot = false;
  checkTrigono = false;
  checkFunction = false;
  checkDegree = true;
  mrc.forEach(btn => {
    btn.classList.add('disabled');
  })

}
// BackSpace
function backSpace() {
  let bckSpc = display.innerText;
  if (display.innerText == 0) return;
  display.innerText = bckSpc.substring(0, bckSpc.length - 1);
  screenVal = screenVal.substring(0, screenVal.length - 1);
}

//Equal Function
function equal(){

  if (screenVal === '') return;
  if (checkTrigono) {

    let result = calculateTrigono(checkTrigono, parseFloat(screenVal));
    display.innerText = result.toFixed(4);
    checkTrigono = false;
  }
  else if (checkFunction) {
    let result = calculateFunction(checkFunction, screenVal);
    display.innerText = result;
    checkFunction = false;
  }
  else {
    let result = screenVal;
    display.innerText = eval(result);
  }

}