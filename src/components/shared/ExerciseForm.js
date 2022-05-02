import { Form, Container, Button }from 'react-bootstrap'

const ExerciseForm = (props) => {
    const {exercise, handleChange, handleSubmit, heading} = props

    return (
        <Container className='justify-content-center'>
            <h3>{heading}</h3>
            <Form onSubmit={handleSubmit}>
                <Form.Label>Name</Form.Label>
                <Form.Control
                    placeholder='Name of exercise.'
                    value={exercise.name}
                    name='name'
                    onChange={handleChange}
                />
                <Form.Label>Weight</Form.Label>
                <Form.Control
                    placeholder='45'
                    value={exercise.weight}
                    name='weight'
                    type='number' 
                    onChange={handleChange}
                />
                <Form.Label>Sets</Form.Label>
                <Form.Control
                    placeholder='4'
                    value={exercise.sets}
                    name='sets'
                    type='number' 
                    onChange={handleChange}
                />
                <Form.Label>Reps</Form.Label>
                <Form.Control
                    placeholder='12'
                    value={exercise.reps}
                    name='reps'
                    type='number' 
                    onChange={handleChange}
                />

            </Form>
        </Container>
    )
}

export default ExerciseForm