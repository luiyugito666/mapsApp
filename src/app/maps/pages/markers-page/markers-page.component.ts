
import { AfterViewInit, Component, ElementRef,  ViewChild } from '@angular/core';
import { LngLat, Map, Marker}  from 'mapbox-gl';
 

interface MarkerAndColor {
  color: string;
  marker:Marker;
}

@Component({
  selector: 'app-markers-page',
  templateUrl: './markers-page.component.html',
  styleUrls: ['./markers-page.component.css']
})
export class MarkersPageComponent implements AfterViewInit{
 
  @ViewChild('map') public divMap?: ElementRef; 
  public markers: MarkerAndColor[] = [];
  public map?: Map;
  public currentLngLat: LngLat = new LngLat(-74.5, 40)

  ngAfterViewInit(): void {
    if (!this.divMap) return;
  
      this.map = new Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: 13, // starting zoom

      });
    
    //para personalizar con html al marcador
   /*  const markerHtml = document.createElement('div');
    markerHtml.innerHTML = 'jorge'
 */
    
    
    //con esto se crea el marcador
   /*  const marker = new Marker({
      color: 'red',
      element:markerHtml
    }).setLngLat(this.currentLngLat).addTo(this.map); */
  
  }

//const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
  
  createMarker() {
    if (!this.map) return;
    const color = '#xxxxxx'.replace(/x/g, y => (Math.random() * 16 | 0).toString(16));
    
    const lngLat = this.map.getCenter();

    this.addMarker(lngLat,color)
  }
  

  
  
  addMarker(lnglat: LngLat, color: string) { 
    if (!this.map) return;
    const marker = new Marker({
      color: color,
      draggable:true
    })
      .setLngLat(lnglat)
      .addTo(this.map);
   //para pasar por referencia todos los marcadores en el array markers
    this.markers.push({color, marker});

  }

  deleteMarker(index: number) {

    //elimina el marcador del mapa
    this.markers[index].marker.remove();
    //elimina la lista de marcador del mapa
    this.markers.splice(index,1)

  }

  //fly to para centrar en la corrdenada de la marker
  flyTo(marker: Marker) {
    
    this.map?.flyTo(
      {
        zoom: 14,
        center:marker.getLngLat(),
      }

    )

   }


}
