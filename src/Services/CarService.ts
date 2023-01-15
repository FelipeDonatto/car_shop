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

  public async addCar(car: ICar) {
    const model = new CarModel();
    const carSpecs = await model.create(car);
    return this.createCar(carSpecs);
  }
}

export default CarService;
