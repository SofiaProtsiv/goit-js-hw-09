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
refs.form.addEventListener('input', onInput);

function onSubmitBtnClick(event) {
  event.preventDefault();  

  let delay = parseInt(data.delay);
  const step = parseInt(data.step);
  const amount = data.amount;

  for (let position = 1; position <= amount; position += 1) {   

    createPromise(position, delay)
      .then(result => Notiflix.Notify.success(result))
      .catch(error => Notiflix.Notify.failure(error));
    
    delay += step;    
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
function onInput (event) {
  if(event.target.name === "delay"){
    delay = event.target.value;
  }
  if(event.target.name === "step"){
    step = event.target.value;
  }
  if(event.target.name === "amount"){
    amount = event.target.value;
  }

  if (refs.delay.value.length >= 1 && refs.step.value.length >= 1 && refs.amount.value.length >= 1) {
    refs.button.removeAttribute('disabled');
  }

  data = createDataObject(delay, step, amount);
};

function createPromise(position, delay) {  
  const shouldResolve = Math.random() > 0.3;
   
  return new Promise((resolve, reject) => {
      setTimeout(() => {
      if (shouldResolve) {
        resolve(`✅ Fulfilled promise ${position} in ${delay}ms`);
      } else {
        reject(`❌ Rejected promise ${position} in ${delay}ms`);
      }
    }, delay);
  });
};
