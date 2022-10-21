const userForm = document.querySelector('.img-upload__form');
new Pristine(userForm);

const pristine = new Pristine(userForm, {
  classTo: 'text__label',
  errorTextParent: 'text__label',
  errorTextClass: 'text__errror-text',
});

userForm.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const isValid = pristine.validate();
  if (isValid) {
    //то отправить форму?
  } else {
    //если нет, выдать ошибку?
  }
});

userForm.innerHTML = '';
