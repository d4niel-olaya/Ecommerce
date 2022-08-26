import ProductosRender from "../producto/producto";

class Modal{
    constructor(dom,productos){
        this.dom = dom;
        this.productos = productos;
    }
    CreateItem({id,nombre,subtotal, img}){
        return `<section class="modal-item">
                    <img src="../../img/${img}.jpg">
                    <div class"buy-details">
                        <span>${nombre}</span>
                        <span>${subtotal}</span>
                    </div>
                </section>`
    }
    Renderind(){
        const arr = this.productos.map(this.CreateItem).join('');
        this.dom.innerHTML = this.ModalTemp + arr + `<button>Comprar ahora</button>`; 
    }
    get ModalTemp(){
        return '<a id="closeMdl">X</a>';
    }
}

export default Modal;