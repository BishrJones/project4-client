import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
const linkStyle = {
    color: '#ef8354',
    textDecoration: 'none'
}
const authenticatedOptions = (
	<>
		<Nav.Item className= 'm-2'>
			<Link to='allWorkouts' style={linkStyle}>
				All Workouts
			</Link>
		</Nav.Item>
		<Nav.Item className= 'm-2'>
			<Link to='/workouts/mine' style={linkStyle}>
				My Workouts
			</Link>
		</Nav.Item>
		<Nav.Item className= 'm-2'>
			<Link to='addWorkout' style={linkStyle}>
				New Workout
			</Link>
		</Nav.Item>
		<Nav.Item className='m-2'>
			<Link   to='change-password' style={linkStyle}>
				Change Password
			</Link>
		</Nav.Item>
		<Nav.Item className='m-2'>
			<Link  to='sign-out' style={linkStyle}>
				Sign Out
			</Link>
		</Nav.Item>
	</>
)

const unauthenticatedOptions = (
	<>
        <Nav.Item className='m-2'>
		    <Link  to='sign-up' style={linkStyle}>Sign Up</Link>
        </Nav.Item>
        <Nav.Item className='m-2'>
		    <Link  to='sign-in' style={linkStyle}>Sign In</Link>
        </Nav.Item>
	</>
)

// const alwaysOptions = (
// 	<>
// 		<Nav.Link className='m-2'>
// 			<Link  to='/' style={linkStyle}>
// 				Home
// 			</Link>
// 		</Nav.Link>
// 	</>
// )

const Header = ({ user }) => (
	<Navbar sticky= 'top' bg='myColor' variant='dark' expand='md'>
		<Navbar.Brand>
            <Link className='m-2' to='/' style={linkStyle}>
                Fitify
            </Link>
        </Navbar.Brand>
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='ml-auto'>
				{user && (
					<span className='navbar-text mr-2'>Welcome, {user.email}</span>
				)}
				{/* {alwaysOptions} */}
				{user ? authenticatedOptions : unauthenticatedOptions}
			</Nav>
		</Navbar.Collapse>
	</Navbar>
)

export default Header
