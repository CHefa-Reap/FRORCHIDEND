import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';
import SnackBar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'

export class EditCustomer extends Component {

    constructor(props){
        super(props);
        this.state = {Snackbaropen: false, Snackbarmsg:''};
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    SnackbarClose = (event) => {
        this.setState({Snackbaropen:false})
      };

      handleSubmit(event){
        //event.preventDefault();
        fetch('http://localhost:54902/api/customer',{
            method:'PUT',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body:JSON.stringify({
              RegnoID: event.target.RegnoID.value,  
              empName: event.target.empName.value,
              empAddress: event.target.empAddress.value,
              nic:event.target.nic.value,
              telephoneNo: event.target.telephoneNo.value,
              password: event.target.password.value
            })
          })
            .then(res=> res.json())
            .then((result) =>
            {
              //alert("Not Fucked")
              this.setState({Snackbaropen:true, Snackbarmsg:result});
            },
            (error)=>{
              //alert("Fucked")
              this.setState({Snackbaropen:true, Snackbarmsg:'Added Sucessfully'});
            })
        
    }

    render(){
        return(
            <div className="container">
            <SnackBar 
            anchorOrigin={{vertical:'bottom', horizontal:'left'}}
            open = {this.state.Snackbaropen}
            autoHideDuration = {6000}
            onClose = {this.SnackbarClose}
            message = {<span id ="message-id">{this.state.Snackbarmsg}</span>}
            action = {[
            <IconButton 
              key="close" 
              arial-label="close" 
              color ="inherit" 
              onClick = {this.SnackbarClose}>
              X
            </IconButton>
            ]}
         />
            

            <Modal
                  {...this.props}
                  size="lg"
                  aria-labelledby="contained-modal-title-vcenter"
                  centered
                >
                  <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                      Edit Customer
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form onSubmit = {this.handleSubmit}>
            
                    <Form.Group controlId="RegnoID">
                <Form.Label>Customer ID</Form.Label>
                <Form .Control 
                  type="text" 
                  required
                  disabled
                  defaultValue = {this.props.cusid}
                  name = "RegnoID"
                  placeholder="Registration No" />
              </Form.Group>

              <Form.Row>
                <Col controlId="empName">
                <Form.Label>Customer Name</Form.Label>
                  <Form .Control 
                    type="text" 
                    required
                    defaultValue = {this.props.cusname}
                    name = "empName" 
                    placeholder="Customer Name" />
                </Col>
                <Col controlId="empAddress">
                <Form.Label>Customer Address</Form.Label>
                  <Form .Control 
                    type="text" 
                    required
                    defaultValue = {this.props.cusadd}
                    name = "empAddress" 
                    placeholder="Customer Address" />
                </Col>
              </Form.Row>
              <Form.Group controlId="nic">
                <Form.Label>Customer NIC</Form.Label>
                <Form .Control 
                  type="text" 
                  required
                  defaultValue = {this.props.cusnic}
                  name = "nic"
                  placeholder="NIC" />
              </Form.Group>

              <Form.Row>
                <Col controlId="telephoneNo">
                <Form.Label>Customer Telephone No</Form.Label>
                  <Form .Control 
                    type="text" 
                    required
                    defaultValue = {this.props.custeleno}
                    name = "telephoneNo" 
                    placeholder="Telephone No" />
                </Col>
                <Col controlId="password">
                <Form.Label>Customer Password</Form.Label>
                  <Form .Control 
                    type="password" 
                    required
                    defaultValue = {this.props.cuspass}
                    name = "password" 
                    placeholder="Password" />
                </Col>
              </Form.Row>


              <Button variant="primary" type="submit">
                Update Customer
              </Button>
            </Form>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                  </Modal.Footer>
                </Modal>
                        </div>
                    );
                }
}