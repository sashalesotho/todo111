import React, { Component } from 'react';
import formatDuration from 'format-duration';
import './Timer.css';

class Timer extends Component {
	state = {
		runningTime: 0,
		isRunning: false,
	};

	componentDidMount() {}

	componentWillUnmount() {
		clearInterval(this.timerID);
	}

	handleStartStopClick = () => {
		const { isRunning, runningTime } = this.state;
		if (isRunning) {
			clearInterval(this.timerID);
			this.setState({ isRunning: false });
		} else {
			const startTime = Date.now() - runningTime;
			this.timerID = setInterval(() => {
				this.setState({ runningTime: Date.now() - startTime, isRunning: true });
			}, 100);
		}
	};

	render() {
		const { runningTime, isRunning } = this.state;
		return (
			<div className="timer">
				<div className="display">{formatDuration(runningTime)}</div>
				<button type="button" className="timer-btn" onClick={this.handleStartStopClick}>
					{isRunning ? <i className="fa fa-pause" /> : <i className="fa fa-play" />}
				</button>
			</div>
		);
	}
}

export default Timer;
