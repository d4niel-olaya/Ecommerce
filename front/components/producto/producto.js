import '../../style.css'
class ProductosRender{
    constructor(dom, productos){
        this.dom = dom;
        this.productos = productos;
    }
    CreateProduct({id,nombre,img, precio}){
        return `<article class="producto">
                <img src="../img/${img}.jpg" class="img">
            <div class="detalles">
                <div>
                    <h3 class="name">${nombre}</h3>
                    <h4 class="price">$${precio}</h4>    
                    <a href="?id=${id}">Ver detalles</a>
                </div>
                <div class="buy">
                    <input type="number" min="1" value="1" class="amount">
                    <button class="add" id="${id}">Añadir al carrito</button>   
                </div>
            </div>
        </article>`;
    }
    render(){
        const arr = this.productos.map(this.CreateProduct).join('');
        this.dom.innerHTML = arr;
    }
}

export default ProductosRender