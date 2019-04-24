require('dotenv').config()
const {
  APP_ENV
} = process.env

export const baseUrl = (APP_ENV === 'production') ? 'https://josedan10.github.io' : 'http://localhost:3000'
