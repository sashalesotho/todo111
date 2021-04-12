import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class NewTaskForm extends Component {
	
		
		state = {
			label: ''
		};


		onLabelChange = (e) => {
			this.setState({
			label: e.target.value
			})
			};

		onSubmit = (e) => {
			const { onItemAdded } = this.props;
			const { label } = this.state;
			e.preventDefault();
			onItemAdded(label);
			this.setState({
				label: ''
			})
		};
	
	
		
		
	render() {
		return (
		<form
			className="item-add-form d-flex"
			// 2) поймать момент когда пользователь отправляет форму, передаем значение из поля ввода - новый item
			onSubmit={this.onSubmit}
		>
			<h1>todos</h1>

			<input
				// 1)чтобы получать текущее значение инпута используем событие onChange, каждый раз когда значение инпута меняется, вызываем функцию onLabelChange и используя объект event, достаем из него текущее значение поля
				type="text"
				className="new-todo"
				value={this.label}
				placeholder="What needs to be done?"
				onChange={this.onLabelChange}
				/>
				
		</form>
		);
	}
	}

	NewTaskForm.defaultProps = {
		onItemAdded: () => {}
	}

	NewTaskForm.propTypes = {
		onItemAdded: PropTypes.func

	}
	



