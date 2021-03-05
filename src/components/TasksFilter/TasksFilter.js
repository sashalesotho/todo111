import React, { Component } from 'react';

export default class TasksFilter extends Component {
	render() {

		return (
			<ul className="filters btn-group">
				  <li>
					 <button type='button'
					 className="selected btn btn-info">All</button>
				  </li>
				  <li>
					 <button type='button'
					 className="btn btn-outline-secondary">Active</button>
				  </li>
				  <li>
					 <button type='button'
					 className="btn btn-outline-secondary">Completed</button>
				  </li>
			</ul>
		)
	}

}



