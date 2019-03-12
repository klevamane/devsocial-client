import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Actions
import { getCurrentUserProfile, deleteAccount, deleteProfileExperience, deleteProfileEducation } from '../../actions/profileActions'

// component
import Loader from '../Loader';
import ProfileSections from './ProfileSections'
import ExperienceTable from './ExperienceTable';
import EducationTable from './EducationTable';


class Dashboard extends Component {
    constructor() {
        super();

        this.state = {
            buttonloading: false,
            xpid: '' 
        }
        this.onDeleteExperience = this.onDeleteExperience.bind(this);
        this.onDeleteEducation = this.onDeleteEducation.bind(this);
    }

    componentDidMount() {
        this.props.getCurrentUserProfile();
    }

    onDeleteClick() {
        if(window.confirm('This action is irreversable, are you sure?')) {
        this.setState({ buttonloading: true })    
        this.props.deleteAccount();
        }
    }

    onDeleteExperience(e) {
        e.preventDefault();
        this.setState({ xpid: e.target.value });

        this.props.deleteProfileExperience(e.target.value, this.props.history);
        
    }

    onDeleteEducation(e) {
        e.preventDefault();
        this.setState({ xpid: e.target.value });

        this.props.deleteProfileEducation(e.target.value, this.props.history);
        
    }
    render(){
        let { loading, profile} = this.props.profile;
        const { user } = this.props.auth;

        const btnLoader = (
            <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        );

        const { buttonloading } = this.state
        let name;
        let ExperienceShow = '';
        let EducationShow = '';
        if (user) {
            name = user.firstname;
        }
        let content;
        if( profile === null || loading) {
            content = (
                <Loader />
            )
        }
        else {
            // Checks to see if the logged in user has a profile data
            if (Object.keys(profile).length > 0) {
                content = (
                         <h4> Welcome <Link to={`/profile/${profile.handle}`}> {user.firstname} </Link></h4>
                     )
                  ExperienceShow =  <ExperienceTable experience={profile.experience} deleteExp={this.onDeleteExperience}/>
                  EducationShow =  <EducationTable education={profile.education} deleteEdu={this.onDeleteEducation}/>
                  
            } 
            else {
                content = (
                    <div>
                        <p className="lead text-muted">Welcome {name}</p>
                        <p>You don't have a profile yet.</p>
                        <Link to="/create-profile" className="btn btn-info">Add profile</Link>
                    </div>
                )
            }
        }
       
        return (
            <div className="dashboard">
                <div className="container">
                    <div className="col-md-12">
                        <h1 className="display-4">Dashboard</h1>
                        {content}
                        <div style={{ marginTop: '20px' }}>
                            <ProfileSections />
                            
                            {ExperienceShow}
                            {EducationShow}
                            
                            {/* TODO: Experience and Educatin */}
                            <div style={{ marginBottom: '40px' }}>
                                <button className="btn btn-danger" type="button"
                                     onClick={this.onDeleteClick.bind(this)}>
                                     Delete my account {'  '}
                                     {/* {buttonloading ? btnLoader : ''} */}
                                     
                                     </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }


}


Dashboard.propTypes = {
    getCurrentUserProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    deleteAccount: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
});
export default connect(mapStateToProps, { getCurrentUserProfile, deleteAccount, deleteProfileExperience, deleteProfileEducation })(Dashboard);
