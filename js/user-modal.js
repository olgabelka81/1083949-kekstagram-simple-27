import {isEscapeKey, isEnterKey} from './utils.js';
import { scaleControlSmaller, onSmallerButtonClick, scaleControlBigger, onBiggerButtonClick, resetScale } from './scale-control.js';
//import { validateForm } from './validate-form.js';
import { form, onFormChange, resetEffects } from './filters.js';

const userUploadPhoto = document.querySelector('#upload-file');
const userModalWindow = document.querySelector('.img-upload__overlay');
const userModalWindowStyle = document.querySelector('body');
const userCloseModalWindow = userModalWindow.querySelector('.img-upload__cancel');

const onUserModalWindow = () => {
  userModalWindow.classList.add('hidden');
  userModalWindowStyle.classList.toggle('modal-open');
};

const onModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    onUserModalWindow();
  }
};

//Функция открытия модального окна
const openUserModal = () => {
  userModalWindow.classList.remove('hidden');
  userModalWindowStyle.classList.toggle('modal-open');
  scaleControlSmaller.addEventListener('click', onSmallerButtonClick);
  scaleControlBigger.addEventListener('click', onBiggerButtonClick);
  form.addEventListener('change', onFormChange);
  document.addEventListener('keydown', onModalEscKeydown);
};

userUploadPhoto.addEventListener('change', () => {
  openUserModal();
});

userUploadPhoto.addEventListener('change', (evt) => {
  if (isEnterKey(evt)) {
    openUserModal();
  }
});

//Функция закрытия модального окна
const closeUserModal = () => {
  resetScale();
  resetEffects();
  onUserModalWindow();
  //validateForm.removeEventListener('submit', onValidateComment);
  scaleControlSmaller.removeEventListener('click', onSmallerButtonClick);
  scaleControlBigger.removeEventListener('click', onBiggerButtonClick);
  form.removeEventListener('change', onFormChange);
  userUploadPhoto.innerHTML = '';
  document.removeEventListener('keydown', onModalEscKeydown);
};

userCloseModalWindow.addEventListener('click', () => {
  closeUserModal();
});

userCloseModalWindow.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    closeUserModal();
  }
});

export { openUserModal, closeUserModal};
