import React, {Component} from 'react';
import {Modal, Button, Row, Col, Form} from 'react-bootstrap';
import SnackBar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'

export class AddEmployee extends Component{

    constructor(props){
        super(props);

        this.state = {Snackbaropen: false, Snackbarmsg:''};

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    SnackbarClose = (event) => {
      this.setState({Snackbaropen:false})
    }
    handleSubmit(event){
        //event.preventDefault();
        fetch('http://localhost:54902/api/employee',{
            method:'POST',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
            body:JSON.stringify({
              userName: event.target.userName.value,
              userAddress: event.target.userAddress.value,
              userNIC:event.target.userNIC.value,
              userTeleNo: event.target.userTeleNo.value,
              userPass: event.target.userPass.value
            })
          })
            .then(res=> res.json())
            .then((result) =>
            {
              alert("Not Fucked")
            },
            (error)=>{
              alert("Fucked")
            })
        
    }

    render(){
        return(
            <div className="container">
            <SnackBar 
            anchorOrigin={{vertical:'bottom', horizontal:'center'}}
            open = {this.state.Snackbaropen}
            autoHideDuration = {3000}
            onClose = {this.SnackbarClose}
            message = {<span id ="message-id">{this.state.Snackbarmsg}</span>}
            action = {[
            <IconButton 
              key="close" 
              arial-label="Close" 
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
                      Add Employee
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    <Form onSubmit = {this.handleSubmit}>
              <Form.Row>
                <Form.Group ontrolId="UserName">
                  <Form.Label>Employee Name</Form.Label>
                  <Form .Control 
                    type="text" 
                    required
                    name ="UserName"
                    placeholder="Enter Employee Name" 
                    />
                </Form.Group>

                <Form.Group controlId="UserAddress">
                  <Form.Label>Employee Address</Form.Label>
                  <Form .Control 
                    type="text" 
                    required
                    name = "UserAddress"
                    placeholder="Address" 
                    />
                </Form.Group>
              </Form.Row>

              <Form.Group controlId="UserNIC">
                <Form.Label>Employee NIC</Form.Label>
                <Form .Control 
                  type="text" 
                  required
                  name = "UserNIC"
                  placeholder="NIC" />
              </Form.Group>

              <Form.Row>
                <Col controlId="UserTeleNo">
                <Form.Label>Employee Telephone No</Form.Label>
                  <Form .Control 
                    type="text" 
                    required
                    name = "UserTeleNo" 
                    placeholder="Telephone No" />
                </Col>
                <Col controlId="UserPass">
                <Form.Label>Employee Password</Form.Label>
                  <Form .Control 
                    type="password" 
                    required
                    name = "UserPass" 
                    placeholder="Password" />
                </Col>
              </Form.Row>


              <Button variant="primary" type="submit">
                Add Employee
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

export default AddEmployee