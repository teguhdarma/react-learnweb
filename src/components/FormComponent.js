
import React, { Component } from "react";
import { connect } from "react-redux";
import { Col, FormGroup, Input, Label, Row,Button } from "reactstrap";
import { reduxForm, Field } from "redux-form";
import UserValidation from "../validations/UserValidation";

const renderField = ({
  input,
  type,
  Placeholder,
  label,
  disabled,
  readOnly,
  meta: { touched, error, warning },
}) => (
  <Row>
    <Col md="12">
      <Label htmlFor="{input}" className="col-form-label">
        {label}
      </Label>
    </Col>
    <Col md="12">
      <Input
        {...input}
        type={type}
        Placeholder={Placeholder}
        disabled={disabled}
        readOnly={readOnly}
      ></Input>

      {touched &&
        ((error && <p style={{ color: "red" }}>{error}</p>) ||
          (warning && <p style={{ color: "brown" }}>{warning}</p>))}
    </Col>
  </Row>
);

class FormComponent extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <FormGroup row mb ="6">
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="umur"
                component={renderField}
                label="umur:"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="nama"
                component={renderField}
                label="nama:"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="alamat"
                component={renderField}
                label="alamat:"
              />
            </FormGroup>
          </Col>
          <Col md={6}>
            <FormGroup>
              <Field
                type="text"
                name="nohp"
                component={renderField}
                label="nohp:"
              />
            </FormGroup>
          </Col>
        </FormGroup>
        <FormGroup row mt="5" >
        <Col md="12" >
        <FormGroup>
        
              <Button
                color="dark"
                type="submit"
                disabled={this.props.submitting}
                >submit</Button>
              
              </FormGroup>
              </Col>
            </FormGroup>
          
      </form>
    );
  }
}
FormComponent = reduxForm({
  form: "formCreateUser",
  validate: UserValidation,
  enableReinitialize: true,
})(FormComponent);

export default connect()(FormComponent);
