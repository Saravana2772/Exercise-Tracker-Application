import React, { Component } from 'react'
import axios from 'axios'

export class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  

    this.state = {
      username: "",
    };
  }

    onChangeUsername(e) {
      this.setState({
        username: e.target.value,
      });
    }

    onSubmit(e) {
      e.preventDefault();
      const user = {
        username: this.state.username,
      };
      console.log(user)

      axios.post('http://localhost:5000/user/add', user)
      .then(res =>console.log(res))
      this.setState({
        username:'',
      })

      window.location= '/'
    }

  render() {
    return (
      <div>
        <h2>Create New User Log..</h2>
        <form onSubmit={this.onSubmit}>
        <div className="mb-3">
            <label
              htmlFor="exampleInputUsername2"
              className="form-label">
              Username:
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputUsername2"
              required
              value={this.state.username}
              onChange={this.onChangeUsername}
            />
          </div>
            <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    )
  }
}

export default CreateUser
