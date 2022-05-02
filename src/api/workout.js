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

export const getOneWorkout = (workoutId) => {
    return axios(`${apiUrl}/workouts/${workoutId}`)
}

// create function whihch interacts with the pose route
export const createWorkout = (user, newWorkout) => {
    return axios({
        url: `${apiUrl}/workouts`,
        method: 'POST',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: {workout: newWorkout}
    })
}

// update function to interact with the patch route
export const updateWorkout = (user, updateWorkout) => {
    return axios({
        url: `${apiUrl}/workouts/${updateWorkout._id}`,
        method: 'PATCH',
        header: {
            Authorization: `Token token=${user.token}` 
        },
        date: {workout: updateWorkout}

    })
}

// remove function to interact with the delete route 
export const removeWorkout = (user, workoutId) => {
    return axios({
        url: `${apiUrl}/workouts/${workoutId}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}