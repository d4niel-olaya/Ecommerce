import TemplateCarrito from './index.html?raw';
const CreateElement = ({id,id_producto,fecha}) =>{
    return `<div>
        <p>${id}</p>
        <p>${id_producto}</p>
        <p>${fecha}</p>
    </div>`;
}

export function render(dom,pedidos){
    const arr = pedidos.map(CreateElement).join('');
    dom.innerHTML = TemplateCarrito.replace('${pedidos}', arr);
}