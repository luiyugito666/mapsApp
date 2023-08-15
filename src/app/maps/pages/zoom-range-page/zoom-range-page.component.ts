import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { LngLat, Map}  from 'mapbox-gl';
 




@Component({
  selector: 'app-zoom-range-page',
  templateUrl: './zoom-range-page.component.html',
  styleUrls: ['./zoom-range-page.component.css']
})
export class ZoomRangePageComponent implements AfterViewInit, OnDestroy{
  
@ViewChild('map')
  public divMap?: ElementRef; 
  public zoom: number = 10;
  public map?: Map;
  public currentLngLat: LngLat = new LngLat(-74.5, 40)

  ngAfterViewInit(): void {
    if (!this.divMap) return;
  
      this.map = new Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: this.currentLngLat, // starting position [lng, lat]
      zoom: this.zoom, // starting zoom

      });
    
    this.mapListener();//llamamos esta funcion para establecer sus listeners
  
  }
//para limpiar los listeners
  ngOnDestroy(): void {
    this.map?.remove();
  }


  
  mapListener() { 
    if (!this.map) throw 'Mapa no Inicializado'
    //escucharemos el evento 'zoom'
    this.map.on('zoom', (ev) => {
      //para actualizar zoom, cada vez que cargue un evento en el zoom igualamos al getZoom
      this.zoom = this.map!.getZoom();

    });

    //se realiza para tener el zoom no mayor a 18
    this.map.on('zoomend', (ev) => {
      if (this.map!.getZoom() < 18) return;
      this.map?.zoomTo(18);
    });

    //para tener el centro de latitud y longitud
    this.map.on('move', () => {
      this.currentLngLat = this.map!.getCenter();
      console.log(this.currentLngLat)
    });



  
  }



  zoomIn() { 
    this.map?.zoomIn();

  }
  zoomOut() { 
    this.map?.zoomOut();

  }


  zoomChanged(value: string) { 
    this.zoom = Number(value);
    this.map?.zoomTo(this.zoom);

  }

}
