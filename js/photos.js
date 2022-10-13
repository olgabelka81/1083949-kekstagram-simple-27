import {COUNT_CARDS_PHOTO } from './const.js';
import {getCardPhoto} from './card-photo.js';

//Генерация объектов
const Photos = Array.from({length: COUNT_CARDS_PHOTO }, (value, index) => getCardPhoto(index));
export {Photos};
