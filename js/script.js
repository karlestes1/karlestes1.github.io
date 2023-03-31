/* Toggle Navbar Icon */
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

/* Navbar Arrow Rotation on Hover */
const multiLevelMenuItems = document.querySelectorAll('.multi-level-menu');

multiLevelMenuItems.forEach(menuItem => {
    const menuItemLink = menuItem.querySelector('a');
    const arrow = menuItem.querySelector('.arrow');
    const subMenu = menuItem.querySelector('.sub-menu');

    menuItemLink.addEventListener('mouseover', () => {
        arrow.style.transform = 'rotate(90deg)';
    });

    menuItemLink.addEventListener('mouseout', () => {
        arrow.style.transform = 'rotate(0deg)';
    });

    arrow.addEventListener('mouseover', () => {
        arrow.style.transform = 'rotate(90deg)';
    });

    arrow.addEventListener('mouseout', () => {
        arrow.style.transform = 'rotate(0deg)';
    });

    if (subMenu) {
        subMenu.addEventListener('mouseover', () => {
            arrow.style.transform = 'rotate(90deg)';
        });

        subMenu.addEventListener('mouseout', () => {
            arrow.style.transform = 'rotate(0deg)';
        });
    }
})

/* Arrow Toggle for Touch Screen Devices */
document.addEventListener('DOMContentLoaded', function() {
    const arrows = document.querySelectorAll('.toggle-arrow[data-toggle]');

    arrows.forEach(function(arrow) {
        arrow.addEventListener('click', function() {
            let subMenu = this.nextElementSibling;
            subMenu.style.display = subMenu.style.display === 'block' ? 'none' : 'block';
        });
    });
});

/* Scroll Sections Active Link */
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    /* Sticky Navbar */
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /* Close Navbar when navbar link is clicked */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* Scroll Reveal */
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
})

ScrollReveal().reveal('.home-content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home-image, .hobbies-container, .portfolio-box, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-content h1, .about-image', {origin: 'left'});
ScrollReveal().reveal('.home-content p, .about-content', {origin: 'right'});

/* Typed JS*/
const typed  = new Typed('.multiple-text', {
    strings: ['Software Engineer', 'A.I. Researcher', 'Musician'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 1000,
    loop: true
});