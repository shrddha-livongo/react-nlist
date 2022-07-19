import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const STATUS_AVAILABLE = 'available';
const STATUS_SCHEDULED = 'scheduled';

function StatusOrb({ status }) {
  return status === STATUS_AVAILABLE ? (
    <div className='status-orb'></div>
  ) : (
    <></>
  );
}

StatusOrb.propTypes = {
  status: PropTypes.string.isRequired,
};

export default StatusOrb;
