const url = 'http://localhost:8000/api/';

export async function getProducts(){
    const response = await fetch(url+'productos',   {mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin':'*'
    }}).then(res=> res.json());
    return response;
}

export async function CreateOrder(data){
    const response = await fetch(url+'orders/create', {
        method:'POST',
        body:JSON.stringify(data),
        mode:'cors', headers:{
            'Access-Control-Allow-Origin':'*',
            'Content-type':'application/json'
        }
    }).then(res=> res.ok).then(data => console.log(data));
}

export async function getOrders(){
    const response = await fetch(url+'orders',   {mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin':'*'
    }}).then(res=> res.json());
    return response;
}