import {createPhotos} from './cards-photos.js';
import {openBigPicture} from './big-picture.js';
const pictures = document.querySelector('.pictures');

const sectionBigPicture = document.querySelector('.big-picture__img img');


const similarPictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const getPictures = () => {
  const similarListFragment = document.createDocumentFragment();
  createPhotos.forEach(({url, comment, likes}) => {
    const pictureElement = similarPictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;
    sectionBigPicture.src = url;
    pictureElement.querySelector('.picture__img').addEventListener('click', openBigPicture);
    console.log(sectionBigPicture);
    pictureElement.querySelector('.picture__comments').textContent = comment;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    similarListFragment.appendChild(pictureElement);
  });
  pictures.appendChild(similarListFragment);
};
getPictures();

export {getPictures};
