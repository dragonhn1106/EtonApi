import React, { Component } from 'react';

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
                            <div className="main-content__body-content__center-top">
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
                                <div className="main-content__body-content__center-top__component">
                                <div className="tab-panel">
                                <ul className="nav nav-tabs" id="myTab" role="tablist">
                                    <li className="nav-item">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Success Response</a>
                                    </li>
                                </ul>
                                <div className="tab-content" id="myTabContent">
                                    <div className="tab-pane fade show active border p-3 mt-3" id="home" role="tabpanel" aria-labelledby="home-tab" style={{overflow: 'auto', width: '100%'}}>
                                    <p className="m-0">HTTP/1.1 200 OK</p>
                                    <div className="j-son">
                                        {'{'}
                                        <p className="m-0">"access_token":</p>
                                        <p className="m-0 text-nowrap">
                                        "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6ImEzck1VZ01Gdjl0UGNsTGE2eUYzekFrZnF1RSIsImtpZCI6ImEzck1VZ01Gdjl0UGNsTGE2eUYzekFrZnF1RSJ9.eyJpc3MiOiJodHRwczovL2lkdC5ldG9uLnZuIiwiYXVkIjoiaHR0cHM6Ly9pZHQuZXRvbi52bi9yZXNvdXJjZXMiLCJleHAiOjE1MjQwMTk0MDcsIm5iZiI6MTUyMzkzMzAwNywiY2xpZW50X2lkIjoidGlraSIsImNsaWVudGNvZGUiOiJUS0kiLCJjbGllbnRpbmZvIjoie1wiSWRcIjozLFwiTmFtZVwiOlwiQ8O0bmcgVHkgVElLSVwiLFwiRXRvbkNvZGVcIjpcIlRLSVwifSIsInNjb3BlIjoiZXh0ZXJuYWxhcGkifQ.PLTSq_0R81zXOZmwbn4886yXIwPU3nSIbhLAEeEEYZRE-yCW7Moa1GWlKJQS5BKKASCN1-sDu7hktWI8UmTmjHT1zgoxiJT4U15NHKDoxkTibUSj6m_4ni3CWcht1x5DftFLByDtqoDaSEOfekML0dqabU3-nBx6ZoewiBYVLmjjRdZZdc2WcWP8yzifAeLYDg6WP-YgxUQROmqz733lkWkMWKHDF4Ej2NYSLIoJ4sSZIdLCjHbrTwCMsvlJ5w158yi1KIVL6MegyTE6npLfIZCtYKXvG7YZ1Cd5WanQR8dK08X7j43TT8CmoXEWOMJ0rmodQOR7Lst6OY85jw-NCA",
                                        </p>
                                        <p className="m-0"> "expires_in": 86400,</p>
                                        <p className="m-0">"token_type": "Bearer"</p>
                                        {'}'}
                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Authentication;