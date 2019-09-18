import React, { Component } from 'react';

class SuccessResponse extends Component {
    render() {
        return (
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
        );
    }
}

export default SuccessResponse;