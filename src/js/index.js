// HEADER
const navMenu = document.getElementById('nav-menu'),
	navToggle = document.getElementById('nav-toggle'),
	navClose = document.getElementById('nav-close'),
	navLink = document.querySelectorAll('.nav__link')

if (navToggle) {
	navToggle.addEventListener('click', () => {
		navMenu.classList.add('show-menu')
	})
}
if (navClose) {
	navClose.addEventListener('click', () => {
		navMenu.classList.remove('show-menu')
	})
}

function linkAction() {
	navMenu.classList.remove('show-menu')
}
navLink.forEach(link => link.addEventListener('click', linkAction))



// SKILLS
const skillsContent = document.querySelectorAll('.skills__content'),
	skillsHeader = document.querySelectorAll('.skills__header');

function toggleSkills() {
	let itemClass = this.parentNode.className
	console.log(itemClass);

	for (let i = 0; i < skillsContent.length; i++) {
		skillsContent[i].className = 'skills__content skills__close'
	}

	if (itemClass === 'skills__content skills__close') {
		this.parentNode.className = 'skills__content skills__open'
	}
}

skillsHeader.forEach((el) => {
	el.addEventListener('click', toggleSkills)
})



// QUALFIFCATION
const tabs = document.querySelectorAll('[data-target]'),
	tabContents = document.querySelectorAll('[data-content]')

tabs.forEach(tab => {
	tab.addEventListener('click', () => {
		const target = document.querySelector(tab.dataset.target)

		tabContents.forEach(tabContent => {
			tabContent.classList.remove('qualification__active')
		})
		target.classList.add('qualification__active')

		tabs.forEach(tab => {
			tab.classList.remove('qualification__active')
		})
		tab.classList.add('qualification__active')
	})
})



// MODAL
const modalViews = document.querySelectorAll('.services__modal'),
	modalBtns = document.querySelectorAll('.services__button'),
	modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function (modalClick) {
	modalViews[modalClick].classList.add('active-modal')
}
modalBtns.forEach((modalBtn, i) => {
	modalBtn.addEventListener('click', () => {
		modal(i)
	})
})
modalCloses.forEach((modalClose) => {
	modalClose.addEventListener('click', () => {
		modalViews.forEach((modalView) => {
			modalView.classList.remove('active-modal')
		})
	})
})



// SWIPER
let swiper = new Swiper(".portfolio__container", {
	cssMode: true,
	loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
		el: ".swiper-pagination",
		clickable: true,
    },
});