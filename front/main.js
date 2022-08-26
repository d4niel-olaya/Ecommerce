// import NavBar from "./components/navbar";

import ApiService  from './service/api_service';
import ProductosRender  from './components/producto/producto';
import Carrousel from './components/carrousel/main';

// import ProductosRender from './components/producto/producto';
const url = new URL(window.location);
const params = new URLSearchParams(url.search);
const main = document.getElementById('main');
const banner = document.getElementById('banner');
import Modal from '../front/components/modal/main.js';
const menuMobile = document.getElementById('mobile');
const btn = document.getElementById('hamburguer');
const closeMenu = document.getElementById('btnClose');
const carrito = document.getElementById('cart');
const modal = document.getElementById('modal');
const ctnModal = document.getElementById('content-modal');
const listado = await ApiService.getElements('facturas');
const modalClass = new Modal(ctnModal,listado);
carrito.addEventListener('click', () =>{
if(!modal.classList.contains('modal')){
    modal.classList.add('modal');
    modalClass.Renderind();
    const closeModal = document.getElementById('closeMdl');
    closeModal.addEventListener('click', () =>{
    modal.classList.remove('modal');
    ctnModal.innerHTML = '';
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
const lastOrderId= await ApiService.getElements('orders/last');
const btns = document.querySelectorAll('.add');
btns.forEach(btn =>{
    btn.addEventListener('click', () =>{
        const padre = btn.parentElement.parentElement;
        const info = padre.childNodes[1];
        const precio = info.childNodes[3].textContent.slice(1);
        const data = {id_orden:lastOrderId, id_producto:btn.id, subtotal:precio};
        ApiService.Create('facturas/create', data);
    })
})




