
export class ProductosRender{
    constructor(dom, productos){
        this.dom = dom;
        this.productos = productos;
    }
    CreateProduct({id,nombre,img}){
        return `<section id="${id}">
            <p>${nombre}</p>
            <img src="../img/${img}.jpg">
            <button>Add to cart</button>
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