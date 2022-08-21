// import NavBar from "./components/navbar";

import * as Productos from './components/producto/producto';
import * as Pedidos from './components/carrito/main';
import { ApiService } from './service/api_service';

const api = new ApiService();
const app = document.getElementById('main');
const carrito = document.getElementById('carrito');

const productos = await api.getProducts();
const pedidos = await api.getOrders();
Productos.render(app,productos);
// const a = new ApiService();
Pedidos.render(carrito,pedidos)
const btns = document.querySelectorAll('.btn');
btns.forEach(e => {
    e.addEventListener('click', (event)=>{
        const date = new Date();
        const azDate = new Intl.DateTimeFormat("az").format(date);
        const obj = {"id_user":1, "fecha":azDate, "id_producto":1,"cantidad":20};
        const response = api.CreateOrder(obj);
    })
})




