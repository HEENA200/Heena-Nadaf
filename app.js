const menuIcon = document.getElementById('menu-icon');
const menu = document.getElementById('menu');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('active');
});
window.onload = function() {
    const loginContainer = document.getElementById('loginContainer');
    loginContainer.classList.add('fade-in');
};