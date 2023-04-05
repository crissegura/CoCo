import { createContext, useCallback, useMemo, useState } from 'react';

const myauth = 'my_auth_app_1'

export const context = createContext()

const {Provider} = context

export const AuthProvider = ({children})=>{

    const [isAuthenticated, setIsAuthenticated] = useState(window.localStorage.getItem(myauth) ?? false)

    const login = useCallback(()=>{
        window.localStorage.setItem(myauth, true)
        setIsAuthenticated(true)
        console.log('LOGUEADO')
    }, [])

    const logout = useCallback(()=>{
        window.localStorage.removeItem(myauth)
        setIsAuthenticated(false)
    }, [])

    const value = useMemo(
        ()=> ({
        login,
        logout,
        isAuthenticated
        }),[login,logout,isAuthenticated]
        )

    return  (
        <Provider value={value}>
            {children}
        </Provider>
    )

}