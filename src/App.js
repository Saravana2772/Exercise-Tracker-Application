import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

import CreateUser from "./components/create-user";
import CreateExercise from "./components/create-exercise";
import EditExercise from "./components/edit-exercise";
import ExerciseList from "./components/exercises-lists";
import UseParamComp from "./components/useParamComp";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" exact element= {<ExerciseList />} />
        <Route path="/create" element= {<CreateExercise/>} />
        <Route path="/edit/:id" element= {<UseParamComp/>} />
        <Route path="/user" element= {<CreateUser/>} />
      </Routes>
      </>
  );
}

export default App;
