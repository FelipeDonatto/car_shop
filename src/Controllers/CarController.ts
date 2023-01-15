import { NextFunction, Request, Response } from 'express';
import ICar from '../Interfaces/ICar';
import CarService from '../Services/CarService';

class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private service: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.service = new CarService();
  }

  public async create() {
    const carSpecs: ICar = {
      color: this.req.body.color,
      buyValue: this.req.body.buyValue,
      doorsQty: this.req.body.doorsQty,
      model: this.req.body.model,
      seatsQty: this.req.body.seatsQty,
      status: this.req.body.status,
      year: this.req.body.year,
    };

    try {
      const newCar = await this.service.addCar(carSpecs);
      return this.res.status(201).json(newCar);
    } catch (error) {
      this.next(error);
    }
  }

  public async find() {
    try {
      const cars = await this.service.getCars();
      return this.res.status(200).json(cars);
    } catch (e) {
      this.next(e);
    }
  }

  public async findById() {
    const { id } = this.req.params;
    if (id.length !== 24) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
    try {
      const car = await this.service.getCarById(id) as ICar | null;
      if (car === null) {
        return this.res.status(404).json({ message: 'Car not found' });
      }
      return this.res.status(200).json(car);
    } catch (e) {
      this.next(e);
    }
  }
}

export default CarController;
