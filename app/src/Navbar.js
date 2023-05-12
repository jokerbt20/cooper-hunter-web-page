
export default function Navbar(){
    const path=window.location.pathname
    return <nav className="nav">
        <a href="/" className="site-title">Име</a>
        <ul>
            <CustomLink href="/home"  >Дома</CustomLink>
            <CustomLink href="/products">Продукти</CustomLink>
            <CustomLink href="/about">За нас</CustomLink>
            <CustomLink href="/contact">Контакт</CustomLink>   
        </ul>
    </nav>
}

function CustomLink({href,children,...props}){
    const path=window.location.pathname
    return(
    <li> <a href={href}{...props}>{children}</a> </li>
        )
}
