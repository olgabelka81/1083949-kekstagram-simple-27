const userForm = document.querySelector('.img-upload__text');

const pristine = new Pristine(userForm, {
  classTo: 'text__label',
  errorTextParent: 'text__label',
  errorTextClass: 'text__errror-text',
});

function validateComment (value) {
  return value.length >= 20 && value.length <= 140;
}

pristine.addValidator(
  userForm.querySelector('#description'),
  validateComment,
  'От 20 до 140 символов'
);

userForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (!isValid) {
    evt.preventDefault();
  }
});

//форма ещё не доработана, при отправки невалидного комментария на сервере приходит сообщение об ошибке.
