// import NavBar from "./components/navbar";

import ApiService  from './service/api_service';
import ProductosRender  from './components/producto/producto';
import Carrousel from './components/carrousel/main';
import Modal from '../front/components/modal/main.js';

// import ProductosRender from './components/producto/producto';
if(!localStorage.hasOwnProperty('orders')){
    localStorage.setItem('orders', '[]');
}
const url = new URL(window.location);
const params = new URLSearchParams(url.search);
const main = document.getElementById('main');
const banner = document.getElementById('banner');
const menuMobile = document.getElementById('mobile');
const btn = document.getElementById('hamburguer');
const closeMenu = document.getElementById('btnClose');
const carrito = document.getElementById('cart');
const modal = document.getElementById('modal');
const listado = await ApiService.getElements('facturas');
const factura = document.getElementById('factura');
const total = await ApiService.getElements('sum');
const lastOrderId= await ApiService.getElements('orders/last');
console.log(lastOrderId);
carrito.addEventListener('click', () =>{
if(!modal.classList.contains('modal')){
    modal.classList.add('modal');
    const ctnModal = document.getElementById('content-modal');
    const modalClass = new Modal(ctnModal,JSON.parse(localStorage.getItem('orders')));
    modalClass.Renderind();
    factura.innerHTML = modalClass.Resumen;
    const buynow = document.getElementById('buynow');
    // Boton de comprar ahora
    buynow.addEventListener('click', () =>{
        const items = JSON.parse(localStorage.getItem('orders'))
        if(items.length == 0){
            alert('Tienes que agregar un producto');
        }
        else{

            for(let i of items){
                
                let json = {id_producto:i['id'], id_orden:lastOrderId, subtotal:i['subtotal']};
                ApiService.Create('facturas/create', json);
                localStorage.clear();
            }
            ApiService.Create('orders/create', {id_user:1});
            alert('Compra efectuada');
            window.location.reload();
        }
        // console.log(items);
    })

    // Resetear y cerrar modal
    const closeModal = document.getElementById('closeMdl');
    closeModal.addEventListener('click', () =>{
    modal.classList.remove('modal');
    ctnModal.innerHTML = '';
    factura.innerHTML = '';
    })
}
})
btn.addEventListener('click', () =>{
if(menuMobile.classList.contains('closed')){
    menuMobile.classList.remove('closed');
}
})
closeMenu.addEventListener('click', () =>{
menuMobile.classList.add('closed');
})
// const productos = await ApiService.getElements('productos');
if(params.has('id')){
    const id = params.get('id');
    const productos = await ApiService.getElements(`detalles/${id}`);
    console.log(productos);
    const Render = new ProductosRender(main, productos);
    Render.render();
}
else{
    const productos = await ApiService.getElements('productos');
    const Rendering = new ProductosRender(main,productos);
    const Medicamentos = new Carrousel(banner);
    Medicamentos.Render();
    Rendering.render();
}

const btns = document.querySelectorAll('.add');
const amounts = document.querySelectorAll('.amount');
btns.forEach((btn,i) =>{
    btn.addEventListener('click', () =>{
        const padre = btn.parentElement.parentElement;
        const info = padre.childNodes[1];
        const nombre = info.childNodes[1].textContent;
        const precio = info.childNodes[3].textContent.slice(1);
        const imagen = nombre.replaceAll(' ','_');
        const stotal = parseInt(precio) * parseInt(amounts[i].value)
        // const data = {id_orden:lastOrderId, id_producto:btn.id, subtotal:stotal};
        const data = {id:btn.id, nombre:nombre, subtotal:stotal, img:imagen};
        amounts[i].value = '1';
        const orders = JSON.parse(localStorage.getItem('orders'));
        orders.push(data);
        localStorage.setItem('orders', JSON.stringify(orders));
        alert('Producto agregado al carrito');
    

    })
})





