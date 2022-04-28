const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)

	return (
		<>
			<h1 style={{
				textAlign: 'center',
				fontWeight: 'bold',
			}}>Welcome to Fitify</h1>
			<h2 style={{
				textAlign: 'center',	
			}}>Let's get our fit on!</h2>
		</>
	)
}

export default Home
