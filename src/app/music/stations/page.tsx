
// Modules
import { getTranslations } from 'next-intl/server'

// Components
import Section from '@/view/layout/section'

// Utilities
import { title } from '@/core/utils'
import { getRadio } from '@/core/utils/helper'


export default async function StationsPage() {

    const locale = await getTranslations()
    const radio = await getRadio()
    
	
	return (
		<>
            {/* Hero [[ Find at scss/framework/hero.scss ]] */}
			<div 
                className='hero' 
                style={{backgroundImage: 'url(/images/banner/radio.jpg)'}}
            />
            
            {/* Under hero [[ Find at scss/framework/hero.scss ]] */}
            <div className='under-hero container'>
                <Section 
                    title={title(locale, 'live_frequency_title')}
                    data={radio}
                    card='radio'
                    slideView={5}
                    grid
                    navigation
                    autoplay
                />
                <Section 
                    title={title(locale, 'top_radio_title')}
                    data={radio}
                    card='radio'
                    slideView={5}
                    grid
                    navigation
                    autoplay
                />
            </div>
		</>
	)
}
