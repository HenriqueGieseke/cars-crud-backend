import { carModel } from '../../models/carModel.js';
import { stringTrimmer } from '../../helpers/stringTrimmer.js';

const deleteCarController = async (req, res) => {
  try {
    const { searchInput } = req.params;

    const cleanInput = stringTrimmer(searchInput);

    const filteredCar = await carModel.findOne({
      $or: [
        { _brandForSearch: { $regex: cleanInput, $options: 'i' } },
        { _modelForSearch: { $regex: cleanInput, $options: 'i' } },
        { _versionForSearch: { $regex: cleanInput, $options: 'i' } },
      ],
    });

    if (filteredCar == null) {
      res.send('Carro não encontrado.');
    } else {
      await carModel.findByIdAndDelete({
        _id: filteredCar._id,
      });

      res.send(
        `O carro da marca ${filteredCar.brand} foi deletado com sucesso.`
      );
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

export { deleteCarController };
