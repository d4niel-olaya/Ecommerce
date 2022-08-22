
class ApiService{
    static url = 'http://localhost:8000/api/';
    static getElements(elements){
        const response = fetch(this.url+elements,   {mode: 'cors',
        headers: {
            'Access-Control-Allow-Origin':'*',
        }}).then(res=> res.json());
        return response;
    }
    static Create(route,data){
        const response = fetch(this.url+route, {
                method:'POST',
                body:JSON.stringify(data),
                mode:'cors', headers:{
                    'Access-Control-Allow-Origin':'*',
                    'Content-type':'application/json'
                }
            }).then(res=> res.ok).then(data => console.log(data));
    }
    // async CreateOrder(data){
    //     const response = await fetch(this.url+'orders/create', {
    //         method:'POST',
    //         body:JSON.stringify(data),
    //         mode:'cors', headers:{
    //             'Access-Control-Allow-Origin':'*',
    //             'Content-type':'application/json'
    //         }
    //     }).then(res=> res.ok).then(data => console.log(data));
    // }
    // async getOrders(){
    //     const response = await fetch(this.url+'orders',   {mode: 'cors',
    //     headers: {
    //     'Access-Control-Allow-Origin':'*'
    //     }}).then(res=> res.json());
    //     return response;
    //     }
}
export default ApiService;