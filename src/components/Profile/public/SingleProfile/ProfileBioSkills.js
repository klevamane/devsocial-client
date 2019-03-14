import React, { Component } from 'react';

const ProfileBioSkills =  ({profileData}) => {
  console.log('*******skills -- ',profileData)
  const skills = profileData.skills.map(skill => (
    <div class="p-3"><i class="fa fa-check"></i> {skill}</div>
  ))
    return (
      <div>
        <h1>Profile Bio</h1>
        <div class="row">
            <div class="col-md-12">
              <div class="card card-body bg-light mb-3">
                <h3 class="text-center text-info">{profileData.user.firstname}'s Bio</h3>
                <p class="lead">
                  {profileData.bio}
                </p>
                <hr />
                <h3 class="text-center text-info">Skill Set</h3>
                <div class="row">
                  <div class="d-flex flex-wrap justify-content-center align-items-center">
                      {skills}
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    )
}

export default ProfileBioSkills;
