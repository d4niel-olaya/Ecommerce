const url = 'http://localhost:8000/api/';

export async function getProducts(){
    const response = await fetch(url+'productos',   {mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin':'*'
    }}).then(res=> res.json());
    return response;
}