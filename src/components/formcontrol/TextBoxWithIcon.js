import React from 'react'

import PropTypes from 'prop-types';
import {isEmpty_} from '../../helpers/helpers';

const IconTextBox = ({ name, value, placeholder, icon, type, onChange, error }) => {
    // notice this can also be done with the classnames npm package
    let css = 'form-control form-control-lg ';
    if (!isEmpty_(error))
        css += 'is-invalid';

  return (
      <div className="input-group mb-3">
          <div className="input-group-prepend">
              <span className="input-group-text">
                  <i className={icon}></i>
              </span>
          </div>
          <input
              type={type}
              className={css}
              placeholder={placeholder}
              name={name}
              value={value}
              onChange={onChange}
              icon={icon}
          />
          {error && (<div className="invalid-feedback">{error}</div>)}
      </div>
  )
}

IconTextBox.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string,
    icon: PropTypes.string,
    type: PropTypes.string.isRequired
};

IconTextBox.defaultProps = {
    type: 'text'
}

export default IconTextBox;
