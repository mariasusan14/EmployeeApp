import { useEffect, useState } from "react";


export function useMouse(){
    const [useMouse,setuseMouse]=useState({x:0,y:0})
useEffect(()=>{
    function position(event:MouseEvent){
        setuseMouse({
            x:event.clientX,
            y:event.clientY
        })
    
    }
    window.addEventListener("mousemove",position)
    return ()=>{window.removeEventListener("mousemove",position)}
  
})
return useMouse;
}