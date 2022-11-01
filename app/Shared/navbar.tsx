

import Link from "next/link";

const NavBar =()=>{
    const navbarData = [
        {name:'Home', path:'/'},
        {name:'About', path:'/about'},
        {name:'Blog', path:'/blog'},
        {name:'Products', path:'/products'},
        {name:'Dashboard', path:'/dashboard'},
    ]
    return(
        <>
            {
                navbarData.map((item)=>{
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

export default NavBar;