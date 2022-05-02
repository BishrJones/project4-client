import React, { useState, useEffect } from 'react'
import { getMyWorkouts } from '../../api/workouys'
import { Card, Spinner, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
}

const UserWorkouts = (props) => {
    const [userWorkouts, setUserWorkouts] = useState(null)

    const {user} = props

    useEffect(() => {
        console.log('user id', user._id)
        //api call to get all workouts made by the current user
        getMyWorkouts(user)
            .then(res => {
                console.log('res.data', res.data)
                setUserWorkouts(res.data.workouts)
            })
            .catch(console.error)
            
    }, [user])



    return (
        <>
        <br></br>
           <div className='title'><h1>My Workouts</h1></div>
            <div style={cardContainerLayout}>
                {workoutCards}
            </div>
        </>
    )
}