/**
 * @name MusicFooter
 * @file music.tsx
 * @description music pages footer component
 */
"use client"


// Modules
import React from 'react'
import Link from 'next/link'

// Components
import DownloadApp from './download-app'

// Utilities
import { BRAND } from '@/core/constants/constant'


const MusicFooter: React.FC = () => {

    return (
        <footer id='footer'>
            <div className='container'>
                <div className='text-center mb-4 pb-2'>
                    <Link 
                        href={'mailto:' + BRAND.email} 
                        className='display-5 email'
                    >
                        {BRAND.email}
                    </Link>
                </div>
                <DownloadApp button='primary' />
            </div>
        </footer>
    )
}


MusicFooter.displayName = 'MusicFooter'
export default MusicFooter