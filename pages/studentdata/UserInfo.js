import React from 'react'
import Card from 'react-bootstrap/Card';




function UserInfo(props){
    const {user} = props;
    return(
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src="https://upload.wikimedia.org/wikipedia/commons/e/e0/Userimage.png" />
    <Card.Body>
      <Card.Title>{user.Name}</Card.Title>
      <Card.Text>
      {user.Address}
      </Card.Text>
    </Card.Body>
  </Card>
);
    }
    export default UserInfo;