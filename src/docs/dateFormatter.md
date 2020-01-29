# dateFormatter

##### Importamos

Añadimos al [`app.modules`](./modules.md)

##### uso

```html
{{ '2025-06-02' | dateFormatter }}
<!-- 02/06/2025 -->
{{ '2025-06-02' | dateFormatter:'MMMM Do YYYY, h:mm:ss a' }}
<!-- mayo 8º 2007, 12:00:00 am -->
```
Esta pipe utiliza la libreria moment con el locale definido a 'es', los diferentes formatos se pueden encontar
en la [`web de la libreria moment`](https://momentjs.com/docs/#/parsing/string-format/)