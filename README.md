# DevJobs app

🛠️ AVAILABLE LOCALLY ONLY FOR THE MOMENT 🛠️. The  environment variables (test) for starting the project are given in the section with docker compose. If you have any problems, don't hesitate to open an issue or contact me directly 😊



<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=ts,react,tailwind,python,flask,docker,vite" />
  </a>
</p>

<p align="center">
   <img src="frontend/public/assets/img/readme.png" width="70%">
</p>

If you want to run the project locally, use docker and a code editor, having first cloned the project.

## Launching backend  `docker compose`

🛑With docker compose, locally, the database is persisted but not made available on github. 🛑 

To access the data in the database, you'll find a file called `data.sql` in the backend folder. 
To use it, start docker compose and connect to the Adminer service at http://localhost:8080/. 

To connect to the database service, simply write these environment variables to a file named `.env`. These variables is dummy data. During the development phase, these variables will no longer be available.

```
MARIADB_ROOT_PASSWORD=example
MARIADB_USER=admin@devjobs
MARIADB_PASSWORD=secretpw
MARIADB_DATABASE=devjobs
```

Once there, on the left, you'll see the “Import” action. All you have to do is select the sql file and your database is ready 😃 

Then you can run this command:

```cmd
$ docker compose up
```

## Launching frontend with vite

```cmd
$ cd frontend
$ npm i
$ npm run dev
```

## User stories

Your users should be able to:

- [ ] Be able to filter jobs on the index page by title, location, and whether a job is for a full-time position
- [x] Be able to click a job from the index page so that they can read more information and apply for the job
- [x] View the optimal layout for each page depending on their device's screen size
- [x] See hover states for all interactive elements throughout the site
- [x] Have the correct color scheme chosen for them based on their computer preferences
- [x] Build this project as a full-stack application


## Built with

- Semantic HTML5 markup
- TailwindCSS
- React-TS
- Storybook
- Chromatic
- Python - Flask
- Docker

## Authors

- Frontend - [@amel-selmane](https://github.com/amel-selmane)
- Frontend/Backend/Docker - [@CalcagnoLoic](https://github.com/CalcagnoLoic)