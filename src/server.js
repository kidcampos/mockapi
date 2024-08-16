const app = require('./app');
const config = require('./config/config');

const port = config.port || 8000;

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});