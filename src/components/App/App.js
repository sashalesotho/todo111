import React, { Component } from 'react';


import Footer from '../Footer';
import NewTaskForm from '../NewTaskForm';
import TaskList from '../TaskList';
import TasksFilter from '../TasksFilter/TasksFilter';


export default class App extends Component {

	maxId = 100;
	state = {
		todoData: [
			{id: 1, label: "Completed task", done: false},
			{id: 2, label: "Editing task", done: false},
			{id: 3, label: "Active task", done: false}
		],
		filter: "all"
	};

	createTodoItem(label) {
		return {
			label,
			done: false,
			id: ++this.maxId
		}
	}

	deleteItem = (id) => {
		this.setState(({ todoData }) => {
			const idx = todoData.findIndex((el) => el.id === id);

			const newArray = [ ...todoData.slice(0, idx), ...todoData.slice(idx + 1)];

			return {
				todoData: newArray
			}
		})
	};

	addItem = (text) => {
			this.setState(({ todoData }) => {
			const newItem = this.createTodoItem(text);

			const newArr = [
			...todoData,
				newItem
			];
			return {
				todoData: newArr
			}
		})
	};

	toggleProperty(arr, id, propName) {
		const idx = arr.findIndex((el) => el.id === id);
		const oldItem = arr[idx];
		const newItem = {...oldItem, 
				[propName]: !oldItem[propName]};

				return [
					...arr.slice(0, idx), 
					newItem,
					...arr.slice(idx + 1)
				];				
	};

	onToggleDone = (id) => {
		this.setState(({ todoData }) => {
			return {
					todoData: this.toggleProperty(todoData, id, 'done')
				};
		});

	};

	filterChange = (filter) => {
		this.setState({ filter });
	}

	filterItems = (todoData, filter) => {
		if (filter === "all") {
			return todoData;
		} else if (filter === "active") {
			return todoData.filter((item) => (!item.done));
		} else if (filter === "done") {
			return todoData.filter((item) => item.done);
		}
	}

	render() {

		const { todoData, filter } = this.state;

		const doneCount = todoData
		.filter((el) => el.done).length;

		const todoCount = todoData.length - doneCount;

		const visibleItems = this.filterItems(todoData, filter);


		return (
			<div>
			<section className="todoapp">
			
				<section className="main">
					<NewTaskForm onItemAdded={this.addItem}/>
					<TaskList todos={visibleItems}
					onDeleted={ this.deleteItem }
					onToggleDone = {this.onToggleDone}/>
					<span className="todo-count">{todoCount} items left</span>
					<TasksFilter filter={filter}
					filterChange={this.filterChange}/>

					<Footer />

				</section>

			</section>
		
			</div>
		)
	}
	
	};



