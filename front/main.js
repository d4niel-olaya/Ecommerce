// import NavBar from "./components/navbar";

import { ApiService } from './service/api_service';
import { ProductosRender } from './components/producto/producto';
const app = document.getElementById('main');
const carrito = document.getElementById('carrito');

const productos = await ApiService.getElements('productos');
const product = new ProductosRender(app,productos);
const Renderig = new ProductosRender(app,productos);
Renderig.render();
const date = new Date();
const azDate = new Intl.DateTimeFormat("az").format(date);
const obj = {"id_user":1, "fecha":azDate, "id_producto":1,"cantidad":20};
const btns = document.querySelectorAll('button');
        btns.forEach(e => {
            e.addEventListener('click', () => {ApiService.Create('orders/create', obj)})
        })




