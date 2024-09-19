//
// Constant variables
//

// Modules
import {
  RiHome4Line,
  RiDiscLine,
  RiMusic2Line,
  RiAlbumLine,
  RiMicLine,
  RiRadio2Line,
  RiPieChartLine,
  RiHeartLine,
  RiHistoryLine,
  RiCalendarEventLine,
  RiAddCircleLine,
  RiErrorWarningLine,
  RiUser3Line,
  RiSettingsLine,
  RiMoneyDollarCircleLine,
  RiGooglePlayFill,
  RiAppStoreFill,
  RiFacebookCircleLine,
  RiInstagramLine,
  RiPinterestLine,
  RiYoutubeLine,
  RiTwitterXLine,
} from "@remixicon/react";

// Utilities
import {
  ComponentSkinTypes,
  LocaleTypes,
  NavbarTypes,
  NavLinkTypes,
  ThemeModeTypes,
} from "../types";

//
// Sidebar navigation array
export const NAVBAR: NavbarTypes[] = [
  {
    name: "home",
    href: "/music",
    icon: RiHome4Line,
  },
  {
    name: "genres",
    href: "/music/genre",
    icon: RiDiscLine,
  },
  {
    name: "music",
    href: "/music/song",
    icon: RiMusic2Line,
  },
  {
    name: "albums",
    href: "/music/album",
    icon: RiAlbumLine,
  },
  {
    name: "artists",
    href: "/music/artist",
    icon: RiMicLine,
  },
  {
    name: "stations",
    href: "/music/stations",
    icon: RiRadio2Line,
  },
  {
    title: "music_title",
  },
  {
    name: "analytics",
    href: "/music/analytics",
    icon: RiPieChartLine,
  },
  {
    name: "favorites",
    href: "/music/favorites",
    icon: RiHeartLine,
  },
  {
    name: "history",
    href: "/music/history",
    icon: RiHistoryLine,
  },
  {
    title: "events_title",
  },
  {
    name: "events",
    href: "/music/event",
    icon: RiCalendarEventLine,
  },
  {
    name: "add_event",
    href: "/music/add-event",
    icon: RiAddCircleLine,
  },
  {
    title: "extra_title",
  },
  {
    name: "404_page",
    href: "/404",
    icon: RiErrorWarningLine,
  },
];

//
// Top header navigation array
export const NAVBAR_LINK: NavLinkTypes[] = [
  {
    name: "discover",
    href: "/music",
  },
  {
    name: "pricing",
    href: "/",
    fragment: "pricing",
  },
  {
    name: "about_us",
    href: "/about",
  },
  {
    name: "blog",
    href: "/blog",
  },
  {
    name: "contact_us",
    href: "/contact",
  },
];

//
// User profile dropdown options
export const OPTIONS: NavLinkTypes[] = [
  {
    name: "profile",
    href: "/music/profile",
    icon: RiUser3Line,
  },
  {
    name: "favorites",
    href: "/music/favorites",
    icon: RiHeartLine,
  },
  {
    name: "settings",
    href: "/music/settings",
    icon: RiSettingsLine,
  },
  {
    name: "plan",
    href: "/music/plan",
    icon: RiMoneyDollarCircleLine,
  },
];

//
// Language dropdown options
export const LANGUAGES = [
  {
    id: 1,
    name: "Hindi",
    checked: false,
  },
  {
    id: 2,
    name: "Punjabi",
    checked: false,
  },
  {
    id: 3,
    name: "Tamil",
    checked: false,
  },
  {
    id: 4,
    name: "Bengali",
    checked: false,
  },
  {
    id: 5,
    name: "Kannada",
    checked: false,
  },
  {
    id: 6,
    name: "Gujarati",
    checked: false,
  },
  {
    id: 7,
    name: "Urdu",
    checked: false,
  },
  {
    id: 8,
    name: "English",
    checked: true,
  },
  {
    id: 9,
    name: "Telugu",
    checked: false,
  },
  {
    id: 10,
    name: "Bhojpuri",
    checked: false,
  },
  {
    id: 11,
    name: "Malayalam",
    checked: false,
  },
  {
    id: 12,
    name: "Marathi",
    checked: false,
  },
  {
    id: 13,
    name: "Haryanvi",
    checked: false,
  },
  {
    id: 14,
    name: "Rajasthani",
    checked: false,
  },
  {
    id: 15,
    name: "Assamese",
    checked: false,
  },
  {
    id: 16,
    name: "Odia",
    checked: false,
  },
];

//
// Social links
export const SOCIAL: NavLinkTypes[] = [
  {
    name: "Facebook",
    icon: RiFacebookCircleLine,
    href: "#",
  },
  {
    name: "Instagram",
    icon: RiInstagramLine,
    href: "#",
  },
  {
    name: "X",
    icon: RiTwitterXLine,
    href: "#",
  },
  {
    name: "Pinterest",
    icon: RiPinterestLine,
    href: "#",
  },
  {
    name: "Youtube",
    icon: RiYoutubeLine,
    href: "#",
  },
];

//
// The default user object is utilized to display user data upon login.
// You can remove it after the integration process is completed.
export const DEFAULT_USER = {
  name: "Afzal Imdad",
  cover: "/images/users/thumb.jpg",
  role: "admin",
};

//
// Brand object
export const BRAND = {
  name: "Groove app",
  href: "/",
  logo: "/images/logos/logo.png",
  dark_logo: "/images/logos/logo-dark.png",
  email: "info@grooveapp.com",
};

//
// Mobile app data
export const APP: NavLinkTypes[] = [
  {
    name: "google_play",
    icon: RiGooglePlayFill,
    href: "#",
  },
  {
    name: "app_store",
    icon: RiAppStoreFill,
    href: "#",
  },
];

//
// Chart.js tooltip config
export const CHART_TOOLTIP = {
  titleMarginBottom: 6,
  caretSize: 6,
  caretPadding: 10,
  boxWidth: 8,
  boxHeight: 8,
  boxPadding: 4,
  intersect: false,
  backgroundColor: "#131416",
  usePointStyle: true,

  padding: {
    top: 8,
    right: 12,
    bottom: 8,
    left: 12,
  },
};

//
// Local storage keys
export const USER_KEY = "user";
export const SONG_KEY = "songs";

//
// Attribute names
export const SIDEBAR_TOGGLE = "data-sidebar-toggle";
export const SEARCH_RESULTS = "data-search-results";
export const THEME = "data-theme";

//
// Toggle to display theme configuration choices.
export const ENABLE_SETTINGS = true;

//
// Enable RTL direction.
export const ENABLE_RTL = false;

//
// Activate dark mode for the theme.
export const THEME_MODE: ThemeModeTypes = "light";

//
// Components theme
export const HEADER_THEME: ComponentSkinTypes = "red";
export const SIDEBAR_THEME: ComponentSkinTypes = "blue";
export const PLAYER_THEME: ComponentSkinTypes = "yellow";

//
// Global HTML classes
export const ACTIVE = "active";
export const SHOW = "show";
export const COLLAPSE = "collapse";

//
// i18n configuration
export const I18N_LOCALE: LocaleTypes = "en";
