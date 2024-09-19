/**
 * @name Home
 * @file home.tsx
 * @description common component for music pages section
 */
"use client"


// Modules
import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import Link from 'next/link'
import { useTranslations } from 'next-intl'

// Components
import Section from './section'
import Tab from '@/core/components/tab'
import TrackList from '@/core/components/list'

// Utilities
import { title } from '@/core/utils'
import { 
    AlbumTypes, 
    ArtistTypes, 
    EventTypes, 
    PlaylistTypes, 
    RadioTypes, 
    SongTypes 
} from '@/core/types'

interface Props {
    albums: AlbumTypes[]
    artists: ArtistTypes[]
    events: EventTypes[]
    playlist: PlaylistTypes[]
    radio: RadioTypes[]
    song: SongTypes[]
}

const propTypes = {
    /**
     * Set albums data
     */
    albums: PropTypes.array.isRequired,

    /**
     * Set artists data
     */
    artists: PropTypes.array.isRequired,

    /**
     * Set events data
     */
    events: PropTypes.array.isRequired,

    /**
     * Set playlist data
     */
    playlist: PropTypes.array.isRequired,
    
    /**
     * Set radio data
     */
    radio: PropTypes.array.isRequired,
    
    /**
     * Set songs data
     */
    song: PropTypes.array.isRequired,

}


const Home: React.FC<Props> = (
    {
        albums,
        artists,
        events,
        playlist,
        radio,
        song
    }
) => {

    const locale = useTranslations()

    // 
    // Data for tab list view
    const tabs = [
		{
			id: 'trending',
			name: locale('trending'),
			list: [...song].slice(0, 5)
		},
		{
			id: 'international',
			name: locale('international'),
			list: [...song].slice(5)
		},
		{
			id: 'recent',
			name: locale('recent'),
			list: [...song].slice(0, 5)
		}
	]

    // 
	// Divide albums data into two part to set a design.
	const divide = Math.ceil(albums.length / 2)
	const albumList = []
	albumList.push([...albums].slice(0, divide))
	albumList.push([...albums].slice(-divide))


    return (
        // Under hero [[ Find at scss/framework/hero.scss ]]
        <div className='under-hero container'>
            <Section 
                title={title(locale, 'chart_title')}
                subtitle={locale('chart_subtitle')}
                href='/music/song'
                data={song}
                card='track'
                slideView={5}
                navigation
                autoplay
            />

            <div className='row'>
                <div className='col-xl-6'>
                    <Section 
                        title={title(locale, 'upcoming_event_title')}
                        href='/music/event'
                        data={events}
                        card='event'
                        slideView={2}
                        pagination
                        autoplay
                    />
                </div>
                <div className='col-xl-1'></div>
                <div className='section col-xl-5'>
                    <Tab id='songs_list'>
                        {tabs.map((tab, index) => (
                            <li 
                                key={tab.id}
                                className='nav-item' 
                                role='presentation'
                            >
                                <button 
                                    className={classNames(
                                        'nav-link',
                                        index === 0 && 'active'
                                    )}
                                    id={tab.id}
                                    data-bs-toggle='tab' 
                                    data-bs-target={'#' + tab.id + '_pane'}
                                    type='button' 
                                    role='tab' 
                                    aria-controls={tab.id + '_pane'}
                                    aria-selected={index === 0 ? true : false} 
                                >
                                    {tab.name}
                                </button>
                            </li>
                        ))}
                    </Tab>

                    <div className='tab-content mt-4' id='songs_list_content'>
                        {tabs.map((tab, index) => (
                            <div 
                                key={tab.id}
                                id={tab.id + '_pane'}
                                role='tabpanel' 
                                aria-labelledby={tab.id}
                                tabIndex={0} 
                                className={classNames(
                                    'tab-pane fade',
                                    index === 0 && 'show active'
                                )}
                            >
                                {/* List [[ Find at scss/components/list.scss ]] */}
                                <div className='list'>
                                    {tab.list.map((item: any, listIndex: number) => (
                                        <TrackList 
                                            key={listIndex}
                                            data={item}
                                            play
                                            duration
                                            dropdown
                                            favorite
                                            playlist
                                            queue
                                            link
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <Section 
                title={title(locale, 'new_release_title')}
                subtitle={locale('new_release_subtitle')}
                href='/music/song'
                data={song}
                card='track'
                slideView={5}
                navigation
                autoplay
            />

            <Section 
                title={title(locale, 'feature_artists_title')}
                subtitle={locale('feature_artists_subtitle')}
                href='/music/artist'
                data={artists}
                card='avatar'
                slideView={6}
                pagination
                autoplay
            />

            <section className='section'>
                <div className='section__head'>
                    <div className='flex-grow-1'>
                        <span className='section__subtitle'>{locale('top_albums_subtitle')}</span>
                        <h3 
                            className='mb-0'
                            dangerouslySetInnerHTML={{__html: title(locale, 'top_albums_title')}}
                        />
                    </div>
                    <Link href='/music/album' className='btn btn-link'>{locale('view_all')}</Link>
                </div>
                {/* List [[ Find at scss/components/list.scss ]] */}
                <div className='list list--lg list--order'>
                    <div className='row'>
                        {albumList.map((item: any, index: number) => (
                            <div key={index} className='col-xl-6'>
                                {item.map((album: AlbumTypes) => (
                                    <TrackList
                                        key={album.id}
                                        data={album}
                                        download
                                        dropdown
                                        favorite
                                        link
                                    />
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            
            <Section 
                title={title(locale, 'playlist_title')}
                subtitle={locale('playlist_subtitle')}
                href='/music/playlist'
                data={playlist}
                card='playlist'
                slideView={4}
                navigation
                autoplay
            />
            
            <Section 
                title={title(locale, 'live_radio_title')}
                subtitle={locale('live_radio_subtitle')}
                href='/music/stations'
                data={radio}
                card='radio'
                slideView={5}
                pagination
                autoplay
            />
        </div>
    )
}


Home.propTypes = propTypes as any
Home.displayName = 'Home'

export default Home