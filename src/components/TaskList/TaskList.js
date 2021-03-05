import React from 'react';
import Task from '../Task/Task';
import './TaskList.css'

const TaskList = ({ todos, onDeleted, onToggleDone }) => {

	const elements = todos.map((item) => {
		return (
		<li key={ item.id } 
		className='list-group-item'><Task { ...item } 
		onDeleted={() => onDeleted(item.id)}
		onToggleDone={() => onToggleDone(item.id)}
		/></li>
		);
		

	})
	return (
		<ul className="todo-list">
				{ elements }
		</ul>
	)
}

export default TaskList;