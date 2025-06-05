import'./card.css'
export const Card=({children}:{children:React.ReactNode})=>{
    return(
    <div className="card">
         {children}
    </div>
    )
}