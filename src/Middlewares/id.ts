import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

export default async function checkId(req: Request, res: Response, next: NextFunction) {
  const { id } = req.params;
  if (id.length !== 24) {
    return res.status(422).json({ message: 'Invalid mongo id' });
  }
  const service = new CarService();
  const car = await service.getCarById(id) as ICar | null;
  if (car === null) {
    return res.status(404).json({ message: 'Car not found' });
  }
  return next();
}
