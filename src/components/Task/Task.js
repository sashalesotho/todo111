import React from 'react';
import './Task.css';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

const Task = ({ onDeleted, onToggleDone, done, changeItem, editing, onChangeHandler, stateTask, onSubmit }) => {
	let classNames = 'todo-list-item description';

	if (done) {
		classNames += ' completed-task';
	}

	const createdDate = new Date();

	let task;
	if (editing) {
		task = (
			<label className={classNames}>
				<input className="description form-control" onChange={onChangeHandler} defaultValue={stateTask} />{' '}
			</label>
		);
	} else {
		task = (
			<div className={classNames}>
				<input className="toggle" type="checkbox" checked={done} onChange={onToggleDone} />

				<label>
					<span className={classNames}>{stateTask}</span>

					<span className="created">created {formatDistanceToNow(createdDate, { includeSeconds: true })} ago</span>
				</label>

				<button className="icon icon-edit btn" onClick={changeItem} type="button">
					<i className="fa fa-edit" />
				</button>

				<button className="icon icon-destroy btn" onClick={onDeleted} type="button">
					<i className="fa fa-trash-o" />
				</button>
			</div>
		);
	}

	return (
		<form onSubmit={onSubmit}>
			<div className="view">{task}</div>
		</form>
	);
};

Task.defaultProps = {
	onDeleted: () => {},
	onToggleDone: () => {},
	done: false,
	changeItem: () => {},
	editing: false,
	onChangeHandler: () => {},
	stateTask: '',
	onSubmit: () => {},
};

Task.propTypes = {
	onDeleted: PropTypes.func,
	onToggleDone: PropTypes.func,
	done: PropTypes.bool,
	changeItem: PropTypes.func,
	editing: PropTypes.bool,
	onChangeHandler: PropTypes.func,
	stateTask: PropTypes.string,
	onSubmit: PropTypes.func,
};

export default Task;
