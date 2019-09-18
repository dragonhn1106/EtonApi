import React, { Component } from 'react'
import "./LeftCol.css";
import {Link} from "react-router-dom";
import {connect} from "react-redux";
class LeftCol extends Component {
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
    
    renderListMenu=()=>{
        var result = null;
        var ItemsListMenu = this.props.listItemMenu
        if(ItemsListMenu.length >0){
            result = ItemsListMenu.map((itemMenu, index)=>{
                if(itemMenu.menu_cha >0){
                    return( 
                    <li className="item-menu">
                        <a href="javscript:void(0)" onClick={this.onClickItemMenu}>{itemMenu.menu_cha}</a>
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
                    );
                }
                else{

                }
               
            })
        }
        return result;
    }
    render() {
        console.log(this.props.listItemMenu);
        
        return (
            <div className="col-left">
                <div className="frm_search">
                    <input type="search" className="form-control" name id />
                </div>
                <div className="list-menu" id="list-menu">
                    <div className="nav-pills">
                        <ul>
                        {this.renderListMenu()} 
                            {/* <li className="item-menu active" >
                                                               
                            </li>
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
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

const mapSateToProps = (state)=>{
    return {
        listItemMenu: state.itemMenu
    }
}
export default connect(mapSateToProps, null)(LeftCol)
