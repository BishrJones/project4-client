import React, {useState, useEffect, useRef} from 'react'
import { getOneWorkout, removeWorkout, updateWorkout } from '../../api/workout'
import { useParams, useNavigate } from 'react-router-dom'
import CommentForm from '../comments/CommentForm'
import ShowComment from '../comments/ShowComment'
import ShowExercise from '../exercise/ShowExercise'
import AddExercise from '../exercise/AddExercise'
// import EditWorkout from './EditWorkout'

const ShowWorkouts = (props) => {
    // setting all the damn states 
    const [workout, setWorkout] = useState(null)
    const [modalOpen, setModalOpen] = useState(false)
    const [ExerciseModalOpen, setExerciseModalOpen] = useState(false)
    const [updated, setUpdated] = useState(false)
    const navigate = useNavigate()

    if (!workout) {
        return <p>Loading...</p>
    } 
}

export default ShowWorkouts