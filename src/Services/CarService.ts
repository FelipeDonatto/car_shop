import ICar from '../Interfaces/ICar';
import Car from '../Domains/Car';
import CarModel from '../Models/CarModel';

class CarService {
  private createCar(car: ICar | null): Car | null {
    if (car) {
      const newCar = {
        buyValue: car.buyValue,
        color: car.color,
        doorsQty: car.doorsQty,
        id: car.id,
        model: car.model,
        seatsQty: car.seatsQty,
        status: car.status,
        year: car.year,
      };
      return new Car(newCar);
    }
    return null;
  }

  private listCars(car: ICar): Car {
    return new Car(car);
  }

  public async addCar(car: ICar) {
    const model = new CarModel();
    const carSpecs = await model.create(car);
    return this.createCar(carSpecs);
  }

  public async getCars() {
    const model = new CarModel();
    const cars = await model.findAll();
    const carArr = cars.map((c) => this.listCars(c));
    return carArr;
  }
  public async getCarById(id: string) {
    const model = new CarModel();
    const car = await model.findById(id);
    if (car !== null) {
      const carById = this.listCars(car);
      return carById;
    }
    return car;
  }
  public async update(id: string, body: ICar) {
    const model = new CarModel();
    const updated = await model.findOneAndUpdate(id, body);
    if (updated !== null) {
      const filtered = this.listCars(updated);
      return filtered;
    }
  }
}

export default CarService;
