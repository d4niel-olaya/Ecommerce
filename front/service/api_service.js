
export class ApiService{
    constructor(){
        this.url = 'http://localhost:8000/api/';
        this.mode = 'cors';
        this.header = 'Access-Control-Allow-Origin';
    }
    async getProducts(){
        const response = await fetch(this.url+'productos',   {mode: this.mode,
        headers: {
            'Access-Control-Allow-Origin':'*',
        }}).then(res=> res.json());
        return response;
    }
    async CreateOrder(data){
        const response = await fetch(this.url+'orders/create', {
            method:'POST',
            body:JSON.stringify(data),
            mode:'cors', headers:{
                'Access-Control-Allow-Origin':'*',
                'Content-type':'application/json'
            }
        }).then(res=> res.ok).then(data => console.log(data));
    }
    async getOrders(){
        const response = await fetch(this.url+'orders',   {mode: 'cors',
        headers: {
        'Access-Control-Allow-Origin':'*'
        }}).then(res=> res.json());
        return response;
        }
}
