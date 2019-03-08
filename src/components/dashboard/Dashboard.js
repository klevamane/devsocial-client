import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// Actions
import { getCurrentUserProfile } from '../../actions/profileActions'

// component
import Loader from '../Loader';

class Dashboard extends Component {

    componentDidMount() {
        this.props.getCurrentUserProfile();
    }
    render(){
        let { loading, profile} = this.props.profile;
        const { user } = this.props.auth;
        let name;
        if (user) {
            name = user.name;
        }
        let content;
        if( profile === null || loading) {
            content = (
                <Loader />
            )
        }
        else {
            // content = (
            //     <h1> Dashboard </h1>
            // )
            // Checks to see if the logged in user has a profile data
            if (Object.keys(profile).length > 0) {
                content = (
                         <h1> This user has profile data </h1>
                     )
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
                    </div>
                </div>
             </div>
        );
    }


}


Dashboard.propTypes = {
    getCurrentUserProfile: PropTypes.func.isRequired,
    profile: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
});
export default connect(mapStateToProps, { getCurrentUserProfile })(Dashboard);
