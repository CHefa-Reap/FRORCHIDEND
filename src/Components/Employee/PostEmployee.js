import React, {useState, useEffect} from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap';



    

    
 function PostEmployee() {
  
    const [UserName, setUserName] = useState("");
    const [UserAddress, setUserAddress] = useState("");
    const [UserNIC, setUserNIC] = useState("");
    const [UserTeleNo, setUserTeleNo] = useState("");
    const [UserPass, setUserPass] = useState("");
   
    
    const handleSubmit =async  (evt) => {
        
        evt.preventDefault();
        const obj = {
            
            UserName:'',
            UserAddress:'',
            UserNIC:'',
            UserTeleNo:'',
            UserPasss:''
        };
  
        console.log(obj);
  
        const response = await  fetch('http://localhost:54902/api/employee',{
              headers: { 
                'Accept': 'application/json, text/plain',
                'Content-Type': 'application/json;charset=UTF-8'
              },
              method: 'POST',
              body: JSON.stringify(obj)
              
          })
          .then(res => res.json())
          .then(data =>{
              
              alert("Data Saved");
          }, (error) => {
              alert("Failed");
              
          })
    }
    return (

       
        <div className="container" variant="dark">
            <div>

            </div>
        </div>

    )
}


export default PostEmployee