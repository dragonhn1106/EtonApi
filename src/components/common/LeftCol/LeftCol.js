import React, { Component } from 'react'
import "./LeftCol.css";
import {Link} from "react-router-dom";
export default class LeftCol extends Component {
    onClickItemMenu = () => {
        var header = document.getElementById("list-menu");
        console.log(header);
        
        var btns = header.getElementsByClassName("item-menu");
        console.log(btns);
        
        for (var i = 0; i < btns.length; i++) {
            btns[i].addEventListener("click", function () {
                var current = document.getElementsByClassName("active");
                current[0].className = current[0].className.replace(" active", "");
                this.className += " active";
            });
        };
    }
   
    render() {
        return (
            <div className="col-left">
                <div className="frm_search">
                    <input type="search" className="form-control" name id />
                </div>
                <div className="list-menu" id="list-menu">
                    <div className="nav-pills">
                        <ul>
                            <li className="item-menu active" >
                            <Link to="/introduction">
                                Introduction    
                            </Link>
                                
                            </li>
                            <li className="item-menu">
                                <a href="javscript:void(0)" onClick={this.onClickItemMenu}>Authentication</a>
                                <ul className="list-menu__menu-cap-2">
                                    <li className="item-tag-post">
                                        <Link to="/authorization">
                                            <div className="d-flex flex-row justify-content-between">
                                                <p className="m-0">Authorization</p>
                                                <p className="m-0 tag-status-post">POST</p>
                                            </div>
                                        </Link>
                                        
                                    </li>
                                </ul>
                            </li>
                        </ul>
                </div>
                </div>
            </div>
        )
    }
}
