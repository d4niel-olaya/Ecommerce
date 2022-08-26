import ProductosRender from "../producto/producto";

class Modal{
    constructor(dom,productos, total){
        this.dom = dom;
        this.productos = productos;
        this.total = total;
        this.iva = (total*0.21)
    }
    CreateItem({id,nombre,subtotal, img}){
        return `<section class="modal-item">
                    <img src="../../img/${img}.jpg">
                    <div class"buy-details">
                        <p>${nombre}</p>
                        <p class="price">$${subtotal}</p>
                    </div>
                </section>`
    }
    Renderind(){
        const arr = this.productos.map(this.CreateItem).join('');
        this.dom.innerHTML = this.ModalTemp + arr ; 
    }
    get Resumen(){
        return `<h2>Resumen de tu carrito</h2>
                <div style="text-align:center">
                    <h3>Subtotal : ${this.total}</h3>
                    <h3>Iva : ${this.iva}</h3>
                    <h3>Total : ${this.total - this.iva}</h3>
                </div>
                <button class="add">Comprar ahora</button>
                <button class="show-more">Seguir viendo</button>`;
    }
    get ModalTemp(){
        return '<a id="closeMdl">X</a>';
    }
}

export default Modal;