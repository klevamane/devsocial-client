import React from 'react'

import PropTypes from 'prop-types';
import {isEmpty_} from '../../helpers/helpers';

const TextBoxGroup = ({ name, value, placeholder, info, type, onChange, disabled, error }) => {
    // notice this can also be done with the classnames npm package
    let css = 'form-control form-control-lg ';
    if (!isEmpty_(error))
        css += 'is-invalid';

  return (
      <div className="form-group">
          <input type={type}
              className={css}
              placeholder={placeholder}
              name={name}
              value={value}
              onChange={onChange}
              disabled={disabled}
          />
          { info && <small className="form-text text-muted">{info}</small>}
          {error && (<div className="invalid-feedback">{error}</div>)}
      </div>
  )
}

TextBoxGroup.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    info: PropTypes.string,
    type: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    disabled: PropTypes.string,
    error: PropTypes.string,

};

// set the default property if it wasn't passed
TextBoxGroup.defaultProps = {
    type: 'text'
};

export default TextBoxGroup;
