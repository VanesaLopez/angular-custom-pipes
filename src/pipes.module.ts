import { NgModule } from '@angular/core';

import { NgDataFormatterPipe } from './pipes/date-formatter/date-formatter.pipe';

@NgModule({
  imports: [
    NgDataFormatterPipe
  ],
  exports: [
    NgDataFormatterPipe
  ],
})
export class NgCustomPipesModule {}
