import { createContext, ReactNode, useEffect, useState } from "react";
import { User } from "../types/User.class";



interface Data{
    token: " ",
    user: User  
}

interface ContextProps{
    data:Data,
    setData: (data:Data)=> void
}
const defaultValue : ContextProps = {
    data: {token: " ",user: new User(0,"","","","","","","",false,"")},
    setData: () => {}
};

export const MyContext = createContext<ContextProps>(defaultValue);
interface ProviderProps{
    children : ReactNode;
}
export const MyProvider = ({ children }:ProviderProps) => {
    const initialData: Data = JSON.parse(localStorage.getItem('myContextData')?.toString() || 'null') || {token: " ",user: User}

    const [data, setData] = useState<Data>(initialData)

    useEffect(() => {
        localStorage.setItem('myContextData', JSON.stringify(data));
    }, [data]);


    return (
        <MyContext.Provider value={{ data, setData }}>
            {children}
        </MyContext.Provider>
    )

}