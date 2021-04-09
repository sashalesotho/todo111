import React from 'react';
import './Task.css';
import { formatDistanceToNow } from 'date-fns';
import PropTypes from 'prop-types';

const Task = ({
  onDeleted,
  onToggleDone,
  done,
  changeItem,
  editing,
  onChangeHandler,
  stateTask,
  onSubmit,
}) => {
  let classNames = 'todo-list-item description';

  if (done) {
    classNames += ' completed-task';
  }

  let createdDate = new Date();

  let editingTask;
  if (editing) {
    editingTask = (
      <label className={classNames}>
        <input
          className="description form-control"
          onChange={onChangeHandler}
          defaultValue={stateTask}
        />{' '}
      </label>
    );
  } else {
    editingTask = (
      <div className={classNames}>
        <input className="toggle" type="checkbox" checked={done} onChange={onToggleDone} />

        <label>
          <span className={classNames}>{stateTask}</span>

          <span className="created">
            created {formatDistanceToNow(createdDate, { includeSeconds: true })} ago
          </span>
        </label>

        <button className="icon icon-edit btn" onClick={changeItem}>
          <i className="fa fa-edit" />
        </button>

        <button className="icon icon-destroy btn" onClick={onDeleted}>
          <i className="fa fa-trash-o" />
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit}>
      <div className="view">{editingTask}</div>
    </form>
  );
};

Task.propTypes = {
  nDeleted: PropTypes.func,
  onToggleDone: PropTypes.func,
  done: PropTypes.bool.isRequired,
  changeItem: PropTypes.func,
  editing: PropTypes.bool.isRequired,
  onChangeHandler: PropTypes.func,
  stateTask: PropTypes.string.isRequired,
  onSubmit: PropTypes.func,
};

export default Task;
