import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ filter, active, children, changeVisibility}) => {

  if(active ) {
    return <span> {children}</span>
  }
  else {
    return (
      <a
        href="javascript:void(0)"
        onClick={ e => {
          e.preventDefault;
          changeVisibility(filter);
        }}
      >
        {children}
      </a>
    )
  }
}


// Link.propTypes = {
//   active: PropTypes.bool.isRequired,
//   children: PropTypes.node.isRequired,
//   onClick: PropTypes.func.isRequired
// }

export default Link ;
