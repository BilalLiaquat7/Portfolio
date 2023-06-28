const hamburgerBtn = document.getElementById('navicon');
const menuIcon = document.getElementById('menu');
const btnCross = document.getElementById('cross');

hamburgerBtn.addEventListener('click', () => {
  menuIcon.style.display = menuIcon.style.display === 'flex' ? 'none' : 'flex';
});

btnCross.addEventListener('click', () => {
  menuIcon.style.display = menuIcon.style.display === 'flex' ? 'none' : 'flex';
});
