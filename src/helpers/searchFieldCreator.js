import { stringTrimmer } from './stringTrimmer.js';

const searchFieldCreatorHelper = (newCar) => {
  const _brandForSearch = stringTrimmer(newCar.brand);
  const _modelForSearch = stringTrimmer(newCar.model);
  const _versionForSearch = stringTrimmer(newCar.version);

  return {
    _brandForSearch,
    _modelForSearch,
    _versionForSearch,
  };
};

export { searchFieldCreatorHelper };
