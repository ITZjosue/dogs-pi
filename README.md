## DOGS PI

#

<p>Tecnologías usadas:</p> 
  <li>Front: React, Redux, Styled-components
  <li>Back: NodeJs, Express, Sequelize
  <li>Base de datos: PostgreSQL

<p>En esta aplicación puedes ver diferentes razas de perros traídas desde una api, y tambíen pueden crear tus propias razas y serán agregadas a la lista.</p>
</br>
<h3>Funcionalidades:
<li>Filtro por razas
<li>Filtro por pesos
<li>Filtro por orden alfabético
<li>Paginación
<li>Búsqueda de raza por nombre
<li>Filto por origen (api o base de datos)
 
  Live Demo <a href='https://hardcore-kalam-90d9cb.netlify.app/' target='_blank'>here</a>


## Correr el proyecto localmente

### Requisitos

- [Node.js](https://nodejs.org/) **16** (`react-scripts` 4 no funciona en Node 17 o superior). Con [nvm](https://github.com/nvm-sh/nvm): `nvm install && nvm use` (usa la versión del archivo `.nvmrc`).
- npm 7 o superior (viene incluido con Node 16).

### Con Node

```bash
git clone <url-del-repo>
cd dogs-pi
npm install
npm start
```

La app se abre en [http://localhost:3000](http://localhost:3000).

Otros scripts:

- `npm run build`: genera la versión de producción en la carpeta `build/`.
- `npm test`: corre los tests.

> Si usas Node 17 o superior y aparece el error `ERR_OSSL_EVP_UNSUPPORTED`, cambia a Node 16 o corre el comando con `NODE_OPTIONS=--openssl-legacy-provider`.

### Backend

Este repositorio solo contiene el frontend. Las URLs de la API están definidas en `src/routes/index.js`. Si corres el backend localmente, cambia esas URLs para que apunten a tu servidor.
