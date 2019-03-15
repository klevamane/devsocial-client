import React, { Component } from 'react';
import PropTypes from 'prop-types';

const ProfileBioSkills =  ({profileData}) => {
  const skills = profileData.skills.map((skill, index) => (
    <div className="p-3" key={index}><i className="fa fa-check"></i> {skill}</div>
  ))
    return (
      <div>
        <div className="row">
            <div className="col-md-12">
              <div className="card card-body bg-light mb-3">
                <h3 className="text-center text-info">{profileData.user.firstname}'s Bio</h3>
                <p className="lead">
                  {profileData.bio}
                </p>
                <hr />
                <h3 className="text-center text-info">Skill Set</h3>
                <div className="row">
                  <div className="d-flex flex-wrap justify-content-center align-items-center">
                      {skills}
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
}

ProfileBioSkills.propTypes = {
  profileData: PropTypes.object.isRequired
}


export default ProfileBioSkills;
