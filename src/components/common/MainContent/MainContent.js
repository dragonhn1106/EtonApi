import React, { Component } from 'react'
import "./MainContent.css";
export default class MainContent extends Component {
    render() {
        return (
            <div className="col-right">
                <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-8 col-12">
                        <div className="main-content">
                            {this.props.children}
                        </div>
                    </div>
                </div>
                </div>
            
            </div>
        )
    }
}
