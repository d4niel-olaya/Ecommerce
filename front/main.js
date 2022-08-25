// import NavBar from "./components/navbar";

import ApiService  from './service/api_service';
import ProductosRender  from './components/producto/producto';
import Carrousel from './components/carrousel/main';

// import ProductosRender from './components/producto/producto';
const url = new URL(window.location);
const params = new URLSearchParams(url.search);
const main = document.getElementById('main');
const carrito = document.getElementById('carrito');
const banner = document.getElementById('banner');
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




