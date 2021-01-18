import React, {useState, useEffect} from 'react'
import { Form, Button, Row, Col } from 'react-bootstrap';

 function PostCustommer() {
  
    const [EmpName, setEmpName] = useState("");
    const [EmpAddress, setEmpAddress] = useState("");
    const [NIC, setNIC] = useState("");
    const [TelephoneNo, setTelephoneNo] = useState("");
    const [password, setpassword] = useState("");
   
    
    const handleSubmit =async  (evt) => {
        
        evt.preventDefault();
        const obj = {
            
            EmpName:'',
            EmpAddress:'',
            NIC:'',
            TelephoneNo:'',
            password:''
        };
  
        console.log(obj);
  
        const response = await  fetch('http://localhost:54902/api/customer',{
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


export default PostCustommer