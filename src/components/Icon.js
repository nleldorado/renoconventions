import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import {Link} from 'gatsby'

const Icon = props => (
    <Link to={props.url}>
      {props.text} <FontAwesomeIcon icon={props.icon} />
    </Link>
   )

   export default Icon;