import { DateFormatterPipe } from './date-formatter.pipe';

describe('Pipe: DateFormatterPipe', () => {
  let pipe: DateFormatterPipe;

  beforeEach(() => {
    pipe = new DateFormatterPipe();
  });

  it('Creamos el pipe', () => {
    expect(pipe).toBeTruthy();
  });

  it('Transformamos la fecha de timpo AAAA-MM-DD pasando un formato', () => {
    expect(pipe.transform('2019-12-06', 'DD-MM-YYYY')).toEqual('06-12-2019');
  });

  it('Transformamos la fecha de timpo AAAA-MM-DD', () => {
    expect(pipe.transform('2019-12-06')).toEqual('06/12/2019');
  });

  it('Transformamos la fecha de timpo AAAA-MM-DDTHH:MM:SS', () => {
    expect(pipe.transform('2019-12-06T12:06:05')).toEqual('06/12/2019');
  });

  it('Transformamos la fecha de timpo AAAA-MM-DDTHH:MM:SS.mmm', () => {
    expect(pipe.transform('2019-12-06T12:06:05.036')).toEqual('06/12/2019');
  });

});
