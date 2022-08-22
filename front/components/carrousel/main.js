

class Carrousel{
    constructor(dom){
        this.dom = dom;
    }
    CreateBanner(){
        return `
            <a class="arrow"><i class="fa-solid fa-arrow-left"></i></a>
            <img src="../../img/banner.jpg" class="imgbanner">
            <a class="arrow"><i class="fa-solid fa-arrow-right"></i></a>
        `
    }

    Render(){
        this.dom.innerHTML = this.CreateBanner();
    }
}   


export default Carrousel;