## agenda-queue-server v1.0.0 

[Agenda](https://github.com/agenda/agenda) queue server using [Express](https://github.com/expressjs/express) and [pm2](https://github.com/Unitech/pm2).

The data will immediately be scheduled for processing.

# Installation
- Copy **ecosystem.config.default.js** to **ecosystem.config.js**
- Copy **app/env/default.json** to **app/env/\<environment\>.json**  e.g dev.json
- Populate values in the json file
- Run **npm install**
- POST /log will accpet json data for logging