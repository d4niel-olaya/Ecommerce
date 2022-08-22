
class ProductosRender{
    constructor(dom, productos){
        this.dom = dom;
        this.productos = productos;
    }
    CreateProduct({id,nombre,img, precio}){
        return `<section id="${id}" class="producto">
            <div>
                <img src="../img/${img}.jpg" class="img">
            </div>
            <div class="detalles">
                <div>
                    <p>${nombre}</p>
                    <p>${precio}</p>    
                
                </div>
                <div class="buy">
                    <input type="number" min="0" value="0" class="cantidad">
                    <button class="add">Añadir al carrito</button>   
                </div>
            </div>
        </section>`;
    }
    render(){
        const arr = this.productos.map(this.CreateProduct).join('');
        this.dom.innerHTML = arr;
    }

    setAction(funcion , param){
        const btns = document.querySelectorAll('button');
        btns.forEach(e => {
            e.addEventListener('click', () => {funcion(param)})
        })
    }
}

export default ProductosRender