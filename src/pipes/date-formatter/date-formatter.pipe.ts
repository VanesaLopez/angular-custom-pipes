import { Pipe, PipeTransform, NgModule } from '@angular/core';

import * as moment_ from 'moment';
import 'moment/locale/es';
const moment = moment_;
moment.locale('es');

@Pipe({ name: 'dateFormatter', pure: false })

export class DateFormatterPipe implements PipeTransform {
  transform(value: any, format: string = 'DD/MM/YYYY'): string {
    const momentDate = moment(value);

    if (!momentDate.isValid()) {
      return value;
    }
    return momentDate.format(format);
  }
}

@NgModule({
  declarations: [DateFormatterPipe],
  exports: [DateFormatterPipe],
})
export class NgDataFormatterPipe {}

