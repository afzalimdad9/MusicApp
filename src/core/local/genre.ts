
// Utilities
import songToLocal from './song'
import { GenreTypes } from '../types'


/**
 * 
 * Convert genre data for local use
 * @param data 
 * @returns
 */
export default function genreToLocal(data: any): GenreTypes {
    const genre = {} as GenreTypes

    genre.id = data.id
    genre.title = data.name
    genre.type = data.type
    genre.cover = data.genreCover
    genre.href = '/music/genre/' + genre.id
    genre.songs = data.songList.map((item: any) => songToLocal(item))

    return genre
}
