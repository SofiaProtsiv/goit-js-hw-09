"use strict";

import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import Notiflix from 'notiflix';
import "notiflix/dist/notiflix-3.2.1.min.css";

const refs = {
    input: document.querySelector("#datetime-picker"),
    startBtn: document.querySelector('button[data-start]'),
    closeBtn: document.querySelector('.close-btn'),
    alert: document.querySelector('.alert'),
    timeoutID: null,
    days: document.querySelector('span[data-days]'),
    hours: document.querySelector('span[data-hours]'),
    minutes: document.querySelector('span[data-minutes]'),
    seconds: document.querySelector('span[data-seconds]'),
};

const options = {
  enableTime: true,
  dateFormat: "Y-m-d H:i:S",
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates){
    if(selectedDates[0] <= options.defaultDate){
    Notiflix.Notify.failure('Please choose a date in the future');
    refs.startBtn.setAttribute('disabled', true);
  }
    if(selectedDates[0] >= options.defaultDate){{
      refs.startBtn.removeAttribute('disabled', false);
      }
    }
  },
}

const calendar = flatpickr(refs.input, options);

refs.startBtn.addEventListener('click', onClickStartBtn);
refs.closeBtn.addEventListener('click', onClickCloseBtn);

function onClickStartBtn () {
  refs.timeoutID = setInterval(() => {
    updateTime();
  }, 1000);
  ;
};

function onClickCloseBtn () {
  refs.alert.classList.remove("show");
  refs.alert.classList.add("hide");
}

function onAlert(){
  refs.alert.classList.add("show");
  refs.alert.classList.remove("hide");
  refs.alert.classList.add("showAlert");
}

function addLeadingZero(value){
  return String(value).padStart(2, '0')
}

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = addLeadingZero(Math.floor(ms / day));
  const hours = addLeadingZero(Math.floor((ms % day) / hour));
  const minutes = addLeadingZero(Math.floor(((ms % day) % hour) / minute));
  const seconds = addLeadingZero(Math.floor((((ms % day) % hour) % minute) / second));

  return { days, hours, minutes, seconds };
}

function updateTime () {
    const currentTime = new Date();
    const selectedTime = new Date(refs.input.value);

    const deltaTime = selectedTime - currentTime;
    
    if(deltaTime < 0) {
      return;
    } else {
      const { days, hours, minutes, seconds } = convertMs(deltaTime);
      refs.days.textContent = `${days}`; 
      refs.hours.textContent = `${hours}`;
      refs.minutes.textContent = `${minutes}`;
      refs.seconds.textContent = `${seconds}`;
      }
};