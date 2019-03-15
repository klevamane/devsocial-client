import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Custom Form Controls
import SelectListGroup from '../../components/formcontrol/Select';
import TextArea from '../../components/formcontrol/TextArea';
import TextBox from '../../components/formcontrol/TextBox';
import IconTextBox from '../../components/formcontrol/TextBoxWithIcon';

// Action
import { getCurrentUserProfile, createNewProfile } from '../../actions/profileActions';

// Helpers
import { profileStatusOptions, isEmpty_ } from '../../helpers/helpers'

class EditProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            handle: '',
            company: '',
            website: '',
            location: '',
            status: '',
            skills: '',
            githubusername: '',
            bio: '',
            twitter: '',
            facebook: '',
            instagram: '',
            youtube: '',
            linkedin: '',
            displaySocialInputs: false,
            errors: {}
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    componentDidMount() {
        this.props.getCurrentUserProfile()
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.errors) {
            this.setState({ errors: nextProps.errors})
        }

        if(nextProps.profile.profile) {
            let { profile } = nextProps.profile;
            
            // convert skills array to csv
            const skillsCSV = profile.skills.join(',');

            // convert field to string if it doesn't exist
            profile.company = isEmpty_(profile.company) ? '': profile.company;
            profile.website = isEmpty_(profile.website) ? '': profile.website;
            profile.location = isEmpty_(profile.location) ? '': profile.location;
            profile.githubusername = isEmpty_(profile.githubusername) ? '': profile.githubusername;

            // social, remember to social is an object with regards to the backend

            profile.social = isEmpty_(profile.social) ? {}: profile.social;
            profile.linkedin = isEmpty_(profile.social.linkedin) ? '': profile.social.linkedin;
            profile.facebook = isEmpty_(profile.social.facebook) ? '': profile.social.facebook;
            profile.twitter = isEmpty_(profile.social.twitter) ? '': profile.social.twitter;
            profile.instagram = isEmpty_(profile.social.instagram) ? '': profile.social.instagram;
            profile.youtube = isEmpty_(profile.social.youtube) ? '': profile.social.youtube;

            // Set the component state
            
            this.setState({

            handle: profile.handle,
            company: profile.company,
            website: profile.website,
            location: profile.location,
            status: profile.status,
            skills: skillsCSV,
            githubusername: profile.githubusername,
            bio: profile.bio,
            twitter: profile.twitter,
            facebook: profile.facebook,
            instagram: profile.instagram,
            youtube: profile.youtube,
            linkedin: profile.linkedin,
            

            })
        }
    }
    onSubmit(e) {
        e.preventDefault()
        
        const newProfileData = {
            handle: this.state.handle,
            company: this.state.company,
            website: this.state.website,
            location: this.state.location,
            status: this.state.status,
            skills: this.state.skills,
            githubusername: this.state.githubusername,
            bio: this.state.bio,
            twitter: this.state.twitter,
            facebook: this.state.facebook,
            instagram: this.state.instagram,
            linkedin: this.state.linkedin,
            youtube: this.state.youtube,
        }
        this.props.createNewProfile(newProfileData, this.props.history);
    }

    onChange = (e) => {
        this.setState({ [e.target.name] : e.target.value});
    }
    render() {

        let { errors, displaySocialInputs } = this.state;

        

        const socialMediaInputs = (
            <div>
                <IconTextBox
                    placeholder="Enter your twitter in URL"
                    name="twitter"
                    icon="fab fa-twitter"
                    value={this.state.twitter}
                    error={errors.twitter}
                    onChange={this.onChange}
                />

                <IconTextBox
                    placeholder="Enter your Instagram in URL"
                    name="instagram"
                    icon="fab fa-instagram"
                    value={this.state.instagram}
                    error={errors.instagram}
                    onChange={this.onChange}
                />

                <IconTextBox
                    placeholder="Enter your facebook in URL"
                    name="facebook"
                    icon="fab fa-facebook"
                    value={this.state.facebook}
                    error={errors.facebook}
                    onChange={this.onChange}
                />

                <IconTextBox
                    placeholder="Enter your linked in URL"
                    name="linkedin"
                    icon="fab fa-linkedin"
                    value={this.state.linkedin}
                    error={errors.linkedin}
                    onChange={this.onChange}
                />

            </div>
        )
        return (
            <div className="create-profile">
            <div className="container">
                <div className="row">
                    <div className="col-md-8 m-auto">
                            <Link to="/dashboard" className="btn btn-light">
                                Go Back
                            </Link>
                        <h3 className="display-4 text-center"> Edit profile</h3>
                        <p className="lead text-center">
                            Enter your information to make your Profile Epic. 
                        </p>
                        <small className="d-block pb-3 danger">* = required field</small>
                        <form onSubmit={this.onSubmit}>
                            <TextBox 
                                placeholder = "* Profile handle"
                                name ="handle"
                                value={this.state.handle}
                                error = {errors.handle}
                                info = "A unique profile handle"
                                onChange={this.onChange}
                            />
                            
                            <SelectListGroup 
                            name="status"
                            onChange={this.onChange}
                            error={errors.status}
                            options={profileStatusOptions}
                            value={this.state.status}
                            />

                            <TextBox 
                                placeholder = "Company"
                                name ="company"
                                value={this.state.company}
                                error = {errors.company}
                                info = "private or public"
                                onChange={this.onChange}
                            />

                            <TextBox 
                                placeholder = "Location"
                                name ="location"
                                value={this.state.location}
                                error = {errors.location}
                                info = "The place where the company is located"
                                onChange={this.onChange}
                            />
                            
                            <TextBox 
                                placeholder = "Please enter with comma seperated values eg skill-1, skill-2, skill-3"
                                name ="skills"
                                value={this.state.skills}
                                error = {errors.skills}
                                info = "Enter your skills seperated by comma"
                                onChange={this.onChange}
                            />

                            <TextBox 
                                placeholder = "Github username"
                                name ="githubusername"
                                value={this.state.githubusername}
                                error = {errors.githubusername}
                                info = "Enter your github username to display 5 of your lates repositories"
                                onChange={this.onChange}
                            />


                            <TextBox 
                                placeholder = "Website"
                                name ="website"
                                value={this.state.website}
                                error = {errors.website}
                                info = "Website URL must begin with http:// or https://"
                                onChange={this.onChange}
                            />

                            <TextArea 
                                placeholder = "Bio"
                                name ="bio"
                                value={this.state.bio}
                                error = {errors.bio}
                                info = "Enter a short description about your awesome self"
                                onChange={this.onChange}
                            />
                            <div className="mb-3">
                            {/* toggle the social inputs by toggling the component state */}
                            <button onClick={() => {
                                this.setState(prevState => ({displaySocialInputs: !prevState.displaySocialInputs}))
                            }
                        } className="btn btn-light" type="button">Add social links</button>
                            <span className="text-muted">Optional</span>
                            </div>
                            {displaySocialInputs? socialMediaInputs : ''}
                            
                            <input type="submit" className="btn btn-info btn-block mt-4"  value="Edit Profile"/>
                        </form>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

EditProfile.propTypes = {
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
})

export default connect(mapStateToProps, {createNewProfile, getCurrentUserProfile })(withRouter(EditProfile));
