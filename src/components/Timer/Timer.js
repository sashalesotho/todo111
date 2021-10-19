import React, { Component } from 'react';
import PropTypes from 'prop-types';
import lightFormat from 'date-fns/lightFormat';
import './Timer.css';

export default class Timer extends Component {
	constructor(props) {
		super(props);
		const { deadline } = this.props;
		this.state = {
			end: Date.now() + deadline,
			date: deadline,
		}
	}

	componentDidMount() {
		this.timerID = setInterval(() => this.tick(), 1000)
	}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	stop = () => {
		const { date } = this.state;
		const { timerOff } = this.props;
		timerOff(date);
	}

	start = () => {
		const { timerOn, deadline, countdown } = this.props;
		if (countdown) return;
		this.setState({
			end: Date.now() + deadline,
		});
		timerOn()
	}

	tick = () => {
		const { countdown, timerOff } = this.props;
		if (!countdown) return;
		const { end } = this.state;
		const deadline = end - Date.now();
		if (deadline <= 1000) {
			timerOff('x');
		}
		this.setState({
			date: deadline,
		})
	}

	render() {
		const { date } = this.state;
		return (
			<div className="timer">
				<button type='button' className='timer-btn' onClick={this.start} aria-label='start'><i className="fa fa-play" /></button>
				<button type='button' className='timer-btn' onClick={this.stop} aria-label='stop'><i className="fa fa-pause" /></button>
				<div className="display">{lightFormat(new Date(date), ' mm-ss')}</div>
			</div>
		);
	}
}

Timer.defaultProps = {
	timerOn: () => {},
	timerOff: () => {},
	deadline: 0,
	countdown: false,
}

Timer.propTypes = {
	timerOn: PropTypes.func,
	timerOff: PropTypes.func,
	deadline: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
	countdown: PropTypes.bool,
}

