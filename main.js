const colors = ['coral' , 'aqua', 'red','blue' ,'green','yellow'];
const btn = document.querySelector('.btn');
const color = document.querySelector('#color');

const randomNumber = () => {
return  Math.floor(Math.random() * colors.length);
};

btn.addEventListener('click', () => {
    const num = randomNumber();
document.body.style.background = colors[num];
color.textContent = colors[num];
});