class stSlider {

	constructor(sliderContainer, options) {
		this.slider = sliderContainer;
		this.sliderWidth = this.slider.clientWidth;
		this.slides = this.slider.children;
		this.slidesCount = this.slides.length;
		this.slideWidth = 0;
		this.sliderInnerWidth = 0;
		this.options = options;

		this.registerEvents(this.options);
	}

	registerEvents(options){
		
	}

	start(){

		this.countSizes();
		this.renderSliderBody();
	}

	renderSliderBody() {
		let content = '';
		
		[...this.slides].map((slide, index) => { 
			if (index == 0) {
				content += `<div class="stSlider-item active" style="width: ${Math.round(this.slideWidth)}px;">${slide.outerHTML}</div>`;
			} else {
				content += `<div class="stSlider-item" style="width: ${Math.round(this.slideWidth)}px;">${slide.outerHTML}</div>`;
			}
		});

		this.slider.innerHTML = `<div class="slider-outer" style="width: ${Math.round(this.sliderInnerWidth)}px; transition: all ${this.milisecondsToSeconds(this.options.slideDuration)}s ease;">${content}</div>`;

		if (this.options.navEnabled) this.renderNavigation();
		if (this.options.paginationEnabled) this.renderPagination();
	}

	renderNavigation() {

		let navContainer = document.createElement('div');
		let navPrev = document.createElement('span');
		let navNext = document.createElement('span');

		navContainer.classList.add('slider-navigation');
		navPrev.classList.add('prev');
		navNext.classList.add('next');

		navContainer.appendChild(navPrev);
		navContainer.appendChild(navNext);
		this.slider.appendChild(navContainer);

	}

	renderPagination() {

		let paginationContainer = document.createElement('div');
		let dotsNeeded = Math.ceil(this.slidesCount/this.options.items);

		if (dotsNeeded > 1) {
			for (let i = 0; i < dotsNeeded; i++) {
				let paginationDot = document.createElement('span');
				paginationDot.classList.add('pagination-dot');
				paginationContainer.appendChild(paginationDot);
			}
		}

		paginationContainer.classList.add('slider-pagination');

		this.slider.appendChild(paginationContainer);
	}

	countSlideWidth() {
		this.slideWidth = this.sliderWidth/this.options.items;
	}

	countSliderInnerWidth() {
		this.sliderInnerWidth = this.slideWidth*this.slidesCount;
	}

	countSizes() {
		this.countSlideWidth();
		this.countSliderInnerWidth();
	}

	milisecondsToSeconds(miliseconds) {
		let seconds = miliseconds/1000;
		return seconds.toFixed(2);
	}
}

export default stSlider;