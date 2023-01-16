import { Router } from 'express';
import CarController from '../Controllers/CarController';
import checkId from '../Middlewares/id';

const carRoute = Router();

carRoute.post('/', (req, res, next) =>
  new CarController(req, res, next).create());
carRoute.get('/', (req, res, next) =>
  new CarController(req, res, next).find());
carRoute.get('/:id', (req, res, next) =>
  new CarController(req, res, next).findById());
carRoute.put('/:id', checkId, async (req, res, next) => {
  const controller = await new CarController(req, res, next).updateOne();
  return controller;
});

export default carRoute;
