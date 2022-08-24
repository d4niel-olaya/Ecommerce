import '../../style.css';

class Carrousel{
    constructor(dom){
        this.dom = dom;
    }
    CreateBanner(){
        return `
            <div class="ctn-img">
                <img src="../../img/banner.jpg" class="imgbanner">
            </div>
            <div class="container-carrousel">
                <a class="arrow"><i class="fa-solid fa-arrow-left"></i></a>
                <a class="arrow"><i class="fa-solid fa-arrow-right"></i></a>
            </div>
        `
    }

    Render(){
        this.dom.innerHTML = this.CreateBanner();
    }
}   


export default Carrousel;