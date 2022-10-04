//Функция возвращающая целое число
//https://translated.turbopages.org/proxy_u/en-ru.ru.c6a0fddb-6336eec3-03919bd9-74722d776562/https/stackoverflow.com/a/14790863

function getRandom(numberMin, numberMax) {
  if (numberMin >= 0 && numberMax > numberMin) {
    return Math.floor(Math.random() * (numberMax - numberMin + 1)) + numberMin;
  }
  return NaN;
}
getRandom(25,1);

//Функция для проверки максимальной длины строки

function getLenghtRange(stringChecked, maxLength) {
  if (stringChecked.length <= maxLength) {
    return true;
  }
  return false;
}
getLenghtRange ('Привет!', 20);
