
// Components
import Home from '@/view/layout/home'

// Utilities
import { 
	getAlbums,
	getArtists, 
	getEvents, 
	getPlaylist, 
	getRadio, 
	getSongs 
} from '@/core/utils/helper'


export default async function MusicPage() {

	const [
		albums,
		artists,
		events,
		playlist,
		radio,
		song
	] = await Promise.all([
		getAlbums(),
		getArtists(),
		getEvents(),
		getPlaylist(),
		getRadio(),
		getSongs()
	])

	
	return (
        <>
			{/* Hero [[ Find at scss/framework/hero.scss ]] */}
			<div 
				className='hero' 
				style={{backgroundImage: 'url(/images/banner/home.jpg)'}}
			/>

			{/* Under hero [[ Find at scss/framework/hero.scss ]] */}
			<Home
				albums={albums}
				artists={artists}
				events={events}
				playlist={playlist}
				radio={radio}
				song={song}
			/>
		</>
	)
}
