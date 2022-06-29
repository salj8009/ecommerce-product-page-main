const addToCart = document.getElementById('add-to-cart');
const Mas = document.getElementById('mas');
const Menos = document.getElementById('menos');
const countProduct = document.getElementById('count-product');
const checkoutontent = document.getElementById('checkout-content');
const imgCart = document.getElementById('imgCart');


let cantidadProductos = 0;

const Masproductos = () => {    
    Mas.addEventListener('click' , () => {        
        cantidadProductos++;
        console.log(cantidadProductos);
        countProduct.innerText = `${cantidadProductos}`;
    })
    return cantidadProductos;
};

const Menosproductos = () => {
    Menos.addEventListener('click' , () => {
        if(cantidadProductos <= 0){
            console('no se puede restar a cero')
        }else{
            cantidadProductos--;
            countProduct.innerText = `${cantidadProductos}`;
            console.log(cantidadProductos);
        }
        
    });
    return cantidadProductos;
};

Masproductos();
Menosproductos();

const fragment = document.createDocumentFragment();

addToCart.addEventListener('click' , () => {
    
    //createElementsCheckout();
    createContentPAgo();
    
    console.log('btn add to cart');
});

const dialog = document.querySelector('dialog')
const btncancelar = document.getElementById('cancel');

imgCart.addEventListener('click' , () => {
  
    //createElementsCheckout();
    dialog.showModal();
});

cancel.addEventListener('click',() => dialog.close());

const createElementsCheckout = () => {
    const divcontent = document.createElement('DIV');
    const parrafo = document.createElement('P');
    const hr = document.createElement('HR');
    const ptext = document.createElement('P');

    divcontent.classList.add('checkout-content');
    parrafo.classList.add('p-cart');
    hr.classList.add('hr-container-checkout');
    ptext.classList.add('p-text');

    parrafo.textContent = `Cart`;
    ptext.textContent = `You cart is empty`;

    fragment.appendChild(divcontent);
    fragment.appendChild(parrafo);
    fragment.appendChild(hr);
    fragment.appendChild(ptext);

    checkoutontent.appendChild(fragment);  
}

/*const createContentPAgo = () => {
    const contentDivPago =document.createElement('DIV');
    let imagenProduct = document.createElement('IMG');
    const parrafoTitle = document.createElement('P');
    const spanPrecio = document.createElement('SPAN');
    const spanPago = document.createElement('SPAN');
    const imagentrash = document.createElement('IMG');
    const btnPago = document.createElement('BUTTON');

    contentDivPago.classList.add('contentDivPago');
    imagenProduct.classList.add('imagen-product');
    parrafoTitle.classList.add('parrafo-title');

    parrafoTitle.innerText = `Fall Limited Edition Sneakers`;

    imagenProduct.src = '/images/image-product-1-thumbnail.jpg';

    fragment.appendChild(contentDivPago);
    fragment.appendChild(imagenProduct);
    fragment.appendChild(parrafoTitle);

    

    checkoutontent.appendChild(fragment);

}*/
/**
    const divcontent = document.createElement('DIV');
    const parrafo = document.createElement('P');
    const pprice = document.createElement('P');

    divcontent.classList('checkout-content');
    parrafo.classList.add('checkout-content');
    pprice.classList.add('p-cart');

    parrafo.textContent = `Cart`;
    pprice.textContent = cantidadProductos;

    fragment.appendChild(divcontent);
    fragment.appendChild(parrafo);
    fragment.appendChild(pprice);

    checkoutontent.appendChild(fragment); 
 */