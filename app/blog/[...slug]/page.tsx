

export default function(props:any){
    return (
        <>
            <h2>Hello i m blog inner pages</h2>
            <p>{props.params.slug}</p>
        </>
    )
}