import { XIcon } from '@heroicons/react/outline'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from "react";
import React from "react";
 

export const SignIn= ()=>{
    const [user, setUser] = useState({});

    useEffect(() =>{
        axios.get("http://localhost:1342/user", {withCredentials:true}).then(res => setUser(res.data))
    },[])
    return (
        <>
           {/* Sign In page */}
           <div className = "signIn" style = {{
            border : "2px solid gray",
            width : "50%",
            height : "550px",
            margin : "auto",
            marginTop : "30px",
            borderRadius : "5px",
            fontFamily : "IBMPlexSans,sans-serif"
          }}>
        
          <div style={{
            width : "100%",
            height : "550px",
            backgroundColor : "white"
          }}>
            <XIcon style={{
              width : "35px",
              height : "35px",
              marginLeft : "94%",
              marginTop : "20px",
              color : "grey"
            }}/>
            <div style={{
              fontFamily : "IBMPlexSans,sans-serif",
              fontWeight : "400",
            //   marginLeft : "4%"
            }}>
              <h3 style={{fontFamily : "IBMPlexSans,sans-serif"}}>Login</h3>
              <p style={{
                fontSize : "13px",
                width : "65%",
                lineHeight: "20px",
                color :"gray",
                margin: "auto"
              }}>By continuing, you agree to our <spam style ={{color : "#0079d3"}}>User Agreement</spam> and <spam style ={{color : "#0079d3"}}>Privacy Policy</spam>. </p>

                <hr style={{
                  width : "100%",
                  marginLeft : "0px",
                  marginTop : "35px"
                }}></hr>
              
                {/* same till now */}

                <input type= "text" placeholder='     User Name' style={{
                  width : "45%",
                  height : "45px",
                  marginTop : "20px",
                  borderRadius : "5px",
                  border : "1px solid gray",
                  backgroundColor: "#fcfcfb#fff"
                }}></input> <br></br>
                
                <input type= "password" placeholder='     Password' style={{
                  width : "45%",
                  height : "45px",
                  marginTop : "20px",
                  borderRadius : "5px",
                  border : "1px solid gray",
                  backgroundColor: "#fcfcfb#fff"
                }}></input> <br></br>
                <a href="/"><button style={{
                    width : "45%",
                    height : "45px",
                    marginTop : "20px",
                    borderRadius : "50px",
                    border : "1px solid #0079d3",
                    backgroundColor : "#0079d3",
                    color :"whitesmoke",
                    fontWeight : "800"
                }}>Log In</button></a>
  
                <p style={{
                  fontSize :"12px",
                  color: "gray"
                }}>Forgot your <spam style = {{
                    color : "#0079d3",
                    fontSize :"13px"
                  }}>username</spam> or <spam style = {{
                  color : "#0079d3",
                  fontSize :"13px"
                }}>password</spam> ?</p>
              
                <p style={{
                  marginTop :"20px",
                  fontSize :"12px",
                  color: "gray"
                }}>New to Reddit?<spam style = {{
                  fontWeight : "600",
                  color : "#0079d3",
                  fontSize :"13px"
                }}><Link to='/sign-up' style = {{color : "#0079d3", textDecoration : "none"}}>   SIGN UP</Link></spam></p>
            </div>  
          </div>
        </div>
        </>
    )
}

// export default SignIn;