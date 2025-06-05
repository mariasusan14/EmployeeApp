import icon from '../../assets/icon.svg'
import './SideNav.css'
import { NavElement } from '../navElement/NavElement'
import { useNavigate } from 'react-router-dom'
export const SideNav=()=>{
  const navigate=useNavigate();


  function handleEmployeeListClick(){
    navigate("/employee")
  }
    return(
     <div className="sidenav">
        <NavElement icon={icon} title='Employee List' onClick={handleEmployeeListClick}/>
       
      
     </div>
    )
}