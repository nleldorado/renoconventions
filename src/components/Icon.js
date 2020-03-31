import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Icon = props => (
    <button>
      <FontAwesomeIcon icon={props.icon} />
    </button>
   )

   export default Icon;