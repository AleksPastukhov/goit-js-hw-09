import flatpickr from "flatpickr";
import Notiflix from 'notiflix';
import "flatpickr/dist/flatpickr.min.css";


const refs = {
    startBtn: document.querySelector('[data-start]')
}

refs.startBtn.setAttribute('disabled', true)

let milliseconds = null;
let timerId = null;

const flatpickrOptions = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if(selectedDates[0] < new Date()) {
            Notiflix.Notify.failure('Please choose a date in the future');
            refs.startBtn.setAttribute('disabled', true)
        } else {
            refs.startBtn.removeAttribute('disabled')
        }
    },
}

const pickr = new flatpickr('#datetime-picker', flatpickrOptions) 



    console.dir(pickr.selectedDates[0])

     timerId = setInterval(() => {
    if(milliseconds <= 0) {
        clearInterval( timerId)
    }
    milliseconds = pickr.selectedDates[0] - new Date();
    convertMs(milliseconds)
}, 1000)

function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  