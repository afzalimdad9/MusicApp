/**
 * @name Sidebar
 * @file sidebar.tsx
 * @description music pages sidebar component
 */
"use client"


// Modules
import React from 'react'
import classNames from 'classnames'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl'
import { 
    RiMenu3Line, 
    RiMenuLine, 
    RiMenuFoldLine, 
    RiMusicFill 
} from '@remixicon/react'

// Contexts
import { useTheme } from '../contexts/theme'

// Components
import Brand from './brand'
import Scrollbar from './scrollbar'

// Utilities
import { toggleSidebar } from '../utils'
import { NAVBAR } from '../constants/constant'


const Sidebar: React.FC = () => {

    const pathname = usePathname()
    const {replaceClassName , sidebarSkin} = useTheme()
    const navbar = useTranslations('sidebar')

    /**
     * 
     * Check if a given route is the active route based on the current pathname.
     * @param href 
     * @returns 
     */
    const isActiveRoute = (href: string) => {
        const isActivePage = pathname.split('/')[2] === href.split('/')[2]
        return isActivePage && pathname.startsWith(href)
    }

    /**
     * 
     * Navigation link or head view
     * @param nav 
     * @returns 
     */
    const navLink = (nav: any) => {
        return (
            nav.title ? (
                <>
                    <span className='nav-item--head__text'>{navbar(nav.title)}</span>
                    <span className='nav-item--head__dots'>...</span>
                </>
            ) : (
                <Link 
                    href={nav.href}
                    className={classNames(
                        'nav-link d-flex align-items-center',
                        isActiveRoute(nav.href) && 'active'
                    )}
                >
                    <nav.icon size={20} />
                    <span className={replaceClassName('ms-3')}>{navbar(nav.name)}</span>
                </Link>
            )
        )
    }


    return (
        <aside id='sidebar' data-sidebar={sidebarSkin}>
            <div className='sidebar-head d-flex align-items-center justify-content-between'>
                <Brand />
                
                <a 
                    role='button' 
                    className='sidebar-toggler' 
                    aria-label='Sidebar toggler'
                    onClick={toggleSidebar}
                >
                    <div className='d-none d-lg-block'>
                        <RiMenu3Line className='sidebar-menu-1' />
                        <RiMenuLine className='sidebar-menu-2' />
                    </div>
                    <RiMenuFoldLine className='d-lg-none' />
                </a>
            </div>

            <Scrollbar className='sidebar-body'>
                <nav className='navbar d-block p-0'>
                    <ul className='navbar-nav'>
                        {NAVBAR.map((nav: any, index) => (
                            <li 
                                key={index}
                                className={classNames(
                                    'nav-item',
                                    nav.title && 'nav-item--head'
                                )}
                            >
                                {navLink(nav)}
                            </li>
                        ))}
                    </ul>
                </nav>
            </Scrollbar>

            <div className='sidebar-foot'>
                <Link href='/music/add' className='btn btn-primary d-flex'>
                    <div className='btn__wrap'>
                        <RiMusicFill />
                        <span>{navbar('add_music')}</span>
                    </div>
                </Link>
            </div>
        </aside>
    )
}


Sidebar.displayName = 'Sidebar'
export default Sidebar