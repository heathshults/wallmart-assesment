import * as React from 'react'
import axios, {AxiosInstance}  from 'axios'


export interface iGlobalVContext {
  children?: React.ReactNode
  Provider: React.ProviderProps<iGlobalConfig>
  api?: AxiosInstance
  value?: iGlobalConfig
}

export interface iGlobalV {
  children: React.ReactNode
}
  
export interface GlobalVProviderProps extends React.ProviderProps<iGlobalConfig> {}


  
  // characters
  export interface ICharacter {
    info?:    Info;
    results?: Result[];
}

export interface Info {
    count?: number;
    pages?: number;
    next?:  string;
    prev?:  null;
}

export interface Result {
    id?:       number;
    name?:     string;
    status?:   string;
    species?:  string;
    type?:     string;
    gender?:   string;
    origin?:   Location;
    location?: Location;
    image?:    string;
    episode?:  string[];
    url?:      string;
    created?:  Date;
}

export interface Location {
    name?: string;
    url?:  string;
}


// episodes  
  export interface IEpisodes {
    id:         number;
    name:       string;
    air_date:   string;
    episode:    string;
    characters: string[];
  }
  
/* GlobaVContext Interface */
  export interface iGlobalVContext {
      children?: React.ReactNode
      Provider: React.ProviderProps<iGlobalConfig>
      api?: AxiosInstance
      value?: iGlobalConfig
  }
  export interface GlobalVProviderProps extends React.ProviderProps<iGlobalConfig> {}

  // events
  export type EventType = 'theme-change' | 'show-episode-characters' | 'load-default-characters';
  
  /* Base Event */
  export interface IBaseEvent {
    id: Promise<() => string> | string;
    type: EventType;
    timestamp: Date;
  }

/* Event Interfaces */
export interface IShowEpisodeCharacters extends IBaseEvent {
  episodeData: IEpisodes;
}
export interface ILoadDefaultCharacters extends IBaseEvent {
  characterData: ICharacter;
}

export interface IThemeChange extends IBaseEvent {
  theme: 'light' | 'dark';
}

/* Global Events Interface */
export interface Events {
  'show-episode-characters': IShowEpisodeCharacters;
  'theme-change': IThemeChange;
  'load-default-characters': ILoadDefaultCharacters;
}

export interface iGlobalConfig {
  go?: AxiosInstance
  api: {
    baseUrl?: string
  },
  characters: Array<ICharacter>,
  episodes: Array<IEpisodes>,
  currentEpisodeCharacters: Array<string>,
}


export interface EpisodeCharacterDetailsProps {
  data: string[]
  cssClass: string
}
