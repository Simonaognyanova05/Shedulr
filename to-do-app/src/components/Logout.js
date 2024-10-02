import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Logout() {
    const navigate = useNavigate();
    const { onLogout } = useAuth();

    useEffect(() => {
        onLogout();
        navigate('/');
    }, [])
}