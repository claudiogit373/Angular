import { Component, OnInit } from '@angular/core';
// import * as dataRaw from '../../../../data/track.json'
import { TrackModel } from '@core//models/tracks.model';
import { TracksService } from '@modules/tracks/services/tracks.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit {
  tracksTrending: Array<TrackModel> = []
  tracksRandom: Array<TrackModel> = []
  listObservable$: Array<Subscription> = []


  constructor(private trackService: TracksService) { }

  ngOnInit(): void {
    this.trackService.getAllTracks$().subscribe(response=>{
      console.log('response----->', response)
    })

    // const observer1$ = this.trackService.dataTracksTrending$
    //   .subscribe(response => {
    //     this.tracksTrending = response
    //     this.tracksRandom = response
    //     console.log('Canciones trending-------->', response);

    //   })

    // const observer2$ = this.trackService.dataTracksTrending$
    //   .subscribe(response => {
    //     this.tracksTrending = [...this.tracksRandom,...response]
    //     console.log('Cancion random entrando....', response);

    //   })



    // this.listObservable$ = [observer1$,observer2$]
  }

  ngOnDestroy(): void {
    // this.listObservable$.forEach(u => u.unsubscribe())
    // console.log('🔴🔴🔴🔴🔴🔴🔴 BOOM!');
  }

}
