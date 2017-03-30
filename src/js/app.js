import stSlider from './modules/stSlider';

document.addEventListener('DOMContentLoaded', function(){

	let container = document.getElementById('slider');

	console.log(container);

	let options = {
		slideDuration: 5000,
		items: 1,
		navEnabled: true,
	}

	let slider = new stSlider(container, options);

	slider.start();

});