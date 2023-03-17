import React from "react";
import "../../../css/Employer/Employerhomebanner1.css";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Employerhomebanner4() {
  return (
    // <div>
    <div className="employerheader">
      <div className="left_employee_header">
        <div className="box_b1">

          <h1 className="reducehiring">Recruit top candidates</h1>
          <h3>
            LWe follow a structured hiring process to get the best candidate for your company.         </h3>
          <Link to="/Signuplogin" className="link_btns">
            <Button sx={{
              mt: 4,
              mb: 4,
              backgroundColor: "#8eb8ce",
              textTransform: "none",
              "&:hover": { backgroundColor: '#09c6c8' }
            }
            }
              variant="contained">
              Get Started</Button>
          </Link>
        </div>
      </div>
      <div className="right_employee_header">
        <div className="right_img"></div>
      </div>
    </div>
  );
}
