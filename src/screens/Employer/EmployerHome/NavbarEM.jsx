import React, { useState } from 'react'
import "../../../css/Employer/NavbarEmployer.css";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";
import SpecialServiceCard from "../../jobseeker/Home/SpecialServiceCard";
import ReferFriendPopup from '../../../components/Employer/ReferCard/ReferFriendPopup';


export default function NavbarEM() {
  
  const [popup, setPopup] = React.useState(false);
  const [isDashboard, setDashboard] = useState(false);
  const [hamberger, setHamberger] = useState(false);
  const toggle = () => setHamberger(!hamberger);
  const [refer,setRefer]=React.useState(false);
  const [isAuth, setAuth] = React.useState(false);


  const handleOnClick = () => {
    // if(age == 10 || age == 20 || age == 30){
    // return true;
    setPopup(true);
    // }
  };
  const handleRefer = () => {
    setRefer(true);

  }


  return (
    <>
          <div className="Navbar">
        <div
          className={hamberger ? "navbarResponsive" : "navbar"}
          onClick={() => setHamberger(false)}
        >
          <Link to="/">
            <img src="img/jain-logo.png"  alt="_"  style={{width: '6vh', marginTop: '1vh'}}/>
          </Link>
          <Link to="/" style={{color: 'black'}}>Home</Link>
          <Link to="/jobs" style={{color: 'black'}}>Jobs</Link>
          {/* <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Jobs</a>
                        <div class="dropdown-menu rounded-0 m-0">
                            <a href="job-list.html" class="dropdown-item">Job List</a>
                            <a href="job-detail.html" class="dropdown-item">Job Detail</a>
                        </div>
                    </div> */}
          {/* <Link to="/JobseekerSubscription">Subscriptions</Link>
          <h4 className="special_fmn" onClick={handleOnClick}>
            Specialised FMN Service
          </h4> */}
          {popup && <SpecialServiceCard Popup={setPopup} />}
          <h4 className="special_fmn" onClick={handleRefer} >Referral</h4>
          {refer && <ReferFriendPopup PopupPage={setRefer}/>}
          <a href="/FaqTab" style={{color: 'black'}}>FAQ</a>
          <Link to="/blogposts" style={{color: 'black'}}>Blogs</Link>
          <a href="/#contact" style={{color: 'black'}}>Contact</a>
          <Link to="/employerhome" style={{color: 'black'}}>Employer</Link>
          {/* <Link to="/storyclub">Story</Link> */}
          {!isAuth && (
            <Link to="/Signuplogin" className="Next_Page">
              <button style={{background: '#8eb8ce', color: 'black', borderColor: '#8eb8ce' }}>Register / Login</button>
            </Link>
          )}
          {isAuth && (
            <Link to={isDashboard}>
              <button type="button">Dashboard</button>
            </Link>
          )}
        </div>
        <button className="mobile_menu_icon" onClick={toggle}>
          {hamberger ? "X" : <FaBars />}
        </button>
      </div>
    </>
  )
}
