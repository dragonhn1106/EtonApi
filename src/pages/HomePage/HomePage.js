import React, { Component } from 'react';

class HomePage extends Component {
    render() {
        return (
            <div className="wrap">
                <div className="main-content__title">
                    <div className="main-content__title-top">
                        <div className="d-flex flex-row justify-content-between">
                            <h2>Eton WMS ExternalAPI</h2>
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
                    <div className="main-content__title-body">
                        <p>
                            ETON External API Documentation for Client Integration
                        </p>
                    </div>
                </div>
            </div>
                            
        );
    }
}

export default HomePage;