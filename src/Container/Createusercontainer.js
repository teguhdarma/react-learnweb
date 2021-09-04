import React, { Component } from 'react'
import { Container } from 'reactstrap'
import Backcomponent from '../components/Backcomponent'
import FormComponent from '../components/FormComponent'
import { connect } from "react-redux";
import { postUserCreate } from "../actions/userAction";
import Swal from "sweetalert2";

const mapStateToProps = (state) => {
    return {
      getResponeDataUser: state.users.getResponeDataUser,
      ErrorResponeDataUser: state.users.ErrorResponeDataUser,
    };
  };


 class Createusercontainer extends Component {
    handleSubmit(data){
        this.props.dispatch(postUserCreate(data))
    }


    render() {
        if(this.props.getResponeDataUser){
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
                if (result.isConfirmed) {
                  Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                }
              })
        }
        return (
            <Container>
                <Backcomponent/>
                <h1>creete</h1>
                <FormComponent onsubmit={(data)=>this.handleSubmit(data)}/>
            </Container>
        )
    }
}
export default connect(mapStateToProps,null)(Createusercontainer)