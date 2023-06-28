const hamburgerBtn = document.getElementById('navicon');
const navLink = document.querySelector('.nav__links');
const menuIcon = document.getElementById('menu');
const btnCross = document.getElementById('cross');

// navLink.style.left = "-100%";
hamburgerBtn.addEventListener('click', () => {
  menuIcon.style.display = menuIcon.style.display === 'flex' ? 'none' : 'flex';
});

btnCross.addEventListener('click', () => {
  menuIcon.style.display = menuIcon.style.display === 'flex' ? 'none' : 'flex';
});
