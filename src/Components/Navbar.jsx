import React,{useState} from 'react'
// import logo from "./img/logo.png"
import styles from  "./Navbar.module.css"
import {Link} from 'react-scroll'
const Navbar = () => {

    const [nav,setNav] = useState(false)
  
    const changeBackground=()=>{
        if(window.screenY >=50){
            setNav(true)
        }
        else{
            setNav(false)
        }
    }

    window.addEventListener('scroll',changeBackground)
    return (
    <nav className={nav}>
        <Link to= "main" smooth={true} duration={1000}>
           {/* <h2 style={{padding:"20px",color:"skyblue"}}>Abhishek</h2> */}
           <img className={styles.ablogo} src="https://image.similarpng.com/very-thumbnail/2021/09/AB-abstract-logo-design-on-transparent-background-PNG.png" alt="" />
        </Link>
        
        <ul className={styles.menu}>
            <li><Link to="main" style={{cursor:"pointer"}} smooth={true} duration={900}>Introduction</Link></li>
            <li><Link to="about" style={{cursor:"pointer"}} smooth={true} duration={1000}>About</Link></li>
            <li><Link to="skills" style={{cursor:"pointer"}} smooth={true} duration={1000}>skills</Link></li>
            <li><Link to="projects" style={{cursor:"pointer"}} smooth={true} duration={1000}>Projects</Link></li>
            <li><Link to="contact" style={{cursor:"pointer"}} smooth={true} duration={1000}>Contact</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar

// import React,{useState} from 'react'
// // import logo from "../images/logo.png"
// import""
// import {Link} from 'react-scroll'
// const Navbar = () => {

//     const [nav,setNav] = useState(false)
  
//     const changeBackground=()=>{
//         if(window.screenY >=50){
//             setNav(true)
//         }
//         else{
//             setNav(false)
//         }
//     }

//     window.addEventListener('scroll',changeBackground)
//     return (
//     <nav className={nav ? "nav active" : "nav"}>
//         <Link to= "main" className='logo'smooth={true} duration={1000}>
//         <h2 style={{padding:"20px",color:"skyblue"}}>Rushikesh</h2>
//         </Link>
//         <input type="checkbox" className="menu-btn" id='menu-btn' />
//         <label for="menu-btn" className='menu-icon'>
//             <sapn className="nav-icon"></sapn>
//         </label>
//         <ul className='menu'>
//             <li><Link to="main" smooth={true} duration={1000}>Header</Link></li>
//             <li><Link to="features" smooth={true} duration={1000}>Feature</Link></li>
//             <li><Link to="presentaion" smooth={true} duration={1000}>Offer</Link></li>
//             <li><Link to="about" smooth={true} duration={1000}>About</Link></li>
//             <li><Link to="contact" smooth={true} duration={1000}>Contact</Link></li>
//         </ul>
//     </nav>
//   )
// }

// export default Navbar
