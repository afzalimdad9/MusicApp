/**
 * @name Authentication
 * @file authentication.tsx
 * @description use to authorize user & protect music routes
 */
"use client"


// Modules
import React, { 
    createContext, 
    useContext, 
    useEffect, 
    useMemo, 
    useState 
} from 'react'
import { useRouter, usePathname } from 'next/navigation'

// Utilities
import { SONG_KEY, USER_KEY } from '../constants/constant'
import { CurrentUserTypes } from '../types'

interface AuthContextProps {
    /**
     * 
     * User logout
     */
    logout: () => void

    /**
     * 
     * Current user data
     */
    currentUser: CurrentUserTypes | null
}

const AuthContext = createContext({} as AuthContextProps)

interface AuthenticationProps {
    children: React.ReactNode
}


const Authentication: React.FC<AuthenticationProps> = (props) => {

    const router = useRouter()
    const pathname = usePathname()
    const [user, setUser] = useState<CurrentUserTypes | null>(null)

    // Check user authentication on route change
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(USER_KEY) as string)
        if (!data && pathname.startsWith('/music')) {
            router.push('/auth')
        }
        setUser(data)

    }, [pathname])


    const logout = () => {
        localStorage.removeItem(USER_KEY)
        localStorage.removeItem(SONG_KEY)
        router.push('/')
    }

    const context = useMemo(() => ({
        logout,
        currentUser: user,
    }), [user])


    return <AuthContext.Provider value={context} {...props} />
}


Authentication.displayName = 'Authentication'
export default Authentication


/**
 * 
 * Authentication context hook
 * @returns 
 */
export const useAuthentication = () => {
    const context = useContext(AuthContext)
    if (!context) {
        throw new Error('useAuthentication must be used within a Authentication')
    }

    return context
}