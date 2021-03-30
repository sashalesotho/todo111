import React from 'react';
import './Task.css';

const Task = ( { label, onDeleted, onToggleDone, done } ) => {

		let classNames = 'todo-list-item';
		if (done) {
			classNames += ' completed-task';
		}

		return (
		<span className='todo-list-item'>
				
				<div className="view">

					<input className="toggle" 
					type="checkbox" checked={done}
					onChange={ onToggleDone }/>

					<label>                                       
						<span className={classNames}>{ label }</span>
						<span className="created">created 17 seconds ago</span>
					</label>

					<button className="icon icon-edit btn">
						<i className="fa fa-edit" />
					</button>

					<button className="icon icon-destroy btn"
					onClick={onDeleted}>
						<i className="fa fa-trash-o" />
					</button>

				</div>

		</span>
		)
}

export default Task;


