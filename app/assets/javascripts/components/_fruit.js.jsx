class Fruit extends React.Component{

constructor(props){
	super(props);
	this.state = {
		editable: false
	}
}
    render(){
        return(
            <div>
              <h1>{this.props.fruit.name}</h1>
              <p>{this.props.fruit.description}</p>
              <button>{this.state.editable? 'Submit' : 'Edit' }</button>
              <button onClick={() => this.props.handleDelete(this.props.fruit.id)}>Delete</button>
            </div>
        )
    }
}