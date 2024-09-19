
// Modules
import { getTranslations } from 'next-intl/server'

// Components
import TrackList from '@/core/components/list'

// Utilities
import { getSongs } from '@/core/utils/helper'


export default async function HistoryPage() {

    const locale = await getTranslations()
    const songs = await getSongs()
	
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
                        <div className='flex-grow-1'>
                            <span className='section__subtitle'>{locale('history_subtitle')}</span>
                            <h3 className='mb-0'>{locale('sidebar.history')}</h3>
                        </div>
                        <a role='button' className='btn btn-link'>{locale('clear_all')}</a>
                    </div>

                    {/* List [[ Find at scss/components/list.scss ]] */}
                    <div className='list'>
                        <div className='row'>
                            {songs.map((item: any, index: number) => (
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
                            ))}
                        </div>
                    </div>
                </div>
            </div>
		</>
	)
}
