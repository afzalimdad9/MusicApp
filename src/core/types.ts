

export type IdTypes = string | number

export type LocaleTypes = 'en' | 'ar'

export type ParamsTypes = {
    params: { slug: IdTypes }
}

export type InfoType = {
    id: IdTypes
    name: string
}

export type PersonTypes = InfoType & {
    cover: string
}

export type CardNameTypes = 'album' 
| 'artist' 
| 'avatar' 
| 'playlist' 
| 'genre' 
| 'event' 
| 'radio' 
| 'track'


/**
 * 
 * Theme types
 */
export type ThemeModeTypes = 'light' | 'dark' | 'system'
export type ComponentNameTypes = 'header' | 'sidebar' | 'player'
export type ComponentSkinTypes = 'red' 
| 'green' 
| 'blue' 
| 'orange' 
| 'yellow' 
| 'purple' 
| 'indigo'
| 'pink' 
| 'violet' 
| 'magenta'


/**
 * 
 * Form data types
 */
export type LoginTypes = {
    username: string
    password: string
}

export type RegisterTypes = LoginTypes & {
    cPassword: string
    agreed: boolean
}

export type PasswordTypes = {
    email: string
}

export type ContactTypes = {
    firstName: string
    lastName: string
    email: string
    phone: string
    message: string
}

export type CurrentUserTypes = PersonTypes & {
    role?: 'admin' | 'user'
    token?: string
}

export type CommentTypes = {
    id: IdTypes
    name: string
    email: string
    ratings: string
    comment?: string
}

export type ProfileTypes = {
    image?: string
    firstName: string
    lastName: string
    displayName: string
    location: string
    description?: string
}


/**
 * 
 * Email template types
 */
export type EmailTemplateNameTypes = 'inquiry' | 'forgot'

export type EmailTemplateTypes = {
    recipient?: string
    subject: string
    Component: EmailTemplateNameTypes
}


/**
 * Navigation types
 */
export type NavLinkTypes = {
    name: string
    href: string
    icon?: any
    fragment?: string
}

export type NavHeadTypes = {
    title: string
}

export type NavbarTypes = NavLinkTypes | NavHeadTypes


/**
 * 
 * Radio types
 */
export type RadioTypes = {
    id: IdTypes
    title: string
    cover: string
    type: string
    src: string
    premium?: boolean
    favorite?: boolean
}


/**
 * 
 * Song types
 */
export type SongTypes = RadioTypes & {
    date: string
    company: string
    thumb: string
    duration: string
    href: string
    artists: InfoType[]
    composers: InfoType[]
    lyricists: InfoType[]
    directors: InfoType[]
    categories: InfoType[]
    album?: InfoType
    rating?: number
    played?: number
    favorites?: number
    downloads?: string | number
    lyrics?: string
}


/**
 * 
 * Artist types
 */
export type ArtistTypes = PersonTypes & {
    dob: string
    totalAlbums: number
    totalSongs: number
    rating?: number
    favorites?: number
    description?: string
    href: string
    type: string
    songs: SongTypes[]
}


/**
 * 
 * Artist types
 */
export type AlbumTypes = PersonTypes & {
    rating?: number
    favorite?: boolean
    premium?: boolean
    favorites?: number
    downloads?: string | number
    thumb: string
    duration: string
    href: string
    date: string
    company: string
    type: string
    artists: InfoType[]
    songs: SongTypes[]
}


/**
 * 
 * Blog types
 */
export type BlogTypes = {
    id: IdTypes
    title: string
    image: string
    date: string
    author: string
}


/**
 * 
 * Event types
 */
export type EventTypes = {
    id: IdTypes
    title: string
    image: string
    date: string
    address: string
    phone: string
    email: string
    description: string
    seats?: number
    attendees?: PersonTypes[]
    totalAttendee?: number
    price?: number
}


/**
 * 
 * Genre types
 */
export type GenreTypes = {
    id: IdTypes
    title: string
    cover: string
    songs: SongTypes[]
    type: string
    href: string
}


/**
 * 
 * Playlist types
 */
export type PlaylistTypes = GenreTypes & {
    likes?: number
}


/**
 * 
 * Plan types
 */
export type FeatureTypes = {
    id: IdTypes
    title: string
}

export type PlanTypes = FeatureTypes & {
    icon: string
    price: number
    subscribe: boolean
    features: FeatureTypes[]
}