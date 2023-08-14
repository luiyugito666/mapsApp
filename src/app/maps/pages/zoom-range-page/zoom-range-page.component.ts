import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Map}  from 'mapbox-gl';
 




@Component({
  selector: 'app-zoom-range-page',
  templateUrl: './zoom-range-page.component.html',
  styleUrls: ['./zoom-range-page.component.css']
})
export class ZoomRangePageComponent implements AfterViewInit{
@ViewChild('map')
  public divMap?: ElementRef; 
  public zoom: number = 10;
  public map?: Map;

  ngAfterViewInit(): void {
    if (!this.divMap) return;
  
      this.map = new Map({
      container: this.divMap.nativeElement,
      style: 'mapbox://styles/mapbox/streets-v12',
      center: [-74.5, 40], // starting position [lng, lat]
      zoom: this.zoom, // starting zoom

      });
    
    this.mapListener();//llamamos esta funcion para establecer sus listeners
  
  }
  
  mapListener() { 
    if (!this.map) throw 'Mapa no Inicializado'
    //escucharemos el evento 'zoom'
    this.map.on('zoom', (ev) => {
      //para actualizar zoom, cada vez que cargue un evento en el zoom igualamos al getZoom
      this.zoom = this.map!.getZoom();

    });

    this.map.on('zoomend', (ev) => { 
      if (this.map!.getZoom() < 18) return;
      this.map?.zoomTo(18);


    })
  
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
