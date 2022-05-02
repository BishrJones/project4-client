import React, { useState } from "react";
import { Modal } from 'react-bootstrap'
import ExerciseForm from '../shared/ExerciseForm'
import { updateExercise } from "../../api/excersise";

const EditExercise = (props) => {
    const {user, workout, show, handleClose, triggerRefresh} = props 
    const [exercise, setExercise] = useState(props.exercise)

    const handleChange = (e) => {
        e.persist()

        setExercise(prevExercise => {
            const name = e.target.name
            let value = e.target.value

            if (e.target.type === 'number') {
                value = parseInt(e.target.value)
            }

            const updatedValue = { [name]: value}

            return {...prevExercise, ... updatedValue}
        })
    }

    const handleSubmit = (e) => {
        // e === event
        e.preventDefault()

        // console.log('the Exercise to submit', Exercise)
        //api call to update the Exercise
        updateExercise(user, workout._id, exercise._id, exercise)
            // if create is successful, navigate to the show page
            .then(() => handleClose())
            .then(() => triggerRefresh())
            // if there is an error, we'll send an error message
            .catch(console.error)
    }

    return (
        //popup displaying the edit gear form
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <GearForm
                    exercise={exercise}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    heading="Edit exercise"
                />
            </Modal.Body>
        </Modal>
    )
}