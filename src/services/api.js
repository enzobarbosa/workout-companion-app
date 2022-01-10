import axios from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:4000',
  headers: {
    'Content-type': 'application/json'
  },
  timeout: 10000
})

const login = async (credentials) => {
  try {
    const response = await api.post('/auth/login', credentials)
    return response.data
  } catch (error) {
    throw new Error(error.message)
  }
}

const register = async (registerInfos) => {
  try {
    const response = await api.post('/auth/register', registerInfos)
    if (response.data && response.data.token) {
      window.localStorage.setItem('token', response.data.token)
    }
    return {
      error: null,
      data: response.data
    }
  } catch (error) {
    return {
      error: error.response.data,
      date: null
    }
  }
}

const getMuscles = async () => {
  try {
    const response = await api.get('/muscles')
    return response.data
  } catch (e) {
    console.error(e)
  }
}

const getExercicesByMuscle = async (muscleId) => {
  try {
    const response = await api.get(`/exercices?id=${muscleId}`)
    return response.data
  } catch (e) {
    console.error(e)
  }
}

const getProfile = async () => {
  try {
    const token = window.localStorage.getItem('token')
    const response = await api.get('/me', {
      headers: {
        Authorization: `Berer ${token}`
      }
    })
    console.log(response.data)
  } catch (error) {
    console.error(error)
  }
}

const createWorkout = async (user, cart) => {
  try {
    // On recompose un tableau contenant les ID des plats du panier pour respecter le format
    const _cart = cart.map(item => item.muscle._id)
    const response = await api.post('/workout', { user, cart: _cart })
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export {
  getMuscles,
  getExercicesByMuscle,
  getProfile,
  login,
  register,
  createWorkout
}
