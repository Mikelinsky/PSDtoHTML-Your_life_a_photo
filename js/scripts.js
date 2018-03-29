// phone carousel elements
var carouselLeftSlider = document.getElementsByClassName('js-leftSwitch');
var carouselRightSlider = document.getElementsByClassName('js-rightSwitch');
var reg = document.getElementById('js-numberOfReg');
var numberOfReg = 1;

//			scrollspy
$(function() {
	$('body').scrollspy({ target: '#navigation-bar' });

	$(window).scroll(function(){
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
//options carousel
$(function() {
	$(".carousel").carousel("pause");
});

//			phone carousel switches	
carouselRightSlider[0].addEventListener('click', function() {
	numberOfReg++;
	if (numberOfReg == 6) {
		numberOfReg = 1;
	}
	reg.innerHTML = numberOfReg;
});
carouselLeftSlider[0].addEventListener('click', function() {
	numberOfReg--;
	if (numberOfReg == 0) {
		numberOfReg = 5;
	}
	reg.innerHTML = numberOfReg;
});