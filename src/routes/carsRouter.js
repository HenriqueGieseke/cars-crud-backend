import express from 'express';
import { createCarController } from '../controllers/cars/createCarController.js';
import { deleteCarController } from '../controllers/cars/deleteCarController.js';
import { retrieveByMileageController } from '../controllers/cars/retrieveByMileageController.js';
import { retrieveByPriceController } from '../controllers/cars/retrieveByPriceController.js';
import { retrieveByYearController } from '../controllers/cars/retrieveByYearController.js';
import { retrieveCarController } from '../controllers/cars/retrieveCarController.js';
import { updateCarController } from '../controllers/cars/updateCarController.js';

const router = express.Router();

router.post('/addCar', createCarController);

router.get('/getCar/:searchInput', retrieveCarController);

router.get('/getCarByPrice/:minValue/:maxValue', retrieveByPriceController);

router.get('/getCarByYear/:minValue/:maxValue', retrieveByYearController);

router.get('/getCarByMileage/:minValue/:maxValue', retrieveByMileageController);

router.patch('/editCar/:searchInput', updateCarController);

router.delete('/deleteCar/:searchInput', deleteCarController);

export { router as carsRouter };
