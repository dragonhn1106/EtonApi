import React, { Component } from 'react';

class Introduction extends Component {
    render() {
        return (
            <div className="wrap">
                <div className="main-content__title">
                    <div className="main-content__title-top">
                        <h2>Introduction</h2>
                        <p>ETON External API is a RESTful API that caters for creation of SaleOrder or PurchaseOrder resource and also actions like getting the other data such as Address, Product,...</p>
                        <p>For your convenience, other common API endpoints are also documented here.</p>
                    </div>
                </div>
            </div>
        
        );
    }
}

export default Introduction;