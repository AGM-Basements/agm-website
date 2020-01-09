import React, { Component, Suspense, lazy } from 'react';

class Issues extends Component {
  static propTypes = {
  };

  state = {
  };

  render() {
    return (
      <>
        <div className="no-icon form-fields issues">
          <div className="left">
            <div className="type-of-issue">
              <div className="input-holder">
                <label for="type_of_issue">Type of Issue:*</label>
                <select name="type_of_issue" id="type_of_issues" className="no-icon">
                  <option value="" selected="selected">-- Please Select --</option>
                  <option value="Cabinets kitchen/bar/wine bar">Cabinets kitchen/bar/wine bar</option>
                  <option value="Ceiling &amp; Wall System">Ceiling &amp; Wall System</option>
                  <option value="Doors">Doors</option>
                  <option value="Electrical">Electrical</option>
                  <option value="Fire Alarm/Sprinklers">Fire Alarm/Sprinklers</option>
                  <option value="Fireplace/HVAC">Fireplace/HVAC</option>
                  <option value="Flooring">Flooring</option>
                  <option value="Foundation Cracks">Foundation Cracks</option>
                  <option value="Framing/Drywall/Taping">Framing/Drywall/Taping</option>
                  <option value="Glass door/wall/shower">Glass door/wall/shower</option>
                  <option value="Granite/Laminate Counter tops">Granite/Laminate Counter tops</option>
                  <option value="Painting">Painting</option>
                  <option value="Plumbing">Plumbing</option>
                  <option value="Separate Entrances">Separate Entrances</option>
                  <option value="Tiles/ Stone">Tiles/ Stone</option>
                  <option value="Windows">Windows</option>
                  <option value="Other">Other</option>
                </select>
                <div className="error_message type-of-issue-input"></div>
              </div>
            </div>
            {/* <!-- end type of issue --> */}

            <div className="photo">
              <div className="input-holder">
                <label for="photo_of_issue">Please Attach Photo of Issue: *</label>
                {/* <!-- <input type="file" className="no-icon"> --> */}
                <div id="issueUpload">
                  <div className="dz-message needsclick">
                    <div className="warranty-upload-btn">Browse Files</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- end left --> */}

          <div className="right">
            <div className="input-holder">
              <label for="description">Description of Issue: *</label>
              <textarea className="no-icon description_input" name="description" id="description" rows="10" placeholder="Enter your description of the issue"></textarea>
              <div className="error_message description_input"></div>
            </div>
          </div>
        </div>

        <div id="issueUploadPreview" className="dropzone-previews issue-upload">
          <div className="preview-template" id="issueTpl" style={{ display: 'none' }}>
            <div className="dz-preview dz-file-preview">
              <div className="dz-details">
                <img data-dz-thumbnail />
              </div>
              <div className="dz-filename"><span data-dz-name></span></div>
              <div className="dz-progress"><span className="dz-upload" data-dz-uploadprogress></span></div>
              <div className="dz-error-message"><span data-dz-errormessage></span></div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Issues;