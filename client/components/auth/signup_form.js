import React from 'react';
import axios from 'axios'

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ''
    }
    this.onInputChange = this.onInputChange.bind(this);
    this.formSubmit = this.formSubmit.bind(this);
  }

  onInputChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }

  formSubmit(e) {
    e.preventDefault();
    console.log('On Submit method:')
    // console.log(this.state);
    axios.post(' http://localhost:3001/api/users', {user: this.state});
  }

  render() {
    return(
      <form onSubmit={this.formSubmit}>
        <h1>Join our community! </h1>
        <div className="form-group">
          <label className="control-label">Username</label>
          <input
            value={this.state.username}
            type="text"
            name="username"
            onChange={this.onInputChange}
            className="form-control" />
        </div>
        <div className="form-group">
          <button className="btn btn-primary btn-lg">
            Sign Up
          </button>
        </div>
      </form>
    );
  }
}

export default SignupForm;
