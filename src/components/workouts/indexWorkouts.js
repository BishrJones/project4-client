import React, {useState, useEffect } from 'react'
import { getAllWorkouts } from '../../api/workouts'
import { Card } from 'react-bootstrap'
import { Link } from 'react-rotuer-dom'

const IndexWorkouts = (props) => {
    const [workouts, setWorkouts] = useState(null)

    useEffect(() => {
        // api call to get all of the workouts 
        getAllWorkouts()
            .then(res => {
                setWorkouts(res.data.workouts)
            })
            .catch(console.error)
    }, [])

    // loading screen for the latency of the api call
    if (!workouts) {
        return <p>Loading...</p>
    } else if (workouts.length=== 0){
        return <p>Looks like there are no workouts, Let's add some!</p>
    }
}