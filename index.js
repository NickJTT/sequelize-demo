import express from 'express';
import cors from 'cors';
import dashboard from './src/routers/dashboard';
import mock from './src/mock';

const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

app.use('/', dashboard);

mock();

app.listen(PORT);
