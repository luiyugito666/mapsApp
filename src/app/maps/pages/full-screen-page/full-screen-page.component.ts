import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';


//desestructuramos el * as
/* import * as mapboxgl from 'mapbox-gl'; */ // or "const mapboxgl = require('mapbox-gl');"
import { Map}  from 'mapbox-gl';

//llevamos estas importaciones y token a maps module
/* (mapboxgl as any ).accessToken = 'pk.eyJ1Ijoiam9yZ2V5aCIsImEiOiJjbGtraG53cjIwZHZlM2VvOHFuNjA1M29tIn0.vg6so5N48ebe2x-g4vZBWQ'; */
@Component({
  selector: 'app-full-screen-page',
  templateUrl: './full-screen-page.component.html',
  styleUrls: ['./full-screen-page.component.css']
})
export class FullScreenPageComponent implements AfterViewInit{


  /*   haremos referencia por viewchild, para poder tomar una referencia a un elemento html, para tomarlo basado en el elemento local mapa(#map) */
  
  @ViewChild('map')
  public divMap?: ElementRef;

  ngAfterViewInit(): void {


    if (!this.divMap) return;

    

    const map = new Map({
    container: this.divMap.nativeElement, // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 9, // starting zoom
    });
  }

}
