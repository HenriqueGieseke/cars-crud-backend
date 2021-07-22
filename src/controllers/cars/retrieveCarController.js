import { carModel } from '../../models/carModel.js';
import { stringTrimmer } from '../../helpers/stringTrimmer.js';

const retrieveCarController = async (req, res) => {
  try {
    const { searchInput } = req.params;

    const cleanInput = stringTrimmer(searchInput);

    const filteredCars = await carModel.find({
      $or: [
        { _brandForSearch: { $regex: cleanInput, $options: 'i' } },
        { _modelForSearch: { $regex: cleanInput, $options: 'i' } },
        { _versionForSearch: { $regex: cleanInput, $options: 'i' } },
        { gearshift: { $regex: cleanInput, $options: 'i' } },
      ],
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

export { retrieveCarController };
