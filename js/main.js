//import { createPhotos } from './cards-photos.js';
import { getPictures } from './picture.js';
import { setUserFormSubmit} from './validate-form.js';
import { closeUserModal } from './user-modal.js';
import { getData } from './api.js';

//getPictures(createPhotos);

getData((pictures) => {
  getPictures(pictures);
});

setUserFormSubmit(closeUserModal);
