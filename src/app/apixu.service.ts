import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: "root"
})
export class ApixuService {
  constructor(private http: HttpClient) {}

  getWeather(location : any) {
    return this.http.get(
      "http://api.weatherstack.com/current?access_key=b95f2497c0b0daf667dc9508cdd96aff&query=" + location
    );
  }
}

