// mobile menu
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector(".header .navbar");
const header = document.querySelector('.header');
const navLinks = document.querySelectorAll('.navlink');

menu.onclick = () => {
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}

scrollingElement = (document.scrollingElement || document.body)
const scrollToBottom = () => {
  scrollingElement.scrollTop = scrollingElement.scrollHeight;
}

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
    header.style.backgroundColor = '#000';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

// reviews
let slides = document.querySelectorAll('.reviews .slide-container .slide');
let index = 0;

const next = () => {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active')
}

const prev = () => {
  slides[index].classList.remove('active');
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active');
}

//faq
let faqAccordion = document.querySelectorAll('.faq .accordion-container .accordion')

faqAccordion.forEach(accordion => {
  accordion.onclick = () => {
    accordion.classList.toggle('active')
  }
});