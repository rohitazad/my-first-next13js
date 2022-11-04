

export default function(props:any){
    console.log(props.params.id)
    return (
        <>
            <h2>Product inner pages</h2>
            <p>My product id is {props.params.id}</p>
        </>
    )
}