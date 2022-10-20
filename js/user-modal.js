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

//1. меняется значения поля #upload-file;
//Открываем модальное окно:

function openUserModal () {
  userModalWindow.classList.remove('hidden');
  userModalWindowStyle.classList.toggle('modal-open');

  //document.addEventListener('keydown', onModalEscKeydown);
}

userUploadPhoto.addEventListener('load', () => {
  openUserModal();
});

userUploadPhoto.addEventListener('load', (evt) => {
  if (isEnterKey(evt)) {
    openUserModal();
  }
});


openUserModal ();
//Закрываем модальное окно:
function closeUserModal () {
  userModalWindow.classList.add('hidden');
  userModalWindowStyle.classList.toggle('modal-open');

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
