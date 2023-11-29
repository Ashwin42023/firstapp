import { Formik } from 'formik';
import React, { useState } from 'react'
import { Col, Row, Form, Container, Card, } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import * as yup from 'yup';
import UserList from './userlist';


const initialFormValues = {name: '', mobileNo: '', address: ''};

function Login() {
 const [users,setUsers]=useState([]);

 const schema = yup.object().shape({
  name: yup.string().required(),
  password: yup.string().required(),

});
const callApi = () => {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve({success: true})
    }, 2000)  
  })
  // return myPromise;
}


  const handleSubmitForm=(values,actions)=>{
    //setUsers([...users,formData]);
    callApi().then((res) => {
      if (res.success) {
        setUsers([...users, values]); //Set users
        actions.resetForm();
      }
    })
  };
  return (
    <Formik
   validationSchema={schema}
    onSubmit={handleSubmitForm}
    initialValues={{initialFormValues
    }}
  >
    {({ handleSubmit, handleChange, values, touched, errors,isSubmitting}) => ( <Container>
    <Row>
      <Col>LIST HERE
      <UserList users={users} setUsers={setUsers}/>
      <Row>
       
      </Row>
      </Col>
      <Col>
          FORM HERE
          <Card>
            <Form onSubmit={handleSubmit}>
              <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
                <Form.Label column sm="2">
                  NAME
                </Form.Label>
                <Col sm="10">
                  <Form.Control name="name" placeholder='enter your name' onChange={handleChange} value={values.name}  isInValid={!!errors.name}/>
                </Col>
              </Form.Group>

              <Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
                <Form.Label column sm="2">
                  Password
                </Form.Label>
                <Col sm="10">
                  <Form.Control name="password" placeholder="Password"  onChange={handleChange} value={values.password}/>
                </Col>
              </Form.Group>
              <center>
                <Button type='submit'  disabled={isSubmitting}>
                      {isSubmitting ? 'Please wait...' : 'Save'}</Button>
              </center>
            </Form>

          </Card>
        </Col>
      </Row>
    </Container>
    )}

   
</Formik>
  )
}

export default Login