## Authngql Branch details

The main branch of the Qualiexplore uses the JSON files located in the project to store and read the data required. This branch eliminates the use of the local data storage and uses MongoDb cloud database. 

A GraphQL server application has been bulit for the purpose of fecthing the data from MongoDb Atlas cloud and serving it to the Qualiexplore client. [https://github.com/hrabhijith/GrapheneMongoService/tree/quali02] (mind the branch)

Additionally, the following features have also been implemented on the Qualiexplore application.

1. Login page to enter user details. (Username and Password)
2. On click of login, authentication and authorization by first comparing the username and password with the database and then on success recieving the JWT token from the GraphQl server and storing the token.
3. A spinner component which appears while loading.
4. Displaying the Logout button only after successful login and logout logic.
5. Auto login and persistance of Auth state even after reloading the page. (Local storage)
6. Auto logout after 10 minutes of logging in.
7. logic to avoid reaching the login page after logging in.
8. Data required for both filters and factors are loaded from database.
9. Only if 'admin' logs in to the application, filters can be added into database from the filters page (Incomplete). However, the server logic is present in the graphQL schema (in graphen server) for updation (Commented) and the logic for letting only the admin do the update has been implemented (in Qualiexplore).
10. Angular 8 to 9 updation.

## Running both GraphQL server and Qualiexplore applications

For this version of the Qualiexplore to work, both server and client apps has to be up and running. Also for the GraphQl to work properly, the database structure has to be created first. Please see the details in the graphql server repository on how to create and update the Mongodb cloud.

Use `docker-compose up` in this project. For the docker-compose to work '.env' file has to be present in the same directory and the DATABASE_URI has to updated with the MongoDb connection string.

# QualiExplore Angular Module

Standalone Frontend Angular application of QualiExplore Component in [NIMBLE Platform](https://github.com/nimble-platform/frontend-service)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

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
