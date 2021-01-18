import React,{Component} from 'react';


export class Login extends Component {

    render () {
        return (
            <div className = "container-2">
            <div className = "base-container">
            <div className ="header">LOGIN</div>
            <div className = "content">
                <div className ="form">
                    <div className = "form-group">
                        <label htmlFor = "username">Username</label>
                        <input className = "username-2" type = "text" name = "username" placeholder="username"/>
                    </div>
                    <div className = "form-group">
                        <label htmlFor = "email">Email</label>
                        <input  className = "username-2"type = "text" name = "email" placeholder="email"/>
                    </div>
                    
                    <div className = "form-group">
                        <label htmlFor = "password">Password</label>
                        <input className = "username-2" type = "text" name = "password" placeholder="password"/>
                    </div>
                </div>
            </div>
            <div className ="footer">
            <button  type="button" class="btn-1 btn-primary">LOGIN</button>
            </div>
            </div>
            </div>
        )
    }
}