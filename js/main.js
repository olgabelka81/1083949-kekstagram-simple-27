//Функция возвращающая целое число
// https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random and www.htmlacademy.ru

function getRandomPositiveInteger (a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
}
getRandomPositiveInteger (25, 1);

//Функция для проверки максимальной длины строки

function checkStringLength (string, length) {
  return string.length <= length;
}
checkStringLength ('Привет!', 20);

// module4-task1
//const ID = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

const DESCRIPTION = [
  'Дисплей',
  'Окружающая среда',
  'Приоритет',
  'Гордость образования',
  'Романтика',
  'Смелость',
  'Поражение штормов',
  'Источник тайны',
  'Осень',
  'Неудачное падение',
  'Уверенность в культуре',
  'Дым блеска',
  'Влияние',
  'Последствия',
  'Древние трофеи',
  'Бизнес',
  'Забавный контракт',
  'Внешность',
  'Приоритет жизни',
  'Шторм',
  'Город эмоций',
  'Проблемы реальности',
  'Сюрприз образования',
  'Благотворительность',
  'Покинутое здравомыслие'
];
const COUNT_CARDS_PHOTO = 25;
const getCardPhoto = () => ({
  // const IdGenerator = getRandomPositiveInteger(0, Id.length - 1);

  id: 1,
  url : '',
  description : DESCRIPTION[getRandomPositiveInteger(0, DESCRIPTION.length - 1)],
  likes : getRandomPositiveInteger(15, 200),
  comment : getRandomPositiveInteger(0, 200),
});

const getPhotos = Array.from({length: COUNT_CARDS_PHOTO }, getCardPhoto);
console.log (
  getPhotos
);

/*id : 1, //число — идентификатор опубликованной фотографии. Это число от 1 до 25. Идентификаторы не должны повторяться.
  url : 'photos/i.jpg', //строка — адрес картинки
  description : ' ', // строка — описание фотографии
  likes : 0, //число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.
  comments : 0 //число — количество комментариев, оставленных другими пользователями к этой фотографии. Случайное число от 0 до 200.*/

