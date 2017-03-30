class stSlider {

	constructor(sliderContainer, options) {
		this.slider = sliderContainer;
		this.slides = this.slider.children;
		this.options = options;

		this.registerEvents();
	}

	registerEvents(){
		
	}

	start(){
		this.renderSliderBody();
	}

	renderSliderBody() {
		let content = '';
		
		[...this.slides].map((slide) => { 
			console.log(slide);
			content += slide.outerHTML;

		this.slider.innerHTML = `<div class="slider-outer">${content}</div>`;
	}

	/*getSliderSlides() {

		let slides = [];
		let sliderChildren = this.slider.children;

		for (let i = 0; i < sliderChildren.length; i++) {
			slides.push(sliderChildren.item(i));
		}

		return slides;

	}*/

	getSliderSizes() {
		return { width: this.slider.clientWidth, height: this.slider.clientHeight }
	}

}

export default stSlider;