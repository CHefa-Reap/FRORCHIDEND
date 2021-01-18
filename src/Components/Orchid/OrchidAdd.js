// import React, {Component} from 'react';
// import {Modal, Button, Row, Col, Form} from 'react-bootstrap';
// import SnackBar from '@material-ui/core/Snackbar'
// import IconButton from '@material-ui/core/IconButton'

// export class OrchidAdd extends Component{

//     constructor(props){
//         super(props);

//         this.state = {Snackbaropen: false, Snackbarmsg:''};

//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
    
//     SnackbarClose = (event) => {
//       this.setState({Snackbaropen:false})
//     };
//     handleSubmit(event){
//         //event.preventDefault();
//         fetch('http://localhost:54902/api/orchid',{
//             method:'POST',
//             headers:{
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json',
//                 'Access-Control-Allow-Origin': '*',
//             },
//             body:JSON.stringify({
//               empName: event.target.empName.value,
//               empAddress: event.target.empAddress.value,
//               nic:event.target.nic.value,
//               telephoneNo: event.target.telephoneNo.value,
//               password: event.target.password.value
//             })
//           })
//             .then(res=> res.json())
//             .then((result) =>
//             {
//               //alert("Not Fucked")
//               this.setState({Snackbaropen:true, Snackbarmsg:result});
//             },
//             (error)=>{
//               //alert("Fucked")
//               this.setState({Snackbaropen:true, Snackbarmsg:'Added Sucessfully'});
//             })
        
//     }

//     render(){
//         return(
//             <div className="container">
//             <SnackBar 
//             anchorOrigin={{vertical:'bottom', horizontal:'left'}}
//             open = {this.state.Snackbaropen}
//             autoHideDuration = {6000}
//             onClose = {this.SnackbarClose}
//             message = {<span id ="message-id">{this.state.Snackbarmsg}</span>}
//             action = {[
//             <IconButton 
//               key="close" 
//               arial-label="close" 
//               color ="inherit" 
//               onClick = {this.SnackbarClose}>
//               X
//             </IconButton>
//             ]}
//          />
            

//             <Modal
//                   {...this.props}
//                   size="lg"
//                   aria-labelledby="contained-modal-title-vcenter"
//                   centered
//                 >
//                   <Modal.Header closeButton>
//                     <Modal.Title id="contained-modal-title-vcenter">
//                       Add Orchid
//                     </Modal.Title>
//                   </Modal.Header>
//                   <Modal.Body>
//                     <Form onSubmit = {this.handleSubmit}>
//               <Form.Row>
//                 <Col controlId="empName">
//                 <Form.Label>Orchid Name</Form.Label>
//                   <Form .Control 
//                     type="text" 
//                     required
//                     name = "empName" 
//                     placeholder="Customer Name" />
//                 </Col>
//                 <Col controlId="empAddress">
//                 <Form.Label>Orchid Category</Form.Label>
//                   <Form .Control 
//                     type="text" 
//                     required
//                     name = "empAddress" 
//                     placeholder="Customer Address" />
//                 </Col>
//               </Form.Row>
//               <Form.Group controlId="nic">
//                 <Form.Label>Orchid Price</Form.Label>
//                 <Form .Control 
//                   type="text" 
//                   required
//                   name = "nic"
//                   placeholder="NIC" />
//               </Form.Group>

//               <Form.Row>
//                 <Col controlId="telephoneNo">
//                 <Form.Label>Customer Telephone No</Form.Label>
//                   <Form .Control 
//                     type="text" 
//                     required
//                     name = "telephoneNo" 
//                     placeholder="Telephone No" />
//                 </Col>
//                 <Col controlId="password">
//                 <Form.Label>Customer Password</Form.Label>
//                   <Form .Control 
//                     type="password" 
//                     required
//                     name = "password" 
//                     placeholder="Password" />
//                 </Col>
//               </Form.Row>


//               <Button variant="primary" type="submit">
//                 Add Customer
//               </Button>
//             </Form>
//                   </Modal.Body>
//                   <Modal.Footer>
//                     <Button variant="danger" onClick={this.props.onHide}>Close</Button>
//                   </Modal.Footer>
//                 </Modal>
//                         </div>
//                     );
//                 }
// }

// export default OrchidAdd