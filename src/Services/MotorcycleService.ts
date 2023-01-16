import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleModel from '../Models/MotorcycleModel';

class MotorcycleService {
  private createMoto(Moto: IMotorcycle | null): Motorcycle | null {
    if (Moto) {
      const newMotorcycle = {
        id: Moto.id,
        buyValue: Moto.buyValue,
        color: Moto.color,
        engineCapacity: Moto.engineCapacity,
        model: Moto.model,
        category: Moto.category,
        status: Moto.status,
        year: Moto.year,
      };
      return new Motorcycle(newMotorcycle);
    }
    return null;
  }

  private listMotos(Moto: IMotorcycle): Motorcycle {
    return new Motorcycle(Moto);
  }

  public async addMoto(Moto: IMotorcycle) {
    const model = new MotorcycleModel();
    const MotoSpecs = await model.create(Moto);
    return this.createMoto(MotoSpecs);
  }
}

export default MotorcycleService;
