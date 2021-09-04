import React, { Component } from 'react'
import { Container } from 'reactstrap'
import Backcomponent from '../components/Backcomponent'
import { connect } from "react-redux";
import { getUserDetail } from '../actions/userAction';
import DetailUserComponent from '../components/DetailUserComponent';

 class Detailusercontainer extends Component {
    componentDidMount(){
        this.props.dispatch(getUserDetail(this.props.match.params.id));
    }



    render() {
        return (
            <Container>
                <Backcomponent/>
                <h1>Detail User {this.props.match.params.id}</h1>
                <DetailUserComponent/>
            </Container>
        )
    }
}
export default connect ()(Detailusercontainer);
