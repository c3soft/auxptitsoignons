// const hamburgerButton = document.querySelector('.nav-toggler');
// const navigation = document.querySelector('nav');

// hamburgerButton.addEventListener("click", toggleNav);
// function toggleNav() {
//     hamburgerButton.classList.toggle("active");
//     navigation.classList.toggle("active");
// }

const modalContainer = document.querySelector(".modal-container");
const modalTriggers = document.querySelectorAll(".modal-trigger");

modalTriggers.forEach(trigger => trigger.addEventListener("click", toggleModal));

function toggleModal() {
    modalContainer.classList.toggle("active")
}


// Add products
const btnsMore = document.querySelectorAll('.btnMore');
const btnsless = document.querySelectorAll('.btnLess');
let quantityProduct = document.querySelectorAll('.quantityProduct');
let priceByProduct = document.querySelectorAll('.price-by-product');
let totalByProduct = document.querySelectorAll('.total-by-product');
let totalProduct = 0;

for (let i = 0; i < btnsMore.length; i++) {
    let self = btnsMore[i];
    let q = quantityProduct[i];
    let p = priceByProduct[i];
    let t = totalByProduct[i];

    self.addEventListener('click', function (event) { 
        totalProduct += 1;
        q.value = totalProduct;
        t.innerHTML = p.value * q.value +" €";
    }, false);
}

for (let i = 0; i < btnsless.length; i++) {
    let self = btnsless[i];
    let q = quantityProduct[i];

    self.addEventListener('click', function (event) { 
        totalProduct -= 1;
        if (totalProduct <= 0) {
            q.value = "";
            totalProduct = 0;
        } else {
            q.value = totalProduct; 
        }
    }, false);
}












function addProduct() {
    totalProduct += 1;
    quantityProduct.value = totalProduct;
};

// btnLess.addEventListener('click', DeleteProduct);
// function DeleteProduct() {
//     totalProduct -= 1;
//     quantityProduct.value = totalProduct;
// }

