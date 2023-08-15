import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { LngLat, Map, Marker}  from 'mapbox-gl';

@Component({
  selector: 'map-mini-map',
  templateUrl: './mini-map.component.html',
  styleUrls: ['./mini-map.component.css']
})
export class MiniMapComponent {
 @ViewChild('map')
  public divMap?: ElementRef;
  public map?: Map;
 

  @Input() lngLat?: [number,number];

  ngAfterViewInit() {
    if (!this.divMap?.nativeElement) throw "Map Div not Found"
    if (!this.lngLat) throw "lngLat can't be null"


    //mapa
    this.map = new Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.lngLat, // starting position [lng, lat]
      zoom: 15, // starting zoom
      interactive: false,
    })


    //marker

    new Marker()
    .setLngLat(this.lngLat).addTo(this.map)
  }
}
