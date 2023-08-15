import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MapsRoutingModule } from './maps-routing.module';
import { MiniMapComponent } from './components/mini-map/mini-map.component';

import { MapsLayoutComponent } from './layout/maps-layout/maps-layout.component';
import { FullScreenPageComponent } from './pages/full-screen-page/full-screen-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { MarkersPageComponent } from './pages/markers-page/markers-page.component';
import { ZoomRangePageComponent } from './pages/zoom-range-page/zoom-range-page.component';

import * as mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
import { CounterAloneComponent } from '../alone/components/counter-alone/counter-alone.component';

import { SideMenuComponent } from '../alone/components/side-menu/side-menu.component';

(mapboxgl as any ).accessToken = 'pk.eyJ1Ijoiam9yZ2V5aCIsImEiOiJjbGtraG53cjIwZHZlM2VvOHFuNjA1M29tIn0.vg6so5N48ebe2x-g4vZBWQ';

@NgModule({
  declarations: [
    MiniMapComponent,
    MapsLayoutComponent,
    FullScreenPageComponent,
    PropertiesPageComponent,
    MarkersPageComponent,
    ZoomRangePageComponent
  ],
  imports: [
    CommonModule,
    MapsRoutingModule,
    CounterAloneComponent,
    SideMenuComponent,
  ]
})
export class MapsModule { }
