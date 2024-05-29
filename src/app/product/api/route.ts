export async function GET() {
    const  datas= await fetch("https://fakestoreapi.com/products");
    const  productDatas= await datas.json()
    // console.log(productDatas);
    
    return Response.json(productDatas);
}
