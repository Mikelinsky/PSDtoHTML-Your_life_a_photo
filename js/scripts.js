// phone carousel elements
var carouselArea = document.getElementById('js-carousel');
var leftSlider = document.getElementsByClassName('js-leftSwitch');
var rightSlider = document.getElementsByClassName('js-rightSwitch');
var reg = document.getElementById('js-numberOfReg');
var numberOfReg = 1;
var phoneImages = [
	'url(images/phone-blue.jpg)',
	'url(images/phone-green.jpg)',
	'url(images/phone-red.jpg)',
	'url(images/phone-white.jpg)',
	'url(images/phone-yellow.jpg)'
];
var indexOfPhoneArray = 0;

//		CAROUSEL
function viewSlide() {
	carouselArea.style.backgroundImage = phoneImages[indexOfPhoneArray];
}
//			phone carousel switches	
rightSlider[0].addEventListener('click', function () {
	indexOfPhoneArray++;
	numberOfReg++;
	if (numberOfReg == 6 && indexOfPhoneArray == 5) {
		numberOfReg = 1;
		indexOfPhoneArray = 0;
	}
	reg.innerHTML = numberOfReg;
	viewSlide();
});
leftSlider[0].addEventListener('click', function () {
	indexOfPhoneArray--;
	numberOfReg--;
	if (numberOfReg == 0 && indexOfPhoneArray == -1) {
		numberOfReg = 5;
		indexOfPhoneArray = 4;
	}
	reg.innerHTML = numberOfReg;
	viewSlide();
});

//			SCROLLSPY
$(function () {
	$('body').scrollspy({ target: '#navigation-bar' });

	$(window).scroll(function () {
		changeNavbar();
	});

	function changeNavbar() {
		var home = $(document).scrollTop();
		if (home >= 100) {
			$('nav').addClass('sticky');
		} else {
			$('nav').removeClass('sticky');
		}
	}
});