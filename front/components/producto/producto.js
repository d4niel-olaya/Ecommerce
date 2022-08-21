
export class ProductosRender{
    constructor(dom, productos){
        this.dom = dom;
        this.productos = productos;
    }
    CreateProduct({id,nombre}){
        return `<section>
            <p>${id}</p>
            <p>${nombre}</p>
            <button>Add to cart</button>
        </section>`;
    }
    render(){
        const arr = this.productos.map(this.CreateProduct).join('');
        this.dom.innerHTML = arr;
    }

    setAction(){
        const btns = document.querySelectorAll('button');
        btns.forEach(e => {
            e.addEventListener('click', () => {alert('a')})
        })
    }
}