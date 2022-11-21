// const hamburgerButton = document.querySelector('.nav-toggler');
// const navigation = document.querySelector('nav');

// hamburgerButton.addEventListener("click", toggleNav);

function toggleNav() {
    hamburgerButton.classList.toggle("active");
    navigation.classList.toggle("active");
}

const modalContainer = document.querySelector(".modal-container");
const modalTriggers = document.querySelectorAll(".modal-trigger");

modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal));

function toggleModal() {
    modalContainer.classList.toggle("active")
}