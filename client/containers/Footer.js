import React from 'react';
import Link from '../components/Todo/Link';
// import {visibilityFilter} from '../reducers';
import { connect } from 'react-redux';
import {VisibilityFilters, setVisibilityFilter} from '../actions';

const mapStateToProps = state => {
  return {
    selectedFilter: state.visibilityFilter
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setVisibilityFilter: filter => {
      dispatch(setVisibilityFilter(filter));
    }
  }
}


class Footer extends React.Component {
  render() {
    const props = this.props;
    return (
      <p>
        Show:
        {' '}
        <Link
          key={VisibilityFilters.SHOW_ALL}
          filter={VisibilityFilters.SHOW_ALL}
          active={props.selectedFilter == VisibilityFilters.SHOW_ALL}
          changeVisibility={props.setVisibilityFilter}
        >
          All
        </Link>
        {', '}
        <Link
          key={VisibilityFilters.SHOW_ACTIVE}
          filter={VisibilityFilters.SHOW_ACTIVE}
          active={props.selectedFilter == VisibilityFilters.SHOW_ACTIVE}
          changeVisibility={props.setVisibilityFilter}
        >
          Active
        </Link>
        {', '}
        <Link
          key={VisibilityFilters.SHOW_COMPLETED}
          filter={VisibilityFilters.SHOW_COMPLETED}
          active={props.selectedFilter == VisibilityFilters.SHOW_COMPLETED}
          changeVisibility={props.setVisibilityFilter}
        >
          Completed
        </Link>
      </p>
    );
  }
}

Footer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Footer)


export default Footer
