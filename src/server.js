import { app } from './app.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5000;
const host = '0.0.0.0';

app.listen(PORT, host, () => {
  console.log('API online');
});
