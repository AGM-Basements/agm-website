import React, { Component } from 'react';

class TextInput extends Component {
  static propTypes = {
  };

  render() {
    const { type, className, name, placeholder, onChange, errorMessageClass, errorMessage, id } = this.props;
    return (
      <>
        <input type={type} className={`className ${errorMessageClass}`} name={name} placeholder={placeholder} onChange={onChange} id={id} />
        {errorMessage ? <div className={`error_message ${errorMessageClass}`}>{errorMessage}</div> : null}
      </>
    );
  }
}

export default TextInput;