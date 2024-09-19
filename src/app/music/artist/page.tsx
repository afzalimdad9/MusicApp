
// Modules
import { getTranslations } from 'next-intl/server'

// Components
import Section from '@/view/layout/section'

// Utilities
import { title } from '@/core/utils'
import { getArtists } from '@/core/utils/helper'
import { ArtistTypes } from '@/core/types'


export default async function ArtistPage() {

    const artists = await getArtists() as ArtistTypes[]
    const locale = await getTranslations()
    
	
	return (
		<>
            {/* Hero [[ Find at scss/framework/hero.scss ]] */}
			<div 
                className='hero' 
                style={{backgroundImage: 'url(/images/banner/artists.jpg)'}}
            />

            {/* Under hero [[ Find at scss/framework/hero.scss ]] */}
            <div className='under-hero container'>
                <Section 
                    title={title(locale, 'feature_artists_title')}
                    data={artists}
                    card='avatar'
                    slideView={6}
                    pagination
                    autoplay
                />

                <Section 
                    title={title(locale, 'top_artists_title')}
                    data={artists}
                    card='artist'
                    slideView={5}
                    grid
                    navigation
                    autoplay
                />
            </div>
		</>
	)
}
