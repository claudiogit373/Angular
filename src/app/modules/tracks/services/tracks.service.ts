import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { TracksModule } from '../tracks.module';
import { TrackModel } from '@core/models/tracks.model';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
// import *as dataRaw from '../../../data/track.json';

@Injectable({
  providedIn: 'root'
})
export class TracksService {
  // dataTracksTrending$: Observable<TrackModel[]> = of([]) //observable
  // dataTracksRandom$: Observable<any> = of([]) //observable
  private readonly URL = environment.api;

  constructor(private httpClient: HttpClient) {
    // const { data }: any = (dataRaw as any).default;

    // this.dataTracksTrending$ = of(data)

    // this.dataTracksRandom$ = new Observable((observer) => {

    //   const tracksExample: TrackModel = {
    //     _id: 9,
    //     name: 'Leve',
    //     album: 'Cartel de Santa',
    //     url: 'http://localhost:3000/track.mp3',
    //     cover: 'https://jenesaispop.com/wp-content/uploads/2009/09/guetta_onelove.jpg',        

    //   }
    //   setTimeout(() => {
    //     observer.next([tracksExample])
    //   }, 3500)
    // })



  }

  getAllTracks$(): Observable<any> {
    return this.httpClient.get(`${this.URL}/tracks`)
  }

}
