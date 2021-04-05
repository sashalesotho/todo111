import React from 'react';
import './Footer.css';


const Footer = ({clearCompleted}) => {
	
		return (
			<footer className="footer">

					<button className="clear-completed"
					 onClick={clearCompleted}
					 >Clear completed</button>
					
			</footer>
		)

	}

export default Footer;


