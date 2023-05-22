import { useEffect, useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";


const Logout = () => {
    const { setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(()=>{
        document.cookie = `auth=null;max-age=0`;
        setAuth({ role: 0 });
        navigate("/connexion");
        console.log("Vous êtes déconnecté !");
    },[])

    return (
        <h1>Déconnexion</h1>
    );
}

export default Logout;