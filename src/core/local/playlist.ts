
// Utilities
import songToLocal from './song'
import { PlaylistTypes } from '../types'
import { getFloat } from '../utils'


/**
 * 
 * Convert playlist data for local use
 * @param data 
 * @returns
 */
export default function playlistToLocal(data: any): PlaylistTypes {
    const playlist = {} as PlaylistTypes

    playlist.id = data.id
    playlist.title = data.name
    playlist.type = data.type
    playlist.cover = data.playlistCover
    playlist.likes = getFloat(data.links)
    playlist.href = '/music/playlist/' + playlist.id
    playlist.songs = data.songList.map((item: any) => songToLocal(item))

    return playlist
}
