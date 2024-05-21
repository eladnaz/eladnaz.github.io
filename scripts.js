document.addEventListener('DOMContentLoaded', function () {
    const anchor_prefix = "anchor-";
	const bg_prefix = "bg-slide-";
	for(let i = 1; i < 5; i++){
		const content = document.getElementById(bg_prefix + i);
		const anchor = document.getElementById(anchor_prefix + i);
		anchor.addEventListener('click',function() {
			content.style.width = '100%';
			content.zIndex = 5;
			closeOtherContent(i);
		});
	}
});

function closeOtherContent(selected){
	const bg_prefix = "bg-slide-";
	for(let i = 1 ; i < 5; i++){
		const content = document.getElementById(bg_prefix + i);
		if(!(i === selected)){
			content.style.width = '0%';
			content.zIndex = 0;
		}
			
	}
}

const carousel = document.querySelector('.carousel');
const container = document.querySelector('.carousel-container');
const images = container.querySelectorAll('img');
const prevBtn = document.querySelector('.carousel-control.prev');
const nextBtn = document.querySelector('.carousel-control.next');

let currentSlide = 0;

function moveSlide(direction) {
  const imageWidth = carousel.offsetWidth;
  container.style.transform = `translateX(${currentSlide * -imageWidth}px)`;

  if (direction === 'prev') {
    currentSlide--;
  } else {
    currentSlide++;
  }

  if (currentSlide < 0) {
    currentSlide = images.length - 1;
  } else if (currentSlide >= images.length) {
    currentSlide = 0;
  }
}

prevBtn.addEventListener('click', () => moveSlide('prev'));
nextBtn.addEventListener('click', () => moveSlide('next'));
