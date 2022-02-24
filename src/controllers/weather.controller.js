const fetch = require('node-fetch')
const API_KEY = process.env.OPENWEATHERMAP_API_KEY
const BASE_URL = process.env.OPENWEATHERMAP_BASE_URL

const weather = {
    location: async (req, res) => {
        try {
            const response = await fetch(`http://ip-api.com/json/`)
            const jsonResponse = await response.json()
            
            res.status(200).json(jsonResponse)
        } catch (error) {
            res.status(500).json({
                status: "error",
                error
            })
        }
    },
    currentByCity: async (req, res) => {
        try {
            const {city} = req.params
            const response = await fetch(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`)
            const jsonResponse = await response.json()
            const weather = {
                temperature: jsonResponse.main.temp,
                description: jsonResponse.weather[0].description,
                humidity: jsonResponse.main.humidity,
                windSpeed: jsonResponse.wind.speed,
                city: jsonResponse.name,
                country: jsonResponse.sys.country,
                icon: `https://openweathermap.org/img/wn/${jsonResponse.weather[0].icon}.png`,
                error: null,
            }
            
            res.status(200).json([weather])
        } catch (error) {
            res.status(500).json([{
                status: "error",
                message: error.message,
                error: 'Falló al obtener temperatura actual'
            }])
        }
    },
    current: async (req, res) => {
        try {
            const ipApi = await fetch(`http://ip-api.com/json/`)
            const {city} = await ipApi.json()
            const response = await fetch(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`)
            const jsonResponse = await response.json()
            const weather = {
                temperature: jsonResponse.main.temp,
                description: jsonResponse.weather[0].description,
                humidity: jsonResponse.main.humidity,
                windSpeed: jsonResponse.wind.speed,
                city: jsonResponse.name,
                country: jsonResponse.sys.country,
                icon: `https://openweathermap.org/img/wn/${jsonResponse.weather[0].icon}.png`,
                error: null,
            }
            
            res.status(200).json([weather])
        } catch (error) {
            res.status(500).json([{
                status: "error",
                message: error.message,
                error: 'Falló al obtener temperatura actual'
            }])
        }
    },
    forecastByCity: async (req, res) => {
        try {
            const {city} = req.params
            const response = await fetch(`${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric&cnt=5`)
            const jsonResponse = await response.json()
            const weathers = jsonResponse.list.map((weather) => {
                return {
                    temperature: weather.main.temp,
                    description: weather.weather[0].description,
                    humidity: weather.main.humidity,
                    windSpeed: weather.wind.speed,
                    city: jsonResponse.city.name,
                    country: jsonResponse.city.country,
                    icon: `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`,
                    error: null,
                }
            })
            
            res.status(200).json(weathers)
        } catch (error) {
            res.status(500).json([{
                status: "error",
                message: error.message,
                error: 'Falló al obtener pronóstico a 5 días'
            }])
        }
    },
    forecast: async (req, res) => {
        try {
            const ipApi = await fetch(`http://ip-api.com/json/`)
            const {city} = await ipApi.json()
            const response = await fetch(`${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric&cnt=5`)
            const jsonResponse = await response.json()
            const weathers = jsonResponse.list.map((weather) => {
                return {
                    temperature: weather.main.temp,
                    description: weather.weather[0].description,
                    humidity: weather.main.humidity,
                    windSpeed: weather.wind.speed,
                    city: jsonResponse.city.name,
                    country: jsonResponse.city.country,
                    icon: `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`,
                    error: null,
                }
            })
            
            res.status(200).json(weathers)
        } catch (error) {
            res.status(500).json([{
                status: "error",
                message: error.message,
                error: 'Falló al obtener pronóstico a 5 días'
            }])
        }
    }
}

module.exports = weather