import React from 'react';

const filterButtons = [
	{name: "all", label: "All"},
	{name: "active", label: "Active"},
	{name: "done", label: "Done"}
];

const TasksFilter = ( {filter, filterChange} ) => {

		

		const buttons = filterButtons.map(({name, label}) => {
			const isActive = name === filter;
			const classNames = "btn " + (isActive ? "btn-info" : "btn-outline-secondary");
			return (
				<button key={name} 
				type="button"
				onClick={() => filterChange(name)}
				className={classNames}>
					{label}
				</button>
			);
		});

		return (
		<ul className="filters btn-group">

			{buttons}

		</ul>
		)
}

export default TasksFilter;

