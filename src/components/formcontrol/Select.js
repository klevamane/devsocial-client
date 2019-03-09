import React from 'react'

import PropTypes from 'prop-types';
import {isEmpty_} from '../../helpers/helpers';

const SelectListGroup = ({ name, value, info, type, onChange, options, error }) => {
    let css = 'form-control form-control-lg ';
    if (!isEmpty_(error))
        css += 'is-invalid';

    const selectOptions = options.map(option => (
        <option key={option.label} value={option.value}>
            {option.label}
        </option>
    ));

  return (
      <div className="form-group">
          <select className={css} onChange={onChange} error={error} name={name} value={value}>
              {selectOptions}
          </select>


          {info && <small className="form-text text-muted">{info}</small>}
          {error && (<div className="invalid-feedback">{error}</div>)}

      </div>
  )
}

SelectListGroup.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string,
    info: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    options: PropTypes.object.isRequired,
    error: PropTypes.string,

};

export default SelectListGroup;
