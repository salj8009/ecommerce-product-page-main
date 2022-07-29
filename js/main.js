const imgMenu = document.querySelector('.img-menu');
const navMenu = document.querySelector('.nav-menu');
const menuMobileX = document.querySelector('#menu-mobileX');
const imgCart = document.querySelector('#imgCart');
const dialogContainer = document.querySelector('.dialog-container');
const dialogContainerProducts = document.querySelector('.dialog-container-products');
const dialogCancel = document.querySelector('.btn-cancel');
const cancelConProducts = document.querySelector('.cancel-con-Products');
const menos = document.querySelector('#menos');
const countProduct = document.querySelector('#count-product');
const mas = document.querySelector('#mas');
const btnAddToCart = document.querySelector('#add-to-cart');
const numberOfProducts = document.querySelector('.number-of-products');
const cantidadDeProductos = document.querySelector('.cantidad-productos');
const priceFinaly = document.querySelector('.price-final');


const menuMobile = () => {
    navMenu.classList.replace('oculto','visible');    
}

imgMenu.addEventListener('click', menuMobile);

const cerrarMenuMobile = () => {
    navMenu.classList.replace('visible' , 'oculto');
}

menuMobileX.addEventListener('click' , cerrarMenuMobile);


imgCart.addEventListener('click' , () => {
    if(contador === 0){
        dialogContainer.showModal();
    }else{
        dialogContainerProducts.showModal();
    } 
});

dialogCancel.addEventListener('click', () => dialogContainer.close());
cancelConProducts.addEventListener('click' , () =>dialogContainerProducts.close());

let contador = 0;

menos.onclick =function restarCount(){
    if(contador != 0){
        contador --;
        countProduct.textContent = contador; 
    }
  }
    
 
mas.onclick = function sumarCount(){
  
    contador ++;
    countProduct.textContent = contador; 
}

const calcularPago = () => {
    const precioFilo = 125.00;
   return precioApagar = precioFilo * contador;
}

btnAddToCart.addEventListener('click' , () => {
    console.log(contador)
    const pagarEnCarrito = calcularPago(); 
    numberOfProducts.textContent = contador;
    cantidadDeProductos.textContent = contador;
    priceFinaly.textContent = `$${pagarEnCarrito}.00`; 
    numberOfProducts.classList.replace('oculto','visible');
})

