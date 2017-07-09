import React from 'react';
import PropTypes from 'prop-types';

class Link extends React.Component {

  render() {
    let props = this.props;
      if (props.active ) {
        return <span> {props.children}</span>
      }
      else {
        return (
          <a
            href="javascript:void(0)"
            onClick={ e => {
              e.preventDefault;
              props.changeVisibility(props.filter);
            }}
          >
            {props.children}
          </a>
        )
      }

  }
}
// const Link = ({ active, children, onClick}) => (
//   // if(active ) {
//   //   <span> {children}</span>
//   // }
//   // else {
//     <a
//       href="javascript:void(0)"
//       onClick={ e => {
//         e.preventDefault;
//         onClick();
//       }}
//     >
//       {children}
//     </a>
//   // }
// );

// Link.propTypes = {
//   active: PropTypes.bool.isRequired,
//   children: PropTypes.node.isRequired,
//   onClick: PropTypes.func.isRequired
// }

export default Link ;
