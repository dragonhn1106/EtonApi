import React, { Component } from 'react';

class Parameter extends Component {
    render() {
        return (
            <div className="main-content__body-content__center-top">
            <p className="font-weight-bold">Parameter</p>
            <div className="table-responsive">
            <table className="table table-bordered">
            <thead>
                <tr>
                <th scope="col">Field</th>
                <th scope="col">Type</th>
                <th scope="col">Description</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                <td scope="row">grant_type</td>
                <td>String</td>
                <td>
                    <p className="m-auto default-value">
                    Default value: <span className="alert alert-danger p-1">client_credentials</span>
                    </p>
                    <p className="m-auto allowed_values">
                    Allowed values: <span className="alert alert-danger p-1">client_credentials</span>
                    </p>
                </td>
                </tr>
                <tr>
                <td>scope</td>
                <td>String</td>
                <td>
                    <p className="m-auto default-value">
                    Default value: <span className="alert alert-danger p-1">externalapi</span>
                    </p>
                    <p className="m-auto allowed_values">
                    Allowed values: <span className="alert alert-danger p-1">externalapi</span>
                    </p>
                </td>
                </tr>
                <tr>
                <td>client_id</td>
                <td>client_secret</td>
                <td>
                    <p className="m-auto default">
                    Client_Id provided by ETON
                    </p>
                </td>
                </tr>
            </tbody>
            </table>
        </div>
        </div>
        
        );
    }
}

export default Parameter;