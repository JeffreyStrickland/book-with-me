import { NgModule } from '@angular/core';
import { MapComponent } from './map.component';
import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [
    MapComponent
  ],
  exports: [
      MapComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyDsjWPD-aGasmItFC0r9alRaAhj1slzolo'
    })
  ],
  providers: []
})
export class MapModule { }
