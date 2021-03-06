import React, {Component} from 'react';
import {BootstrapTable, TableHeaderColumn, ExportCSVButton} from 'react-bootstrap-table';
import _ from 'lodash';
import APIService from '../api/ApiService';
import Axios from 'axios';
        

var camps;
var dataTable = _.range(1, 5).map(x => ({id: x, name: `Name ${x}`, surname: `Surname ${x}`}));
console.log("This", dataTable);
// Simulates the call to the server to get the data
const fakeDataFetcher = {
  fetch(page, size) {
    return new Promise((resolve, reject) => {
      resolve({items: _.slice(dataTable, (page-1)*size, ((page-1)*size) + size), total: 20});
    });
  }
};


class Widgets extends APIService {
 
  constructor(props) {
    super(props);
     
    this.state = {
      items: [],
      totalSize: 0,
      page: 1,
      sizePerPage: 10,
   };
    this.fetchData = this.fetchData.bind(this);
    this.GetCampaigns = this.GetCampaigns.bind(this)
    this.handlePageChange = this.handlePageChange.bind(this);
    this.handleSizePerPageChange = this.handleSizePerPageChange.bind(this);
  }

  
  componentDidMount() {
    this.GetTransactions("2019-01-01","2019-04-30","","","",0, 50)

  }

  fetchData(page = this.state.page, sizePerPage = this.state.sizePerPage) {
    fakeDataFetcher.fetch(page, sizePerPage)
      .then(data => {
        this.GetTransactions("2019-01-01","2019-04-30","","","", page, sizePerPage);
        this.setState({items: this.state.campaigns, totalSize: this.state.total_count, page, sizePerPage});
      });
  }

  handlePageChange(page, sizePerPage) {
    this.fetchData(page, sizePerPage);


  }

  handleSizePerPageChange(sizePerPage) {
    // When changing the size per page always navigating to the first page
    this.fetchData(1, sizePerPage);
  }

  createCustomExportCSVButton = (onClick) => {
    return (
      <ExportCSVButton
        btnText='Export CSV'
        onClick={ () => this.handleExportCSVButtonClick(onClick) }/>
    );
  }

  handleExportCSVButtonClick = (onClick) => {
    // Custom your onClick event here,
    // it's not necessary to implement this function if you have no any process before onClick
    console.log('This is my custom function for ExportCSVButton click event');
    onClick();
  }


  render() {
   
   const options = {
      onPageChange: this.handlePageChange,
      onSizePerPageList: this.handleSizePerPageChange,
      page: this.state.page,
      sizePerPage: this.state.sizePerPage,
      exportCSVBtn: this.createCustomExportCSVButton,


    };
    const camp = this.state.transactions;
  
    return (

   

       <BootstrapTable
        data={camp}
        options={options}
        fetchInfo={{dataTotalSize: this.state.total_count}}
        remote
        pagination
        striped
        hover
        condensed
        exportCSV
        search
      >
        <TableHeaderColumn dataField="transaction_id" isKey dataAlign="left">Id</TableHeaderColumn>
        <TableHeaderColumn dataField="submission_datetime" dataAlign="left">Date</TableHeaderColumn>
        <TableHeaderColumn dataField="location" dataAlign="left">Store</TableHeaderColumn>
        
      </BootstrapTable>

      
    );
  }
}




export default Widgets;
