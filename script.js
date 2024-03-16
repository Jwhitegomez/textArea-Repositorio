const textAreas = document.querySelectorAll('.textarea-input');

textAreas.forEach(textArea => {
  textArea.addEventListener('focus', () => {
    textArea.nextElementSibling.classList.add('active');
  });

  textArea.addEventListener('blur', () => {
    if (textArea.value === '') {
      textArea.nextElementSibling.classList.remove('active');
    }
  });
});
