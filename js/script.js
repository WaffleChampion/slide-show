//Variables
let currentImage = 0;
const toggleImageVisible = 'slide-show__image-box--visible';
const toggleButtonImageClear = 'image-button__go-to--clear';

//Imports from Html
const images = document.querySelectorAll('.slide-show__image-box');
const nextButton = document.querySelector('.slide-show__next-image');
const previousButton = document.querySelector('.slide-show__previous-image');
const buttonSection = document.querySelector('.image-button');
generateButtons()
const goToImageButton = document.querySelectorAll('.image-button__go-to');

//Eventlisteners
nextButton.addEventListener('click', handleNextbuttonClick);
previousButton.addEventListener('click', handlePrevbuttonClick);
images.forEach(image => {
	image.addEventListener('click', handleImageClick);
});
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

//Generates buttons for each image
function generateButtons () {
	images.forEach((image, index) => {
		let newButton = document.createElement('button');
		newButton.setAttribute('class', 'image-button__go-to');
		newButton.setAttribute('data-index', index);
		let background = image.firstElementChild.src;
		newButton.style.backgroundImage=`url(${background})`;
		buttonSection.append(newButton);
	});
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
	currentImage = index
	render()
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
	images[currentImage].classList.toggle(toggleImageVisible);
	goToImageButton[currentImage].classList.toggle(toggleButtonImageClear);
}

/* 
Function to increase array index and show the new image
cheks if the current image is the last in the array
and sets the index to 0 if it is
*/
function increaseImageNumber() {
	if((currentImage+1)===images.length){
		currentImage = 0;
		render();
	}else{
		currentImage += 1;
		render();
	}
}

/* 
Function to decrease array index and show new image
checks if the current image is the first in the array
and sets the index to the last in the array if it is
*/
function decreaseImageNumber() {
	if(currentImage===0){
		currentImage = (images.length-1);
		render();
	}else{
		currentImage -= 1;
		render();
	}
}