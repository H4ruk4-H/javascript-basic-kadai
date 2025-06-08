const textBtn = document.getElementById('btn');
const text = document.getElementById('text');

textBtn.addEventListener('click', () => {
    text.innerHTML ='';
    const child = document.createElement('h2');
    child.textContent = 'ボタンをクリックしました'
    text.appendChild(child);
});