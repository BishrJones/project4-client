import React, { useState, useEffect } from 'react'
import { getMyWorkouts } from '../../api/workout'
import { Card, Spinner, Container, Row, Col } from 'react-bootstrap'
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
        // console.log('user id', user._id)
        //api call to get all workouts made by the current user
        getMyWorkouts(user)
            .then(res => {
                console.log('res.data', res.data)
                setUserWorkouts(res.data.workouts)
            })
            .catch(console.error)
            
    }, [user])


    let workoutCards
    if (!userWorkouts) {
        return ( 
                <Container fluid className='' >
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </Container>
        )
    }

    if (userWorkouts.length === 0) {
        return (
            <div>
                <h3> My Workouts</h3>   
                <p>Go Make Some Workouts!</p>
            </div>
        )
    }

    if (userWorkouts.length > 0) {
        workoutCards = userWorkouts.map(workout => {
               
            return (
                <Card key={workout._id} style={{width: '30%' }} className="m-2 shadow p-3 mb-5 bg-body rounded">
                    <Card.Header>{workout.name} </Card.Header>
                    <Card.Body>
                        <Card.Text>
                        <Row>
                                <Col>
                                    <small>Muscle Group: {workout.muscleTargeted}</small><br/>
                                </Col>
                                <Col>
                                    <small>Intensity: {workout.intensity}</small><br/>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <small>time: {workout.time} hr(s)</small><br/>
                                </Col>
                        </Row>
                            <Link className='viewworkout' to={`/workouts/${workout._id}`}>View {workout.name}</Link>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <span>by:</span><Link to={`/workouts/user/${workout.owner._id}`}>{workout.owner.email}</Link>
                    </Card.Footer>
                </Card>
            )
        })
    }

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

export default UserWorkouts