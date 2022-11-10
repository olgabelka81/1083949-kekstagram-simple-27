import { isEscapeKey } from './utils.js';
import {sendData} from './api.js';

const bodyElement = document.querySelector('body');
const validateForm = document.querySelector('.img-upload__form');
const submitButton = validateForm.querySelector('.img-upload__submit');
const elementDescription = validateForm.querySelector('#description');

const messageSuccessTemplateElement = document.querySelector('#success').content.querySelector('.success');
const messageErrorTemplateElement = document.querySelector('#error').content.querySelector('.error');
const successButton = document.querySelector('#success').content.querySelector('.success__button');
const errorButton = document.querySelector('#error').content.querySelector('.error__button');

const pristine = new Pristine(validateForm, {
  classTo: 'text',
  errorClass: 'text--invalid',
  successClass: 'text--valid',
  errorTextParent: 'text',
  errorTextTag: 'span',
  errorTextClass: 'text__error',
}, false);

//Функция блокировки кнопки отправки формы
const blockSubmitButton = () => {
  submitButton.disabled = true;
  elementDescription.readOnly = true;
  submitButton.textContent = 'Сохраняю...';
};

//функция разблокировки кнопки отправки формы
const unblockSubmitButton = () => {
  submitButton.disabled = false;
  elementDescription.readOnly = false;
  submitButton.textContent = 'Сохранить';
};
let textlength = 0;
const validateComment = (value) => value.length >= 20 && value.length <= 140;

const countLetters = () => {
  textlength = elementDescription.value.length;
  if (elementDescription.value.length >= 140) {
    //console.log(textlength, `Максмально 140 символов, сейчас ${textlength}`);
    return textlength;
  }
};

pristine.addValidator(
  elementDescription,
  validateComment,
  elementDescription.addEventListener('input', countLetters),
  `Максмально 140 символов, сейчас ${textlength}`
);

//Функция закрытия окна с сообщением об успешной или ошибочной отправке формы
const onMessageEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    hideMessage();
  }
};

//Функция скрытия сообщения по клику на свободную область
const onRandomArea = () => {
  hideMessage();
};

//Функция закрытия сообщения об успешнолй отправке формы по нажатию кнопки
const onSuccessButtonClick = () => {
  hideMessage();
};

//Функция закрытия сообщения об ошибке отправки формы по нажатию кнопки
const onErrorButtonClick = () => {
  hideMessage();
};

//Функция генерации сообщения об успешной отправке формы
const getSuccessMessage = () => {
  const elementSuccessMessage = messageSuccessTemplateElement.cloneNode(true);
  document.addEventListener('keydown', onMessageEscKeydown);
  document.addEventListener('click', onRandomArea);
  successButton.addEventListener('click', onSuccessButtonClick);
  bodyElement.append(elementSuccessMessage);
  bodyElement.style.overflow = 'hidden';
};

//Функция генерации сообщения об ошибке отправки формы
const getErrorMessage = () => {
  const elementErrorMessage = messageErrorTemplateElement.cloneNode(true);
  document.addEventListener('keydown', onMessageEscKeydown);
  document.addEventListener('click', onRandomArea);
  errorButton.addEventListener('click', onErrorButtonClick);
  bodyElement.append(elementErrorMessage);
  bodyElement.style.overflow = 'hidden';
};

//Функция скрытия сообщения
function hideMessage () {
  const messageElement = document.querySelector('.success') || document.querySelector('.error');
  messageElement.remove();
  document.removeEventListener('keydown', onMessageEscKeydown);
  document.removeEventListener('click', onRandomArea);
  successButton.removeEventListener('click', onSuccessButtonClick);
  errorButton.removeEventListener('click', onErrorButtonClick);
  bodyElement.style.overflow = 'auto';
}

//Функция отправки формы
const setUserFormSubmit = (onSuccess) => {
  validateForm.addEventListener('submit' , (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(
        () => {
          onSuccess();
          unblockSubmitButton();
          getSuccessMessage();
        },
        () => {
          getErrorMessage();
          unblockSubmitButton();
        },
        new FormData(evt.target),
      );
    }
  });
};

export { elementDescription, validateForm, setUserFormSubmit };
