// import NavBar from "./components/navbar";

import ApiService  from './service/api_service';
import ProductosRender  from './components/producto/producto';
import Carrousel from './components/carrousel/main';

// import ProductosRender from './components/producto/producto';
const url = new URL(window.location);
const params = new URLSearchParams(url.search);
const app = document.getElementById('main');
const carrito = document.getElementById('carrito');
const banner = document.getElementById('banner');
const productos = await ApiService.getElements('productos');
const Rendering = new ProductosRender(app,productos);
const Medicamentos = new Carrousel(banner);
Medicamentos.Render();
Rendering.render();

const btns = document.querySelectorAll('button');
        btns.forEach(e => {
            e.addEventListener('click', (e) => {
                const data = {}
                
            })
        })




