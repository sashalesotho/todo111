import React from 'react';
import './Task.css';
import {formatDistanceToNow} from 'date-fns';

const Task = ( { label, onDeleted, onToggleDone, done} ) => {

		let classNames = 'todo-list-item';
		if (done) {
			classNames += ' completed-task';
		}
		
		let createdDate = new Date()

		return (
		<span className='todo-list-item'>
				
				<div className="view">

					<input className="toggle" 
					type="checkbox" checked={done}
					onChange={ onToggleDone }/>

					<label>                                       
						<span className={classNames}>{ label }</span>
						<span className="created">created {formatDistanceToNow(createdDate, {includeSeconds: true})} ago</span>
					</label>

					<button className="icon icon-edit btn"
					onClick={() => console.log(`edit: ${label}`)}>
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


