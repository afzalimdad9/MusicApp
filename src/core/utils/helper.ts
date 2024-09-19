/**
 * 
 * @file helper.ts
 * @description helper functions to get data from json files.
 */

// Modules
import path from 'path'
import { promises as fs } from 'fs'

// Utilities
import { SUCCESSFUL } from '../constants/codes'
import { 
    ALBUMS, 
    ARTISTS, 
    EVENTS, 
    GENRES, 
    PLANS, 
    PLAYLISTS, 
    RADIO, 
    SONGS 
} from '../constants/api-urls'
import { 
    AlbumTypes, 
    ArtistTypes, 
    EventTypes, 
    GenreTypes, 
    PlanTypes, 
    PlaylistTypes, 
    RadioTypes, 
    SongTypes 
} from '../types'

// Local func.
import albumToLocal from '../local/album'
import artistToLocal from '../local/artist'
import eventToLocal from '../local/event'
import genreToLocal from '../local/genre'
import playlistToLocal from '../local/playlist'
import planToLocal from '../local/plan'
import radioToLocal from '../local/radio'
import songToLocal from '../local/song'


/**
 * Base api func. to read mock json file.
 * @param url 
 * @returns 
 */
async function base(url: string): Promise<any> {
    const apiUrl = path.join(process.cwd(), `${url}.json`)
    const data = await fs.readFile(apiUrl, 'utf8')
    return JSON.parse(data as any)
}

/**
 * Get albums data from json file
 * @returns 
 */
export async function getAlbums(): Promise<AlbumTypes[]> {
    const response = await base(ALBUMS)

    if (response && response.code === SUCCESSFUL) {
        const data = response.data.map((item: ArtistTypes) => {
            return albumToLocal(item)
        })
        return data

    } else {
        return [] as AlbumTypes[]
    }
}

/**
 * Get artists data from json file
 * @returns 
 */
export async function getArtists(): Promise<ArtistTypes[]> {
    const response = await base(ARTISTS)

    if (response && response.code === SUCCESSFUL) {
        const data = response.data.map((item: ArtistTypes) => {
            return artistToLocal(item)
        })
        return data

    } else {
        return [] as ArtistTypes[]
    }
}

/**
 * Get events data from json file
 * @returns 
 */
export async function getEvents(): Promise<EventTypes[]> {
    const response = await base(EVENTS)

    if (response && response.code === SUCCESSFUL) {
        const data = response.data.map((item: EventTypes) => {
            return eventToLocal(item)
        })
        return data

    } else {
        return [] as EventTypes[]
    }
}

/**
 * Get genre data from json file
 * @returns 
 */
export async function getGenre(): Promise<GenreTypes[]> {
    const response = await base(GENRES)

    if (response && response.code === SUCCESSFUL) {
        const data = response.data.map((item: PlanTypes) => {
            return genreToLocal(item)
        })
        return data

    } else {
        return [] as GenreTypes[]
    }
}

/**
 * Get plans data from json file
 * @returns 
 */
export async function getPlans(): Promise<PlanTypes[]> {
    const response = await base(PLANS)

    if (response && response.code === SUCCESSFUL) {
        const data = response.data.map((item: PlanTypes) => {
            return planToLocal(item)
        })
        return data

    } else {
        return [] as PlanTypes[]
    }
}

/**
 * Get playlist data from json file
 * @returns 
 */
export async function getPlaylist(): Promise<PlaylistTypes[]> {
    const response = await base(PLAYLISTS)

    if (response && response.code === SUCCESSFUL) {
        const data = response.data.map((item: PlanTypes) => {
            return playlistToLocal(item)
        })
        return data

    } else {
        return [] as PlaylistTypes[]
    }
}

/**
 * Get radio data from json file
 * @returns 
 */
export async function getRadio(): Promise<RadioTypes[]> {
    const response = await base(RADIO)

    if (response && response.code === SUCCESSFUL) {
        const data = response.data.map((item: PlanTypes) => {
            return radioToLocal(item)
        })
        return data

    } else {
        return [] as RadioTypes[]
    }
}

/**
 * Get songs data from json file
 * @returns 
 */
export async function getSongs(): Promise<SongTypes[]> {
    const response = await base(SONGS)

    if (response && response.code === SUCCESSFUL) {
        const data = response.data.map((item: EventTypes) => {
            return songToLocal(item)
        })
        return data

    } else {
        return [] as SongTypes[]
    }
}