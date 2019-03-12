import React, { Component } from 'react'
import classnames from 'classnames';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { withRouter} from 'react-router-dom';

import { registerUser } from '../../actions/authActions';

// custom form controls
import TextBoxGroup from '../formcontrol/TextBox';


class Register extends Component {

    constructor() {
        super();
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            confirmpwd: '',
            errors: {}
        }
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    

    // redirect a login user to the dashboard, upon reaching the login route (component)
    componentDidMount() {
      if(this.props.auth.isAuthenticated)
        this.props.history.push('/dashboard');
    }

    componentWillReceiveProps(nextProps) {
      if (nextProps.errors) {
        this.setState({ errors: nextProps.errors})
      }
    }

    onChange(e) {
      this.setState({ [e.target.name] : e.target.value  });
    }

    onSubmit(e) {
        e.preventDefault();

        const newUser = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password,
            confirmpwd: this.state.confirmpwd
        };
        // this.props.history will allow us to be able to implement
        // redirect from within this action
        // this also includes the implementation of withRouter in this component
        this.props.registerUser(newUser, this.props.history);
    }

  render() {
    const { errors } = this.state;
    const { user } = this.props.auth;

    return (
        <div className="register">
        { user ? user.firstname : null}
        <div className="container">
          <div className="row">
            <div className="col-md-8 m-auto">
              <h1 className="display-4 text-center">Sign Up</h1>
              <p className="lead text-center">Create your DevConnector account</p>
              <form onSubmit={this.onSubmit}>

                <TextBoxGroup
                  name="firstname"
                  type="text"
                  value={this.state.firstname}
                  onChange={this.onChange}
                  placeholder="Firstname"
                  error={errors.firstname}
                />

                <TextBoxGroup
                  name="lastname"
                  type="text"
                  value={this.state.lastname}
                  onChange={this.onChange}
                  placeholder="Lastname"
                  error={errors.lastname}
                />

                <TextBoxGroup
                  name="email"
                  type="email"
                  value={this.state.email}
                  onChange={this.onChange}
                  placeholder="email@address"
                  error={errors.email}
                  info="This site uses Gravatar so if you want a profile image, use a Gravatar email"
                />

                <TextBoxGroup
                  name="password"
                  type="password"
                  value={this.state.password}
                  onChange={this.onChange}
                  placeholder="password"
                  error={errors.password}
                />
                <TextBoxGroup
                  name="confirmpwd"
                  type="password"
                  value={this.state.confirmpwd}
                  onChange={this.onChange}
                  placeholder="Conform Password"
                  error={errors.confirmpwd}
                />

                <input type="submit" className="btn btn-info btn-block mt-4" />
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
// connect redux with react
// add the action and the component
// also mapState to props

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Register));
