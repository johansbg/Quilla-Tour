![logo de la app](https://github.com/johansbg/Quilla-Tour/blob/main/src/assets/img/Logo.png)

La aplicacion es una solucion requerida al problema de construir un sitio web de recomendaciones y  de información turística de Barranquilla.  (Restaurantes, hoteles, bares, centros comerciales, empresas de turismo, entre otros)

En este proyecto se  integrarán, perfiles de usuarios de los diferentes lugares, así como de los usuarios que acceden a él. 
## Tecnologías que usa Quilla-Tour:
### Las tecnologías usadas en este sitio web son:
- React JS
- Npm y Yarn como manejadores de paquetes
- Node Js
- Boostrap, reactstrap y material IU
- Diferentes librerias para el manejo de mapas, formularios y calendarios tales como leaflet, formik, momento, dx-react-scheduler
- Conectividad sencilla a firebase y su servicio de autenticación.
- Librerías de iconos como FontAwesome.
- Conexiones a Apis de noticias y lugares turisticos.
- Manejador de versionamiento de código y trabajo en equipo remotos github y git.

## Componentes
- Componente de mapas
- Componentes de sitios turísticos y culturales
- Componente de servicios turísticos
- Componentes de noticias, avisos e información de la ciudad
- Componente de eventos y agenda cultural
- Componente de red social, perfil, usuarios y comunidad

### Componente de mapas:
Es el responsable de gestionar toda la información geográfica, su representación filtrada, búsqueda, almacenamiento y recuperación, importación de datos, exportación de datos, impresión de mapas, personalización, estilo de mapas, capas base, capas de información geográfica, sitios, rutas y zonas de interés, conexión a otros servicios de información y publicación de información espacial. Operaciones y estadísticas espaciales. Multirepresentación, planos y localización de información.

#### Libreria
La liberia que se utlizo para el componente de mapas de la aplicacion fue React Leaflet.
- https://react-leaflet.js.org/

```
"leaflet": "^1.7.1",
"react-leaflet": "^3.1.0",
"leaflet-geosearch": "^3.3.2",
```
### Componente de sitios turísticos y culturales. 
Responsable de almacenar y gestionar la información de sitios turísticos, definir su clasificación, tipo y categoría, datos del lugar, horario, costos, datos del propietario, imágenes asociadas, descripción y estadísticas del lugar, instalaciones, eventos, comentarios y ranking, referencias a sitios relacionados, servicios de información y publicación de información, filtrado y búsqueda de información. Impresión de datos, exportación e importación de datos.

### Componente de servicios turísticos
Responsable de almacenar y gestionar la información de servicios turísticos, definir su clasificación, tipo y categoría, valor, que servicios están incluidos y cuáles no, información de paquetes o promociones. Impresión de datos, exportación e importación de datos.

###  Componente de noticias, avisos e información de la ciudad
Responsable de almacenar y gestionar las noticias, los avisos, información, frecuencia de actualización, fuentes de información, comentarios y ranking, referencias a sitios relacionados, servicios de información y publicación de información, filtrado y búsquedas de información. Impresión de datos, exportación e importación de datos.

### Componente de eventos y agenda cultural
Responsable de almacenar y gestionar los eventos a realizarse, y actividades culturares de los mismos, las diferentes ofertas que ofrezcan los sitios, y lo que la gente ha dicho de esto. Se debe visualizar de tal manera se puedan de manera organiza en el tiempo. Contenido multi-lenguaje.

#### Libreria
La liberia que se utlizo para el componente de eventos y agenda cultural de la aplicacion fue React Scheduler.
- https://devexpress.github.io/devextreme-reactive/react/scheduler/docs/guides/getting-started/

```
"@devexpress/dx-core": "^2.7.5",
"@devexpress/dx-react-core": "^2.7.5",
"@devexpress/dx-react-scheduler": "^2.7.5",
"@devexpress/dx-react-scheduler-material-ui": "^2.7.5",
```

### Componente de red social, perfil, usuarios y comunidad
Responsable de almacenar la información de los perfiles de los usuarios, y crear grupo o categorías donde cada uno de los participantes pueda interactuar, además de una comunidad donde los usuarios puedan ingresar sus experiencias y hacer sugerencias. Contenido multi-lenguaje.

#### Libreria
La liberia que se utlizo para el componente de red social, perfil, usuarios y comunidad de la aplicacion fue React Leaflet.
- https://formik.org/

```
"formik": "^2.2.6",
```

## Comandos de ejecucion para el proyecto

Este proyecto se puede ejecutar de manera local con el comando:

### `yarn start`

Lo que ejecuta la app en modo de desarrallo. Se abre en el navegador la dirreccion [http://localhost:3000](http://localhost:3000).


### `yarn build`

Construye la aplicación para producción en la carpeta `build`. \
Agrupa correctamente React en el modo de producción y optimiza la compilación para obtener el mejor rendimiento.

La compilación se minimiza y los nombres de archivo incluyen los hash. \
¡Tu aplicación está lista para implementarse!
