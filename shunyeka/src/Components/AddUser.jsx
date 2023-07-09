import { useState } from "react";
import "../style/Style.css"

const AddUser = () => {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "" });
  const [show,setShow]=useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>

   
  {
    !show && (
           <div>
            <button className="add-btn" onClick={()=> {setShow(true)}}>Add User</button>
            </div>

    )
  }
            


   

    {
        show &&  <form className="container">

        <div className="input-box">
           <p>Name</p>
           <input
              placeholder="Enter Name"
             type="text"
             id="name"
             name="name"
             value={formData.name}
             onChange={handleChange}
           />
        </div>
           
        <div className="input-box">
           <p>Email</p>
           <input
            placeholder="Enter Email"
             type="email"
             id="email"
             name="email"
             value={formData.email}
             onChange={handleChange}
           />
       </div>
   
       <div className="input-box">
           <p>Phone</p>
           <input
            placeholder="Enter Phone No."
             type="text"
             id="phone"
             name="phone"
             value={formData.phone}
             onChange={handleChange}
           />
       </div>
   
           <div className="btn-container">
               <button className="submit-btn" type="submit">Submit</button>
           </div>
          
         </form>
    }

     
    </>
  );
};

export default AddUser;
