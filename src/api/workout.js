import apiUrl from '../apiConfig'
import axios from 'axios'

// index function for all wokrouts posted on home page
export const getAllWorkouts= () => {
    return axios(`${apiUrl}/workouts`)
}

// function for index of user's workouts
export const getMyWorkouts = (user) => {
    return axios({
        url: `${apiUrl}/workouts/mine`,
        method: 'GET',
        headers: {
            Authorization: `Token token=${user.token}`
        }

    })
}

// this function is for getting a specific users workout other than your own
export const getOwnerWorkouts = (ownerId) => {
    return axios(`${apiUrl}/workouts/${ownerId}`)
}