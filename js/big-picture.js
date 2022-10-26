//import {createPhotos} from './cards-photos.js';
//import { similarPictureTemplate } from './picture.js';

const sectionBigPicture = document.querySelector('.big-picture');


/*function renderPhotoDataSection() {
  similarPictureTemplate.addEventListener('click', (evt) => {
    if (evt.target.className === 'picture__img') {
      const {url} = createPhotos[evt.target.index + 1];
      fullSizePhoto.src = url;
    }
  }
  );
}*/

const openBigPicture = () => {
  sectionBigPicture.classList.remove('hidden');
};

export {openBigPicture};
