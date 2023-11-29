import React, { useState } from 'react'
import { Col, Row, Form, Container, Card, } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import UserList from '../27nov/userlist';



function Login() {
  const [formData , setFormData] = useState({name:"",password:""});
  const [users,setUsers]=useState([]);

  const handleChange=(e)=>{
         setFormData({
          ...formData,
          [e.target.name]:[e.target.value],
         })

  };
  const handleSubmitForm=(e)=>{
    e.preventDefault();
    setUsers([...users,formData]);
  };
  return (

    <Container>
      <Row>
        <Col>LIST HERE
        <UserList users={users} setUsers={setUsers}/>
        <Row>
         
        </Row>
        </Col>
        <Col>
          FORM HERE
          <Card>
            <Form onSubmit={handleSubmitForm}>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                  NAME
                </Form.Label>
                <Col sm="10">
                  <Form.Control name="name" placeholder='enter your name' onChange={handleChange}/>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  Password
                </Form.Label>
                <Col sm="10">
                  <Form.Control name="password" placeholder="Password"  onChange={handleChange}/>
                </Col>
              </Form.Group>
              <center>
                <Button type='submit'>submit</Button>
              </center>
            </Form>

          </Card>
        </Col>
      </Row>
    </Container>

  )
}

export default Login