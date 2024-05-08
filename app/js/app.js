document.addEventListener("DOMContentLoaded", function () {

	// Custom JS

});

const header = document.querySelector('.header');
const togglemenu = document.querySelector('#toggle-menu');
const menu = document.querySelector('.menu');
var scrollPrev = 0;
togglemenu.addEventListener('click', () => {
	togglemenu.classList.toggle("on");
	menu.classList.toggle("on");
	document.body.classList.toggle("noscroll");
});

window.addEventListener('resize', () => {
	if (window.outerWidth >= 992) {
		togglemenu.classList.remove("on");
		header.classList.remove("on");
		menu.classList.remove("on");
		document.body.classList.remove("noscroll");
	}
});


let menuSubBtns = document.querySelectorAll('.menu__item-svg-block');
menuSubBtns.forEach(el => {
	el.addEventListener('click', openMenu);
});

function openMenu(e) {
	if (e.currentTarget.classList.contains('menu__item-svg-block_level')) {
		if (e.currentTarget.parentElement.classList.contains("open")) {
			e.currentTarget.nextElementSibling.style.maxHeight = "0";
			e.currentTarget.parentElement.classList.remove("open");
		} else {
			e.currentTarget.parentElement.parentElement.style.maxHeight = 8 + e.currentTarget.parentElement.parentElement.scrollHeight + e.currentTarget.nextElementSibling.scrollHeight + "px";
			e.currentTarget.nextElementSibling.style.maxHeight = 8 + e.currentTarget.nextElementSibling.scrollHeight + "px";
			e.currentTarget.parentElement.classList.add("open");
		}
	} else {
		if (e.currentTarget.parentElement.classList.contains("open")) {
			e.currentTarget.nextElementSibling.style.maxHeight = "0";
			e.currentTarget.parentElement.classList.remove("open");
		} else {
			e.currentTarget.nextElementSibling.style.maxHeight = 8 + e.currentTarget.nextElementSibling.scrollHeight + "px";
			e.currentTarget.parentElement.classList.add("open");
		}
	}
}

let productTabs = document.querySelectorAll('.product-single__tab');
if (productTabs) {
	productTabs.forEach(el => {
		el.addEventListener('click', function (e) {
			document.querySelector('.product-single__tab.active').classList.remove('active');
			document.querySelector('.product-single__tab-content.active').classList.remove('active');
			let trg = e.target;
			trg.classList.add('active');
			document.querySelector(`.product-single__tab-content[data-tab-content="${trg.dataset.tab}"]`).classList.add('active');
		});
	});
}

if (document.querySelector('.contacts-page__acc')) {
	document.querySelector('.contacts-page__acc').addEventListener('click', function (e) {
		if (!e.target.closest('.contacts-page__acc-head')) return false;
		let item = e.currentTarget;
		if (item.classList.contains('open')) {
			item.classList.remove('open');
			item.querySelector('.contacts-page__acc-body').style.maxHeight = "0";
		} else {
			item.classList.add('open');
			item.querySelector('.contacts-page__acc-body').style.maxHeight = item.querySelector('.contacts-page__acc-body').scrollHeight + 20 + "px";
		}
	});
}


let btnModals = document.querySelectorAll('.btn-modal');
btnModals.forEach(el => {
	el.addEventListener('click', openModalNominaton);
});

function openModalNominaton(event) {
	event.preventDefault();
	let modal = document.getElementById("modal-callback");
	let close = modal.querySelector(".modal-content__close");
	fadeIn(modal, 300, 'flex');
	close.onclick = function () {
		fadeOut(modal, 300);
	}
}

const createExpertSlider = () => {
	new Swiper(".first__slider", {
		slidesPerView: 'auto',
		centeredSlides: true,
		spaceBetween: 30,
		watchSlidesVisibility: true,
		loop: true,
		autoplay: {
			delay: 2500,
		},
		// speed: 500,
		navigation: {
			nextEl: '.first-slider-next',
			prevEl: '.first-slider-prev',
		},
		breakpoints: {},
	});
}

createExpertSlider();

const createProductSingleSlider = () => {

	let thumb = new Swiper(".product-thumb-slider", {
		spaceBetween: 16,
		loop: true,
		slidesPerView: 3,
		// slidesPerView: 'auto',
		freeMode: true,
		watchSlidesProgress: true,
	});
	let big = new Swiper(".product-big-slider", {
		spaceBetween: 16,
		autoHeight: true,
		loop: true,
		navigation: {
			nextEl: ".product-slider-next",
			prevEl: ".product-slider-prev",
		},
		thumbs: {
			swiper: thumb,
		},
	});

}

createProductSingleSlider();

const createProductSlider = () => {
	let slider = new Swiper(".product-slider", {
		// slidesPerView: 3,
		slidesPerView: 'auto',
		// rewind: true,
		spaceBetween: 24,
		navigation: {
			// nextEl: slider.el.closest('.section').querySelector('.product-slider-next'),
			// prevEl: slider.el.closest('.section').querySelector('.product-slider-prev'),
		},
	});

}

// createProductSlider();
var galleries = document.querySelectorAll('.lg');
for (let i = 0; i < galleries.length; i++) {
	lightGallery(galleries[i], {
		thumbnail: false,
		selector: '.lg-item',
		download: false
	})
}

var sliderProduct = document.getElementsByClassName("product-slider");

if (sliderProduct) {
	for (let i = 0; i < sliderProduct.length; i++) {
		var slider = sliderProduct[i];
		new Swiper(sliderProduct[i], {
			// slidesPerView: 3,
			slidesPerView: 'auto',
			// rewind: true,
			spaceBetween: 24,
			navigation: {
				nextEl: slider.closest('.section').querySelector('.product-slider-next'),
				prevEl: slider.closest('.section').querySelector('.product-slider-prev'),
			},
			// slidesPerView: 1,
			// breakpoints: {
			// 	'576': {
			// 		slidesPerView: 'auto'
			// 	}
			// },
		});

		// slider = tns({
		// 	loop: false,
		// 	rewind: true,
		// 	container: slider,
		// 	nav: false,
		// 	gutter: 40,
		// 	mouseDrag: true,
		// 	controlsContainer: slider.nextElementSibling,
		// 	responsive: {
		// 		0: {
		// 			gutter: 10,
		// 			items: 1
		// 		},
		// 		576: {
		// 			gutter: 20,
		// 			items: 2
		// 		},
		// 		768: {
		// 			gutter: 30,
		// 			items: 3
		// 		},
		// 	}
		// });
	}
}


function fadeIn(el, timeout, display) {
	el.style.opacity = 0;
	el.style.display = display || 'block';
	el.style.transition = `opacity ${timeout}ms`;
	setTimeout(() => {
		el.style.opacity = 1;
	}, 10);
}

function fadeOut(el, timeout) {
	el.style.opacity = 1;
	el.style.transition = `opacity ${timeout}ms`;
	el.style.opacity = 0;

	setTimeout(() => {
		el.style.display = 'none';
	}, timeout);
}

function formSend(e) {
	var act = e.getAttribute("action");
	var url = "";
	var btn = e.querySelector('button');
	var btnText = btn.textContent;
	btn.setAttribute('disabled', 'disabled');
	btn.textContent = 'Загрузка...';
	for (var i = e.elements.length - 1; i >= 0; i--) {
		var name = e.elements[i].getAttribute("name");
		if (e.elements[i].type == "checkbox") {
			if (e.elements[i].checked) {
				url += name + "=" + e.elements[i].value + "&";
			}
		} else if (name) {
			url += name + "=" + e.elements[i].value + "&";
		}
	}
	var request = new XMLHttpRequest();

	request.onreadystatechange = function () {
		if (request.readyState === 4) {
			if (request.status === 422) {
				btn.textContent = btnText;
				btn.removeAttribute('disabled');
				e.nextElementSibling.innerHTML = request.response;
				let inputs = e.querySelectorAll('input, select, textarea');
				inputs.forEach(el => {
					el.addEventListener('input', () => {
						el.removeAttribute("style");
						el.classList.remove('error');
					});
				});
				let errors = e.nextElementSibling.querySelectorAll("[data-error]");
				errors.forEach(el => {
					let dataAt = el.getAttribute("data-error");
					let input = e.querySelector("input[name=" + dataAt + "], select[name=" + dataAt + "], textarea[name=" + dataAt + "]");
					input.style.borderColor = "#da4c4c";
					input.classList.add('error');
				});
			} else {
				btn.textContent = btnText;
				btn.removeAttribute('disabled');
				e.nextElementSibling.innerHTML = request.response;
				e.reset();
			}
		}
	}

	request.open('POST', act);

	request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

	request.send(url);

	return false;
}