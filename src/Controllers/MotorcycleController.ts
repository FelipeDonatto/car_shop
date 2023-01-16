import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/MotorcycleService';

class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new MotorcycleService();
  }

  public async create() {
    const motoSpecs: IMotorcycle = {
      color: this.req.body.color,
      buyValue: this.req.body.buyValue,
      category: this.req.body.category,
      model: this.req.body.model,
      engineCapacity: this.req.body.engineCapacity,
      status: this.req.body.status,
      year: this.req.body.year,
    };

    try {
      const newCar = await this.service.addMoto(motoSpecs);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }
}

export default MotorcycleController;
