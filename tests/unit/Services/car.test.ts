import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';
import ICar from '../../../src/Interfaces/ICar';
import CarService from '../../../src/Services/CarService';
import { getAllReturn, getByIdReturn } from './getCarsMock';

describe('testa se a rota car', function () {
  it('cria um carro novo', async function () {
    const service = new CarService();
    const carSpecs: ICar = {
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };
    const carCreated: ICar = {
      id: '63c59621469299856c0bd319',
      model: 'Marea',
      year: 2002,
      color: 'Black',
      status: true,
      buyValue: 15.990,
      doorsQty: 4,
      seatsQty: 5,
    };
    sinon.stub(Model, 'create').resolves(carCreated);
    const newCar = await service.addCar(carSpecs);
    expect(newCar).to.be.deep.equal(carCreated);
  });
  it('retorna carros com o metodo get', async function () {
    const service = new CarService();
    sinon.stub(Model, 'find').resolves(getAllReturn);
    sinon.stub(Model, 'findById').resolves(getByIdReturn);
    const allCars = await service.getCars();
    const carById = await service.getCarById('63c59881469299856c0bd31e');
    expect(allCars).to.be.deep.equal(getAllReturn);
    expect(carById).to.be.deep.equal(getByIdReturn);
  });
});