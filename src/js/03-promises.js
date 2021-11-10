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
let counter;
refs.button.addEventListener('click', onSubmitBtnClick);
refs.form.addEventListener('input', onMessageInput);

function onSubmitBtnClick(event) {
    setTimeout(function onDelay() {
      counter += 1;
      const shouldResolve = Math.random() > 0.3;
        if (shouldResolve) {
          Notiflix.Notify.success(`✅ Fulfilled promise ${counter} in ${data.delay}ms`);
        } else {
          Notiflix.Notify.failure(`❌ Rejected promise ${counter} in ${data.delay}ms`);
        }
      setTimeout(onDelay, data.step);
    }, data.delay);
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


