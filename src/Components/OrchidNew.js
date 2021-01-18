import React, {Componenet} from 'react';
import {Table, Container} from 'react-bootstrap';
import {Button, ButtonToolbar} from 'react-bootstrap';
//import OrchidAdd from './Orchid/OrchidAdd';

 class OrchidNew extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orchid:[],
            addModalShow :false
        }
    }
    componentDidMount() {
        this.refershList();
    }

    refershList() {
        fetch ('http://localhost:54902/api/orchid')
        .then(response => response.json())
        .then(data => {
            this.setState({orchid:data});
        });
    }

    render () {
        const {orchid} = this.state;
        let addModalShow = () => this.setState({addModalShow:false})
        return (
            <Container>
                 <ButtonToolbar>
                {/* {console.log(employee)}
                     <PostEmployee 
                    show = {this.state.addModalShow}
                    onHide = {addModalClose}
                    /> */}
                     {/* <OrchidAdd
                    show={this.state.addModalShow} 
                    onHide={addModalClose} 
                    refreshList={this.refreshList}
                /> */}
                </ButtonToolbar>
                <Button className="mb-3" variant = 'secondary' onClick={() => this.setState({addModalShow:true})} >
                    Add Orchid
                    </Button>

                <Table className = "mt-6"striped bordered hover>
                    <thead>
                        <tr>
                            <th>Orchid ID</th>
                            <th>Orchid Name</th>
                            <th>Orchid Category</th>
                            <th>Orchid Size</th>
                            <th>Orchid Price</th>
                            <th>Orchid Quantity</th>
                            <th>Orchid Manufacture Date</th>

                        </tr>

                    </thead>
                   
                    <tbody>
                        {orchid.map(orchid =>
                            <tr key = {orchid.orchidID}>
                            <td>{orchid.orchidID}</td>
                            <td>{orchid.orchidName}</td>
                            <td>{orchid.category}</td>
                            <td>{orchid.size}</td>
                            <td>{orchid.price}</td>
                            <td>{orchid.quanity}</td>
                            <td>{orchid.manuDate}</td>
                            </tr>
                            
                            )}
                    </tbody>
                </Table>
               
            </Container>

        )
    }
}
export default OrchidNew;