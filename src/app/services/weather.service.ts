import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { weatherData } from '../models/weather.models';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) { }

  getWeatherData(cityName: string): Observable<weatherData> {
    return this.http.get<weatherData>('https://api.weatherapi.com/v1/' + 'forecast.json?key=' + 'fb3f4ef9718f4ce492d62915222410' + '&q=' + cityName + '&days=1&aqi=no&alerts=no'
  }
}
