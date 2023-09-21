import { useState } from "react";

export default function App() {
  //State
  //Hooks => useState


  let [name, setName] = useState("");
  let [age,setAge] = useState("")

  let [formData,setFormData] = useState({
    name:"",
    age:''
  })
//   function handleButtonClick() {
//     setName("Ankit");
//   }

  return (
    <div>
     
      <input
        type="text"
        onChange={(event) => {
          console.log(event.target.value);
        //   setName(event.target.value)
        setFormData({...formData,name:event.target.value})
        }}
      />
    <br/>
    <input
        type="text"
        onChange={(event) => {
            console.log(event.target.value);
            setFormData({...formData,age:event.target.value})

        }}
      />

      User had entered : {formData.name} | {formData.age}
      {/* <button
        onClick={(event) => {
          console.log(event);
          handleButtonClick();
        }}
      >
        Click Me
      </button> */}
    </div>
  );
}
