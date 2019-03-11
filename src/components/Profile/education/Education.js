import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// Custom components
import TextBox from '../../formcontrol/TextBox';
import TextArea from '../../formcontrol/TextArea';

// Actions
import { addProfileEducation } from '../../../actions/profileActions';


class Education extends Component {

  constructor() {
    super();

    this.state = {
      school: '',
      degree: '',
      fieldofstudy: '',
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


    const newProfileEducationData = {
      school: this.state.school,
      fieldofstudy: this.state.fieldofstudy,
      degree: this.state.degree,
      from: this.state.from,
      to: this.state.to,
      current: this.state.current,
      description: this.state.description

    };
    
    this.props.addProfileEducation(newProfileEducationData, this.props.history);
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
              <h1 className="display-4 text-center">Add Your Education</h1>
              <p className="lead text-center">Add any school, bootcamp, etc that you have attended</p>
              <small className="d-block pb-3">* = required field</small>
              <form onSubmit={this.onSubmit}>

                <TextBox
                name="school"
                placeholder="* School"
                error={errors.school}
                value={this.state.school}
                onChange={this.onChange}
                />

                <TextBox
                name="degree"
                placeholder="* degree"
                error={errors.degree}
                value={this.state.degree}
                onChange={this.onChange}
                />


                <TextBox
                  name="fieldofstudy"
                  placeholder="Field of study"
                  error={errors.fieldofstudy}
                  value={this.state.fieldofstudy}
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
                    Current
              </label>
                </div>
               

                <TextArea 
                  placeholder="Program Description"
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

Education.propTypes = {
  errors: PropTypes.object.isRequired,
  addProfileEducation: PropTypes.func.isRequired

}

const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(mapStateToProps, { addProfileEducation })( withRouter(Education));
