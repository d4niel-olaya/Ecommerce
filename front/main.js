// import NavBar from "./components/navbar";

import ApiService  from './service/api_service';
import ProductosRender  from './components/producto/producto';
// import ProductosRender from './components/producto/producto';
const url = new URL(window.location);
const params = new URLSearchParams(url.search);
// params.set('page', 'main')
console.log(params.get('page'));
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
            e.addEventListener('click', (e) => {
                // alert(e.timeS);
                const time = new Date();
                const format = new Date(time);
                let date = format.toLocaleDateString();
                let hour = format.toTimeString().slice(0,8);
                const timestamp = date.split('/').reverse().join('-')+' '+hour;
                
                const data = {}
                
                /*ApiService.Create('orders/create', obj)*/
            })
        })




