import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

// Components
import DeveloperCard from './DeveloperCard';
import ProfileCredentials from './ProfileCredentials';
import Spinner from '../../../helper/Spinner';
import ProfileGithub from './ProfileGithub';

// Actions
import { getProfileByHandle } from '../../../../actions/profileActions';

class SingleProfile extends Component {
  constructor() {
    super();
    this.state = {}
    
  }
  componentDidMount() {
    console.log('******** nnnn ', this.props.match.params.handle)
    if(this.props.match.params.handle) {
      console.log('****YESSS');
      this.props.getProfileByHandle(this.props.match.params.handle);
      
    }
    
  }
  render() {
    const profiledata = {
      social: {
        twitter: 'twitter',
      instagram: 'instagram',
      facebook: 'facebook',
      linkedin: 'linkedin',
      },
      company: 'company',
      user: {
        firstname: 'firstname',
        lastname: 'lastname'
      }
      
    };
    if (this.props.profile)
      console.log('@@@@@@@@@@@ ', this.props.profile);
    
    const { profile, loading } =this.props.profile;
    let profileContent;
    
    if (profile === null || loading) {
      profileContent = ( <Spinner /> )
    } else {
      console.log('**** the profile ', profile);
      profileContent = (
        <div>
          <div className="row">
            <div className="col-md-6">
              <Link to="/profiles" className="btn btn-light mb-3 float-left">Back to profiles</Link>
            </div>
            <div className="col-md-6"></div>
          </div>
          <DeveloperCard profileData={profile} />
          <ProfileCredentials />
          <ProfileGithub />

        </div>
      )
    }
      
    return (
      <div>
        <div className="profile">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                {profileContent}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

SingleProfile.propTypes = {
  getProfileByHandle: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired
}


const mapStatetToProps = state => ({
  profile: state.profile
})

export default connect(mapStatetToProps , { getProfileByHandle })(SingleProfile)
