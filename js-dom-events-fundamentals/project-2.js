'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// this function removes the hidden class
const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

// this function adds the hidden class back
const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

// As long i is smaller than the length of the buttons, it adds the even listener to all the buttons
for(let i = 0; i < btnsOpenModal.length; i++) {
    btnsOpenModal[i].addEventListener('click', openModal);
};

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Listens to which button is pressed
document.addEventListener('keydown', function(e) {
   console.log(e.key); // Shows which button was pressed
	
	// If x button is pressed and a class does not contain the class 'hidden' it calls the function closeModal()
   if(e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
   }
});