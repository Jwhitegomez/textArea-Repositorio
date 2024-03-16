const textFields = document.querySelectorAll('.textfield-input');

textFields.forEach(textField => {
  textField.addEventListener('focus', () => {
    textField.nextElementSibling.classList.add('active');
  });

  textField.addEventListener('blur', () => {
    if (textField.value === '') {
      textField.nextElementSibling.classList.remove('active');
    }
  });
});
