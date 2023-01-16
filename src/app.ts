import express from 'express';
import carRoute from './Routes/CarRoute';
import MotorcycleRoute from './Routes/MotorcycleRoute';

const app = express();
app.use(express.json());
app.use('/cars', carRoute);
app.use('/motorcycles', MotorcycleRoute);
export default app;
