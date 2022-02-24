# WEATHER-Backend

WEATHER Backend

# BACK-WEATHER-APP

**BACK-WEATHER-APP** es una *API* que permite conocer datos de la ciudad en que se encuentra como tambien el clima actual y el pronostico a 5 dias.

## Pre-requisitos

* Descargar e instalar [Git](https://git-scm.com/)
* Descargar e instalar [Node.js](https://nodejs.org/es/download/)

## Instalacion

Descargar el proyecto a un directorio local [BACK-WEATHER-APP](https://github.com/cattaneopablo/back-weather-app.git).

*Ej:*

```git
git clone https://github.com/cattaneopablo/back-weather-app.git
```

Una vez descargada la solución instalar las dependencias, para ello ubicados en el directorio asofix-backend-framework ejecutar el siguiente comando.

```npm
npm i
```
Una vez finalizado el proceso de instalación del gestor de paquetes, crear un archivo ```.env``` en la carpeta raiz del proyecto con el siguiente contenido.
```
# Puerto en que correra el servidor
SERVER_PORT=3000

# Api key del servicio externo que provee el clima
OPENWEATHERMAP_API_KEY=1e7e976727459533c8449ca9639e44e4

# Ruta base del servicio externo que provee el clima
OPENWEATHERMAP_BASE_URL=https://api.openweathermap.org/data/2.5
```

Finalmente correr la *API* en modo escucha de manera que tome los cambios al momento de realizarlos en nuestro ambiente de desarrollo.

```npm
npm dev
```

> Version: 1.0.0