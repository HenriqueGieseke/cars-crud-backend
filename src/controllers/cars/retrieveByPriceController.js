import { carModel } from '../../models/carModel.js';

const retrieveByPriceController = async (req, res) => {
  try {
    const { minValue, maxValue } = req.params;

    const filteredCars = await carModel.find({
      salesPrice: { $gte: minValue, $lte: maxValue },
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

export { retrieveByPriceController };
