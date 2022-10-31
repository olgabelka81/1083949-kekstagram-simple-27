const effects = document.querySelectorAll('.effects__radio');
const imgUploadPreview = document.querySelector('.img-upload__preview img');
//const arrayEffectsValue = [];
//imgUploadPreview.classList.add('effects__preview--none');

for (let i = 0; i < effects.length; i ++) {
  //const effectValue = effects[i].value;
 // arrayEffectsValue.push(effectValue);

  effects[i].addEventListener('change', () => {
    effects[i].checked = true;
    const clickValue = effects[i].value;
    imgUploadPreview.classList.add('effects__preview--' + clickValue);

  });

console.log(effects[i].value);
}

