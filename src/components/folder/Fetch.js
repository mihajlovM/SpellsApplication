import axios from "axios";
import React, {useState, useEffect} from "react";

 const Fetch = ({url}) =>{

  const [data, setData]= useState(null);

  useEffect(()=> {
    console.log("hey");
  }, 
  [url])

  if(!data){
    return<span  className= "loading" data-testid="loading">Loading data...</span>
  }

  return <span data-testid="resolved">{data.greeting}</span>

 };
 export default Fetch;