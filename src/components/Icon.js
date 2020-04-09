import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import PropTypes from "prop-types"

const Icon = ({icon}) => (
    <button>
      <FontAwesomeIcon icon={icon} />
    </button>
   )

FontAwesomeIcon.propTypes = {
    icon: PropTypes.string.isRequired,
};

   export default Icon;