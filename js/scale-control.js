const userModalWindow = document.querySelector('.img-upload__overlay');
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControl = userModalWindow.querySelector('.scale__control--value');
const imgUploadPreviewImg = document.querySelector('.img-upload__preview img');

const SCALE_STEP = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;

let scaleControlValue = DEFAULT_SCALE;

const scaleImage = (value = DEFAULT_SCALE) => {
  imgUploadPreviewImg.style.transform = `scale(${value / 100})`;
  scaleControl.value = `${scaleControlValue}%`;
};


const onSmallerButtonClick = () => {
  if (scaleControlValue > MIN_SCALE ) {
    scaleControlValue -= SCALE_STEP;
    scaleControl.value = `${scaleControlValue}%`;
    imgUploadPreviewImg.style.transform = `scale(${scaleControlValue / 100})`;
  }
};

const onBiggerButtonClick = () => {
  if (scaleControlValue < MAX_SCALE) {
    scaleControlValue += SCALE_STEP;
    scaleControl.value = `${scaleControlValue}%`;
    imgUploadPreviewImg.style.transform = `scale(${scaleControlValue / 100})`;
  }
};

const resetScale = () => {
  scaleImage();
};

export { scaleControlSmaller, onSmallerButtonClick, scaleControlBigger, onBiggerButtonClick, resetScale };
