# Modules

La importación de las pipes se puede hacer una a una o todas.

- `NgDataFormatterPipe`
- `NgCustomPipesModule` (importa todos los modulos)

## Ejemplo (Añadimos en app.modules)

```typescript

import { NgDataFormatterPipe } from 'angular-pipes';

@NgModule({
  imports: [NgDataFormatterPipe],
})
```
