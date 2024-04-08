import React, { Component } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios'

class CreateExercise extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDuration = this.onChangeDuration.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangeDate = this.onChangeDate.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: "",
      description: "",
      duration: 0,
      date: new Date(),
      users: [],
    };
  }
  r;
  componentDidMount() {
    axios.get('http://localhost:5000/user/')
    .then(res=>{
      if (res.data.length > 0){
        this.setState({
          users: res.data.map(user => user.username),
          username: res.data[0].username,
        })
      }
    })
  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value,
    });
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  onChangeDuration(e) {
    this.setState({
      duration: e.target.value,
    });
  }

  onChangeDate(date) {
    this.setState({
      date: date,
    });
  }

  onSubmit(e) {
    e.preventDefault();
    const exercise = {
      username: this.state.username,
      description: this.state.description,
      duration: this.state.duration,
      date: this.state.date,
    };

    console.log(exercise);
    axios.post('http://localhost:5000/exercise/add', exercise)
    .then(res => console.log(res))

    window.location= '/';
  }

  render() {
    return (
      <div>
        <h2>Create New Exercise Log..</h2>
        <form onSubmit={this.onSubmit}>
          <div className="mb-3">
            <label htmlFor="exampleInputUsername1" className="form-label">
              Username
            </label>
            {/* <input type="text" className="form-control" id="exampleInputUsername1" aria-describedby="emailHelp" /> */}

            {/* <input class="form-control" list="datalistOptions" id="exampleInputUsername1" placeholder="Type to search..." /> */}
            <select
              ref="userInput"
              required
              className="form-control"
              id="exampleInputUsername1"
              value={this.state.username}
              onChange={this.onChangeUsername}
            >
              {this.state.users.map((user) => {
                return (
                  <option key={user} value={user}>
                    {user}
                  </option>
                );
              })}
            </select>

            <div id="emailHelp" className="form-text">
              We'll never share your Name with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleInputDescription1"
              className="form-label">
              Description
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputDescription1"
              required
              value={this.state.description}
              onChange={this.onChangeDescription}
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleInputDuration1"
              className="form-label">
              Duration
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleInputDuration1"
              required
              value={this.state.duration}
              onChange={this.onChangeDuration}
            />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleInputDate1" className="form-label">
              Date (In Minutes):
            </label>
            {/* <input type="date" className="form-control" id="exampleInputDate1" selected={}/> */}
            <div>
              <DatePicker
                selected={this.state.date}
                onChange={this.onChangeDate}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default CreateExercise;
