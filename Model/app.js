const  openButton = document.querySelector('.modal-btn');
const overlay = document.querySelector('.modal-overlay');
const closeButton = document.querySelector('.close-btn');

openButton.addEventListener('click', function(){
    overlay.classList.toggle("open-modal")
    
})
closeButton.addEventListener('click', function(){
    overlay.classList.remove("open-modal")
})
