import { Routes, Route } from "react-router";
import { Navbar } from "../Components/Nav";
import { SignIn } from "../Components/SignIn";
import { SignUp } from "../Components/SignUp";
import { Flat } from "../Components/Flat";
import { Home } from "../Components/Home";
// import { SortAndFilterButtons } from "../Components/SortAndFilterButtons/SortAndFilterButtons"

export const AllRoutes = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/sign-in" element={<SignIn/>} />
        <Route exact path="/sign-up" element={<SignUp />} />
        <Route exact path="/flatdetails" element={<Flat/>} />
        {/* Create other routes here: Section, bookdetailspage and 404 */}
        {/*  */}
      </Routes>
    </>
  );
};