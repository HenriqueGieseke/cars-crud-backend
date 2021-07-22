import { searchFieldCreatorHelper } from '../../helpers/searchFieldCreator.js';
import { carModel } from '../../models/carModel.js';

const createCarController = async (req, res) => {
  try {
    const searchFieldObject = searchFieldCreatorHelper(req.body);

    const newCar = { ...req.body, ...searchFieldObject };

    const car = new carModel(newCar);

    await car.save();
    res.status(201).send(car);
  } catch (error) {
    res.status(500).send(error);
  }
};

export { createCarController };
