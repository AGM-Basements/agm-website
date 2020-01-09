import React, { Component, Suspense, lazy } from 'react';
import Dropzone from 'react-dropzone';

class UploadFiles extends Component {
  static propTypes = {
  };

  state = {
    files: [],
  };

  onDrop = (files) => {
    files.map(file => {
      const joinedFiles = this.state.files.concat(file);
      this.setState({
        files: joinedFiles
      });
    });
  };

  stepComplete = (e) => {
    e.preventDefault();
    this.props.stepComplete(this.state.files);
  }  

  render() {
    const files = this.state.files.map(file => (
      <li key={file.name}>
        {file.name} - {file.size} bytes
      </li>
    ));
    return (
      <>
        <Dropzone onDrop={this.onDrop}>
          {({getRootProps, getInputProps}) => (
            <section id="file-upload">
              <div {...getRootProps()}>
                <input {...getInputProps()} />
                <h3>Please Attach Your Warranty Certificate or Proof of Final Payment/Invoice</h3>
                <p>Drag and drop here or...</p>
                <div className="button">Browse Files</div>
              </div>
            </section>
          )}
        </Dropzone>

        <ul>{files}</ul>

        {/* <div id="uploadpreview" className="dropzone-previews">
          <div className="preview-template" id="tpl" style={{ display: 'none' }}>
            <div className="dz-preview dz-file-preview">
              <div className="dz-details">
                <img data-dz-thumbnail />
              </div>
              <div className="dz-filename"><span data-dz-name></span></div>
              <div className="dz-progress"><span className="dz-upload" data-dz-uploadprogress></span></div>
              <div className="dz-error-message"><span data-dz-errormessage></span></div>
            </div>
          </div>
        </div> */}

        <div className="form-button">
          <button className="next-btn" onClick={this.stepComplete}><span className="btn-text">Next Section</span></button>
        </div>
      </>
    );
  }
}

export default UploadFiles;