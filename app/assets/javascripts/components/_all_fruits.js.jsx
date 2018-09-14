class AllFruits extends React.Component {
  render(){
  	var fruits = this.state.fruits.map((fruit) => {
  		return(
  		<div key={fruit.id}>
  		<h1>{fruit.name}</h1>
  		<p>{fruit.description}</p>
  		</div>
  		)
  	})
  }

	render(){
		return(
			<div>
				<h1>To do: List of fruits</h1>
			</div>
			)
	}
}