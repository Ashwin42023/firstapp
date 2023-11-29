import React from 'react'
import students from "./data";
import UserInfo from './UserInfo';



export default function StudentSkills()
{
    return students.users.map((item) => 
    {
  return <UserInfo key={`${item.Name}`} user={item}/>;
    });
  }

