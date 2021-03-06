import React from 'react';
import { Link } from 'react-router-dom';

const ProfileCard = ({profiledata}) => {
  const skills = profiledata.skills.map(skill =>
    <li className="list-group-item">
            <i className="fa fa-check pr-1"></i>{skill}</li>
             )
  return (
    <div className="card card-body bg-light mb-3">
    <div className="row">
      <div className="col-2">
        <img className="rounded-circle" src={profiledata.user.avatar} alt="" />
      </div>
      <div className="col-lg-6 col-md-4 col-8">
        <h3>{profiledata.user.firstname} </h3>
        <p>Works at {profiledata.company}</p>
        <p>{profiledata.location}</p>
        <Link to={`/profile/handle/${profiledata.handle}`} className="btn btn-info">View Profile</Link>
      </div>
      <div className="col-md-4 d-none d-lg-block">
        <h4>Skill Set</h4>
        <ul className="list-group">
         
            {skills}
        </ul>
      </div>

    </div>
  </div>
  )
}

export default ProfileCard;
