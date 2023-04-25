export const API_URL =
  import.meta.env.API_URL || 'https://localhost:9999/api'
export const HUB_URL =
  import.meta.env.HUB_URL || 'https://localhost:3000/'

/* export const ADMIN_URL = import.meta.env.ADMIN_URL
export const DOMAIN = import.meta.env.DOMAIN || 'localhost' */

export const ROUTES = {
  login: '/login',
  user: '/user',
  registerUser: '/register/user',
}
