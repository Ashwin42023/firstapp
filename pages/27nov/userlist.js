import React from "react";
import { Col, Row } from "react-bootstrap";

const UserList = ({ users }) => {
  return (
    <div>
      <Row>
        <Col>NAME:</Col>
        <Col>PASSWORD:</Col>
      </Row>
      
      
      {users.map((user, index) =>{
        return(
    <div key={`user-${index}`}>
    <Row>
        <Col>{user.name}</Col>
        <Col> {user.password}</Col>
      </Row>
        
      
  </div>
      )})}
    </div>
  );
};

export default UserList;
