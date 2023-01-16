import {
  Model,
  Schema,
  model,
  models,
  //   UpdateQuery,
  //   isValidObjectId,
} from 'mongoose';
import ICar from '../Interfaces/ICar';

class CarModel {
  private schema: Schema;
  private model: Model<ICar>;

  constructor() {
    this.schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean, required: false, default: false },
      buyValue: { type: Number, required: true },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
    });
    this.model = models.Car || model('Car', this.schema);
  }

  public async create(Car: ICar): Promise<ICar> {
    return this.model.create({ ...Car });
  }

  public async findAll(): Promise<ICar[]> {
    return this.model.find();
  }
  public async findById(id: string): Promise<ICar | null> {
    try {
      const query = await this.model.findById(id);
      return query;
    } catch (e) {
      return null;
    }
  }
  public async findOneAndUpdate(id: string, body: ICar) {
    const findOne = await this.model.findOneAndUpdate({ _id: id }, body, { new: true });
    return findOne;
  }
}

export default CarModel;
