/**
 * @name TrackDropdown
 * @file dropdown.tsx
 * @description dropdown options component
 */
"use client"


// Modules
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Link from 'next/link'
import { RiMore2Fill, RiMoreFill } from '@remixicon/react'

// Contexts
import { usePlayer } from '@/core/contexts/player'

export interface TrackDropdownProps 
extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'download' | 'id'> {
    data?: any
    btnClassName?: string
    download?: boolean
    favorite?: boolean
    iconVertical?: boolean
    play?: boolean
    playlist?: boolean
    queue?: boolean
}

const propTypes = {
    /**
     * Display download option
     */
    download: PropTypes.bool,

    /**
     * Set className on `<a>`
     */
    btnClassName: PropTypes.string,

    /**
     * Display add queue option
     */
    favorite: PropTypes.bool,

    /**
     * Set more icon vertically
     */
    iconVertical: PropTypes.bool,

    /**
     * Set data
     */
    data: PropTypes.object,

    /**
     * Display play track option
     */
    play: PropTypes.bool,

    /**
     * Display add playlist option
     */
    playlist: PropTypes.bool,

    /**
     * Display add queue option
     */
    queue: PropTypes.bool,
    
}


const TrackDropdown: React.FC<TrackDropdownProps> = (
    {
        className,
        btnClassName,
        download,
        favorite,
        href,
        iconVertical,
        data,
        play,
        playlist,
        queue
    }
) => {

    const {addQueue, nextPlay, playAll, playPause} = usePlayer()

    /**
     * 
     * Handle link `onClick` event
     */
    const handleClick = () => 
        data.songs ? playAll(data.songs) : playPause(data)


    return (
        // Cover [[ Find at scss/components/cover.scss ]]
        <div className={className}>
            <a 
                role='button' 
                className={classNames(btnClassName, 'dropdown-link')}
                data-bs-toggle='dropdown' 
                aria-label='Options' 
                aria-expanded='false'
            >
                {iconVertical ? (<RiMore2Fill />) : (<RiMoreFill />)}
            </a>
            <div className='dropdown-menu dropdown-menu-sm'>
                {favorite && (
                    <a className='dropdown-item' role='button'>Favorite</a>
                )}
                {playlist && (
                    <a className='dropdown-item' role='button'>Add to playlist</a>
                )}
                {queue && (
                    <>
                        <a className='dropdown-item' role='button' onClick={() => addQueue(data)}>Add to queue</a>
                        <a className='dropdown-item' role='button' onClick={() => nextPlay(data)}>Next to play</a>
                    </>
                )}
                {download && (
                    <a className='dropdown-item' role='button'>Download</a>
                )}
                <a className='dropdown-item' role='button'>Share</a>
                <div className='dropdown-divider'></div>
                {play ? (
                    <a className='dropdown-item' role='button' onClick={handleClick}>
                        Play
                    </a>
                ) : (href && (
                    <Link href={href} className='dropdown-item'>
                        View details
                    </Link>                    
                ))}
            </div>
        </div>
    )
}


TrackDropdown.propTypes = propTypes as any
TrackDropdown.displayName = 'TrackDropdown'

export default TrackDropdown