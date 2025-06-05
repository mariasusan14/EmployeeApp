import "./Status.css"
export const Status=({status}:{status:string})=>{
    function handleStatusBackground(status:string){
           switch(status){
            case "ACTIVE":
                return '#D3F4BE';
            case "INACTIVE":
                return '#FFBFBF';
            case "PROBATION":
                return "#F5ECB8"
           }
    }
    return(
         <div className="status" style={{backgroundColor:handleStatusBackground(status)}}>
                    {status}
         </div>
    )
}