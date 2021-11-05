# QualiExplore Angular Module

Standalone Frontend Angular application of QualiExplore Component in [NIMBLE Platform](https://github.com/nimble-platform/frontend-service)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

## Development server

### Node / NPM version

This App will run with the following `node` and `npm` versions:

    node: v12.10.0
    npm: 6.10.3

In order to use the above settings use [`nvm`](https://www.linode.com/docs/guides/how-to-install-use-node-version-manager-nvm/)

Install v12.10.0 using `nvm install 12.10.0 && nvm use 12.10.0`

### Install dependencies

    npm install

### Run Server

    npm run start

Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

    npm run build

will build in production mode and store the production files into `dist` directory in the root

## Contact

* [Shantanoo Desai](mailto:des@biba.uni-bremen.de)
* [Stefan Wellsandt](mailto:wel@biba.uni-bremen.de)

## Docker

QualiExplore is served through `nginx` HTTP Server. See `Dockerfile` for details.
Qualiexplore is also available on [Docker Hub](https://hub.docker.com/repository/docker/shantanoodesai/qualiexplore)

### Local Development

__Build Image__:

```bash
  npm run build:docker
```

__Run Image__:

```bash
  npm run start:docker
```

__Local Development Using `docker-compose`__:

```yml
version: '3.1'

services:
  qualiexplore:
    image: 'qualiexplore'
    build: '.'
    ports:
      - 3000:80
```

### Deployment

1. Within `docker-compose.yml` add:

  ```yml
  version: '3.1'

  services:
    qualiexplore:
      image: 'shantanoodesai/qualiexplore'
      ports:
        - 3000:80
  ```

2. Run using `docker` command:
  ```bash
    docker run -p 3000:80 --rm shantanoodesai/qualiexplore:1.1.0
  ```



## License

__Apache2.0 License__
```
  Copyright 2020
  University of Bremen, Faculty of Production Engineering, Badgasteiner Straße 1, 28359 Bremen, Germany.
  In collaboration with BIBA - Bremer Institut für Produktion und Logistik GmbH, Bremen, Germany.
  Licensed under the Apache License, Version 2.0 (the "License");
  you may not use this file except in compliance with the License.
  You may obtain a copy of the License at
      http://www.apache.org/licenses/LICENSE-2.0
  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
  See the License for the specific language governing permissions and
  limitations under the License.
```
