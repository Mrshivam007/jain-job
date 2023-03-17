import React from "react";
import "../../../css/jobseeker/UploadResume.css";
import Button from "@mui/material/Button";
import {Link} from 'react-router-dom';

const UploadResume = () => {
  return (
    <>
      <div className="upload_resume">
        <div className="upload_resume_left">
          <img
            className="resume_img"
            src="jobseeker/Onlineresume.png"
            alt="_"
          />
        </div>
        <div className="upload_resume_right">
          <div className="right_resume_content">
            <h1 className="upload_cv_heading">
              Get Your Resume Noticed by Top Employers
            </h1>
            <p className="upload_cv_contetn">
              {" "}
              Increase your resume visibility with FMN. Follow our tips, get
              more views, and make for the best match with an ideal employer.{" "}
            </p>
            <Link to="/Signuplogin" style={{listStyle:"none",textDecoration:"none"}}>
            <Button
              sx={{
                width: "auto",
                background: "#8eb8ce",
                borderRadius: "5px",
                mt: 2,
                textTransform: "none",
                color: "#ffffff",
                "&:hover": { backgroundColor: "#09c6c8" },
              }}
              variant="contained"
            >
              Upload Your Resume 
            </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadResume;
