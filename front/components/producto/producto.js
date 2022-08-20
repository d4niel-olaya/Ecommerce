import Producto from './index.html?raw';

const CreateProduct= ({id,nombre,uso,cantidad}) =>{
    return `<div class="card"><p>${id}</p>
            <p>${nombre}</p>
            <p>${cantidad}</p>
            <p>${uso}</p>
            <button>Add to cart</button></div>`;
}
export function render(dom, productos){
    const arr = productos.map(CreateProduct).join('');
    dom.innerHTML = Producto.replace('${productos}',arr);
}