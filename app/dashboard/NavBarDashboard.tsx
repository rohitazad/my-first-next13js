
import Link from "next/link";

const NavBarDashBoard =()=>{
    const navData= [
        {name:'Profile', path:'/dashboard/profile'},
        {name:'Settings', path:'/dashboard/settings'}
    ]
    return(
        <>
        {
            navData.map((item)=>{
                return (
                    <Link key={item.name} href={item.path}>
                        {item.name}
                    </Link>
                )
            })
        }
        </>
    )
}

export default NavBarDashBoard;