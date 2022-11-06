import { showAlert } from './utils.js';
import {sendData} from './api.js';

const validateForm = document.querySelector('.img-upload__form');
const submitButton = validateForm.querySelector('.img-upload__submit');

const pristine = new Pristine(validateForm, {
  classTo: 'text',
  errorClass: 'text--invalid',
  successClass: 'text--valid',
  errorTextParent: 'text',
  errorTextTag: 'span',
  errorTextClass: 'text__error',
}, false);

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = 'Сохраняю...';
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = 'Сохранить';
};

const validateComment = (value) => value.length >= 20 && value.length <= 140;

pristine.addValidator(
  validateForm.querySelector('#description'),
  validateComment
);

const setUserFormSubmit = (onSuccess) => {
  validateForm.addEventListener('submit' , (evt) => {

    const isValid = pristine.validate();
    if (isValid) {
      evt.preventDefault();
      pristine.validate();
      blockSubmitButton();
      sendData(
        () => {
          onSuccess();
          unblockSubmitButton();
        },
        () => {
          showAlert('Не удалось отправить форму. Попробуйте ещё раз');
          unblockSubmitButton();
        },
        new FormData(evt.target),
      );
    }
  });
};
export { validateForm, setUserFormSubmit };
