import mongoose from 'mongoose';

const carSchema = mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  version: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  mileage: {
    type: Number,
    required: true,
  },
  gearshift: {
    type: String,
    required: true,
  },
  salesPrice: {
    type: Number,
    required: true,
  },
  _brandForSearch: {
    type: String,
    required: true,
  },
  _modelForSearch: {
    type: String,
    required: true,
  },
  _versionForSearch: {
    type: String,
    required: true,
  },
});

const carModel = mongoose.model('jubscleiton-autos', carSchema);

export { carModel };
