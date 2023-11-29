import React from 'react'
import students from "./data";
import UserInfo from "./UserInfo"
import StudentSkills from './StudentSkills';


export default function Loop() {
  return students.users.map((userData) =>
  {
return <>
<UserInfo key={`${userData.Name}`} user={userData}  />
    <StudentSkills/>
    </>
  });

  
}