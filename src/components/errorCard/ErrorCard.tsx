import './ErrorCard.css'
export const ErrorCard=({errorMsg}:{errorMsg:string})=>{
    return(
        <div className="errorcard">
           {errorMsg}
        </div>
    )
}