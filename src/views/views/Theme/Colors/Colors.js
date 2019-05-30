import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import Picky from "react-picky";
import "react-picky/dist/picky.css";

import {
  Badge,
  Button,
  ButtonDropdown,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  Form,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';

import  APIService from '../../api/ApiService'


class Forms extends APIService {
  constructor(props) {
    super(props);
    this.state = {
      maxvalue: "",
      description: "",
      startdate: new Date(),
      enddate: new Date(),
      
      value: null,
      arrayValue: []
     
  };

    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.handleChangeStartDate = this.handleChangeStartDate.bind(this);
    this.handleChangeEndDate = this.handleChangeEndDate.bind(this);
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.selectOption = this.selectOption.bind(this);
    this.selectMultipleOption = this.selectMultipleOption.bind(this);

  }

  componentDidMount() {
    this.GetStores();


  }
 
  selectOption(value) {
    console.log("Vals", value);
    this.setState({ value });
  }
  selectMultipleOption(value) {
    console.count('onChange')
    console.log("Val", value);
    this.setState({ arrayValue: value });
  }


  handleSelectChange(selectedItems) {
    this.setState({ selectedItems });
  }

  handleChangeStartDate(date) {
    this.setState({
      startdate: date,
    });
  }

  handleChangeEndDate(date) {
    this.setState({
      EndingDate: date,
    });

  }

  result(params) {
    console.log(params);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value
    });
  } 
  
  state = { value: [] };

  onChange = (event) => {
      this.setState({
          value: [ ...event.target.value ]
      });
  }

  
  submit() {
    const test = sessionStorage.getItem('CampaignID');
    console.log("test", test);
      this.Create_Location(test, this.state.arrayValue);
     this.CreateCampaign(this.state.description,this.state.startdate,this.state.enddate,
                        this.state.maxvalue,this.startdate,this.enddate, true)
  }

  optionClicked(optionsList) {
    this.setState({ multiSelect: optionsList });
}



  render() {
  const bigList = this.state.stores;
  sessionStorage.setItem('CampaignID', this.state.campaign_id);

  return (

      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="12">
            <Card>
              <CardHeader>
                <strong>Add Campaign</strong>
              </CardHeader>
              <CardBody>
                <Row>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="name">Description</Label>
                      <Input type="text" id="name" placeholder="Description" value={ this.state.description } onChange={ this.handleChange } name="description"  />
                    </FormGroup>
                  </Col>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="maxvalue">Max Airtrime Value</Label>
                      <Input type="text" id="maxvalue" placeholder="Max Airtrime Value" value={ this.state.maxvalue } onChange={ this.handleChange }  name="maxvalue"   />
               
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="name">Start Date</Label>
                      <Col>
                   
                      <DatePicker
                       selected={this.state.startdate}
                       value={this.state.startdate}
                       onChange={this.handleChangeStartDate}
                       dateFormat="yyyy/MM/dd"
                     />
                     </Col>
                    </FormGroup>
                  </Col>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="name">End Date</Label>
                      <Col>
                   
                      <DatePicker
                       selected={this.state.enddate}
                       
                       value={this.state.enddate}
                       onChange={this.handleChangeEndDate}
                       dateFormat="yyyy/MM/dd"                       

                     />
                     </Col>
                    
                    </FormGroup>
                  </Col>
                </Row>
                
                       
                <Row>
                  <Col xs="4">
                    <FormGroup>
                      <Label htmlFor="ccmonth">Select Store(s)</Label>
                      <Picky
                        value={this.state.arrayValue}
                        options={bigList}
                        onChange={this.selectMultipleOption}
                        open={false}
                        valueKey="location_id"
                        labelKey="location_name"
                        multiple={true}
                        includeSelectAll={true}
                        includeFilter={true}
                        dropdownHeight={600}
                      />
          
                      </FormGroup>
                  </Col>
                  <Col xs="4">
                    <FormGroup>
                    <Label htmlFor="ccmonth">Message</Label>
                    <Col xs="4">
 
                      <textarea  rows="6"  cols="45" >
                      </textarea>     
                      </Col>
                             
                   </FormGroup>
                  </Col>
                
                </Row>

                <Row className="align-items-center">
                <Col xs="6">
                  <Button color="dark" onClick={this.submit} className="">Submit</Button>
                 </Col>
               
            </Row>
              </CardBody>
            </Card>
          </Col>
          
        </Row>
      </div>
      
    );
  }
}

export default Forms;
