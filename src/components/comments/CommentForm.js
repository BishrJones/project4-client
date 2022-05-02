import React, { useState } from 'react'
import { Form, Container, Button } from 'react-bootstrap'
import { newComment } from '../../api/comment'

const CommentForm = (props) => {
    const { workout, heading, triggerRefresh, user } = props

    const [comment, setComment] = useState('')

    const handleChange = (e) => {
        e.persist()

        setComment(prevComment => {
            const name = e.target.name 
            let value = e.target.value

            const updatedValue = {[name]: value }

            return {...prevComment, ...updatedValue}
        })
    }

    // function removes the previous comment from the input
    const clearField = () => {
        setComment({note: ''})
    }

    // handle sumbit to post comment 
    const handleSubmit = (e) => {
        e.preventDefault()

        // make an api call to make a new comment
        newComment(user, workout._id, comment)
            .then(()=> clearField())
            .then(()=> triggerRefresh())
            // catch for err
            .catch(console.error)
    }

    return (
        <Container className="justify-content-center w-75 mt-5">
        <h3>{heading}</h3>
        <Form onSubmit={handleSubmit}>
            <Form.Label>Add a comment</Form.Label>
            <Form.Control 
                placeholder="..."        
                value={comment.note}
                name='note'
                onChange={handleChange}
            />
            <Button type='submit' className='float-end m-2' >Submit</Button>
        </Form>
    </Container>
    )
}

export default CommentForm