const textBtn = document.getElementById('btn');
const text = document.getElementById('text');

textBtn.addEventListener('click', () => {
    text.textContent = 'ボタンをクリックしました'
});
