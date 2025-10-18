const ACCESS_KEY = 'kevin@2006@';

const modal = document.getElementById('accessModal');
const startBtn = document.getElementById('startBtn');
const closeBtn = document.querySelector('.close');
const accessForm = document.getElementById('accessForm');
const accessKeyInput = document.getElementById('accessKey');
const errorMessage = document.getElementById('errorMessage');

startBtn.addEventListener('click', () => {
    modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
    errorMessage.textContent = '';
    accessKeyInput.value = '';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
        errorMessage.textContent = '';
        accessKeyInput.value = '';
    }
});

accessForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const enteredKey = accessKeyInput.value;

    if (enteredKey === ACCESS_KEY) {
        window.location.href = 'django.html';
    } else {
        errorMessage.textContent = 'Clé d\'accès incorrecte. Veuillez réessayer.';
        accessKeyInput.value = '';
        accessKeyInput.focus();
    }
});