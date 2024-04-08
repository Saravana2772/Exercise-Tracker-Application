import React, { Component } from 'react'
import Navbar from "./navbar";
import {Link} from 'react-router-dom'
import axios from 'axios'

import "bootstrap/dist/css/bootstrap.min.css";

const Exercise = props =>(
  // console.log(props.exercise);
  <tr>
    <td>{props.exercise.username}</td>
    <td>{props.exercise.description}</td>
    <td>{props.exercise.duration}</td>
    <td>{props.exercise.date.substring(0,10)}</td>
    <td>
      <Link to={'/edit/'+props.exercise._id}>Edit</Link> | <a href="#" onClick={() => {props.deleteExercise(props.exercise._id)}}>Delete</a>
    </td>
  </tr>
)

export class ExerciseList extends Component {
  constructor(props){
    super(props);
    this.deleteExercise= this.deleteExercise.bind(this);
    // this.exerciseList= this.exerciseList.bind(this);

    this.state= {
      exercises: [],
    }
  }

  componentDidMount(){
    axios.get('http://localhost:5000/exercise/')
    .then(res=>{
      this.setState({
        exercises: res.data
      })
      // console.log(this.state.exercises)
    })
    .catch(err=> console.log(err))
  }

  deleteExercise(id){
    axios.delete('http://localhost:5000/exercise/'+id)
    .then(res=> console.log(res.data))

    this.setState({
      exercises: this.state.exercises.filter(el => el._id !== id)
    })
  }

  exerciseList(){
    return this.state.exercises.map(currentexe => {
      // console.log('Obj1'+ currentexe)
      return <Exercise exercise={currentexe} deleteExercise={this.deleteExercise} key={currentexe._id}/>
    })
  }

  render() {
    return (
      <div>
        <Navbar />
        <h2>Logged Exercise Lists</h2>
        <table className='table'>
          <thead className='thead-light'>
            <tr>
              <th>Username</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.exerciseList()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default ExerciseList
