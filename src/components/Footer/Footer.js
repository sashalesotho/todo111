import React from 'react';
import TasksFilter from '../TasksFilter/TasksFilter';

export default class Footer extends React.Component {
	constructor() {
		super()
		
	}
	render() {
	

	

		return (
			<footer className="footer">
					
					<TasksFilter />
					<button className="clear-completed">Clear completed</button>
			</footer>
		)
	}

	}



