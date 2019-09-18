import React, { Component } from 'react';

class Success extends Component {
    render() {
        return (
            <div className="main-content__body-content__center-top__component">
                                <p className="font-weight-bold">Success 200</p>
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
                                        <td scope="row">access_token</td>
                                        <td>String</td>
                                        <td>
                                        <p className="m-auto default">
                                            is a token with every API request to ETON API.
                                        </p>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>expires_in</td>
                                        <td>Number</td>
                                        <td>
                                        <p className="m-auto default-value">
                                            the token expired time, period time in <span className="alert alert-danger p-1">second
                                            </span> after getting token access.
                                        </p>
                                        <p className="m-auto allowed_values">
                                            Allowed values: <span className="alert alert-danger p-1">Bearer</span>
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

export default Success;