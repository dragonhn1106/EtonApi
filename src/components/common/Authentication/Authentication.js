import React, { Component } from 'react';
import Parameter from '../Parameters/Parameter';
import Success from '../Success/Success';
import SuccessResponse from '../SuccessResponses/SuccessResponse';

class Authentication extends Component {
    render() {
        return (
            <div className="wrap">
                <div className="main-content__title">
                
                    <div className="main-content__title-top">
                        <h2>Authentication</h2>

                    </div>
                    <div className="main-content__title-body">
                    <div className="d-flex flex-row justify-content-between">
                        <h2>Authentication - Authorization</h2>
                        <div className="vertion">
                        <div className="dropdown">
                            <button className="btn  dropdown-toggle font-weight-bold" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            0.0.1
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item text-center" href="#">Action</a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item text-center disabled" href="#" style={{cursor: 'no-drop'}}>show up
                                to
                                version:</a>
                            <a className="dropdown-item text-center" href="#">0.0.1</a>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="main-content__body">
                    <div className="main-content__body-content">
                        <div className="main-content__body-content__top">
                            <p>Request a new OAuth Bearer Access Token</p>
                            <p className="tag-post">Post</p>
                            <div className="path-to-address">
                            <p>https://idu.eton.vn/connect/token</p>
                            </div>
                        </div>
                        <div className="main-content__body-content__center">
                            <Parameter />
                            <div className="main-content__body-content__center-top">
                                <Success />  
                                <SuccessResponse />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Authentication;