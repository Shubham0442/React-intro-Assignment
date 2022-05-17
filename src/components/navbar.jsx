import React from "react"; 


// const Nav = ()=>{
//     return <div></div>
// }

const Logo = () =>{
    return (
        <div>LOGOBAKERY</div>
    )
}

const Btn = () =>{
    return <button>Contact</button>
}

const Linkdiv = () =>{
    return <div></div>
}

const Link = ({li}) =>{
    return <a> {li}</a>
}

export {Logo, Linkdiv, Link, Btn}
