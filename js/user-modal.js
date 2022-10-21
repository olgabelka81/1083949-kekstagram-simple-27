import {isEscapeKey, isEnterKey} from './utils.js';

const userUploadPhoto = document.querySelector('#upload-file');
const userModalWindow = document.querySelector('.img-upload__overlay');
const userModalWindowStyle = document.querySelector('body');
const userCloseModalWindow = userModalWindow.querySelector('.img-upload__cancel');

const onModalEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

//Функция открытия модального окна
function openUserModal () {
  userModalWindow.classList.remove('hidden');
  userModalWindowStyle.classList.toggle('modal-open');

  document.addEventListener('keydown', onModalEscKeydown);
}

userUploadPhoto.addEventListener('change', () => {
  openUserModal();
});

userUploadPhoto.addEventListener('change', (evt) => {
  if (isEnterKey(evt)) {
    openUserModal();
  }
});

//Функция закрытия модального окна
function closeUserModal () {
  userModalWindow.classList.add('hidden');
  userModalWindowStyle.classList.toggle('modal-open');

  userUploadPhoto.innerHTML = '';
  document.removeEventListener('keydown', onModalEscKeydown);
}

userCloseModalWindow.addEventListener('click', () => {
  closeUserModal();
});

userCloseModalWindow.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    closeUserModal();
  }
});
