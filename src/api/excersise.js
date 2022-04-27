import apiUrl from '../apiConfig'
import axios from 'axios'

// create function for post route
export const newExercise = (user, workoutId, addExercise) => {
    return axios({
        url: `${apiUrl}/exercise/${workoutId}`,
        method: 'POST',
        headers: {
            Authorization: `Token token=${user.token}`,

        },
        data: {exercise: addExercise}
    })
}