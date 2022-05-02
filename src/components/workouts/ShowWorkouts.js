import React, {useState, useEffect, useRef} from 'react'
import { getOneWorkout, removeWorkout, updateWorkout } from '../../api/workout'
import { useParams, useNavigate } from 'react-router-dom'
import { useParams, useNavigate } from 'react-router-dom'
import CommentForm from '../comments/CommentForm'
import ShowComment from '../comments/ShowComment'

const ShowWorkouts = (props) => {
    const [workout, setWorkout] = useState(null)
}