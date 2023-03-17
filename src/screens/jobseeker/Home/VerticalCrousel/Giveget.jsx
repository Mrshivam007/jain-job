import React from "react";
import Button from "@mui/material/Button";
import "../../../../css/jobseeker/Giveget.css";
import  {Link} from "react-router-dom";

const Giveget = () => {
  return (
    <>
      <div className="get_container">
        <div className="left_get">
          <h3 className="get_heading">Give Get and Start Applying</h3>
          <h5 className='create_refer_conten'> Getting job too easy on FMN. Create your profile in
            less than 10 minutes with your CV and Cover
            letter services of FMN.</h5>
          <Link to="/Signuplogin" style={{ listStyle: "none", textDecoration: "none" }}>
            <Button variant="contained"
              sx={{
                width: "30%",
                textTransform: "none",
                color: "#ffffff",
                backgroundColor: "#8eb8ce",
                "&:hover": { backgroundColor: "#09c6c8" },
              }}
            >Get</Button>
          </Link>
        </div>
        <div className="right_get">
          <img className="get_give_img"
            src="jobseeker/getsideimg.png"
            alt="_"
          />
        </div>
      </div>
    </>
  );
};

export default Giveget;
