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

images[currentImage].classList.toggle(toggleImageVisible);
goToImageButton[currentImage].classList.toggle(toggleButtonImageClear)

function handleMouseUp (event) {
	let style = getComputedStyle(event.currentTarget.firstElementChild)
	let width = parseInt(style.width)
	images[currentImage].classList.toggle(toggleImageVisible);
	goToImageButton[currentImage].classList.toggle(toggleButtonImageClear)
	if(event.offsetX >= (width/2) && event.offsetX <= width){
		if((currentImage+1)===images.length){
			currentImage = 0;
			images[currentImage].classList.toggle(toggleImageVisible);
			goToImageButton[currentImage].classList.toggle(toggleButtonImageClear)
		}else{
			currentImage += 1;
			images[currentImage].classList.toggle(toggleImageVisible);
			goToImageButton[currentImage].classList.toggle(toggleButtonImageClear)
		}
			
	}else if(event.offsetX <= (width/2) && event.offsetX >=0) {
		if(currentImage===0){
			currentImage = (images.length-1);
			images[currentImage].classList.toggle(toggleImageVisible);
			goToImageButton[currentImage].classList.toggle(toggleButtonImageClear);
		}else{
			currentImage -= 1;
			images[currentImage].classList.toggle(toggleImageVisible);
			goToImageButton[currentImage].classList.toggle(toggleButtonImageClear);
		}
	}
}

function handleNextbuttonClick() {
	images[currentImage].classList.toggle(toggleImageVisible);
	goToImageButton[currentImage].classList.toggle(toggleButtonImageClear);
	if((currentImage+1)===images.length){
		currentImage = 0;
		images[currentImage].classList.toggle(toggleImageVisible);
		goToImageButton[currentImage].classList.toggle(toggleButtonImageClear);
	}else{
		currentImage += 1;
		images[currentImage].classList.toggle(toggleImageVisible);
		goToImageButton[currentImage].classList.toggle(toggleButtonImageClear);
	}
}


function handlePrevbuttonClick() {
	images[currentImage].classList.toggle(toggleImageVisible);
	goToImageButton[currentImage].classList.toggle(toggleButtonImageClear);
	if(currentImage===0){
		currentImage = (images.length-1);
		images[currentImage].classList.toggle(toggleImageVisible);
		goToImageButton[currentImage].classList.toggle(toggleButtonImageClear);
	}else{
		currentImage -= 1;
		images[currentImage].classList.toggle(toggleImageVisible);
		goToImageButton[currentImage].classList.toggle(toggleButtonImageClear);
	}
	
}

function handleGoToImageClick(event) {
	let currentTarget = event.currentTarget;
	images[currentImage].classList.toggle(toggleImageVisible);
	goToImageButton[currentImage].classList.toggle(toggleButtonImageClear);
	switch (currentTarget.id) {
		case 'button1':
			currentImage=0;
			images[currentImage].classList.toggle(toggleImageVisible);
			goToImageButton[currentImage].classList.toggle(toggleButtonImageClear);
			break;
		case 'button2':
			currentImage=1;
			images[currentImage].classList.toggle(toggleImageVisible);
			goToImageButton[currentImage].classList.toggle(toggleButtonImageClear);
			break;
		case 'button3':
			currentImage=2
			images[currentImage].classList.toggle(toggleImageVisible);
			goToImageButton[currentImage].classList.toggle(toggleButtonImageClear);
		break;
		case 'button4':
			currentImage=3
			images[currentImage].classList.toggle(toggleImageVisible);
			goToImageButton[currentImage].classList.toggle(toggleButtonImageClear);
		break;
		case 'button5':
			currentImage=4
			images[currentImage].classList.toggle(toggleImageVisible);
			goToImageButton[currentImage].classList.toggle(toggleButtonImageClear);
		break;
		case 'button6':
			currentImage=5
			images[currentImage].classList.toggle(toggleImageVisible);
			goToImageButton[currentImage].classList.toggle(toggleButtonImageClear);
		break;
		case 'button7':
			currentImage=6
			images[currentImage].classList.toggle(toggleImageVisible);
			goToImageButton[currentImage].classList.toggle(toggleButtonImageClear);
		break;
		case 'button8':
			currentImage=7
			images[currentImage].classList.toggle(toggleImageVisible);
			goToImageButton[currentImage].classList.toggle(toggleButtonImageClear);
		break;
		case 'button9':
			currentImage=8
			images[currentImage].classList.toggle(toggleImageVisible);
			goToImageButton[currentImage].classList.toggle(toggleButtonImageClear);
		break;
		case 'button10':
			currentImage=9
			images[currentImage].classList.toggle(toggleImageVisible);
			goToImageButton[currentImage].classList.toggle(toggleButtonImageClear);
		break;
		default:

		break;
	}

}

function handleKeyUp(event) {
	if(event.key==='ArrowLeft' || event.key==='ArrowRight'){
		images[currentImage].classList.toggle(toggleImageVisible);
		goToImageButton[currentImage].classList.toggle(toggleButtonImageClear);
		if(event.key==='ArrowLeft'){
			if(currentImage===0){
				currentImage = (images.length-1);
				images[currentImage].classList.toggle(toggleImageVisible);
				goToImageButton[currentImage].classList.toggle(toggleButtonImageClear);
			}else{
				currentImage -= 1;
				images[currentImage].classList.toggle(toggleImageVisible);
				goToImageButton[currentImage].classList.toggle(toggleButtonImageClear);
			}
			
		}else if(event.key==='ArrowRight'){
			if((currentImage+1)===images.length){
				currentImage = 0;
				images[currentImage].classList.toggle(toggleImageVisible);
				goToImageButton[currentImage].classList.toggle(toggleButtonImageClear);
			}else{
				currentImage += 1;
				images[currentImage].classList.toggle(toggleImageVisible);
				goToImageButton[currentImage].classList.toggle(toggleButtonImageClear);
			}
		}
	}
}