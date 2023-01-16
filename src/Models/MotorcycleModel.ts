import {
  Model,
  Schema,
  model,
  models,
  //   UpdateQuery,
  //   isValidObjectId,
} from 'mongoose';
import IMotorcycle from '../Interfaces/IMotorcycle';

class MotorcycleModel {
  private schema: Schema;
  private model: Model<IMotorcycle>;

  constructor() {
    this.schema = new Schema<IMotorcycle>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false, default: false },
      buyValue: { type: Number, required: true },
      category: { type: String, required: true },
      engineCapacity: { type: Number, required: true },
    });
    this.model = models.Motorcycles || model('Motorcycles', this.schema);
  }

  public async create(Car: IMotorcycle): Promise<IMotorcycle> {
    return this.model.create({ ...Car });
  }
}

export default MotorcycleModel;
