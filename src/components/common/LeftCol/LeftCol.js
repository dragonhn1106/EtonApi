import React, { Component } from 'react'
import "./LeftCol.css";

export default class LeftCol extends Component {
    render() {
        return (
            <div className="col-left">
                <div className="frm_search">
                <input type="search" className="form-control" name id />
                <div className="btn__close">
                    <a href="javascript:void(0)"><i className="fa fa-times" aria-hidden="true" /></a>
                </div>
                </div>
                <div className="list-menu" id="list-menu">
                <div className="nav-pills">
                    <ul>
                    <li className="item-menu active" >
                        <a href="javascript:void(0)">Introduction</a>
                    </li>
                    <li className="item-menu">
                        <a href="javscript:void(0)">Authentication</a>
                        <ul className="list-menu__menu-cap-2">
                        <li className="item-tag-post">
                            <div className="d-flex flex-row justify-content-between">
                            <p className="m-0">Authorization</p>
                            <p className="m-0 tag-status-post">POST</p>
                            </div>
                        </li>
                        <li className="item-tag-get">
                            <div className="d-flex flex-row justify-content-between">
                            <p className="m-0">Authorization</p>
                            <p className="m-0 tag-status-get">GET</p>
                            </div>
                        </li>
                        <li className="item-tag-post">
                            <div className="d-flex flex-row justify-content-between">
                            <p className="m-0">Authorization</p>
                            <p className="m-0 tag-status-post">POST</p>
                            </div>
                        </li>
                        </ul>
                    </li>
                    <li className="item-menu" >
                        <a href="javscript:void(0)">Authentication</a>
                        <ul className="list-menu__menu-cap-2">
                        <li className="item-tag-post">
                            <div className="d-flex flex-row justify-content-between">
                            <p className="m-0">Authorization</p>
                            <p className="m-0 tag-status-post">POST</p>
                            </div>
                        </li>
                        <li className="item-tag-get">
                            <div className="d-flex flex-row justify-content-between">
                            <p className="m-0">Authorization</p>
                            <p className="m-0 tag-status-get">GET</p>
                            </div>
                        </li>
                        <li className="item-tag-post">
                            <div className="d-flex flex-row justify-content-between">
                            <p className="m-0">Authorization</p>
                            <p className="m-0 tag-status-post">POST</p>
                            </div>
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
// export function onClickMenu() {
//     var header = document.getElementById("list-menu");
//     var btns = header.getElementsByClassName("item-menu");
//     for (var i = 0; i < btns.length; i++) {
//         btns[i].addEventListener("click", function () {
//             var current = document.getElementsByClassName("active");
//             current[0].className = current[0].className.replace(" active", "");
//             this.className += " active";
//         });
//     }
//   }
