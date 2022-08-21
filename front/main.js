// import NavBar from "./components/navbar";

import * as Productos from './components/producto/producto';
import * as Pedidos from './components/carrito/main';
import { getOrders, getProducts } from './service/api_service';
import { CreateOrder } from './service/api_service';
// console.log(peticion);
const app = document.getElementById('main');
const carrito = document.getElementById('carrito');
// const peticion = await fetch('http://localhost:8000/api/productos').then(res => res.json());
const productos = await getProducts();
const pedidos = await getOrders();
Productos.render(app,productos);

Pedidos.render(carrito,pedidos)
const btns = document.querySelectorAll('.btn');
btns.forEach(e => {
    e.addEventListener('click', (event)=>{
        const date = new Date();
        const azDate = new Intl.DateTimeFormat("az").format(date);
        const response = CreateOrder({"id_user":1, "fecha":azDate, "id_producto":1,"cantidad":20});
    })
})

