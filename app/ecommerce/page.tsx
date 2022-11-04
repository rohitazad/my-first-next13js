import ButtonComponents from './Button';

const GetDataFetch =  async ()=>{
    const req = await fetch('https://dummyjson.com/products',{
       // cache:"force-cache"
        // next: { revalidate: 10 } 
         cache: 'no-store'
    });

    return req.json();
}


export default async function (){
    const {products} = await GetDataFetch();
    console.log('products', products.length);
    return(
        <>
            <h2>Ecommerce Products page</h2>
            {
                products.map((item:any)=>{
                    return (
                        <div key={item.id} className="ecoWrap">
                            {item.title} - {item.price}
                            <ButtonComponents />
                        </div>
                    )
                })
            }
        </>
    )
}