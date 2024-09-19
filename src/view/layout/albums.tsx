/**
 * @name Albums
 * @file Albums.tsx
 * @description album page component
 */
"use client"


// Modules
import React from 'react'
import PropTypes from 'prop-types'
import { useTranslations } from 'next-intl'

// Context
import { useTheme } from '@/core/contexts/theme'

// Components
import Section from '@/view/layout/section'
import TrackList from '@/core/components/list'

// Utilities
import { title } from '@/core/utils'
import { AlbumTypes } from '@/core/types'

interface Props {
    albums: AlbumTypes[]
}

const propTypes = {
    /**
     * Set albums data
     */
    albums: PropTypes.array.isRequired

}


const Albums: React.FC<Props> = ({albums}) => {

    const {replaceClassName} = useTheme()
    const locale = useTranslations()


    return (
        <>
            {/* Hero [[ Find at scss/framework/hero.scss ]] */}
			<div 
                className='hero' 
                style={{backgroundImage: 'url(/images/banner/song.jpg)'}} 
            />

            {/* Under hero [[ Find at scss/framework/hero.scss ]] */}
            <div className='under-hero container'>
                <Section 
                    title={title(locale, 'free_albums_title')}
                    data={albums}
                    card='album'
                    slideView={5}
                    navigation
                    autoplay
                />

                {/* Section [[ Find at scss/framework/section.scss ]] */}
                <div className='section'>
                    <div className='section__head'>
                        <span className={replaceClassName(
                            'd-block pe-3 fs-6 fw-semibold'
                            )}
                        >
                            10245 {locale('sidebar.albums') + ' ' + locale('in_the_list')}
                        </span>
                        <div>
                            <select className='form-select' aria-label='Filter song'>
                                <option value='Popular'>Popular</option>
                                <option value='Most played'>Most played</option>
                                <option value='A to Z'>A to Z</option>
                                <option value='Z to A'>Z to A</option>
                            </select>
                        </div>
                    </div>

                    {/* List [[ Find at scss/components/list.scss ]] */}
                    <div className='list list--lg'>
                        <div className='row'>
                            {albums.map((item: any, index: number) => (
                                <div key={index} className='col-xl-6'>
                                    <TrackList 
                                        data={item}
                                        dropdown
                                        favorite
                                        link
                                        playlist
                                        queue
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


Albums.propTypes = propTypes as any
Albums.displayName = 'Albums'

export default Albums