import React from 'react';
import classnames from 'classnames';

const TextFieldGroup = ({ field, value, label, error, type, onChange, checkUserExists }) => {
  return (
    <div className={classnames('form-group', { 'has-error': error })}>
      <label className="control-label">{label}</label>
      <input
        onChange={onChange}
        onBlur={checkUserExists}
        value={value}
        type={type}
        name={field}
        className="form-control"
      />
    {error && <span className="help-block">{error}</span>}
    </div>  );
}

TextFieldGroup.propTypes = {
  field: React.PropTypes,
  value: React.PropTypes,
  label: React.PropTypes,
  error: React.PropTypes,
  type: React.PropTypes,
  onChange: React.PropTypes,
  checkUserExists: React.PropTypes
}

TextFieldGroup.defaultProps = {
  type: 'text'
}

export default TextFieldGroup;
