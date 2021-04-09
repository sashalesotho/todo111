import React from 'react';
import './Footer.css';
import PropTypes from 'prop-types';

const Footer = ({ clearCompleted }) => {
  return (
    <footer className="footer">
      <button className="clear-completed" onClick={clearCompleted}>
        Clear completed
      </button>
    </footer>
  );
};

Footer.propTypes = {
  clearCompleted: PropTypes.func,
};

export default Footer;
