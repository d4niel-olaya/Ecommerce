// import NavBar from "./components/navbar";

import * as Productos from '/components/producto/producto';
import { getProducts } from './service/api_service';
// console.log(peticion);
const app = document.getElementById('app');
// const peticion = await fetch('http://localhost:8000/api/productos').then(res => res.json());
const productos = await getProducts();

Productos.render(app,productos);

