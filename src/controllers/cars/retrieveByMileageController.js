import { carModel } from '../../models/carModel.js';

const retrieveByMileageController = async (req, res) => {
  try {
    const { minValue, maxValue } = req.params;

    const filteredCars = await carModel.find({
      mileage: { $gte: minValue, $lte: maxValue },
    });

    if (filteredCars.length) {
      await res.send(filteredCars);
    } else {
      res.end('Nenhum resultado encontrado.');
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

export { retrieveByMileageController };
