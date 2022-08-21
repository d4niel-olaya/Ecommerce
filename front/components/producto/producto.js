import Producto from './index.html?raw';

const CreateProduct= ({id,nombre,uso,precio,img}) =>{
    return `<div class="card" id=${id}>
            <p>${nombre}</p>
            <p>${precio}</p>
            <p>${uso}</p>
            <img src="../../img/${img}.jpg">
            <p>${img}</p>
            <button class="btn">Add to cart</button></div>`;
}

export function add(btns){
    for(let i in btns){
        console.log(btns[i]);
    }
}
export function render(dom,productos){
    const arr = productos.map(CreateProduct).join('');
    dom.innerHTML = Producto.replace('${productos}',arr);
}