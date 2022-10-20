import {createPhotos} from './cards-photos.js';

const pictures = document.querySelector('.pictures');

const similarPictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const getPictures = function () {
  const similarListFragment = document.createDocumentFragment();
  createPhotos.forEach(({url, comment, likes}) => {
    const pictureElement = similarPictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    pictureElement.querySelector('.picture__comments').textContent = comment;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    similarListFragment.appendChild(pictureElement);
  });
  pictures.appendChild(similarListFragment);
};
getPictures();

export {getPictures};