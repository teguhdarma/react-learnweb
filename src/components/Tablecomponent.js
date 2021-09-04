import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import { Container, Button, Row, Col, Spinner } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faInfo,
  faTrash,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import ToolkitProvider, { Search } from "react-bootstrap-table2-toolkit";
import paginationFactory from "react-bootstrap-table2-paginator";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
const { SearchBar } = Search;

const columns = [
  {
    dataField: "id",
    text: "ID",
    sort: true,
    headerStyle: () => {
      return { width: "5%" };
    },
  },
  {
    dataField: "name",
    text: " Name",
    sort: true,
  },
  {
    dataField: "alamat",
    text: "alamat",
    sort: true,
  },
  {
    dataField: "nohp",
    text: "no hp",
    sort: true,
  },
  {
    dataField: "link",
    text: "Action",
    formatter: (rowContent, row) => {
      return (
        <div>
          <Link to={"detail/" + row.id}>
            <Button color="dark" className="mr-5">
              <FontAwesomeIcon icon={faInfo} /> detail
            </Button>
          </Link>
          <Link to={"edit/" + row.id}>
            <Button color="blue" className="mr-2">
              <FontAwesomeIcon icon={faEdit} /> edit
            </Button>
          </Link>

          <Button color="red" className="mr-2">
            <FontAwesomeIcon icon={faTrash} /> delete
          </Button>
        </div>
      );
    },
  },
];

const defaultSorted = [
  {
    dataField: "id",
    order: "asc",
  },
];
const mapStateToProps = (state) => {
  return {
    getUsersList: state.users.getUsersList,
    ErrorUsersList: state.users.ErrorUsersList,
  };
};

const Tablecomponent = (props) => {
  return (
    <Container>
      {props.getUsersList ? (
        <ToolkitProvider
          bootstrap4
          keyField="id"
          data={props.getUsersList}
          columns={columns}
          defaultSorted={defaultSorted}
          search
          pagination={paginationFactory()}
        >
          {(props) => (
            <div>
              <Row>
                <Col>
                  <Link to={"create/"}>
                    <Button color="blue" className="mr-5 mt-4">
                      <FontAwesomeIcon icon={faUserPlus} /> create user
                    </Button>
                  </Link>
                </Col>
                <Col>
                  <div className="mr-5 mt-4">
                    <SearchBar {...props.searchProps} placeholder="search" />
                  </div>
                </Col>
              </Row>

              <hr />
              <BootstrapTable
                {...props.baseProps}
                pagination={paginationFactory()}
              />
            </div>
          )}
        </ToolkitProvider>
      ) : (
          <div className ="text center">
              {props.errorUsersList ? <h4>{props.errorUsersList}</h4>:<Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>}
        
        </div>
      )}
    </Container>
  );
};
export default connect(mapStateToProps,null)(Tablecomponent);
