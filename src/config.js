require('dotenv').config()
const {
  NODE_ENV,
  BASE_URL
} = process.env

export const baseUrl = (NODE_ENV !== 'production') ? 'http://localhost:3000' : BASE_URL || 'https://josedan10.github.io'
// export const baseUrl = 'https://josedan10.github.io'
export const EmailJSUserID = 'user_LEWwWousyJSr9c2tm9kzM'
