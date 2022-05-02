import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import WorkoutForm from '../shared/WorkoutForm'
import { createWorkout } from '../../api/workout'
import { createWorkoutFailure } from '../shared/AutoDismissAlert/messages'

const CreateWorkout = (props) => {
    const {user, msgAlert} = props

    const navigate = useNavigate()

    const [workout, setWorkout ] = useState({name: '', muscleTargeted: '', intensity: '', time:''})
    
    const handleChange = (e) => {
        e.persist()

        setWorkout(prevWorkout => {
            const name = e.target.name
            let value = e.target.value
            console.log('e.target type', e.target.type)

            if (e.target.type === 'number') {
                value = parseInt(e.target.value)
            }

            const updatedValue = { [name]: value }

            return {...prevWorkout, ...updatedValue}
        })        
    }

    const handleSubmit = (e) => {
        // e === event
        e.preventDefault()
        //api call to create a new workout
        createWorkout(user, workout)
            // if create is successful, we should navigate to the show page
            .then(res => {navigate(`/workouts/${res.data.workout._id}`)})
            // if there is an error, we'll send an error message
            .catch(() =>
                msgAlert({
                    heading: 'Oh No!',
                    message: createWorkoutFailure,
                    variant: 'danger',
                }))
         console.log('this is the workout', workout)
        }

            return (
            <WorkoutForm 
                workout={workout}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                heading="Add New Workout!"
            />
        )
}

export default CreateWorkout