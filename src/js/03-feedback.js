import throttle from 'lodash.throttle';

const localStorage = window.localStorage;
const feedbackFormState = 'feedback-form-state';
const form = document.querySelector('form');
const emailInput = document.querySelector('input');
const messageTextarea = document.querySelector('textarea');
const formElements = Array.from(form.elements);

const onInput = () => {
  localStorage.setItem(
    feedbackFormState,
    JSON.stringify({
      email: formElements[0].value,
      message: formElements[1].value,
    })
  );
};

form.addEventListener('input', throttle(onInput, 500));

form.addEventListener('submit', e => {
  e.preventDefault();
  console.log({
    email: formElements[0].value,
    message: formElements[1].value,
  });
  localStorage.removeItem(feedbackFormState);
  form.reset();
});

window.addEventListener('load', () => {
  const getStorageData = JSON.parse(localStorage.getItem(feedbackFormState));
  emailInput.value = getStorageData.email;
  messageTextarea.value = getStorageData.message;
});
