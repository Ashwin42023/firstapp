import React,{useState} from 'react'

function Selfie() {
    const [numberTable,setNumberTable] = useState([]);
    const Increment = ()=>{
        let newValue = numberTable.length == 0 ? 0 : numberTable[0];
        setNumberTable([newValue + 1 , ...numberTable]);
    };
    const handleRemoveItem = (index) =>{
        const newNumberTable = numberTable.filter((ntValue,ntIndex)=>{
            return ntIndex !==index;
        });
    
    setNumberTable([...newNumberTable]);
    };
    const handleEditItem = (index) =>{
       const newUpdatedValue = +prompt("enter a value",numberTable[index]);
       const newArray = numberTable.map((ntValue,ntIndex) =>
       {
        if(ntIndex === index)
        {
            return newUpdatedValue;
        }
        return ntValue;
       });
       setNumberTable(newArray);
    };
  return (
    <center style={{marginTop:"50PX"}}>
        <ul>
            {numberTable.map((num,index) => {
                return(
                    <div key={index} style={{marginTop:"20px"}}>
                        <span style={{marginRight:"20px"}}>{num}</span>
                        <button onClick={() => handleRemoveItem(index)}>remove</button>
                        <button onClick={() => handleEditItem(index)}>edit</button>

                     </div>
                    
                )

            })}
            <div style={{marginTop:"20px"}}>
            <button onClick={Increment}>increment</button>

            </div>
        </ul>

    </center>
   
  ) 
}

export default Selfie;