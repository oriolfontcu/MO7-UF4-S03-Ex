import './loadEnvironment.js';
import express from 'express';

import { nombres } from './estudiantes';

// Initialize express
const app = express();
const port = process.env.HOST_PORT ?? '3000';

app.get('/', (req, res) => res.send('Hello World'))

app.get("/students", (req, res) => {
  res.json({
    students: {
      alumnosTotales: nombres.length,
      nombres: nombres,
    }
  })
})

app.listen(process.env.HOST_PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});

export default app;
