import React from 'react'

import PropTypes from 'prop-types';
import {isEmpty_} from '../../helpers/helpers';

const TextAreaGroup = ({ name, value, placeholder, info, type, onChange, error }) => {
    // notice this can also be done with the classnames npm package
    let css = 'form-control form-control-lg ';
    if (!isEmpty_(error))
        css += 'is-invalid';

  return (
      <div className="form-group">
          <textarea type={type}
              className={css}
              placeholder={placeholder}
              name={name}
              value={value}
              onChange={onChange}
          >
          </textarea> 
          { info && <small className="form-text text-muted">{info}</small>}
          {error && (<div className="invalid-feedback">{error}</div>)}
      </div>
  )
}

TextAreaGroup.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    info: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    error: PropTypes.string,

};

export default TextAreaGroup;
