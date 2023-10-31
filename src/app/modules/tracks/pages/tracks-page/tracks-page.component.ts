import { Component, OnInit } from '@angular/core';
import * as dataRaw from '../../../../data/track.json'
import { TrackModel } from '@core//models/tracks.model';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrls: ['./tracks-page.component.css']
})
export class TracksPageComponent implements OnInit {
  mockTracksList: Array<TrackModel> =[
    
  ]
  constructor() { }

  ngOnInit(): void {
     const {data}:any = (dataRaw as any).default
     this.mockTracksList = data;
     console.log(data);
  }

}
