
// Layout
import Albums from '@/view/layout/albums'

// Utilities
import { getAlbums } from '@/core/utils/helper'


export default async function AlbumPage() {

    const albums = await getAlbums()
	
	return <Albums albums={albums} />
}
