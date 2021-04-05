import React from 'react';
import Task from '../Task';
import './TaskList.css';

const TaskList = ({ todos, onDeleted, onToggleDone, changeItem, onSubmit, onChangeHandler}) => {

	const elements = todos.map((item) => {
		return (
		<li key={ item.id } 
		className='list-group-item'>

			<Task { ...item } 
		onDeleted={() => onDeleted(item.id)}
		onToggleDone={() => onToggleDone(item.id)}
		stateTask={item.label}
		key={item.id}
		changeItem={(e) => {
			changeItem(item.id, e)
		}}
		editing={item.editing}
		onSubmit={(e) => onSubmit(item.id, e)}
		onChangeHandler={(e) => onChangeHandler(item.id, e)}
		/>

		</li>
		);
	})
	
	return (
		<ul className="todo-list">
				{ elements }
		</ul>
	)
}

export default TaskList;