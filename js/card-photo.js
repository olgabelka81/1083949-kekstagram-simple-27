import {COUNT_CARDS_PHOTO, DESCRIPTION} from './const.js';
import {RANDOM_POSITIVE_INTEGER} from './utils.js';

//Генерация карточки загружаемого фото
const getCardPhoto = function(index) {
  return {
    id: index + 1,
    url : `photos/${index + 1}.jpg`,
    description : DESCRIPTION[RANDOM_POSITIVE_INTEGER(0, DESCRIPTION.length - 1)],
    likes : RANDOM_POSITIVE_INTEGER(15, 200),
    comment : RANDOM_POSITIVE_INTEGER(0, 200)
  };
};

//Генерация объектов
const Photos = Array.from({length: COUNT_CARDS_PHOTO }, (value, index) => getCardPhoto(index));
export {Photos};
