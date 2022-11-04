import ButtonComponents from './Button';

export const dynamic = "force-dynamic"

async function getData() {
    const req = await fetch('https://dummyjson.com/products', 
    {
        // cache : "force-cache"  // ssg getStaticSidePrps
        // next :{ revalidate:30} // ISR revalidate
         cache: "no-store" // ssr getServerSideProps
    }
    );
    return req.json();
}

export default async ()=>{
    let {products} = await getData();
    console.log('My products____________________',products.length)
    return (
        <>
            <h1>Hello i m Article Page Next.js 13 - Server & Client Component Basics</h1>
            Next.js No longer use SSR/SSG functions

            Next.js 13 brought a complete redesign to the Data fetching system. No more getServerSideProps or getStaticSideProps and no more separation between the backend and the frontend. It all happens in the same place now. Components are the only source of truth for data and view. Let's see what the new data-fetching system is and how it works?
            {
                products.map((item:any)=>{
                   return (<div key={item.id} className='productSection'>
                            <p>Name :- {item.title} <br /><br /> Price {item.price}</p>
                            <ButtonComponents  />
                    </div>) 
                })
            }
        </>
    )
}
