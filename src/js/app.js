import stSlider from './modules/stSlider';

document.addEventListener('DOMContentLoaded', function(){

	let container = document.getElementById('slider');

	let options = {
		slideDuration: 5000,
		items: 3,
		navEnabled: true,
		paginationEnabled: true,
		step: 1,
		slideDuration: 1500,
	}

	let slider = new stSlider(container, options);

	slider.start();

});