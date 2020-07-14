import React, { Component, Suspense, lazy } from "react";
import Dropzone from 'react-dropzone';

class Issues extends Component {
    static propTypes = {};

    state = {
        loading: this.props.loading,
        type_of_issue: '',
        files: [],
        description: []
    };

    onDrop = (files) => {
        files.map(file => {
            const joinedFiles = this.state.files.concat(file);
            this.setState({
                files: joinedFiles
            });
        });
    };

    inputChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    stepComplete = (e) => {
        const {type_of_issue, files, description} = this.state;
        e.preventDefault();
        this.setState({'loading': true});
        const stepThreeInfo = {
            type_of_issue,
            files,
            description
        };
        this.props.stepComplete(stepThreeInfo);
    }

    render() {
        const files = this.state.files.map(file => (
            <li key={file.name}>
                {file.name} - {file.size} bytes
            </li>
        ));
        return (
            <>
            <div className="no-icon form-fields issues">
                <div className="left">
                    <div className="type-of-issue">
                        <div className="input-holder">
                            <label htmlFor="type_of_issue">Type of Issue:*</label>
                            <select
                                name="type_of_issue"
                                id="type_of_issues"
                                className="no-icon"
                                onChange={(e) => this.inputChange(e)}>
                                <option value="" defaultValue="selected">
                                    -- Please Select --
                                </option>
                                <option value="Cabinets kitchen/bar/wine bar">
                                    Cabinets kitchen/bar/wine bar
                                </option>
                                <option value="Ceiling &amp; Wall System">
                                    Ceiling &amp; Wall System
                                </option>
                                <option value="Doors">Doors</option>
                                <option value="Electrical">Electrical</option>
                                <option value="Fire Alarm/Sprinklers">
                                    Fire Alarm/Sprinklers
                                </option>
                                <option value="Fireplace/HVAC">Fireplace/HVAC</option>
                                <option value="Flooring">Flooring</option>
                                <option value="Foundation Cracks">Foundation Cracks</option>
                                <option value="Framing/Drywall/Taping">
                                    Framing/Drywall/Taping
                                </option>
                                <option value="Glass door/wall/shower">
                                    Glass door/wall/shower
                                </option>
                                <option value="Granite/Laminate Counter tops">
                                    Granite/Laminate Counter tops
                                </option>
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
                            <label htmlFor="photo_of_issue" className="mb-3">
                                Please Attach Photo of Issue: *
                            </label>
                            <Dropzone onDrop={this.onDrop}>
                                {({getRootProps, getInputProps}) => (
                                    <div className="fl" {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        <div className="warranty-upload-btn mt-0">Browse Files</div>
                                    </div>
                                )}
                            </Dropzone>
                            <div className={'clear'} />
                            <ul className={'pl-3'} >{files}</ul>
                        </div>
                    </div>
                </div>
                {/* <!-- end left --> */}

                <div className="right">
                    <div className="input-holder">
                        <label htmlFor="description">Description of Issue: *</label>
                        <textarea
                            className="no-icon description_input"
                            name="description"
                            id="description"
                            rows="10"
                            placeholder="Enter your description of the issue"
                            onChange={(e) => this.inputChange(e)}
                        ></textarea>
                        <div className="error_message description_input"></div>
                    </div>
                </div>
            </div>
            <div className="form-button mb-0">
                {
                    this.props.loading ? (
                        <button className="next-btn no-cursor">
                            <span className="btn-text">Loading...</span>
                        </button>
                    ) : 
                        <button className="next-btn" onClick={this.stepComplete}>
                            <span className="btn-text">Submit</span>
                        </button>
                }
            </div>
            </>
        );
    }
}

export default Issues;
