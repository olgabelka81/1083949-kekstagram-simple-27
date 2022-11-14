import { getPictures } from './picture.js';
import { setUserFormSubmit} from './validate-form.js';
import { closeUserModal } from './user-modal.js';
import { getData } from './api.js';

getData((pictures) => {
  getPictures(pictures);
});

setUserFormSubmit(closeUserModal);
