import React, { Component } from 'react';
import { fetchUsers } from '../actions/userActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    }
  }

  componentDidMount() {
    this.props.fetchUsers()
  }

  handleChange = event => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    })
  }


  handleSubmit = event => {
    console.log(this.state)
    event.preventDefault();
  }

  render() {
    return (
        <h3>Login</h3>
    )
  }
}

const mapDispatchToProps = (dispatch) => bindActionCreators({
  fetchUsers, },
  dispatch)

export default connect(null, mapDispatchToProps)(Login)
