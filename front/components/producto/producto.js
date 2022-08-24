import '../../style.css'
class ProductosRender{
    constructor(dom, productos){
        this.dom = dom;
        this.productos = productos;
    }
    CreateProduct({id,nombre,img, precio}){
        return `<section id="${id}" class="producto">
                <img src="../img/${img}.jpg" class="img">
            <div class="detalles">
                <div>
                    <h3 class="name">${nombre}</h3>
                    <h4 class="price">$${precio}</h4>    
                
                </div>
                <div class="buy">
                    <input type="number" min="1" value="1" class="amount">
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