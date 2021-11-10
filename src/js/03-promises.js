'use strict';

import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.1.min.css";
const refs = {
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
  button: document.querySelector('button'),
  form: document.querySelector('form'),
}

let data;
let delay;
let step;
let amount;
refs.button.addEventListener('click', onSubmitBtnClick);
refs.form.addEventListener('input', onMessageInput);

function onSubmitBtnClick(event) {
  event.preventDefault();
  for (const i = 0; i <= 3; i++) {
    setTimeout(function onDelay() {
      const shouldResolve = Math.random() > 0.3;
            if (shouldResolve) {
            Notiflix.Notify.success(`✅ Fulfilled promise`);
          } else {
            Notiflix.Notify.failure(`❌ Rejected promise`);
          }
      setTimeout(onDelay, 1000);
    }, 2000);
  }
}
function createDataObject (delay, step, amount) {
  const valueObject = {
    delay,
    step,
    amount
  };
  return valueObject;
}
function onMessageInput (event) {
  if(event.target.name === "delay"){
    delay = event.target.value;
  }
  if(event.target.name === "step"){
    step = event.target.value;
  }
  if(event.target.name === "amount"){
    amount = event.target.value;
  }
  data = createDataObject(delay, step, amount);
};

// function onDelay (ms) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(ms);
//     }, ms);
//   });
// };
