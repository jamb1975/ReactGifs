import { useState } from "react"
import { UserContext } from "./UserContext"

export const UserProvider = ({children}) => {
   /* const user = {
        id: 777,
        name: "Javi Murcia",
        email: "ingenierojaviermurcia@gmail.com"
    }*/
    const [user, setUser] = useState()
    return (
       <UserContext.Provider value={{ user, setUser }}>
            {children}
       </UserContext.Provider>
    )

}