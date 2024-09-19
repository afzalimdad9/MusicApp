
// Modules
import Link from 'next/link'
import { getTranslations } from 'next-intl/server'
import { RiAddFill } from '@remixicon/react'

// Components
import Carousel from '@/core/components/carousel'
import EventCard from '@/core/components/card/event'

// Utilities
import { title } from '@/core/utils'
import { getEvents } from '@/core/utils/helper'


export default async function EventPage() {

    const events = await getEvents()
    const locale = await getTranslations()

	
	return (
		<>
            {/* Hero [[ Find at scss/framework/hero.scss ]] */}
			<div 
                className='hero' 
                style={{backgroundImage: 'url(/images/banner/event.jpg)'}}
            />
            
            {/* Under hero [[ Find at scss/framework/hero.scss ]] */}
            <div className='under-hero container'>
                {/* Section [[ Find at scss/framework/section.scss ]] */}
                <div className='section'>
                    <div className='section__head'>
                        <div className='flex-grow-1'>
                            <h3 
                                className='mb-0'
                                dangerouslySetInnerHTML={{__html: title(locale, 'upcoming_event_title')}}
                            />
                        </div>
                        <Link href='/music/add-event' className='btn btn-primary'>
                            <div className='btn__wrap'>
                                <RiAddFill />
                                <span>{locale('create_event')}</span>
                            </div>
                        </Link>
                    </div>
                    
                    <Carousel 
                        data={events}
                        Component={EventCard}
                        slideView={3}
                        grid
                    />
                </div>
            </div>
		</>
	)
}
