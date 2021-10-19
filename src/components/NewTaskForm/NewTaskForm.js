import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './NewTaskForm.css'

export default class NewTaskForm extends Component {
	state = {
		label: '',
		timerMin: '',
		timerSec: '',
	};

	onLabelChange = (e) => {
		if (e.target.value.trim().length) {
			this.setState({
				label: e.target.value,
			});
		}
	};

	onInputChange = (e) => {
		const { target } = e;
		const { value, name } = target;
		this.setState({
			[name]: value,
		})
	}

	onSubmit = (e) => {
		const { onItemAdded } = this.props;
		const { label, timerMin, timerSec } = this.state;
		e.preventDefault();
		onItemAdded(label, timerMin, timerSec );
		this.setState({
			label: '',
			timerMin: '',
			timerSec: '',
		});
	};

	render() {
		const { label, timerMin, timerSec } = this.state;

		return (
			<div>
				<form className="item-add-form d-flex" onSubmit={this.onSubmit}>

					<h1>todos</h1>


					<input
						type="text"
						name="label"
						className="new-todo"
						value={label}
						placeholder="What needs to be done?"
						onChange={this.onLabelChange}
						required
					/>

					<input type='number' name='timerMin' className='new-todo-timer' max='60' placeholder='min' onChange={this.onInputChange} value={timerMin} />
					<input type='number' name='timerSec' className='new-todo-timer' max='60' placeholder='sec' onChange={this.onInputChange} value={timerSec} />
					<input type='submit' className='form-submit' value='ok' />
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
