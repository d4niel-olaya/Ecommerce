
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
    getTimeStamp(){
        const time = new Date();
        const format = new Date(time);
        let date = format.toLocaleDateString();
        let hour = format.toTimeString().slice(0,8);
        const timestamp = date.split('/').reverse().join('-')+' '+hour;
        return timestamp;
    }
}

export default ProductosRender