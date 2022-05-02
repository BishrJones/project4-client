import React, { useState } from 'react'
import { Card, Button } from 'react-bootstrap'
import EditExercise from './EditExercise'
import { removeExercise } from '../../api/excersise'

const ShowExercise = (props) => {
    const {user, exercise, workout, triggerRefresh} = props

   const [showEditModal, setShowEditModal] = useState(false)

   const deleteExercise = () => {
       removeExercise(user, workout._id, exercise._id)
            .then(()=> triggerRefresh())
            .catch(console.error)
   }

   return (
    <>
        <Card className="m-2" style={{
            width: "15rem",
            alignment: "center",
        }}>
            <Card.Header>{exercise.name}</Card.Header>
            <Card.Body>
                <small>Quantity: {exercise.quantity}</small><br/>
                <small>{exercise.description}</small><br/>
                <Card.Footer >
                </Card.Footer>
                {
                    user._id === workout.owner && 
                        <>
                            <Button variant="warning" onClick={() => setShowEditModal(true)}>
                                Edit Exercise
                            </Button>
                            <Button onClick={() => destroyExercise()}variant="danger">
                                Delete Exercise
                            </Button>
                        </>
                }
            </Card.Body>
        </Card>
        <EditExercise 
            user={user}
            workout={workout}
            exercise={exercise}
            show={showEditModal}
            handleClose={() => setShowEditModal(false)}
            triggerRefresh={triggerRefresh}
        />
    </>
)
}

export default ShowExercise