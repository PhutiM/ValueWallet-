        import React, { Component } from 'react';
        import axios from 'axios';
        import { Buffer } from 'buffer';
        import { Link, withRouter } from "react-router-dom";
        

        var mac = null;
        var SECRET;
        const crypto = require('crypto');
        var KEY = "TESTKEY";
        const fs = require('fs');
        
        var macd;

        function randomValueHex (len) {
            return crypto.randomBytes(Math.ceil(len))
        };

        function encrypt(message,key,iv){
            //let newKey = Buffer.from(key, "hex");
            var b64string = "Iqr16C928vfLEsMlUUoXxA==";
            var buf = new Buffer(b64string, 'base64'); // Ta-da
            var cipher = crypto.createCipheriv('aes-128-cbc', key, iv);
            //var cipher = crypto.createCipheriv('aes-128-cbc', key, iv);
            var ciph = cipher.update(message, 'utf8', 'base64');
            ciph += cipher.final('base64');
            console.log("key and vev " + buf.toString() + ' ' +  iv);
            return ciph;
        };

        function encrypt_pin(message,key,iv){
            let newKey = Buffer.from(key, "hex");	
            var cipher = crypto.createCipheriv('aes-128-cbc', key, iv);
            var ciph = cipher.update(message, 'utf8', 'base64');
            ciph += cipher.final('base64');
            console.log("key and vev " + newKey.toString() + ' ' +  iv);
            return ciph;
        };

        function biuld_mac(method,url,ts, h) {
            mac = method;
            mac	+= ' ';
            mac	+= url;
            mac	+=' ';
            mac	+="HTTP/1.1\n";
            mac	+= ts + "\n";
            mac	+= h;
            return mac
        };

         function fomatdate(date){
             return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`;
                 
        } ;

        var username = 'admin';
        var password = 'password';
        var session_url = 'http://localhost:7090';
        var basicAuth = 'Basic ' + new Buffer(username + ':' + password).toString('base64');
        
    
        var iv = randomValueHex(16);
        var nonce = Buffer.from(iv, "hex");
        var ts = "63717786853";  
 
        var axiosInstance = axios.create({
            url: session_url,
            'Content-Type': 'application/json',
            'Authorization': + basicAuth
        });
        var tokenvariable = sessionStorage.getItem('sessionToken');
        macd = biuld_mac('GET', '/api/v1/campaigns?offset=0&limit=10?search_count=true', ts, crypto.createHash('sha256', JSON.stringify()).update('undefined').digest('base64'));
        

        var encmacd = crypto.createHmac('sha256', toString()).update(macd).digest('base64'); 
        var MacAuth = 'MAC kid = \"'+ KEY +'\", ts='+ JSON.stringify(ts.toString()) + ', h=\"X-Body-Hash\"' + ', mac=' + JSON.stringify(encmacd) + ', access_token=\"'+ tokenvariable + '\"';
        const axiosMacInstance = axios.create({
            url: session_url,
            headers: {
                'Accept': 'application/json',
                'X-Body-Hash': crypto.createHash('sha256', JSON.stringify()).update('undefined').digest('base64'),   
                'x-nonce' : Buffer.from(Buffer.from(iv, "hex")).toString('base64'),
                'Authorization': MacAuth
            }

        });
         

        export default class APIService extends Component {
        state = {  cards: [],
                   campaigns: [],
                   total_count: 0,
                   transactions: [],
                   stores: [],
                   campaind_id:0,
                   products:[],
                   type:[],
                   value:[]
                }
        
                
        static sharedInstance = APIService.sharedInstance == null ? new APIService() : this.sharedInstance;
        
        Login(username, password) {
                axiosInstance
                    .post(session_url + '/api/v1/user/login', {    
                        username: username,
                        password: password
                })
                    .then(res => { 
                     console.log(res.data[0].token)
                     sessionStorage.setItem('sessionToken', res.data[0].token);
                     window.location="/";

                 })
                    .catch(function(error) {
                        console.log(axios.defaults.headers.common);
                    });
                }  
            
                
            GetCards() {
            axiosMacInstance
                .get(session_url + '/api/v1/accounts/cards')
                .then(response => {
                    this.setState({cards: response.data.results})
                    
                })
                .catch(function(error) {
                    console.log(error);
                  });
                
                }
         
            GetCampaigns(Offset, Limit) {
                axiosMacInstance
                .get(session_url + '/api/v1/campaigns',{ params: {description : "", offset : Offset, limit : Limit, search_count : true
                  }})
                .then(response => {
                    this.setState({ campaigns: response.data[0].results, total_count: response.data[0].total_count})
                   
                })
                .catch(function(error) {
                    console.log(error);  
                  });
            }   
                 

            GetTransactions(FromDate,ToDate,Store,Card,Msisdn,Offset, Limit) {
                axiosMacInstance
                .get(session_url + '/api/v1/transactions',{ params:{from_datetime: FromDate, to_datetime : ToDate, offset : Offset, limit : Limit,
                        location: Store,
                        card : Card,
                        msisdn: Msisdn,
                        search_count:true}
                })
                .then(response => {
                    this.setState({ transactions: response.data[0].results, total_count: response.data[0].total_count})
                   
                })
                .catch(function(error) {
                    console.log(error);  
                  });
            }  
            Create_Location(CampaignID, Locations) {
                var locations = {locations: []}  
                macd = biuld_mac('POST', '/api/v1/campaigns', ts, crypto.createHash('sha256').update(JSON.stringify(locations)).digest('base64'));
                var encmacd = crypto.createHmac('sha256', toString()).update(macd).digest('base64'); 
                var MacAuthCamp = 'MAC kid = \"'+ KEY +'\", ts='+ JSON.stringify(ts.toString()) + ', h=\"X-Body-Hash\"' + ', mac=' + JSON.stringify(encmacd) + ', access_token=\"'+ tokenvariable + '\"';
             
                axios.post(session_url + '/api/v1/campaigns/' + '518772' + '/locations', locations,
                      { headers: {
                          'Accept': 'application/json',
                          'X-Body-Hash': crypto.createHash('sha256').update(JSON.stringify(locations)).digest('base64'),   
                          'x-nonce' : Buffer.from(Buffer.from(iv, "hex")).toString('base64'),
                          'Authorization': MacAuthCamp
                      }})
                  .then(response => {
            return response.data.results                         
                  })
                  .catch(function(error) {
                      console.log(error);  
                    });
              }  
            
           
            CreateCampaign(Description,Start_Date,End_Date,Max_Rewards,Created_at,Updated_at,  SMSEnabled) {
             var campaigndata = { description : Description, start_date : fomatdate(Start_Date), end_date : fomatdate(End_Date), max_reward_value : Number(Max_Rewards), 
                                    reward_value : 0, created_at : Created_at, updated_at : Updated_at, sms_message : "Testing" };
           
              macd = biuld_mac('POST', '/api/v1/campaigns', ts, crypto.createHash('sha256').update(JSON.stringify(campaigndata)).digest('base64'));
              var encmacd = crypto.createHmac('sha256', toString()).update(macd).digest('base64'); 
              var MacAuthCamp = 'MAC kid = \"'+ KEY +'\", ts='+ JSON.stringify(ts.toString()) + ', h=\"X-Body-Hash\"' + ', mac=' + JSON.stringify(encmacd) + ', access_token=\"'+ tokenvariable + '\"';
           
              axios.post(session_url + '/api/v1/campaigns', campaigndata,
                    { headers: {
                        'Accept': 'application/json',
                        'X-Body-Hash': crypto.createHash('sha256').update(JSON.stringify(campaigndata)).digest('base64'),   
                        'x-nonce' : Buffer.from(Buffer.from(iv, "hex")).toString('base64'),
                        'Authorization': MacAuthCamp
                    }})
                .then(response => {
                    this.setState({ campaign_id: response.data.campaign_id})

                   
                })
                .catch(function(error) {
                    console.log(error);  
                  });
            }  
            
              GetStores() {
                axiosMacInstance
                    .get(session_url + '/api/v1/accounts/locations?offset=0&limit=10')
                    .then(response => {
                        console.log(response.data.results);  
                        this.setState({ stores: response.data.results, total_count: response.data.total_count})
                    })
                    .catch(function(error) {
                        console.log(error);  
                      });
            }
       

            GetTopTen(Offset, Limit) {

                var data = { location_id: [],offset: Offset,limit:Limit, card_group : [], search_count:false};

                macd = biuld_mac('POST', '/api/v1/transactions/report?offset=0&limit=10&search_count=false', ts, crypto.createHash('sha256').update(JSON.stringify(data)).digest('base64'));
                var encmacd = crypto.createHmac('sha256', toString()).update(macd).digest('base64'); 
                var MacAuthCamp = 'MAC kid = \"'+ KEY +'\", ts='+ JSON.stringify(ts.toString()) + ', h=\"X-Body-Hash\"' + ', mac=' + JSON.stringify(encmacd) + ', access_token=\"'+ tokenvariable + '\"';

                axios.post(session_url + '/api/v1/transactions/reports',  
                data, 
                 {  
                    params: { type: 'qty',from_datetime: '2017-01-01',to_datetime:'2099-12-31'},                
                    headers: {
                        'Accept': 'application/json',
                        'X-Body-Hash': crypto.createHash('sha256').update(JSON.stringify(data)).digest('base64'),   
                        'x-nonce' : Buffer.from(Buffer.from(iv, "hex")).toString('base64'),
                        'Authorization': MacAuthCamp
                    }})
                .then(response => {
                   this.setState({ products: response.data})

                })
                .catch(function(error) {
                    console.log(error);  
                });
                }  
      
            
        }
     

