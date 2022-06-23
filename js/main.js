const addToCart = document.getElementById('add-to-cart');
const Mas = document.getElementById('mas');
const Menos = document.getElementById('menos');
const countProduct = document.getElementById('count-product');
const checkoutontent = document.getElementById('checkout-content');


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
    const pprice = document.createElement('P');
    pprice.textContent = cantidadProductos;
    fragment.appendChild(pprice);

    checkoutontent.appendChild(fragment);
    console.log('btn add to cart');
})