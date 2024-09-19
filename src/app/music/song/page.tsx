
// Layout
import Songs from '@/view/layout/songs'

// Utilities
import { getAlbums, getSongs } from '@/core/utils/helper'


export default async function SongPage() {
    
    const [albums, songs] = await Promise.all([getAlbums(), getSongs()])
	
	return <Songs albums={albums} songs={songs} />
}
