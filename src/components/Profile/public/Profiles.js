import React, { Component } from 'react';
import { connect } from 'react-redux';

// Actions
import { getAllProfiles } from '../../../actions/profileActions'

// Components
import ProfileCard from './ProfileCard';
import Spinner from '../../../components/helper/Spinner';


class Profiles extends Component {
    constructor() {
        super();

        this.state = {
            profiles: []
        }
    }

    componentDidMount() {
        this.props.getAllProfiles();
    }

  render() {
      let {profiles} = this.props
      let allprofiles;
      let displayProfiles
      let {loading} = this.props.profiles
      if (profiles.profiles) {

      
        allprofiles = profiles.profiles; 
        displayProfiles = allprofiles.map(profile => <ProfileCard profiledata={profile} />)
      }
    return (
        <div className="profiles">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="display-4 text-center">Developer Profiles</h1>
              <p className="lead text-center">Browse and connect with developers</p>
    
              
              {/* <div className="card card-body bg-light mb-3">
                <div className="row">
                  <div className="col-2">
                    <img className="rounded-circle" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt="" />
                  </div>
                  <div className="col-lg-6 col-md-4 col-8">
                    <h3>John Doe</h3>
                    <p>Developer at Microsoft</p>
                    <p>Seattle, WA</p>
                    <a href="profile.html" className="btn btn-info">View Profile</a>
                  </div>
                  <div className="col-md-4 d-none d-lg-block">
                    <h4>Skill Set</h4>
                    <ul className="list-group">
                      <li className="list-group-item">
                        <i className="fa fa-check pr-1"></i>HTML</li>
                      <li className="list-group-item">
                        <i className="fa fa-check pr-1"></i>CSS</li>
                      <li className="list-group-item">
                        <i className="fa fa-check pr-1"></i>JavaScript</li>
                      <li className="list-group-item">
                        <i className="fa fa-check pr-1"></i>Python</li>
                      <li className="list-group-item">
                        <i className="fa fa-check pr-1"></i>C#</li>
                    </ul>
                  </div>

                </div>
              </div> */}

              { loading ? <Spinner/> : displayProfiles }
    

            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
    profiles: state.profile
})

export default connect(mapStateToProps, { getAllProfiles})(Profiles)
