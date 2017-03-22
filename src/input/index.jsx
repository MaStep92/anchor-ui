import React, { PropTypes } from 'react';
import Radium from 'radium';
import pure from 'recompose/pure';
import getStyles from './get-styles';

/** General purpose form input */
function Input({
  onChange,
  value,
  maxLength,
  label,
  name,
  type,
  inputRef,
  style,
  inputStyle,
  labelStyle,
  disabled,
  error,
  errorStyle,
  ...custom
}) {
  return (
    <section style={getStyles.root(disabled, style)}>
      <label style={getStyles.label(labelStyle)} htmlFor={name}>{label}</label>
      <input
        style={getStyles.input(inputStyle)}
        onChange={onChange}
        value={value}
        type={type}
        maxLength={maxLength}
        id={name}
        ref={inputRef}
        {...custom}
      />
      {error ? <span style={getStyles.error(errorStyle)}>{error}</span> : null}
    </section>
  );
}

Input.displayName = 'Input';

Input.propTypes = {
  /** Change the input's value */
  onChange: PropTypes.func.isRequired,
  /** The input's value */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  /** Type of input */
  type: PropTypes.string,
  /** The input's label */
  label: PropTypes.node.isRequired,
  /** The input's name */
  name: PropTypes.string.isRequired,
  /** Override the styles of the root element */
  style: PropTypes.instanceOf(Object),
  /** Override the styles of the input element */
  inputStyle: PropTypes.instanceOf(Object),
  /** Override the styles of the label element */
  labelStyle: PropTypes.instanceOf(Object),
  /** The input's max length */
  maxLength: PropTypes.number,
  /** Ref function to the element */
  inputRef: PropTypes.func,
  /** Disables the input */
  disabled: PropTypes.bool,
  /** Display an error message */
  error: PropTypes.node,
  /** Override the styles of the label element */
  errorStyle: PropTypes.instanceOf(Object)
};

Input.defaultProps = {
  style: {},
  inputStyle: {},
  labelStyle: {},
  maxLength: 500,
  inputRef: null,
  disabled: false,
  error: null,
  type: 'text',
  errorStyle: {}
};

export default pure(Radium(Input));
