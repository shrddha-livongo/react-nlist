import React, { useId } from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function Checkbox({ elRef, label, isChecked, handleChange }) {
  const id = useId();

  return (
    <label className='checkbox' htmlFor={id}>
      <input
        ref={elRef}
        type='checkbox'
        id={id}
        checked={isChecked}
        onChange={handleChange}
      />
      {label && (
        <span className='label-text' id='selectedCheckboxes'>
          {label}
        </span>
      )}
    </label>
  );
}

Checkbox.propTypes = {
  elRef: PropTypes.object,
  label: PropTypes.string,
  isChecked: PropTypes.bool,
  handleChange: PropTypes.func.isRequired,
};

export default Checkbox;
