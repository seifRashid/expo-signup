import User from "@/types";
import { createContext, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({children}) {
    const [authState, setAuthState] = useState<User>({
        username: "",
        email: "",
        phone: "",
        password: ""
    });

}