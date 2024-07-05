import { createContext, useEffect, useState } from "react";
import { User } from "../types/User.class";

const defaultValue = {
    data: {token: " ",user: User},
    setData: () => { },
};

export const MyContext = createContext(defaultValue);

export const MyProvider = ({ children }) => {
    const initialData = localStorage.getItem('myContextData') || 'InitialData'

    const [data, setData] = useState(initialData)

    useEffect(() => {
        localStorage.setItem('myContextData', data);
    }, [data]);


    return (
        <MyContext.Provider value={{ data, setData }}>
            {children}
        </MyContext.Provider>
    )

}