import { useState } from "react";
import axios from "axios";
import "./Flat.css"

export const Flat =()=>{
    const [flat,setflat] = useState({
        block : "",
        name: "",
        residents : "",
        image : "",
    })

    const handleChange = (e)=>{
        const {className, value } = e.target;
    
        setflat({
          ...flat,
          [className] :value,
        })
      };

      const handleSubmit = (e) =>{
        e.preventDefault();
        // console.log(houseData);
    
    
        axios.post("http://localhost:1342/flats", flat).then(()=>{
            alert("flat created Successfully")
        });
    }
    return (
        <>
        Flat Details

        <form onSubmit={handleSubmit}>
            <label htmlFor="">Block Name</label>
            <input type="text" placeholder="Enter the Block Name" className="block" value={flat.block} onChange = {handleChange}/>
            <label htmlFor="">Flat Name/No:</label>
            <input type="text" placeholder="Enter the Flat No/Name" className="name" value={flat.name} onChange = {handleChange}/>
            <label htmlFor="">Flat No:</label>
            <input type="text" placeholder="No.of Residents" className="residents" value={flat.residents} onChange = {handleChange}/>
            <label htmlFor="">Flat Image</label>
            <input type="text" placeholder="Image of the Flat" className="image" value={flat.image} onChange = {handleChange}/>
            <input type="submit" />
        </form>
        </>
    )
}