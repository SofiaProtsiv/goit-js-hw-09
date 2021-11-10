'use strict';

import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.1.min.css";
const refs = {
  delay: document.querySelector('input[name="delay"]'),
  step: document.querySelector('input[name="step"]'),
  amount: document.querySelector('input[name="amount"]'),
  button: document.querySelector('button'),
}
// let position = 0;

// refs.button.addEventListener('click', onSubmitBtnClick);

function onSubmitBtnClick() {

}

  const valueObject = {
    delay,
    step,
    amount
  };

console.log(createDataObject())
let position = 1;

setTimeout(function createPromise(position, delay) {
  position++;
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  } else {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  }
  setTimeout(createPromise, 1000);
}, 1000)
//   createPromise(3, 1500)
//   .then(({ position, delay }) => {
//     Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//   });
// }

//   if(valueObject.delay == "" || valueObject.step == "" || valueObject.amount == "" ){
//     alert('pfgjdysvcnm gjkz')
//   }
//   return valueObject;
// }

// function createPromise(position, delay) {
//   const shouldResolve = Math.random() > 0.3;
//   setTimeout(() => {
//     return new Promise((resolve) => {
//       setTimeout(() => {
//         resolve(delay);
//       }, delay);
//       if (shouldResolve) {
//         Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
//       } else {
//         Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
//       }
//     });
//   });
//   }
  


