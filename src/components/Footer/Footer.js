import React from 'react';
import './Footer.css';
import PropTypes from 'prop-types';

const Footer = ({ clearCompleted }) => (
    <footer className="footer">
      <button className="clear-completed" onClick={clearCompleted}
		type="button">
        Clear completed
      </button>
    </footer>
  );

Footer.defaultProps = {
	clearCompleted: () => {}
}

Footer.propTypes = {
  clearCompleted: PropTypes.func,
};

export default Footer;
