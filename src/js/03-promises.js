'use strict';

import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.1.min.css";

const form = document.querySelector('form')
form.addEventListener('submit', onSubmitBtnClick);

function onSubmitBtnClick(event) {
  event.preventDefault();  

  const formElements = event.currentTarget.elements;  

  let delay = parseInt(formElements.delay.value);
  const step = parseInt(formElements.step.value);
  const amount = parseInt(formElements.amount.value);

  for (let position = 1; position <= amount; position += 1) {   

    createPromise(position, delay)
      .then(result => Notiflix.Notify.success(result))
      .catch(error => Notiflix.Notify.failure(error));
    
    delay += step;    
  }  
    form.reset();
}

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
