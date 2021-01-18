import React, {Component} from 'react';

export class Register extends Component {
    render () {
        return (
            <div className = "container-1">
            <div className = "base-container-1">
            <div className ="header">REGISTER</div>
            <div className = "content">
                <div className ="form-1">
                    <div className = "form-group">
                        <label htmlFor = "username">First Name</label>
                        <input className = "username-2" type = "text" name = "username" placeholder="First name"/>
                    </div>
                    <div className = "form-group">
                        <label htmlFor = "email">Middle Name</label>
                        <input  className = "username-2"type = "text" name = "email" placeholder="Middle Name"/>
                    </div>
                    
                    <div className = "form-group">
                        <label htmlFor = "password">Last Name</label>
                        <input className = "username-2" type = "text" name = "password" placeholder="Last Name"/>
                    </div>
                    <div className = "form-group">
                        <label htmlFor = "password">Email Address</label>
                        <input className = "username-2" type = "email" name = "password" placeholder="Enter Email Address"/>
                    </div>
                    <div className = "form-group">
                        <label htmlFor = "password">NIC</label>
                        <input className = "username-2" type = "text" name = "password" placeholder="NIC"/>
                    </div>
                    <div className = "form-group">
                        <label htmlFor = "password">Telephone No</label>
                        <input className = "username-2" type = "text" name = "password" placeholder="Telephone No"/>
                    </div>
                    <div className = "form-group">
                        <label htmlFor = "password">Password</label>
                        <input className = "username-2" type = "text" name = "password" placeholder="Password"/>
                    </div>
                </div>
            </div>
            <div className ="footer">
            <button  type="button" class="btn-1 btn-primary">REGISTER</button>
            </div>
            </div>
            </div>
        )
    }
}
