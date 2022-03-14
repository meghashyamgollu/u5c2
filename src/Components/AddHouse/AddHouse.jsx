import axios from "axios";
import { nanoid } from "nanoid";
import { useState } from "react";

export const AddHouse = () => {
  let [formdata, setFormdata] = useState({
    name: "",
    ownerName: "",
    address: "",
    areaCode: "",
    rent: "",
    bachelor: "",
    married: "",
    image: ""
  })
  const handleChange = (e) => {
    console.log(e.target);
    const [className, value] = e.target;
    setFormdata({
      ...formdata, [className] : value
    })
    console.log(formdata);
  }

  const submitForm = () => {
    console.log(formdata);
    axios
    .post(`http://localhost:8080/houses`, {
      ...formdata, id: nanoid()
    })
  }

  return (
    <div className="addHouseContainer">
      <form>
        <label>name</label>
        <input type="text" className="name" value={""} onChange={handleChange} required />
        <br />
        <label>ownerName</label>
        <input value={""} type="text" className="ownerName" onChange={handleChange} required />
        <br />
        <label>address</label>
        <input value={""} type="text" className="address" required onChange={handleChange}/>
        <br />
        <label>areaCode</label>
        <input value={""} type="text" className="areaCode" required onChange={handleChange}/>
        <br />
        <label>rent</label>
        <input value={""} type="text" className="rent" required onChange={handleChange}/>
        <br />
        <label>preferredTenant</label>
        <br />
        <label>bachelor</label>
        <input checked={""} type="checkbox" className="bachelor" onChange={handleChange}/>
        <br />
        <label>married</label>
        <input checked={""} type="checkbox" className="married" onChange={handleChange}/>
        <br />
        <label>image</label>
        <input value={""} type="text" className="image" required onChange={handleChange}/>
        <br />
        <input className="submitBtn" type="submit" onClick={() => {
          submitForm()
        }}/>
      </form>
    </div>
  );
};
