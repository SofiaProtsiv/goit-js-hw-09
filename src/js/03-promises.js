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
let timeoutID = null;
refs.button.addEventListener('click', onSubmitBtnClick);
refs.form.addEventListener('input', onMessageInput);

function onSubmitBtnClick(event) {
  event.preventDefault();
  for (const i = 0; i < data.amount; i++) {
    createPromise(2, data.delay)
    .then(({ position, delay }) => {
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });
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
function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  timeoutID = setTimeout(() => {
     new Promise((resolve) => {
      setTimeout(() => {
        resolve(delay);
      }, delay);
      if (shouldResolve) {
        Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    });
  });
  return timeoutID;
  }
