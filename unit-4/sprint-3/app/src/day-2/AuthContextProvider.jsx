import React, { createContext, useState } from 'react';
export const AuthContext = createContext()
function AuthContextProvider() {
    const [isAuth, setIsAuth] = useState("false")
    return (
        <AuthContext.Provider value={[isAuth, setIsAuth]}>
            {this.props.children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider