import React from "react";
import { connect } from "react-redux";
import { Table } from "reactstrap";

const mapStateToProps = (state) => {
  return {
    getUserDetail: state.users.getUserDetail,
    ErrorUserDetail: state.users.ErrorUserDetail,
  };
};
const DetailUserComponent = (props) => {
  return (
    <Table striped>
      <tbody>
        <tr>
          <td width="200">Nama</td>
          <td width="10">:</td>
          <td>{props.getUserDetail.name}</td>
        </tr>
        <tr>
          <td>alamat</td>
          <td>:</td>
          <td>{props.getUserDetail.alamat}</td>
        </tr>
        <tr>
          <td>umur</td>
          <td>:</td>
          <td>{props.getUserDetail.umur}</td>
        </tr>
        <tr>
          <td>no hp</td>
          <td>:</td>
          <td>{props.getUserDetail.nohp}</td>
        </tr>
      </tbody>
    </Table>
  );
};

export default connect(mapStateToProps, null)(DetailUserComponent);
