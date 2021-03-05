import React from 'react';
import TasksFilter from '../TasksFilter/TasksFilter'

const Footer = (props) => {

	return (
		<footer className="footer">
				<span className="todo-count">{props.todoCount} items left</span>
				<TasksFilter />
				<button className="clear-completed">Clear completed</button>
		</footer>

	)
	}

	export default Footer;

