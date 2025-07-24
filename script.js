document.getElementById('darkModeBtn').addEventListener('click', () => {
  document.body.classList.toggle('dark');
});

document.getElementById('toggleFormBtn').addEventListener('click', () => {
  const formContainer = document.getElementById('formContainer');
  formContainer.classList.toggle('show');
});
