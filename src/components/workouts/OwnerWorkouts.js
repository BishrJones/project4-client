import React, { useState, useEffect } from 'react'
import { getOwnerWorkouts } from '../../api/workout'
import { Card, Spinner, Container, Row, Col } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'

const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
}

const OwnerWorkouts = (props) => {
    const [ownerWorkouts, setOwnerWorkouts] = useState(null)
    const {ownerId} = useParams()
    const {user} = props


    useEffect(() => {
        // console.log('owner id', owner._id)
        //api call to get all workouts made by the current owner
        getOwnerWorkouts(ownerId)
            .then(res => {
                console.log('res.data', res.data)
                setOwnerWorkouts(res.data.workouts)
            })
            .catch(console.error)
            
    }, [ownerId, user])


    let workoutCards
    if (!ownerWorkouts) {
        return ( 
                <Container fluid className='' >
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                </Container>
        )
    }
    if (ownerWorkouts.length === 0) {
        return (
            <div> 
                <p>Looks like this user does not have any workouts.</p>
            </div>
        )
    }

    if (ownerWorkouts.length > 0) {
        workoutCards = ownerWorkouts.map(workout => {
               
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
                        <span>by:</span><Link to={`/workouts/owner/${workout.owner._id}`}>{workout.owner.email}</Link>
                    </Card.Footer>
                </Card>
            )
        })
    }

    return (
        <>
        <br></br>
           <div className='title'><h1>Workouts</h1></div>
            <div style={cardContainerLayout}>
                {workoutCards}
            </div>
        </>
    )
}

export default OwnerWorkouts