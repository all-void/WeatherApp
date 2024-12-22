export interface Weather {
  main: string;
  description: string;
  icon: string;
}

export interface Temperature {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
}

export interface SunTimes {
  sunrise: string;
  sunset: string;
}

export interface CurrDateTime {
  time:string,
  date:string
}

export interface WeatherResponse {
  weather: Weather;
  temperature: Temperature;
  pressure: number;
  humidity: number;
  windspeed: number;
  visibility: number;
  sunTimes: SunTimes;
  name: string;
  currDateTime: CurrDateTime;
}
