import { NavLink } from "react-router-dom"
import './Header/header.css'

const SideNav = (props) => {
  return (
    <>
        {
            props.data ? <div className="sidenav">
                <nav>
                        <NavLink activeclassname='active' to='/'>Home</NavLink>
                        <NavLink to='/about'>About</NavLink>
                        <NavLink to='/works'>Works</NavLink>
                        <NavLink to='/contact'>Contact</NavLink>
                </nav>
        </div> : null
        }
    </>
  )
}
export default SideNav