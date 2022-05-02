import React, {useState, useEffect } from 'react'
import { getAllWorkouts } from '../../api/workout'
import { Card, Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
}

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

    let workoutCards

    if (workouts.length > 0) {
        workoutCards = workouts.map(workout => {
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
                                    <small>time: {workout.time} mins</small><br/>
                                </Col>
                            </Row>
                            <Link className='viewworkout' to={`/workouts/${workout._id}`}>View {workout.type}</Link>
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        {/* link to all workouts made by a specific user */}
                        <span>by:</span><Link to={`/workouts/user/${workout.owner._id}`}>{workout.owner.email}</Link>
                    </Card.Footer>
                </Card>
            )
        })
    }

    return (
        <div>
        <br></br>
            <div className= 'title'><h1>All Workouts</h1></div>
            <div style={cardContainerLayout}>
                {workoutCards}
            </div>
        </div>
    )
}



export default IndexWorkouts