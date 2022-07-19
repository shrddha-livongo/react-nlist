import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

function Button({ text, handleClick }) {
  return (
    <button className='btn' id='download-btn' onClick={handleClick}>
      <i className='fa fa-download fa-xs'></i> {text}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func,
};

export default Button;
