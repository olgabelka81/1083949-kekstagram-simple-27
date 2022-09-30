//Функция возвращающая целое число
//https://translated.turbopages.org/proxy_u/en-ru.ru.c6a0fddb-6336eec3-03919bd9-74722d776562/https/stackoverflow.com/a/14790863

function getRandom(numberMin, numberMax) {
  if (numberMin >= 0 && numberMax > numberMin) {
    return Math.floor(Math.random() * (numberMax - numberMin + 1)) + numberMin;
  }
  return NaN; //не понимаю, пока
}
getRandom(25,1);

