import React, { Component } from 'react';


import Footer from '../Footer';
import NewTaskForm from '../NewTaskForm';
import Task from '../Task';
import TaskList from '../TaskList';
import TasksFilter from '../TasksFilter';


export default class App extends Component {

	maxId = 100;
	state = {
		todoData: [
			this.createTodoItem('Completed task'),
			this.createTodoItem('Editing task'),
			this.createTodoItem('Active task')
	
		]
	};

	createTodoItem(label) {
		return {
			label,
			done: false,
			id: this.maxId++
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
		const newItem = this.createTodoItem(text);
		 this.setState(({ todoData }) => {
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

				
	}

	onToggleDone = (id) => {
		this.setState(({ todoData }) => {
			
				return {
					todoData: this.toggleProperty(todoData, id, 'done')
				};
		});

	};

	render() {

		const { todoData } = this.state;

		const doneCount = todoData
		.filter((el) => el.done).length;

	const todoCount = todoData.length - doneCount;

		return (
			<div>
			<section className="todoapp">
			  
			  <section className="main">
				  <NewTaskForm onItemAdded={this.addItem}/>
				  <TaskList todos={todoData}
				  onDeleted={ this.deleteItem }
				  onToggleDone = {this.onToggleDone}/>
				 
				 <Footer />
				 <span>{ (new Date()).toString() }</span>
			  </section>
			  
			</section>
		
		 </div>
		)
	}
	
	};



