
// Modules
import { getTranslations } from 'next-intl/server'

// Components
import Section from '@/view/layout/section'
import TrackList from '@/core/components/list'

// Utilities
import { title } from '@/core/utils'
import { getGenre } from '@/core/utils/helper'
import { GenreTypes, ParamsTypes } from '@/core/types'


export default async function GenreDetailsPage({params}: ParamsTypes) {

    const locale = await getTranslations()
    const genres = await getGenre()
    const genre = genres.find(item => item.id === params.slug) as GenreTypes
	
	return (
		<>
            {/* Hero [[ Find at scss/framework/hero.scss ]] */}
			<div 
                className='hero' 
                style={{backgroundImage: 'url(/images/banner/home.jpg)'}}
            />
            
            {/* Under hero [[ Find at scss/framework/hero.scss ]] */}
            <div className='under-hero container'>
                {/* Section [[ Find at scss/framework/section.scss ]] */}
                <div className='section'>
                    <div className='section__head'>
                        <h3 className='mb-0'>{genre.title}</h3>
                    </div>
                    {/* List [[ Find at scss/components/list.scss ]] */}
                    <div className='list'>
                        <div className='row'>
                            {genre.songs.map((item: any, index: number) => (
                                <div key={index} className='col-xl-6'>
                                    <TrackList 
                                        data={item}
                                        duration
                                        dropdown
                                        playlist
                                        queue
                                        play
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <Section 
                    title={title(locale, 'discover_genres_title')}
                    data={genres}
                    card='genre'
                    slideView={4}
                    navigation
                    autoplay
                />
            </div>
		</>
	)
}
