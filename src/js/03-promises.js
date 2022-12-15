import Notiflix from 'notiflix';

const refs = {
  firstDelay: document.querySelector('[name="delay"]'),
  delayStep: document.querySelector('[name="step"]'),
  amount: document.querySelector('[name="amount"]'),
}

function createPromise(position, delay) {
return new Promise((resolve, reject)=>{
  const shouldResolve = Math.random() > 0.3;
  setTimeout(()=>{
    if (shouldResolve) {
      // Fulfill
      resolve({ position, delay })
    } else {
      // Reject
      reject({ position, delay })
    }
  },delay)
})
}

createPromise(2, 1500)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
