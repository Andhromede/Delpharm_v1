import { createContext, useEffect, useState} from "react";



const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [auth, setAuth] = useState({ role: 0, id: 0 });

    useEffect(() => {
        fetch("https://localhost:7027/api/Security/check", { 
            credentials: 'include',
            method: "POST",
        })
        .then((resp) => resp.text())
        .then((text) => {
            const data = text.toJson();
                if (data.result) {
                    setAuth({ role: data.role, id: data.id });
                }
                else {
                    document.cookie = `auth=null;max-age=0`;
                    setAuth({ role: 0, id: 0 });
                }
            });
    }, [])

    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
}

export { AuthContext, AuthProvider };