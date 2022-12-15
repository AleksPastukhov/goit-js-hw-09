import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('.form'),
}

const data = {};
let position = 0;

refs.form.addEventListener('submit', onCreatePromiseBtnClick)




function onCreatePromiseBtnClick (evt) {
  evt.preventDefault();
  dataCollectedFromForm (evt)
  onStart({ delay, step, amount })
  refs.form.reset();
}

function dataCollectedFromForm (evt) {
  let formData = new FormData(evt.target)
  formData.forEach((value, name) => {
      data[name] = Number(value)
  })
  return { delay, step, amount } = data;
}

function onStart({ delay, step, amount }) {
  position += 1;

  if (position >= amount){
    return
  }

  let newDelay = delay;

  for (let i = 1; i <= amount; i += 1){
    newDelay += step;
    startCreatePromises(i, newDelay)
  }

}

function createPromise(position, delay) {
return new Promise((resolve, reject)=>{
  const shouldResolve = Math.random() > 0.3;
  setTimeout(()=>{
    if (shouldResolve) {
      resolve({position, delay})
    } else {
      reject({position, delay})
    }
  },delay)
})
}

function startCreatePromises(position, delay){
  createPromise(position, delay)
  .then(({ position, delay }) => {
    Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
  })
  .catch(({ position, delay }) => {
    Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
  });
}