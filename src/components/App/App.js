import React, { Component } from 'react';
import './App.css';

import Footer from '../Footer';
import NewTaskForm from '../NewTaskForm';
import TaskList from '../TaskList';

export default class App extends Component {
	maxId = 100;

	state = {
		todoData: [
			{ id: 1, label: 'Completed task', done: false, editing: false, deadline: 600000 },
			{ id: 2, label: 'Editing task', done: false, editing: false, deadline: 900000 },
			{ id: 3, label: 'Active task', done: false, editing: false, deadline: 300000},
		],
		filter: 'all',
	};

	componentDidMount() {
		this.timerID = setInterval(this.updateTimers, 1000);
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	deleteItem = (id) => {
		this.setState(({ todoData }) => {
			const idx = todoData.findIndex((el) => el.id === id);

			const newArray = [...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

			return {
				todoData: newArray,
			};
		});
	};

	onItemAdded = (label, min = 0, sec = 0) => {
		const deadline = (min * 60 + Number(sec)) * 1000;
		this.setState((state) => {
			const item = this.createTodoItem(label, deadline);

			return {
				todoData: [...state.todoData, item],
			};
		});

	};

	onToggleDone = (id) => {
		this.setState(({ todoData }) => ({
			todoData: this.toggleProperty(todoData, id, 'done'),
		}));
	};

	filterChange = (filter) => {
		this.setState({ filter });
	};

	clearCompleted = () => {
		this.setState(({ todoData }) => {
			const resArr = todoData.filter((el) => !el.done);
			return {
				todoData: resArr,
			};
		});
	};

	changeItem = (id) => {
		this.setState(({ todoData }) => {
			const idx = todoData.findIndex((el) => el.id === id);
			const oldItem = todoData[idx];
			const newItem = { ...oldItem, editing: !oldItem.editing };
			const newArr = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)];

			return {
				todoData: newArr,
			};
		});
	};

	onChangeHandler = (id, e) => {
		this.setState(({ todoData }) => {
			const idx = todoData.findIndex((el) => el.id === id);
			const oldItem = todoData[idx];
			const newItem = { ...oldItem, label: e.target.value };
			const newArray = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)];
			return {
				todoData: newArray,
			};
		});
	};

	onSubmit = (id, e) => {
		e.preventDefault();
		this.setState(({ todoData }) => {
			const idx = todoData.findIndex((el) => el.id === id);
			const oldItem = todoData[idx];
			const newItem = {
				...oldItem,
				editing: !oldItem.editing,
			};
			const newArray = [...todoData.slice(0, idx), newItem, ...todoData.slice(idx + 1)];
			return {
				todoData: newArray,
			};
		});
	};

	countdownOn = (id) => {
		this.setState(({todoData}) => {
			const idx = todoData.findIndex((el) => el.id === id);
			const newArr = [...todoData];
			newArr[idx].countdown = true;
			return newArr;
		})
	}

	countdownOff = (id, date) => {
		this.setState(({todoData}) => {
			const idx = todoData.findIndex((el) => el.id === id);
			const newArr = [...todoData];
			newArr[idx].countdown = false;
			newArr[idx].deadline = date;
			return newArr;
		})
	}

	updateTimers = () => {
		const { todoData } = this.state;
		const newArr = [...todoData];
		for (let i=0; i < newArr.length; i++) {
			if (newArr[i].deadline > 0 && newArr[i].countdown) {
				newArr[i].deadline -= 1;
			}
		}
		this.setState({
			todoData: newArr,
		})
	}

	createTodoItem(label, timer) {
		return {
			label,
			done: false,
			id: ++this.maxId,
			editing: false,
			deadline: timer,
		};
	}

	toggleProperty(arr, id, propName) {
		const idx = arr.findIndex((el) => el.id === id);
		const oldItem = arr[idx];
		const newItem = { ...oldItem, [propName]: !oldItem[propName] };

		return [...arr.slice(0, idx), newItem, ...arr.slice(idx + 1)];
	}

	filterItems(todoData, filter) {
		let visibleItems = todoData;

		if (filter === 'all') {
			visibleItems = todoData;
		}
		if (filter === 'active') {
			visibleItems = todoData.filter((item) => !item.done);
		}
		if (filter === 'done') {
			visibleItems = todoData.filter((item) => item.done);
		}
		return visibleItems;
	}

	render() {
		const { todoData, filter } = this.state;

		const doneCount = todoData.filter((el) => el.done).length;

		const todoCount = todoData.length - doneCount;

		const visibleItems = this.filterItems(todoData, filter);

		return (
			<div>
				<section className="todoapp">
					<section className="main">
						<NewTaskForm onItemAdded={(label, min, sec) => this.onItemAdded(label, min, sec)} />
						<TaskList
							todos={visibleItems}
							onDeleted={this.deleteItem}
							onToggleDone={this.onToggleDone}
							changeItem={this.changeItem}
							onChangeHandler={this.onChangeHandler}
							onSubmit={this.onSubmit}
							countdownOff={this.countdownOff}
							countdownOn={this.countdownOn}
						/>

						<Footer
							clearCompleted={this.clearCompleted}
							filter={filter}
							filterChange={this.filterChange}
							todoCount={todoCount}
							doneCount={doneCount}
						/>
					</section>
				</section>
			</div>

		);
	}
}
