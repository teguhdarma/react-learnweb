import React, { Component } from 'react';
import Tablecomponent from "../components/Tablecomponent";
import { connect } from "react-redux";
import {deleteUserDetail, getUsersList}from '../actions/userAction';

class Homecontainer extends Component {
    componentDidMount() {
        this.props.dispatch(getUsersList());
        this.props.dispatch(deleteUserDetail());
    }

    render() {
        return (
            <div>
                <Tablecomponent/>
            </div>
        )
    }
}

export default connect()(Homecontainer);