/**
 * @name Contact
 * @file index.tsx
 * @description contact page component
 */
"use client"


// Modules
import React, { useEffect, useState } from 'react'

// Components
import Sidebar from '@/core/components/sidebar'

// Utilities
import { USER_KEY } from '@/core/constants/constant'
import { CurrentUserTypes } from '@/core/types'

interface Props {
    children: React.ReactNode
}


const Contact: React.FC<Props> = ({children}) => {

    const [user, setUser] = useState<CurrentUserTypes | null>(null)
    
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(USER_KEY) as string)
        setUser(data)

    }, [])
    

    return (
        user ? (
            <>
                <Sidebar />

                {/* Page content [[ Find at scss/framework/wrapper.scss ]] */}
                <main id='page_content'>{children}</main>

                {/* Backdrop [[ Find at scss/framework/wrapper.scss ]] */}
                <div id='backdrop'></div>
            </>
        ) : (
            null
        )
    )
}


Contact.displayName = 'Contact'
export default Contact