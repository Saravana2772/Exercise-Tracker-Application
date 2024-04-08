import React from 'react';
import { useParams } from 'react-router-dom';
import EditExercise from './edit-exercise'; // assuming this is your class component

const UseParamComp = () => {
  const { id } = useParams(); // Get the id parameter using useParams
  return <EditExercise id={id} />; // Pass the id to your class component
};

export default UseParamComp;