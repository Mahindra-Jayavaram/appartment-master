import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export const Home = ()=>{
    const [flatData, setFlatData] = useState([]);

    const [resident, setResident] = useState({
        block : flatData.block,
        name: flatData.name,
        residents : flatData.residents,
        image : flatData.image,
    })

    useEffect(()=>{
        getData();
      },[])
      const getData =()=>{
    
        // const [houses, setHouses] = useState({})
        axios.get("http://localhost:1342/flats").then((res)=>{
          setFlatData(res.data)
        //   console.log(res.data)
    
        })
      }

      const goto = (flatData)=>{
            axios.post("http://localhost:1342/residents",resident).then((res)=>{
                setResident(res.data);
                console.log(res.data);
                // return;
            })
      }

    return (
        <>
        Home Page
        <div >
        <table className="table" border="1">
        <thead>
          <tr>
            <th>Sl.no.</th>
            <th>Block Name</th>
            <th>Flat Name/No</th>
            <th>Residents</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {flatData.map((flat, index) => {
            // console.log("flatData",flatData)
            return (
              <tr key = {flat.id} className="flatDetails" 
              onClick={goto}>
                <td className="flatId">{flat.id}</td>
                <td className="flatName">{flat.block} </td>
                <td className="flatName">{flat.name}</td>
                <td className="address">{flat.residents}</td>
                <td className="flatImage">
                  <img src={flat.image} alt="Flat" />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
        </div>
        </>
    )
}