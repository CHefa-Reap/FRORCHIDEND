import React,{Component} from 'react';
import {Table, Container, Modal} from 'react-bootstrap';

import {Button, ButtonToolbar} from 'react-bootstrap';

import PostCustommer from './Customer/PostCustomer';
import {AddCustomer} from './Customer/AddCustomer';
import {EditCustomer} from './Customer/EditCustomer'
import {FaEdit} from 'react-icons/fa';
import {MdDelete} from 'react-icons/md'


class Customer extends Component {

    constructor(props){
        super(props);
        this.state = {
            customer:[], 
            AddCustomerShow : false,
            EditCustomerShow :false
        }
    }
    componentDidMount() {
        this.refreshList();
    }

    deleteCus(cusid){
        if(window.confirm('Are You Sure?'))
        {
            fetch('http://localhost:54902/api/customer'/+cusid,{
                method :'DELETE',
                header: {'Accept':'application/json',
                'Content-Type': 'application/json'
            }
            })
        }
    }
    refreshList() {
        fetch('http://localhost:54902/api/customer')
        .then(response => response.json())
        .then(data => {
            this.setState({customer:data});
        }
            
            );
    }

    render () {
        
        const {customer,cusid, cusname, cusadd, cusnic, custelno, cuspass } = this.state;
        let addModalClose = () => this.setState({addModalShow:false})
        let EditCustomerClose = () => this.setState({EditCustomerShow:false})

        return (
            
            <Container>
                <ButtonToolbar>
                    
                    <PostCustommer 
                    show = {this.state.addModalShow}
                    onHide = {addModalClose}
                    />

                <AddCustomer   
                show = {this.state.addModalShow}
                onHide={addModalClose}
                 />
                </ButtonToolbar>
                
                <Button  variant = 'secondary' 
                onClick={() => this.setState({addModalShow:true})} className="mb-3">
                        Add Customer
                        </Button>
                
                <Table className ="mt-6"striped bordered hover >
                    <thead>
                        <tr>
                            <th>Customer ID</th>
                            <th>Customer Name</th>
                            <th>Customer Address</th>
                            <th>Customer NIC</th>
                            <th>Customer Telephone No</th>
                            <th>Option</th>


                        </tr>

                    </thead>
                   
                    <tbody>
                        {customer.map(cu =>
                            <tr key = {cu.regnoID}>
                            <td>{cu.regnoID}</td>
                            <td>{cu.empName}</td>
                            <td>{cu.empAddress}</td>
                            <td>{cu.nic}</td>
                            <td>{cu.telephoneNo}</td>
                            <td>
                                <ButtonToolbar>
                                    <FaEdit className="mr-3" onClick={()=>this.setState({EditCustomerShow:true, 
                                    cusid:customer.regnoID,
                                    cusname: customer.empName,
                                    cusadd: customer.empAddress,
                                    cusnic: customer.nic,
                                    custelno: customer.telephoneNo
                                    })}
                                    />

                                    <MdDelete className="mr-2" onClick= {()=>this.deleteCus(cu.regnoID)}>
                                        <Modal.Dialog>
                                            <Modal.Header closeButton>
                                                <Modal.Title>Modal title</Modal.Title>
                                            </Modal.Header>

                                            <Modal.Body>
                                                <p>Modal body text goes here.</p>
                                            </Modal.Body>

                                            <Modal.Footer>
                                                <Button variant="secondary">Close</Button>
                                                <Button variant="primary">Save changes</Button>
                                            </Modal.Footer>
                                            </Modal.Dialog>
                                    </MdDelete>
                                    <EditCustomer
                                    show = {this.state.EditCustomerShow}
                                    onHide={EditCustomerClose}
                                    cusid = {cusid}
                                    cusname = {cusname}
                                    cusadd = {cusadd}
                                    cusnic = {cusnic}
                                    custelno = {custelno}
                                    />
                                </ButtonToolbar>
                                {/* <ButtonToolbar>
                                    <Button className="mr-2" variant="danger" onClick={()=>this.setState({EditCustomerShow:true, 
                                        cusid:customer.regnoID,
                                        cusname: customer.empName,
                                        cusadd: customer.empAddress,
                                        cusnic: customer.nic,
                                        custelno: customer.telephoneNo
                                        })}>
                                        EDIT
                                    </Button>
                                    <EditCustomer
                                    show = {this.state.EditCustomerShow}
                                    onHide={EditCustomerClose}
                                    cusid = {cusid}
                                    cusname = {cusname}
                                    cusadd = {cusadd}
                                    cusnic = {cusnic}
                                    custelno = {custelno}
                                    />
                                </ButtonToolbar> */}
                            </td>
                            </tr>
                            )}
                    </tbody>
                </Table>
            <ButtonToolbar>

            <AddCustomer
                show={this.state.addModalShow} s
                onHide={addModalClose} 
                refreshList={this.refreshList}
                /> 
            </ButtonToolbar>
            

            </Container>

        )
    }
}
export default Customer;