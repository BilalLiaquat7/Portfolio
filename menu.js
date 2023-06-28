const hamburgerBtn = document.getElementById('navicon');
const menuIcon = document.getElementById('menu');
const btnCross = document.getElementById('cross');
const work = document.getElementById('work_m');
const about = document.getElementById('about_m');
const contact = document.getElementById('contact_m');

hamburgerBtn.addEventListener('click', () => {
  menuIcon.style.display = menuIcon.style.display === 'flex' ? 'none' : 'flex';
});

btnCross.addEventListener('click', () => {
  menuIcon.style.display = menuIcon.style.display === 'flex' ? 'none' : 'flex';
});

work.addEventListener('click', () => {
  menuIcon.style.display = menuIcon.style.display === 'flex' ? 'none' : 'flex';
});

about.addEventListener('click', () => {
  menuIcon.style.display = menuIcon.style.display === 'flex' ? 'none' : 'flex';
});

contact.addEventListener('click', () => {
  menuIcon.style.display = menuIcon.style.display === 'flex' ? 'none' : 'flex';
});
