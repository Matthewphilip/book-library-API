const app = require('./src/app');

const APP_PORT = 3000;

app.listen(APP_PORT, () => console.log(`Book Library app is listening on localhost:${APP_PORT}`))