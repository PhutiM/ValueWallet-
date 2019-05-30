import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
import axios from 'axios';
import  APIService from '../../api/ApiService'

 var password = ""; 
 var username = "";
 var tokenvariable = "";

class Login extends Component {
  
  
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
  };
    
    this.publish = this.publish.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  
  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  } 

  publish() {
    
    password = this.state.password;
    username = this.state.username;
    APIService.sharedInstance.Login(username, password);


  }
  

render() {

    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="7">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h2>Login</h2>
                      <p className="text-muted">Welcome to bonsella Rewards Web Portal.</p>
                      <ul> 
                      </ul> 
                      <InputGroup className="mb-3">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-user"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="text" placeholder="Username" autoComplete="username" value={ this.state.username } onChange={ this.handleChange } name="username" />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="icon-lock"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input type="password" placeholder="Password" autoComplete="current-password" value={ this.state.password } onChange={ this.handleChange } name="password" />
                      </InputGroup>
                      <Row>
                        <Col xs="6">
                          <Button color="dark" onClick={this.publish} className="px-4">Login</Button>
                        </Col>
                        <Col xs="6" className="text-right">
                        </Col>
                      </Row>
                    </Form>
                  </CardBody>
                </Card>
               </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
 }

export default Login;

