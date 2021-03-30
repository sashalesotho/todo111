import React, { Component } from 'react';

export default class NewTaskForm extends Component {

	state = {
		label: ''
	};

	onLabelChange = (e) => {
		this.setState({
			label: e.target.value
		});
	};

	onSubmit = (e) => {
		e.preventDefault();
		this.props.onItemAdded(this.state.label);
		this.setState({
			label: ''
		});
	};

	render() {
		return (

			<form className="item-add-form d-flex"
				onSubmit={this.onSubmit}>

				<h1>todos</h1>

				<input type="text" className="new-todo" placeholder="What needs to be done?" 
				autoFocus 
				onChange={this.onLabelChange}
				value={this.state.label}
				/>
				
			</form>
	
		)
	}
	
	
}



