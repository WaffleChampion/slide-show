const images = document.querySelectorAll('.slide-show__image-box');
const nextButton = document.querySelector('.slide-show__next-image');
const previousButton = document.querySelector('.slide-show__previous-image');
const goToImageButton = document.querySelectorAll('.image-button__go-to')

let currentImage = 0;

const toggleImageVisible = 'slide-show__image-box--visible';
const toggleButtonImageClear = 'image-button__go-to--clear'

nextButton.addEventListener('click', handleNextbuttonClick);
previousButton.addEventListener('click', handlePrevbuttonClick);
images.forEach(image => {
	image.addEventListener('click', handleMouseUp)
	//image.addEventListener('click', handleNextbuttonClick)
})

goToImageButton.forEach(button => {
	button.addEventListener('click', handleGoToImageClick)
})

window.addEventListener('keyup', handleKeyUp)

toggleVisiblity();

function handleMouseUp (event) {
	let style = getComputedStyle(event.currentTarget.firstElementChild)
	let width = parseInt(style.width)
	toggleVisiblity();
	if(event.offsetX >= (width/2) && event.offsetX <= width){
		increaseImageNumber();
			
	}else if(event.offsetX <= (width/2) && event.offsetX >=0) {
		decreaseImageNumber();
	}
}

function handleNextbuttonClick() {
	toggleVisiblity();
	increaseImageNumber();
}


function handlePrevbuttonClick() {
	toggleVisiblity();
	decreaseImageNumber();
	
}

function handleGoToImageClick(event) {
	let currentTarget = event.currentTarget;
	toggleVisiblity();
	switch (currentTarget.id) {
		case 'button1':
			currentImage=0;
			toggleVisiblity();
			break;
		case 'button2':
			currentImage=1;
			toggleVisiblity();
			break;
		case 'button3':
			currentImage=2
			toggleVisiblity();
		break;
		case 'button4':
			currentImage=3
			toggleVisiblity();
		break;
		case 'button5':
			currentImage=4
			toggleVisiblity();
		break;
		case 'button6':
			currentImage=5
			toggleVisiblity();
		break;
		case 'button7':
			currentImage=6
			toggleVisiblity();
		break;
		case 'button8':
			currentImage=7
			toggleVisiblity();
		break;
		case 'button9':
			currentImage=8
			toggleVisiblity();
		break;
		case 'button10':
			currentImage=9
			toggleVisiblity();
		break;
		default:

		break;
	}

}

function handleKeyUp(event) {
	if(event.key==='ArrowLeft' || event.key==='ArrowRight'){
		toggleVisiblity();
		if(event.key==='ArrowLeft'){
			increaseImageNumber()
			
		}else if(event.key==='ArrowRight'){
			decreaseImageNumber()
		}
	}
}

function toggleVisiblity () {
	images[currentImage].classList.toggle(toggleImageVisible);
	goToImageButton[currentImage].classList.toggle(toggleButtonImageClear);
}

function increaseImageNumber() {
	if(currentImage===0){
		currentImage = (images.length-1);
		toggleVisiblity();
	}else{
		currentImage -= 1;
		toggleVisiblity();
	}
}

function decreaseImageNumber() {
	if((currentImage+1)===images.length){
		currentImage = 0;
		toggleVisiblity();
	}else{
		currentImage += 1;
		toggleVisiblity();
	}
}