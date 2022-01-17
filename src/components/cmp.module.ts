import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { TabsStoreComponent } from "./tabs-store/tabs-store.component";
import {TabsRouteComponent} from "./tabs-route/tabs-route.component";

@NgModule({
  declarations: [TabsStoreComponent, TabsRouteComponent],
  exports: [TabsStoreComponent, TabsRouteComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CmpModule { }
