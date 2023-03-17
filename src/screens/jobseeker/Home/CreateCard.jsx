import React from "react";
import "../../../css/jobseeker/CreateCard.css";
import Button from "@mui/material/Button";
import{Link} from "react-router-dom"

export default function CreateCard() {
  return (
    <div className="create_container">
      <div className="createprofile_container">
        <div className="CP_left">
          <h4 className="referhead">Sign Up & Start Applying</h4>
          <h5 className="create_refer_conten">
            {" "}
            Follow the simple steps to create an impressive profile at FMN in
            under 10 minutes and begin applying.
          </h5>
          <Link to="/Signuplogin" style={{ listStyle: "none", textDecoration: "none" }}>
            <Button
              variant="contained"
              sx={{
                width: "auto",
                mt: 2,
                mb: 2,
                textTransform: "none",
                color: "#ffffff",
                backgroundColor: "#8eb8ce",
                "&:hover": { backgroundColor: "#09c6c8" },
              }}
            >
              {/* Create */}Sign Up
            </Button>
          </Link>
        </div>
        <div className="CP_right">
          <img
            src="jobseeker/jobhunt.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
