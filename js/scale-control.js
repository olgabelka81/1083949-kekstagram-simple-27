const userModalWindow = document.querySelector('.img-upload__overlay');
const imgUploadPreview = userModalWindow.querySelector('.img-upload__preview');
const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleControl = userModalWindow.querySelector('.scale__control--value');
const sliderElement = document.querySelector('.effect-level__slider');
const valueElement = document.querySelector('.effect-level__value');

let scaleControlValue = 100;
scaleControl.value = `${scaleControlValue}%`;

scaleControlSmaller.addEventListener('click', () => {
  if (scaleControlValue > 25) {
    scaleControlValue -= 25;
    scaleControl.value = `${scaleControlValue}%`;
    imgUploadPreview.style.transform = `scale(${scaleControlValue / 100})`;
  }
});

scaleControlBigger.addEventListener('click', () => {
  if (scaleControlValue < 100) {
    scaleControlValue += 25;
    scaleControl.value = `${scaleControlValue}%`;
    imgUploadPreview.style.transform = `scale(${scaleControlValue / 100})`;
  }
});

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 1,
  },
  start: 1,
  step: 0.1,
  connect: 'lower',

  format: {
    to: function (value) {
      if (Number.isInteger(value)) {
        return value.toFixed(0);
      }
      return value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    }
  }
});

sliderElement.noUiSlider.on('update', () => {
  valueElement.value = sliderElement.noUiSlider.get();
});
