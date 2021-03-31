import React,{useState} from "react";

let userContext=React.createContext();

export default userContext;


export const UserProvider = ({ children }) => {
    let [userList, setUserList] = useState([]);

    return <userContext.Provider value={{ userName: "Kalki", age: 25, userList, setUserList }}>
        {children}
    </userContext.Provider>
}
