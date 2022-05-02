import {Form, Container, Button, Row, Col} from 'react-bootstrap'

const WorkoutForm = (props) => {
    const { workout, handleChange, handleSubmit, heading} = props 

    return (
        <Container className="justify-content-center" style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            textAlign: 'center'
        }}>
            <br></br>
            <h1>{heading}</h1>
            <br></br>
            <Form onSubmit={handleSubmit} className="m-2 p-5 w-100 shadow bg-body rounded">
            <Row>
                <Col>
                    <Form.Label>Name</Form.Label>
                    <Form.Control style={{
                        width: '100%',
                        textAlign: 'center'
                    }}
                    placeholder='Name of the workout?'
                    value={workout.name}
                    name='name'
                    onChange={handleChange}
                    />
                </Col>
                <Col>
                    <Form.Label>Muscle Targeted</Form.Label>
                    <Form.Control style={{
                        width: '100%',
                        textAlign: 'center'
                    }}
                    placeholder='Chest and Triceps'
                    value={workout.muscleTargeted}
                    name='muscleTargeted'
                    onChange={handleChange}
                    />
                </Col>
            </Row>
            <Row>
                <Col>
                    <Form.Label>Intensity</Form.Label>
                    <Form.Control style={{
                        width: '100%',
                        textAlign: 'center'
                    }}
                    placeholder='3'
                    value={workout.intensity}
                    type='number'
                    min='1'
                    max='5'
                    name='intensity'
                    onChange={handleChange}
                    />
                </Col>
                <Col>
                    <Form.Label>Time</Form.Label>
                    <Form.Control 
                        style={{
                            width: '100%',
                            textAlign: 'center'
                        }}
                        placeholder= 'How long did the workout take?'
                        value={workout.time}
                        type='number'
                        name='time'
                        onChange={handleChange}
                        />
                </Col>
            </Row>
            <Button type='submit'>Submit</Button>
            </Form>
        </Container>
    )
}

export default WorkoutForm