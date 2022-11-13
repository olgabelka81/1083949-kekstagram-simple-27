const ALERT_SHOW_TIME = 5000;

//Функция возвращающая целое число
// https://github.com/you-dont-need/You-Dont-Need-Lodash-Underscore#_random and www.htmlacademy.ru
const RANDOM_POSITIVE_INTEGER = function getRandomPositiveInteger (a, b) {
  if (a < 0 || b < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

//Функция для проверки максимальной длины строки
function checkStringLength (string, length) {
  return string.length <= length;
}

//Функция проверки соответствия клавиши "Escape"
const isEscapeKey = (evt) => evt.key === 'Escape';
//Функция проверки соответствия клавиши "Enter" для загрузки фото с клавиатуры
const isEnterKey = (evt) => evt.key === 'Enter';

//Стили для сообщения об ошибке
const showAlert = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '100';
  alertContainer.style.position = 'absolute';
  alertContainer.style.left = '0';
  alertContainer.style.top = '0';
  alertContainer.style.right = '0';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'red';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, ALERT_SHOW_TIME);
};

export {RANDOM_POSITIVE_INTEGER, checkStringLength, isEscapeKey, isEnterKey, showAlert };
