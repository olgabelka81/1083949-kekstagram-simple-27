//Данные для увеличения и уменьшения масштаба
const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;
const DIVIDER_FOR_SCALE = 100;

const userModalWindow = document.querySelector('.img-upload__overlay');
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControl = userModalWindow.querySelector('.scale__control--value');
const imgUploadPreviewImg = document.querySelector('.img-upload__preview img');

//Кнопка уменьшения масштаба
const onSmallerButtonClick = () => {
  let scaleControlValue = parseInt(scaleControl.value, 10);
  if (scaleControlValue > MIN_SCALE ) {
    scaleControlValue -= SCALE_STEP;
    scaleControl.value = `${scaleControlValue}%`;
    imgUploadPreviewImg.style.transform = `scale(${scaleControlValue / DIVIDER_FOR_SCALE})`;
  }
};

//Кнопка увеличения масштаба
const onBiggerButtonClick = () => {
  let scaleControlValue = parseInt(scaleControl.value, 10);
  if (scaleControlValue < MAX_SCALE) {
    scaleControlValue += SCALE_STEP;
    scaleControl.value = `${scaleControlValue}%`;
    imgUploadPreviewImg.style.transform = `scale(${scaleControlValue / DIVIDER_FOR_SCALE})`;
  }
};

//Функция добавления обработчиков на кнопках "-" и "+"
const onAddScale = () => {
  scaleControl.value = `${DEFAULT_SCALE}%`;
  scaleControlSmaller.addEventListener('click', onSmallerButtonClick);
  scaleControlBigger.addEventListener('click', onBiggerButtonClick);
};

//Функция удаления обработчиков с кнопок "-" и "+"
const onRemoveScale = () => {
  scaleControlSmaller.removeEventListener('click', onSmallerButtonClick);
  scaleControlBigger.removeEventListener('click', onBiggerButtonClick);
};

export {DEFAULT_SCALE, scaleControl, imgUploadPreviewImg, onRemoveScale, onAddScale };
