//import {createPhotos} from './cards-photos.js';
const pictures = document.querySelector('.pictures');

const similarPictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const getPictures = (createPhotos) => {
  const similarListFragment = document.createDocumentFragment();
  createPhotos.forEach(({url, comments, likes, description}) => {
    const pictureElement = similarPictureTemplate.cloneNode(true);
    pictureElement.querySelector('.picture__img').src = url;

    //pictureElement.querySelector('.picture__img').addEventListener('click', onOpenBigPicture);
    pictureElement.querySelector('.picture__img').alt = description;
    pictureElement.querySelector('.picture__comments').textContent = comments;
    pictureElement.querySelector('.picture__likes').textContent = likes;
    similarListFragment.appendChild(pictureElement);
  });
  pictures.appendChild(similarListFragment);
};

export {getPictures};
