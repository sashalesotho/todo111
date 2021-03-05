import React, { Component } from 'react';
import './Task.css';



export default class Task extends Component {
	
		
	render () {
		const { label, onDeleted, onToggleDone, done } = this.props;

		let classNames = 'todo-list-item';
		if (done) {
			classNames += ' completed-task';
		}
		return (
		<span className='todo-list-item'>
				  <div className="view">
					 <input className="toggle" 
					 type="checkbox" checked={this.props.isDone}/>
					 <label>                                       
						<span className={classNames}
						onClick={ onToggleDone }
						 >{ label }</span>
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
}



