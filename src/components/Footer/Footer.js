import React from 'react';


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


