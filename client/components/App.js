import React from 'react';
import NavBar from './nav-bar'
import Greetings from './greetings'

// This is going to be our main app laout component
// It's have all info like nav bar sidebar etc

// When we change route we want render route specific content in some place inside App component.

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <NavBar />
        {this.props.children}
      </div>
    );
  }
}
// <Greetings /> // This is fix content, we need to make is url specific.

export default App;
