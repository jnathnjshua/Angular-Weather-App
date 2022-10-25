export interface weatherData {
    location: Location
    current: Current
    forecast: Forecast
  }
  
  export interface Location {
    name: string
    region: string
    country: string
    lat: number
    lon: number
    tz_id: string
    localtime_epoch: number
    localtime: string
  }
  
  export interface Current {
    temp_f: number
    condition: Condition
    wind_mph: number
    humidity: number
    uv: number
  }
  
  export interface Condition {
    text: string
  }
  
  export interface Forecast {
    forecastday: Forecastday[]
  }
  
  export interface Forecastday {
    day: Day
    astro: Astro
    hour: Hour[]
  }
  
  export interface Day {
    maxtemp_f: number
    mintemp_f: number
    totalsnow_cm: number
    condition: Condition2
  }
  
  export interface Condition2 {}
  
  export interface Astro {}
  
  export interface Hour {
    condition: Condition3
  }
  
  export interface Condition3 {}
  