import {isEscapeKey, isEnterKey} from './utils.js';
import { form, onFormChange, resetEffects } from './filters.js';
import { elementDescription } from './validate-form.js';
import { DEFAULT_SCALE, scaleControl, imgUploadPreviewImg, addScaleHandler, removeScaleHandler } from './scale-control.js';

const userUploadPhoto = document.querySelector('#upload-file');
const userModalWindow = document.querySelector('.img-upload__overlay');
const userModalWindowStyle = document.querySelector('body');
const userCloseModalWindow = userModalWindow.querySelector('.img-upload__cancel');

//Функция очистки данных модального окна
const onUserModalWindow = () => {
  userModalWindow.classList.add('hidden');
  userModalWindowStyle.classList.toggle('modal-open');
  elementDescription.value = '';
  scaleControl.value = `${DEFAULT_SCALE}%`;
  imgUploadPreviewImg.style = 'transform: scale(1)';
  resetEffects();
  removeScaleHandler();
  userUploadPhoto.value = '';
  userUploadPhoto.innerHTML = '';
};

//Функция закрытия модального окна клавишей ESC
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
  document.addEventListener('keydown', onModalEscKeydown);
  addScaleHandler();
  form.addEventListener('change', onFormChange);
  document.removeEventListener('change', on);
};

//Обработчик открытия модального окна
userUploadPhoto.addEventListener('change', () => {
  openUserModal();
});

//Обработчик открытия модального окна клавишей Enter
function on (evt) {
  if (isEnterKey(evt)) {
    openUserModal();
  }
}
document.addEventListener('change', on);

//Функция закрытия модального окна
const closeUserModal = () => {
  form.removeEventListener('change', onFormChange);
  document.removeEventListener('keydown', onModalEscKeydown);
  onUserModalWindow();
};

//Обработчик закрытия модального окна
userCloseModalWindow.addEventListener('click', () => {
  closeUserModal();
});

//Обработчик закрытия модального окна клавишей ESC
userCloseModalWindow.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    closeUserModal();
  }
});

export { openUserModal, closeUserModal};
