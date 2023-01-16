import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const MotorcycleRoute = Router();

MotorcycleRoute.post('/', (req, res, next) =>
  new MotorcycleController(req, res, next).create());

export default MotorcycleRoute;
