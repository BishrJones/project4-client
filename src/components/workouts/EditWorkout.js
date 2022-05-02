import React, { useState } from 'react'
import {Modal} from 'react-bootstrap'
import WorkoutForm from '../shared/WorkoutForm'


const EditWorkout = (props) => {
    const { user, show, handleClose, updateWorkout, triggerRefresh } = props
    const [workout, setWorkout] = useState(props.workout)

    const handleChange = (e) => {
        e.persist()

        setWorkout(preWorkout => {
            const name = e.target.name
            let value = e.target.value

            if (e.target.type === 'number') {
                value = parseFloat(e.target.value)
            }

            const updatedValue = { [name]: value }
            return {...prevworkout, ...updatedValue}

        })

    }

    const handleSubmit = (e) => {
        e.preventDefaalt()

        // console.log('the workout to submit', workout)
        //api call to update an workout
        updateWorkout(user, workout)
            // if create is successful, we should navigate to the show page
            .then(() => handleClose())
            .then(() => triggerRefresh())
            .catch(console.error)
        // console.log('this is the workout', workout)
    }

    return (
        //this is the pop up that displays the adventure form for editing
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <WorkoutForm 
                    workout={workout}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    heading="Edit adventure!"
                />
            </Modal.Body>
        </Modal>
    )
}

export default EditWorkout