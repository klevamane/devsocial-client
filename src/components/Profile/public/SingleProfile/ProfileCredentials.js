import React, { Component } from 'react'
import PropTypes from 'prop-types';

const ProfileCredentials = ({profileData}) => {

    let experiences;
    let educationHistory;
    if(profileData.experience) {
        experiences = profileData.experience.map(experience => (
            <li className="list-group-item" key={experience._id}>
                  <h4>{experience.company}</h4>
                  <p>{experience.from} - Current</p>
                  <p>
                    <strong>Position:</strong> Senior Developer
                  </p>
                  <p>
                    <strong>Description:</strong> {experience.description}</p>
                </li>
        ))
    }
     
    if (profileData.education) {
        educationHistory = profileData.education.map(education => (
            <li className="list-group-item" key={education._id}>
              <h4>{education.school}</h4>
              <p>{education.from} - June 1999</p>
              <p>
                <strong>Degree: </strong>{education.degree}</p>
              <p>
                <strong>Field Of Study: </strong>{education.fieldofstudy}
                </p>
                <p>
                  <strong>Description:</strong> {education.description}
                  </p>
            </li>
        ))
    }
    return (
        <div className="row">
        <div className="col-md-6">
          <h3 className="text-center text-info">Experience</h3>
          <ul className="list-group">
              
            {experiences}
          </ul>
        </div>
        <div className="col-md-6">
          <h3 className="text-center text-info">Education</h3>
          <ul className="list-group">
            {educationHistory}
          </ul>
        </div>
      </div>
    )
}


ProfileCredentials.propTypes = {
    profileData: PropTypes.object.isRequired
  }

export default ProfileCredentials;
