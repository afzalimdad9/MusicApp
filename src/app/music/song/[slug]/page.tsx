
// Modules
import { getTranslations } from 'next-intl/server'

// Components
import CoverInfo from '@/core/components/cover-info'
import Section from '@/view/layout/section'
import Comments from '@/core/components/comments'

// Utilities
import { title } from '@/core/utils'
import { getSongs } from '@/core/utils/helper'
import { ParamsTypes, SongTypes } from '@/core/types'


export default async function SongDetailsPage({params}: ParamsTypes) {

    const locale = await getTranslations()
    const songs = await getSongs()
    const song = songs.find(item => item.id === params.slug) as SongTypes

	
	return (
        <>
            {/* Hero [[ Find at scss/framework/hero.scss ]] */}
			<div 
                className='hero' 
                style={{backgroundImage: 'url(/images/banner/song.jpg)'}} 
            />
            
            {/* Under hero [[ Find at scss/framework/hero.scss ]] */}
            <div className='under-hero container'>
                <CoverInfo data={song} />

                <Section 
                    title={title(locale, 'related_songs_title')}
                    data={songs}
                    card='track'
                    slideView={5}
                    navigation
                    autoplay
                />

                <Comments id={song.id} />
            </div>
        </>
    )
}
