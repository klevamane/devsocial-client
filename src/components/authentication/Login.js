import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
// action
import { loginUser } from '../../actions/authActions';

// custom form control
import TextBoxGroup from '../../components/formcontrol/TextBox';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {},
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    // redirect a login user to the dashboard, upon reaching the login route (component)
    componentDidMount() {
      if(this.props.auth.isAuthenticated)
        this.props.history.push('/dashboard');
    }

    componentWillReceiveProps(nextProps) {

      // check if the reducer property is set to true
      // when login occurs, if so redirect to the dashboard
        if(nextProps.auth.isAuthenticated) {
          this.props.history.push('/dashboard');
        }
        if(nextProps.errors) {
          this.setState({ errors: nextProps.errors })
        }
    }

    onChange(e) {
        this.setState({ [e.target.name] : e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        const userAuthDetails = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.loginUser(userAuthDetails);
        
    }


    render() {
      const { errors } = this.state;

        return (
          <div className="login">
            <div className="container">
              <div className="row">
                <div className="col-md-8 m-auto">
                  <h1 className="display-4 text-center">Log In</h1>
                  <p className="lead text-center">Sign in to your DevConnector account</p>
                  <form onSubmit={this.onSubmit}>

                    <TextBoxGroup 
                    name="email"
                    type="email"
                    value={this.state.email}
                    onChange={this.onChange}
                    placeholder="email @ address"
                    error={errors.email}
                    />
                    
                    <TextBoxGroup 
                    name="password"
                    type="password"
                    value={this.state.password}
                    onChange={this.onChange}
                    placeholder="passowrd"
                    error={errors.password}
                    />
                   
                    <input type="submit"
                      className="btn btn-info btn-block mt-4"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}


const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Login);
