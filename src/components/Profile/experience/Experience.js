import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Custom components
import TextBox from '../../formcontrol/TextBox';
import TextArea from '../../formcontrol/TextArea';

// Actions
import { addProfileExperience } from '../../../actions/profileActions';


class Experience extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      location: '',
      company: '',
      description: '',
      from: '',
      to: '',
      current: false,
      disabled: false,
      errors: {}
    }
    this.onSubmit = this.onSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
    this.onChecked = this.onChecked.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.errors) {
      this.setState({ errors: nextProps.errors});
      

    }
  }

  onChange(e) {
    e.preventDefault();

    this.setState({ [e.target.name]: e.target.value});
   
  }

  onChecked() {
   
    this.setState({
      disabled: !this.state.disabled,
      current: !this.state.current
    })
  }

  onSubmit(e) {
    e.preventDefault();


    const newProfileExperienceData = {
      title: this.state.title,
      company: this.state.company,
      location: this.state.location,
      from: this.state.from,
      to: this.state.to,
      current: this.state.current,
      description: this.state.description

    };
    
    this.props.addProfileExperience(newProfileExperienceData, this.props.history);
  }
  render() {
    let { errors } = this.state;

    return (
      <div className="section add-experience">
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <Link to="/dashboard" className="btn btn-light">
                Go Back
          </Link>
              <h1 className="display-4 text-center">Add Your Experience</h1>
              <p className="lead text-center">Add any developer/programming positions that you have had in the past</p>
              <small className="d-block pb-3">* = required field</small>
              <form onSubmit={this.onSubmit}>

                <TextBox
                name="title"
                placeholder="* Job Title"
                error={errors.title}
                value={this.state.title}
                onChange={this.onChange}
                />

                <TextBox
                name="company"
                placeholder="* Company"
                error={errors.company}
                value={this.state.company}
                onChange={this.onChange}
                />


                <TextBox
                  name="location"
                  placeholder="location"
                  error={errors.location}
                  value={this.state.location}
                  onChange={this.onChange}
                />
                
                <TextBox
                  name="from"
                  placeholder="* date from"
                  error={errors.from}
                  value={this.state.from}
                  onChange={this.onChange}
                  type="date"
                />

                <h6>To Date</h6>
                <TextBox
                  name="to"
                  placeholder="date to"
                  error={errors.to}
                  value={this.state.to}
                  onChange={this.onChange}
                  type="date"
                  disabled={this.state.disabled ? 'disabled' : ''}
                />
              
                
                <div className="form-check mb-4">
                  <input 
                    className="form-check-input"
                    type="checkbox" 
                    name="current"
                    value={this.state.current}
                    id="current"
                    checked={this.state.current}
                    onChange={this.onChecked}  
                  />

                  <label className="form-check-label" htmlFor="current">
                    Current Job
              </label>
                </div>
               

                <TextArea 
                  placeholder="Job Description"
                  name="description"
                  value={this.state.description}
                  onChange={this.onChange}
                  error={errors.description}
                />
                 
                  <small className="form-text text-muted">Some of your responsabilities, etc</small>
                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

Experience.propTypes = {
  errors: PropTypes.object.isRequired,
  addProfileExperience: PropTypes.func.isRequired

}

const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { addProfileExperience})( withRouter(Experience));
