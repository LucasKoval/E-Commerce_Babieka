// Mobile Menu
const nbBurgerIcon = document.querySelector('#navbar-burger');
/* const bcBurgerIcon = document.querySelector('#breadcrumb-burger'); */
const navbarMenu = document.querySelector('#navbar-links');
/* const breadcrumbMenu = document.querySelector('#breadcrumb-links'); */


nbBurgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active')
});
/* bcBurgerIcon.addEventListener('click', () => {
    breadcrumbMenu.classList.toggle('is-active')
}); */

/*****************************************************************/
// Tabs
const tabs = document.querySelectorAll('.tabs li');
const tabContentBoxes = document.querySelectorAll('#tab-content > div');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(item => item.classList.remove('is-active'))
        tab.classList.add('is-active');

        const target = tab.dataset.target;
        tabContentBoxes.forEach(box => {
            if (box.getAttribute('id') == target) {
                box.classList.remove('is-hidden');
            } else {
                box.classList.add('is-hidden');
            }
        });
    });
});

/*****************************************************************/
// Modal
const signupButton = document.querySelector('#signup');
const modalBg = document.querySelector('.modal-background');
const modal = document.querySelector('.modal');

signupButton.addEventListener('click', () => {
    modal.classList.add('is-active');
});

modalBg.addEventListener('click', () => {
    modal.classList.remove('is-active');
});

/*****************************************************************/
// Scroll
