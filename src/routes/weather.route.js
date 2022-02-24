const router = require("express").Router();
const weatherController = require("../controllers/weather.controller");

router.get(`${process.env.BASE_PATH}/location`, weatherController.location);
router.get(
  `${process.env.BASE_PATH}/current/:city`,
  weatherController.currentByCity
);
router.get(`${process.env.BASE_PATH}/current`, weatherController.current);
router.get(
  `${process.env.BASE_PATH}/forecast/:city`,
  weatherController.forecastByCity
);
router.get(`${process.env.BASE_PATH}/forecast`, weatherController.forecast);

module.exports = router;
