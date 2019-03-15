import React from 'react'
import { Link } from 'react-router-dom';

const NofFound = () => {
  return (
    <div class="container">
    <div className="row">
        <div className="col-md-4">
        <h2>Oops!</h2>
        <h3>404 Not found</h3>
        <p>Sorry an error occured, the page you requested was not found!</p>
        <a href="" className="btn btn-info">Home</a>
        </div>
    </div>
      
    </div>
  )
}

export default NofFound;
