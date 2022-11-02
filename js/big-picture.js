import {createPhotos} from './cards-photos.js';

const bigPicture = document.querySelector('#big-picture');
const bigPictureImg = document.querySelector('.big-picture__img');

const searchPhotosUrl = [];
const createBigPhotosUrl = [];

for (let i = 0; i < createPhotos.length; i++) {
  bigPictureImg.querySelector('img').src = createPhotos[i].url;

  searchPhotosUrl.push(createPhotos[i].url);
  createBigPhotosUrl.push(bigPictureImg.querySelector('img').src);
}

const onOpenBigPicture = () => {
  bigPicture.classList.remove('hidden');
};

export {onOpenBigPicture};
