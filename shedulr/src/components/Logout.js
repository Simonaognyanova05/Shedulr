import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebaseConfig"; 

export default function Logout() {
    const navigate = useNavigate();
    const { onLogout } = useAuth();

    useEffect(() => {
        async function handleLogout() {
            try {
                await signOut(auth); 
                onLogout(); 
                navigate('/'); 
            } catch (error) {
                console.error("Error logging out:", error);
                alert("Неуспешно излизане!");
            }
        }
        handleLogout();
    }, [navigate, onLogout]);

    return null; 
}
