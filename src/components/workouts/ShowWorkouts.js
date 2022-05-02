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
    const [exerciseModalOpen, setExerciseModalOpen] = useState(false)
    const [updated, setUpdated] = useState(false)
    const navigate = useNavigate()

    const { id } = useParams()
    const {user} = props

    useEffect(() => {
        // console.log('key', process.env.REACT_APP_WEATHERAPIKEY)
        //calls the api to get a specific adventure
        getOneWorkout(id)
            .then(res => {
                setWorkout(res.data.wrkout)
            })
            .catch(console.error)  
    }, [updated, id])

    if (!workout) {
        return <p>Loading...</p>
    } 

    //we declare these variables here so we can change them later
    let exerciseCards
    let comments

    //after we find an workout, this checks for and renders exercise and comments respectively
    if(workout){
        if (workout.exercise.length > 0) {
            exerciseCards = exercise.workout.map(workoutItem => (
                // need to pass all props needed for updateexercise func in edit modal
                <ShowExercise 
                    key={exerciseItem._id} exercise={exerciseItem} user={user} workout={workout} triggerRefresh={() => setUpdated(prev => !prev)}
                />
            ))
        }
        if(workout.comments.length > 0){
            comments = workout.comments.map(comment => (
                <ShowComment key={comment._id} updated={updated} comment={comment} workout={workout} user={user}  triggerRefresh={() => setUpdated(prev => !prev)}/>
            ))
        }
    }

    if(workout.name){
        return (
            <>
            <Container className="fluid" id="showContainer">
                <Card className='shadow p-3 mb-5 bg-body rounded mt-3'>
                        <Card.Header><h2 style={{
                            textAlign: 'center'
                        }}>{workout.name}</h2></Card.Header>
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
                        </Card.Text>
                        <h4>Exercise(s):</h4>
                        {/* show exercise cards if there is any, or a message indicating it's not necessary if there isn't */}
                        {workout.exercise.length > 0 ? 
                            <div className='exerciseModal'>
                                {exerciseCards}
                            </div>
                            :
                            <p>Add some exercises!</p>       
                        }   
                    </Card.Body>
                    {workout.owner === user._id && 
                        <Card.Footer>
                                <Button onClick={() => setExerciseModalOpen(true)} className="m-2" variant="info">
                                    Add Exercise!
                                </Button>
                                <Button onClick={() => setModalOpen(true)} className="m-2" variant="warning">
                                    Edit Workout
                                </Button>
                                <Button className="m-2" variant="danger" onClick={removeTheworkout}>
                                    Delete Workout
                                </Button>
        
                        </Card.Footer>                        
                     }
                </Card>
            </Container>
            <div className='commentBox'> 
                <CommentForm user={user} workout={workout} triggerRefresh={() => setUpdated(prev => !prev)} heading="Comments"/>
                {comments}
            </div>
            {/* a pop up to edit the workout */}
            <EditWorkout 
            workout = {workout}
            show={modalOpen}
            user={user}
            triggerRefresh={() => setUpdated(prev => !prev)}
            updateWorkout={updateWorkout}
            handleClose={() => setModalOpen(false)}
    
            />
            {/* a pop up to add the exercise */}
            <AddExercise
                show={exerciseModalOpen}
                user={user}
                workout={workout}
                triggerRefresh={() => setUpdated(prev => !prev)}
                handleClose={() => setExerciseModalOpen(false)}
            />
            </>
        )

    }

}

export default ShowWorkouts