import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const STATUS_AVAILABLE = 'available';
// const STATUS_SCHEDULED = 'scheduled';

function Status({ status }) {
  return status === STATUS_AVAILABLE ? (
    <div className='status-orb'></div>
  ) : (
    <></>
  );
}

Status.propTypes = {
  status: PropTypes.string.isRequired,
};

export default Status;
