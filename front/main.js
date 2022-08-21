// import NavBar from "./components/navbar";

import * as Productos from '/components/producto/producto';
import { getProducts } from './service/api_service';
import { CreateOrder } from './service/api_service';
// console.log(peticion);
const app = document.getElementById('main');
// const peticion = await fetch('http://localhost:8000/api/productos').then(res => res.json());
const productos = await getProducts();
const order = {id_user:'1',fecha:'2020-01-01 00:00:00',valor:'1222'};
Productos.render(app,productos);

const btns = document.querySelectorAll('.btn');
// console.log(btns[0]);
// btns.forEach(e => {
//     e.addEventListener('click', (event)=>{
//         const date = new Date();
//         const response = CreateOrder({"id_user":1, "fecha":date.toLocaleString(), "id_producto":1,"cantidad":20});
//     })
// })
btns.forEach(e => {
    e.addEventListener('click', (event)=>{
        // console.log(event);
        const date = new Date();
        const azDate = new Intl.DateTimeFormat("az").format(date);
        // const parsed = day.replaceAll('/', '-');
        console.log(azDate);
        const response = CreateOrder({"id_user":1, "fecha":azDate, "id_producto":1,"cantidad":20});
    })
})
// btns[0].addEventListener('click', (event)=>{
//             const date = new Date();
//             const response = CreateOrder({"id_user":1, "fecha":'2020-10-10', "id_producto":1,"cantidad":20});
//         })


