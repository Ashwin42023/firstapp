import React, { useState } from 'react'


function User() {
    const [formData,setFormData] = useState({name:"",mobileNo:""});

    
    
    const handleChange = (keyName,value)=>{
        setFormData({
            ...formData,
            [keyName]:value,
        });
        
    };
  return (
    <form>
            <div><label>NAME=</label>
            <input 
            type="text"
            placeholder='enter your name'
            value ={formData.name}
            onChange ={(e)=>handleChange("name",e.target.value)}
            ></input>
            </div>

            <div><label>MOBILENO=</label>
            <input 
            type="text"
            placeholder='enter your mobileno'
            value ={formData.mobileNo}
            onChange ={(e)=>handleChange("mobileNo",e.target.value)}
            ></input>
            </div>

            <div>
        <h2>Entered Data:</h2>
        <p>Name: {formData.name}</p>
        <p>mobileNo: {formData.mobileNo}</p>
      </div>

    </form>

  );
}

export default User;