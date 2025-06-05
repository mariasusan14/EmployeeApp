import './NavElement.css'
export const NavElement=({icon,title,onClick}:{icon:string,title:string,onClick:()=>void})=>{
    return(
         <div className="navItem" onClick={onClick}>
            
              <img
                src={icon}
                alt="icon"
                id="navItemIcon"
                width="20px"
                height="20px"
              />
          
            <p id='title'>{title}</p>
          </div>
    )
}