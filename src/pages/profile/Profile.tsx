import { Card } from "../../components/card/card"
import Header from "../../components/header/header"
import { ProfileCard } from "../../components/profileCard/Profilecard"

 export const Profile=()=>{
    return(
        <Card>
           <Header title="Profile" className="createEmployee" />
           <ProfileCard/>
        </Card>
    )
 }