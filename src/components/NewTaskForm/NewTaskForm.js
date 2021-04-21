import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NewTaskForm extends Component {
	state = {
		label: '',
	};

	onLabelChange = (e) => {
		this.setState({
			label: e.target.value,
		});
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
					<input
						type="text"
						className="new-todo"
						value={label}
						placeholder="What needs to be done?"
						onChange={this.onLabelChange}
						required
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
