const Car = require('../models/car')

module.exports = {
    cars: async (req,res) => {
        const cars = await Car.find()
        res.render('cars', {cars: cars})
    },
    createCars: async (req,res) => {
        await Car.create(req.body);
        res.redirect('/cars')
    },
    createForm: (req,res) => {
        res.render('createCars')
    }
}