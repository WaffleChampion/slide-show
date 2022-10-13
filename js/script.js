const images = document.querySelectorAll('.slide-show__image');
const nextButton = document.querySelector('.slide-show__next-image');
const previousButton = document.querySelector('.slide-show__previous-image')
//const goToImageButton = document.querySelectorAll('.image-button__go-to')
const goToImage1 = document.querySelector('#btn1')
const goToImage2 = document.querySelector('#btn2')
const goToImage3 = document.querySelector('#btn3')
const goToImage4 = document.querySelector('#btn4')
const goToImage5 = document.querySelector('#btn5')
const goToImage6 = document.querySelector('#btn6')
const goToImage7 = document.querySelector('#btn7')
const goToImage8 = document.querySelector('#btn8')
const goToImage9 = document.querySelector('#btn9')
const goToImage10 = document.querySelector('#btn10')

let currentImage = 0;

nextButton.addEventListener('click', handleNextBtnClick);
previousButton.addEventListener('click', handlePrevBtnClick);
//goToImageButton[2].addEventListener('click', handleGoToImageClick)
goToImage1.addEventListener('click', handleGoToImageClick)
goToImage2.addEventListener('click', handleGoToImageClick)
goToImage3.addEventListener('click', handleGoToImageClick)
goToImage4.addEventListener('click', handleGoToImageClick)
goToImage5.addEventListener('click', handleGoToImageClick)
goToImage6.addEventListener('click', handleGoToImageClick)
goToImage7.addEventListener('click', handleGoToImageClick)
goToImage8.addEventListener('click', handleGoToImageClick)
goToImage9.addEventListener('click', handleGoToImageClick)
goToImage10.addEventListener('click', handleGoToImageClick)

window.addEventListener('keyup', handleKeyUp)

images[0].classList.toggle('slide-show__image--visible')

function handleNextBtnClick() {
	images[currentImage].classList.toggle('slide-show__image--visible');
	if((currentImage+1)===images.length){
		currentImage = 0;
		images[currentImage].classList.toggle('slide-show__image--visible')
	}else{
		currentImage += 1;
		images[currentImage].classList.toggle('slide-show__image--visible')
	}
}


function handlePrevBtnClick() {
	images[currentImage].classList.toggle('slide-show__image--visible');
	if(currentImage===0){
		currentImage = 9;
		images[currentImage].classList.toggle('slide-show__image--visible')
	}else{
		currentImage -= 1;
		images[currentImage].classList.toggle('slide-show__image--visible')
	}
}

function handleGoToImageClick(event) {
	console.log(event.currentTarget.id);
	let currentTarget = event.currentTarget;
	images[currentImage].classList.toggle('slide-show__image--visible');
	switch (currentTarget.id) {
		case 'btn1':
			images[0].classList.toggle('slide-show__image--visible')
			currentImage=0;
			break;
		case 'btn2':
			images[1].classList.toggle('slide-show__image--visible')
			currentImage=1;
			break;
		case 'btn3':
			images[2].classList.toggle('slide-show__image--visible')
			currentImage=2
		break;
		case 'btn4':
			images[3].classList.toggle('slide-show__image--visible')
			currentImage=3
		break;
		case 'btn5':
			images[4].classList.toggle('slide-show__image--visible')
			currentImage=4
		break;
		case 'btn6':
			images[5].classList.toggle('slide-show__image--visible')
			currentImage=5
		break;
		case 'btn7':
			images[6].classList.toggle('slide-show__image--visible')
			currentImage=6
		break;
		case 'btn8':
			images[7].classList.toggle('slide-show__image--visible')
			currentImage=7
		break;
		case 'btn9':
			images[8].classList.toggle('slide-show__image--visible')
			currentImage=8
		break;
		case 'btn10':
			images[9].classList.toggle('slide-show__image--visible')
			currentImage=9
		break;
		default:

			break;
	}
}

function handleKeyUp(event) {
	images[currentImage].classList.toggle('slide-show__image--visible');
	if(event.key==='ArrowLeft'){
		if(currentImage===0){
			currentImage = 9;
			images[currentImage].classList.toggle('slide-show__image--visible')
		}else{
			currentImage -= 1;
			images[currentImage].classList.toggle('slide-show__image--visible')
		}
		
	}else if(event.key==='ArrowRight'){
		if((currentImage+1)===images.length){
			currentImage = 0;
			images[currentImage].classList.toggle('slide-show__image--visible')
		}else{
			currentImage += 1;
			images[currentImage].classList.toggle('slide-show__image--visible')
		}
	}
}