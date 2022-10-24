const userForm = document.querySelector('.img-upload__form');

const pristine = new Pristine(userForm, {
  classTo: 'text',
  errorClass: 'text--invalid',
  successClass: 'text--valid',
  errorTextParent: 'text',
  errorTextTag: 'span',
  errorTextClass: 'text__error'
}, false);

pristine.addValidator(
  userForm.querySelector('#description'),
  validateComment
);

function validateComment (value) {
  return value.length >= 20 && value.length <= 140;
}

userForm.addEventListener('submit', (evt) => {
  const isValid = pristine.validate();
  if (!isValid) {
    evt.preventDefault();
    pristine.validate();
  }
});
