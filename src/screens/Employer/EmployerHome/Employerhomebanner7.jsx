import React from "react";
import "../../../css/Employer/Employerhomebanner1.css";
import Button from "@mui/material/Button";

export default function Employerhomebanner2() {
  return (
    // <div>
    <div className="employerheader">
      <div className="left_employee_header">
        <div className="box_b1">
        <h1 className="reducehiring">Reduce recruitment cost upto 45% </h1>
          {/* <p>or</p>
          <h1 className="reducehiring">Cut Hiring Cost</h1>
<p>or</p>
<h1 className="reducehiring">Minimize Cost-Per-Hire
</h1> */}

          <h3>
          We understand the candidate driven market and help in easy recruitment in half the average cost.         </h3>

          <Button sx={{mt:4 ,mb:4,backgroundColor:"#8eb8ce",textTransform:"none","&:hover": {
      backgroundColor: '#09c6c8'}}} variant="contained">Get Started</Button>
        </div>
      </div>
      <div className="right_employee_header">
        <div className="right_img_boy"></div>
      </div>
    </div>
    // </div>
  );
}
