
// Modules
import { getTranslations } from 'next-intl/server'

// Components
import Section from '@/view/layout/section'
import TrackList from '@/core/components/list'

// Utilities
import { getAlbums, getSongs } from '@/core/utils/helper'


export default async function FavoritesPage() {

    const locale = await getTranslations()
    const [albums, songs] = await Promise.all([getAlbums(), getSongs()])
	
	return (
		<>
            {/* Hero [[ Find at scss/framework/hero.scss ]] */}
			<div 
                className='hero' 
                style={{backgroundImage: 'url(/images/banner/song.jpg)'}}
            />
            
            {/* Under hero [[ Find at scss/framework/hero.scss ]] */}
            <div className='under-hero container'>
                {/* Section [[ Find at scss/framework/section.scss ]] */}
                <div className='section'>
                    <div className='section__head'>
                        <h3 className='mb-0'>{locale('songs')}</h3>
                    </div>

                    {/* List [[ Find at scss/components/list.scss ]] */}
                    <div className='list'>
                        <div className='row'>
                            {songs.map((item: any, index: number) => (
                                item.favorite && (
                                    <div key={index} className='col-xl-6'>
                                        <TrackList 
                                            data={item}
                                            favorite
                                            duration
                                            dropdown
                                            playlist
                                            queue
                                            play
                                            link
                                        />
                                    </div>
                                )
                            ))}
                        </div>
                    </div>
                </div>

                <Section 
                    title={locale('sidebar.albums')}
                    data={albums.filter(album => album.favorite)}
                    card='album'
                    slideView={5}
                    grid
                    navigation
                    autoplay
                />
            </div>
		</>
	)
}
