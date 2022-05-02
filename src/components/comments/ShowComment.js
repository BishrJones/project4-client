import { Card, Button } from 'react-bootstrap'
import { removeComment } from '../../api/comment'

const ShowComment = (props) => {
    const { comment, user, workout, triggerRefresh} = props

    // make a function that deletes a comment
    const deleteComment = () => {
        removeComment(user, workout._id, comment._id)
            .then(() => triggerRefresh())
            .catch(console.error)
    }

    return (
        <>
            <Card className="m-2 w-50 shadow p-3 mb-5 bg-body rounded">
                <Card.Header>
                    author: {comment.owner}
                    {/* gives the option to delete a comment if the user is the owner of that comment */}
                    {
                        user._id === comment.owner &&
                            <>
                                <div className="float-end">
                                <Button className='btn-sm' onClick={() => destroyComment()}variant="danger">
                                    X
                                </Button>
                                </div>
                            </>
                    }
                </Card.Header>
                <Card.Body>
                    <small>{comment.note}</small><br/>
                </Card.Body>
            </Card>
        </>
    )
}

export default ShowComment