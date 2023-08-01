import { Component } from '@angular/core';
interface MenuItem { 
  name: string,
  route:string,

}
@Component({
  selector: 'map-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
  

  
  
export class SideMenuComponent {

  public menuItems: MenuItem[] = [
    {route: '/maps/fullscreen',name:'Fullscreen'},
    {route: '/maps/zoom-range',name:'Zoom-Range'},
    {route: '/maps/markers',name:'Markers'},
    {route: '/maps/properties',name:'Properties'},
   
    
  ]

}
