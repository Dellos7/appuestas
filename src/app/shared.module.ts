import { PageContentWidthDirective } from './page-content-width.directive';
import { NgModule} from '@angular/core';

@NgModule({
  imports: [
  ],
  declarations: [
    PageContentWidthDirective
  ],
  exports: [
      PageContentWidthDirective
  ]
})

export class SharedModule { }