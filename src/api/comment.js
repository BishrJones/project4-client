import apiUrl from '../apiConfig'
import axios from 'axios'

// create function to interact with the post route (create new comments)
export const newComment = (user, workoutId, addComment ) => {
    return axios({
        url: `${apiUrl}/comments/${workoutId}`,
        method: 'POST',
        header: {
            Authorization: `Token token=${user.token}`
        },
        data: {comment: addComment}
    })
}