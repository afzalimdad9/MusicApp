
// Utilities
import songToLocal from './song'
import { getFloat, getInt, getPersonInfo, localDate } from '../utils'
import { AlbumTypes } from '../types'


/**
 * 
 * Convert album data for local use
 * @param data 
 * @returns
 */
export default function albumToLocal(data: any): AlbumTypes {
    const album = {} as AlbumTypes

    album.id = data.id
    album.name = data.name
    album.type = data.type
    album.cover = data.albumCover
    album.favorites = getInt(data.favorites)
    album.thumb = data.albumThumb
    album.rating = getFloat(data.albumRatings)
    album.company = data.albumCompany
    album.downloads = data.albumDownloads
    album.company = data.albumCompany
    album.date = localDate(data.release)
    album.href = '/music/album/' + album.id

    album.songs = data.songList.map((item: any) => songToLocal(item))
    album.artists = getPersonInfo(data.artists)

    if (data.premium) {
        album.premium = data.premium
    }

    if (data.favorite) {
        album.favorite = data.favorite
    }

    if (data.albumRatings) {
        album.rating = getFloat(data.albumRatings)
    }

    return album
}
