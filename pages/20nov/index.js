import React,{useState} from 'react'

function Login() {
const [name, setName] = useState('');

const FormComponemet = () => { 
    const skillOptions = ["React", "Node.js", "JavaScript", "HTML", "CSS","Python" ,"ML", "Java"];
};
  return (
    <div>
        <form>
            <center>LOGIN FORM</center>

            <div><label>NAME=</label>
            <input 
            type="text"
            placeholder='enter your name'
            ></input>
            </div>

            <div>
            <label>EMAIL=</label>
            <input 
            type="email"
            placeholder='enter your email'
            ></input>
            </div>
            
            <label>PASSWORD=</label>
            <input 
            type="password"
            placeholder='enter your password'
            ></input>

            <div>
            <label>GENDER=</label>
            <select  name="gender">
            <option value="">Select gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
            </select>
            </div>

            <div>
            <label>AGE=</label>
            <input
             type="number"
             name="age"
            >
            </input>
            </div>

            <div>
            <label>QUALIFICATION=</label>
            <select >
            <option value="select">select</option>
            <option value="12th">10th</option>
            <option value="12th">12th</option>
            <option value="bca">bca</option>
            <option value="mca">mca</option>
            <option value="btech">btech</option>
            <option value="mtech">mtech</option>
            </select>
            </div>


    <div >
    <div>
        <label>Skills:</label> </div>
    <div>
        {skillOptions.map((skill) => (
          <div key={skill} >
            <input
              type="checkbox"
              name="skills"
              value={skill}
              >

              </input>

          </div>
        ))}
      </div>
      </div>
      <FormComponemet/>

 

            
        </form>
    </div>
  )
}

export default Login