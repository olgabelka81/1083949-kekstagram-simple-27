import {createPhotos} from './cards-photos.js';
import {onOpenBigPicture} from './big-picture.js';
const pictures = document.querySelector('.pictures');

const similarPictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const getPictures = () => {
  const similarListFragment = document.createDocumentFragment();
  createPhotos.forEach(({url, comment, likes}) => {
    const pictureElement = similarPictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    
    pictureElement.querySelector('.picture__img').addEventListener('click', onOpenBigPicture);
    
    pictureElement.querySelector('.picture__comments').textContent = comment;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    similarListFragment.appendChild(pictureElement);
  });
  pictures.appendChild(similarListFragment);
};
getPictures();

export {getPictures};
