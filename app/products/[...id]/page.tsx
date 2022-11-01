

export default function(props){
    console.log(props.params.id)
    return (
        <>
            <h2>Product inner pages</h2>
            <p>My product id is {props.params.id}</p>
        </>
    )
}