const images = document.querySelectorAll('.slide-show__image-box');
const nextButton = document.querySelector('.slide-show__next-image');
const previousButton = document.querySelector('.slide-show__previous-image');

const buttonSection = document.querySelector('.image-button');

//Variables
if(!localStorage.getItem('imageIndex')){
	localStorage.clear()
	localStorage.setItem('imageIndex', 0)
}
const toggleImageVisible = 'slide-show__image-box--visible';
const toggleButtonImageClear = 'image-button__go-to--clear';

//Eventlisteners
nextButton.addEventListener('click', handleNextbuttonClick);
previousButton.addEventListener('click', handlePrevbuttonClick);
images.forEach(image => {
	image.addEventListener('click', handleImageClick);
});

//Generates buttons for each image
images.forEach((image, index) => {
	let newButton = document.createElement('button');
	newButton.setAttribute('class', 'image-button__go-to');
	newButton.setAttribute('data-index', index);
	let background = image.firstElementChild.src;
	newButton.style.backgroundImage=`url(${background})`;
	buttonSection.append(newButton);
});

const goToImageButton = document.querySelectorAll('.image-button__go-to');
goToImageButton.forEach(button => {
	button.addEventListener('click', handleGoToImageClick);
});

window.addEventListener('keyup', handleKeyUp);

//Shows the first image
render();

//Functions
/* 
Function to handle clicking on the image
Gets the width of the image clicked
Hides the current image
shows the next image if clicked on the right half
shows the previous image if clicked on the left half
*/
function handleImageClick (event) {
	//Uses getComputedStyle to read the css values of the target
	let style = getComputedStyle(event.currentTarget.firstElementChild);
	//Uses parseInt to convert string to integer
	let width = parseInt(style.width);
	if(event.offsetX >=0 && event.offsetX <= width){
		render();
		if(event.offsetX >= (width/2) && event.offsetX <= width){
			increaseImageNumber();	
		}else if(event.offsetX <= (width/2) && event.offsetX >=0) {
			decreaseImageNumber();
		}
	}
}

/* 
Function to handle clicking on the button for next image
hides current image and shows the next image in the array
*/
function handleNextbuttonClick() {
	render();
	increaseImageNumber();
}

/* 
Function to handle clicking on the button for previous image
hides current image and shows the previous image in the array
*/
function handlePrevbuttonClick() {
	render();
	decreaseImageNumber();
}

/* 
Function to handle clicking on one of the buttons to go to a specific image
hides the current image then checks the id of the button clicked and matches with
the corresponding image in the array
*/
function handleGoToImageClick(event) {
	//let currentTarget = event.currentTarget;
	render();
	let index = Number(event.currentTarget.dataset.index)
	localStorage.setItem('imageIndex', index)
	render()
	/* switch (currentTarget.id) {
		case 'button1':
			currentImage=0;
			render();
			break;
		case 'button2':
			currentImage=1;
			render();
			break;
		case 'button3':
			currentImage=2
			render();
		break;
		case 'button4':
			currentImage=3
			render();
		break;
		case 'button5':
			currentImage=4
			render();
		break;
		case 'button6':
			currentImage=5
			render();
		break;
		case 'button7':
			currentImage=6
			render();
		break;
		case 'button8':
			currentImage=7
			render();
		break;
		case 'button9':
			currentImage=8
			render();
		break;
		case 'button10':
			currentImage=9
			render();
		break;
	}  */
}

/* 
Function to handle a key press on the keyboard
checks if the key pressed is arrowleft or arrowright
then shows the previous image if arrowleft is pressed
shows next image if arrowright is pressed
*/
function handleKeyUp(event) {
	if(event.key==='ArrowLeft' || event.key==='ArrowRight'){
		render();
		if(event.key==='ArrowLeft'){
			decreaseImageNumber();
			
		}else if(event.key==='ArrowRight'){
			increaseImageNumber();
		}
	}
}

/* 
Function to show or hide a image
toggles the --visible and --clear class
*/
function render () {
	const storedImage = Number(localStorage.getItem('imageIndex'))
	images[storedImage].classList.toggle(toggleImageVisible);
	goToImageButton[storedImage].classList.toggle(toggleButtonImageClear);
}

/* 
Function to increase array index and show the new image
cheks if the current image is the last in the array
and sets the index to 0 if it is
*/
function increaseImageNumber() {
	let storedImage = Number(localStorage.getItem('imageIndex'))
	if((storedImage+1)===images.length){
		storedImage = 0
		localStorage.setItem('imageIndex', storedImage)
		render();
	}else{
		storedImage += 1
		localStorage.setItem('imageIndex', storedImage)
		render();
	}
}

/* 
Function to decrease array index and show new image
checks if the current image is the first in the array
and sets the index to the last in the array if it is
*/
function decreaseImageNumber() {
	let storedImage = Number(localStorage.getItem('imageIndex'))
	if(storedImage===0){
		storedImage = (images.length-1)
		localStorage.setItem('imageIndex', storedImage)
		render();
	}else{
		storedImage -= 1
		localStorage.setItem('imageIndex', storedImage)
		render();
	}
}