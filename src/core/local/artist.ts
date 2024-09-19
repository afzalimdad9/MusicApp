
// Utilities
import songToLocal from './song'
import { getFloat, getInt, localDate } from '../utils'
import { ArtistTypes } from '../types'


/**
 * 
 * Convert songs data for local use
 * @param data 
 * @returns
 */
export default function artistToLocal(data: any): ArtistTypes {
    const artist = {} as ArtistTypes

    artist.id = data.id
    artist.name = data.name
    artist.type = data.type
    artist.totalAlbums = getInt(data.totalAlbums)
    artist.totalSongs = getInt(data.totalSongs)
    artist.favorites = getInt(data.favorites)
    artist.cover = data.artistCover
    artist.description = data.description
    artist.href = '/music/artist/' + artist.id

    artist.songs = data.songList.map((item: any) => songToLocal(item))

    if (data.dob) {
        artist.dob = localDate(data.dob)
    }

    if (data.artistRatings) {
        artist.rating = getFloat(data.artistRatings)
    }

    return artist
}