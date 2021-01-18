import React,{Component} from 'react';
import {Table, Container} from 'react-bootstrap';

import {Button, ButtonToolbar} from 'react-bootstrap';


import PostEmployee from './Employee/PostEmployee';
import {AddEmployee} from './Employee/AddEmployee';

class Employee extends Component {

    constructor(props){
        super(props);
        this.state = {
            employee:[], 
            addModalShow : false
        }
    }
    componentDidMount() {
        this.refreshList();
    }
    refreshList() {
        fetch('http://localhost:54902/api/employee')
        .then(response => response.json())
        .then(data => {
            this.setState({employee:data});
        }
            
            );
    }
    
    render () {
        
        const {employee} = this.state;
        let addModalClose = () => this.setState({addModalShow:false})
        return (  
            <Container>
                <ButtonToolbar>
                {console.log(employee)}
                     <PostEmployee 
                    show = {this.state.addModalShow}
                    onHide = {addModalClose}
                    />
                     <AddEmployee
                    show={this.state.addModalShow} 
                    onHide={addModalClose} 
                    refreshList={this.refreshList}
                />
                </ButtonToolbar>
                <Button className="mb-3" variant = 'secondary' onClick={() => this.setState({addModalShow:true})} >
                    Add Employee
                    </Button>

                <Table className = "mt-6"striped bordered hover>
                    <thead>
                        <tr>
                            <th>Employee ID</th>
                            <th>Employee Name</th>
                            <th>Employee Address</th>
                            <th>Employee NIC</th>
                            <th>Employee Telephone No</th>
                            <th>Option</th>

                        </tr>

                    </thead>
                   
                    <tbody>
                        {employee.map(emp =>
                            <tr key = {emp.emplyID}>
                            <td>{emp.emplyID}</td>
                            <td>{emp.userName}</td>
                            <td>{emp.userAddress}</td>
                            <td>{emp.userNIC}</td>
                            <td>{emp.userTeleNo}</td>
                            <td></td>
                            </tr>
                            
                            )}
                    </tbody>
                </Table>
               
            </Container>

        )
    }
}
export default Employee;










