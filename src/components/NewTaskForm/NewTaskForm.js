import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NewTaskForm extends Component {
	state = {
		label: '',
	};

	onLabelChange = (e) => {
<<<<<<< HEAD
		if (e.target.value.trim().length) {
			this.setState({
				label: e.target.value,
			});
		}
=======
		this.setState({
			label: e.target.value,
		});
>>>>>>> origin/main
	};

	onSubmit = (e) => {
		const { onItemAdded } = this.props;
		const { label } = this.state;
		e.preventDefault();
		onItemAdded(label);
		this.setState({
			label: '',
		});
	};

	render() {
		const { label } = this.state;

		return (
			<div>
				<form className="item-add-form d-flex" onSubmit={this.onSubmit}>
<<<<<<< HEAD
					<h1>todos</h1>

=======
>>>>>>> origin/main
					<input
						type="text"
						className="new-todo"
						value={label}
						placeholder="What needs to be done?"
						onChange={this.onLabelChange}
						required
<<<<<<< HEAD
						// pattern = '[a-z]{1,15}'
=======
>>>>>>> origin/main
					/>
				</form>
			</div>
		);
	}
}

NewTaskForm.defaultProps = {
	onItemAdded: () => {},
};

NewTaskForm.propTypes = {
	onItemAdded: PropTypes.func,
};
