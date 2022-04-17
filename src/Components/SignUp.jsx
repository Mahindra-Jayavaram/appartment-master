import { XIcon,RefreshIcon } from '@heroicons/react/outline';
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
// import "./signUp.css";


export const SignUp = () =>
{
    const [email, setEmail] = useState("")
    const [username, setUserName] = useState("");
    const [password, setPassword] = useState("");

    function register(e)
    {
        e.preventDefault();
        const data = {email,username,password}
        axios.post("http://localhost:1342/signUp", data ,{withCredentials:true})
        console.log(data);
    }

    return (
        <>
              {/* <Routers /> */}

      <div style={{
        border : "2px solid gray",
        width : "50%",
        height : "500px",
        margin : "auto",
        marginTop : "50px",
        borderRadius : "5px",
        padding : "20px"
      }}>
              <XIcon style={{
              width : "35px",
              height : "35px",
              marginLeft : "94%",
              // marginTop : "20px",
              color : "grey",
              onClick : "{handleCount}"
            }}/>

        <div style={{
          marginTop : "10px"
        }}>
        <p style={{
          marginTop : "-10px"
        }}>Your username is how other community members will see you. This name will be used to credit you for things you share on Reddit. What should we call you?</p>
        <hr></hr>
        </div>

        <div>
          <div style={{
            width : "100%"
          }}>
              <label>Email: </label>
        <input type= "text" placeholder='     Email*' value={email} style={{
                  width : "45%",
                  height : "45px",
                  marginTop : "20px",
                  borderRadius : "5px",
                  border : "1px solid gray",
                  backgroundColor: "#fcfcfb#fff"
                }} onChange = {e => setEmail(e.target.value)} className="inputs"></input> <br></br>
                <label>Username: </label>
         <input type= "text" placeholder='     User Name*' value = {username} style={{
                  width : "45%",
                  height : "45px",
                  marginTop : "20px",
                  borderRadius : "5px",
                  border : "1px solid gray",
                  backgroundColor: "#fcfcfb#fff"
                }} onChange= {e => setUserName(e.target.value)} className="inputs"></input> <br></br>

                <label htmlFor="">Password: </label>
        <input type= "text" placeholder='     Password*' value={password} style={{
                  width : "45%",
                  height : "45px",
                  marginTop : "20px",
                  borderRadius : "5px",
                  border : "1px solid gray",
                  backgroundColor: "#fcfcfb#fff"
                }} onChange= {e => setPassword(e.target.value)} className="inputs"></input> <br></br>
                </div>
                <div style={{
                  display : "flex",
                  width : "75%",
                  gap : "10px"
                }}>
              </div>

        </div>
      <hr style={{
          marginTop : "18%"
      }}></hr>
      <div style={{display : "flex", gap : "70%"}}>
        <Link to="/sign-in" style={{marginTop : "0px"}}>Back</Link>
        <button style={{
            width: "30%",
            height : "40px",
            border : "1px solid #0079d3",
            backgroundColor : "#0079d3",
            color : "white",
            fontWeight : "bold",
            borderRadius : "50px"
        }} onClick = {e => register(e)}>Sign Up</button>
      </div>
      </div>


        </>
    )
}
