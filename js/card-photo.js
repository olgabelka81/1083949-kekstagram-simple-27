import {getRandomPositiveInteger} from './util';
import {DESCRIPTION} from './const';

//Генерация карточки загружаемого фото
const getCardPhoto = function(index) {
  return {
    id: index + 1,
    url : `photos/${index + 1}.jpg`,
    description : DESCRIPTION[getRandomPositiveInteger(0, DESCRIPTION.length - 1)],
    likes : getRandomPositiveInteger(15, 200),
    comment : getRandomPositiveInteger(0, 200)
  };
};
export {getCardPhoto};
