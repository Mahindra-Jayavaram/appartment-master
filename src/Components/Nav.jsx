import { Link } from "react-router-dom";
import { HomeIcon, SearchIcon } from "@heroicons/react/outline";
import { DatabaseIcon } from "@heroicons/react/outline";
import { UserIcon } from "@heroicons/react/outline";
// import { }

export const Navbar = () => {
  return (
    <>
      <nav style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor:"pink",
          height: "50px"

        }}>
          <div className="navbar" style={{
            width : "60%",
            display : "flex",
            gap : "10px",
            marginTop :"10px",
          justifyContent: "center"

          }}>
            <HomeIcon style={{
              marginTop : "0px",
              width : "30px",
              height : "30px"
            }}/>
        <Link to="/" className="home">Home</Link>
        <DatabaseIcon style={{
              marginTop : "0px",
              width : "30px",
              height : "30px"
            }}/>
        <Link to="/flatdetails" className="signup">Flat Details</Link>
        <UserIcon style={{
              marginTop : "0px",
              width : "30px",
              height : "30px"
            }}/>
        <Link to="/sign-in" className="sign-in">Sign-In</Link>
        <Link to="/sign-up" className="signup">Register</Link>
        {/* <Link to="mythology" className="mythology">Mythology</Link>
        <Link to="history" className="history">History</Link> */}
          </div>

          <div style={{
            marginTop : "10px",
            border : "1px solid gray",
            backgroundColor: "lightgray",
            height : "33px",
            width: "25%"
        
          }}>
            <SearchIcon style={{
              marginRight : "150px",
              width : "25px",
              height : "25px"
            }}/>
            <input type="text" style={{
              color : "gray",
              border:"none",
              marginLeft : "0px",
              backgroundColor: "lightgray",
              height :"20px",
            }} placeholder="Search Here"/>

          </div>
        </nav>
    </>
  );
};