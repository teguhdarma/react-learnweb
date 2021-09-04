import React from "react";
import { Col, Row, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
const Backcomponent = () => {
  return (
    <Row className="mb-2">
      <Col>
        <Link to="/">
          <Button color="primary" className="mr-5 mt-4">
            <FontAwesomeIcon icon={faArrowLeft} /> back
          </Button>
        </Link>
      </Col>
    </Row>
  );
};
export default Backcomponent;
