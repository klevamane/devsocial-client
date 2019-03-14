import React from 'react';
import { Link } from 'react-router-dom';
import { isEmpty_ } from '../../../../helpers/helpers';

const DeveloperCard = ({profileData}) => {
    console.log('PROFILE DATA ', profileData);
    const {instagram, twitter, facebook, youtube, linkedin} = profileData.social;
  return (
    <div className="row">
            <div className="col-md-12">
              <div className="card card-body bg-info text-white mb-3">
                <div className="row">
                  <div className="col-4 col-md-3 m-auto">
                    <img className="rounded-circle" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt="" />
                  </div>
                </div>
                <div className="text-center">
                  <h1 className="display-4 text-center">{profileData.user.firstname} {profileData.user.lastname}</h1>
                  <p className="lead text-center">
                    {profileData.status} {isEmpty_(profileData.company) ? null : <span>at {profileData.company}</span>}
                  </p>
                  {isEmpty_(profileData.location) ? null : (<p> {profileData.location} </p>)}
                  <p>
                    { isEmpty_(profileData.website) ? null : 
                    (<a className="text-white p-2" href={profileData.website} target="_blank">
                      <i className="fas fa-globe fa-2x"></i>
                    </a>)}

                    { isEmpty_(twitter) ? null : 
                    ( <a className="text-white p-2" href={twitter} target="_blank">
                      <i className="fab fa-twitter fa-2x"></i>
                      </a>) }

                    { isEmpty_(facebook) ? null : 
                    (<a className="text-white p-2" href={facebook} target="_blank">
                      <i className="fab fa-facebook fa-2x"></i>
                      </a>) }
                    { isEmpty_(linkedin) ? null :
                    (<a className="text-white p-2" href={linkedin} target="_blank">
                      <i className="fab fa-linkedin fa-2x"></i>
                      </a>) }
                      { isEmpty_(instagram) ? null : 
                    (<a className="text-white p-2" href={instagram} target="_blank">
                      <i className="fab fa-instagram fa-2x"></i>
                      </a>) }

                      { isEmpty_(youtube) ? null : 
                    (<a className="text-white p-2" href={youtube} target="_blank">
                      <i className="fab fa-instagram fa-2x"></i>
                      </a>) }
                  </p>
                </div>
              </div>
            </div>
          </div>
  )
}

export default DeveloperCard;
