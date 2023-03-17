import FeaturedCompanies from "../Home/FeaturedCompanies";
import NavbarJS from "../Home/NavbarJS";

const Jobs = () => {
    return ( 
        <>
        <div className="navbar_header">
          <NavbarJS />
        </div>
        <div>
            <h1>Jobs</h1>
            <FeaturedCompanies />
        </div>
        </>

        
     );
}
 
export default Jobs;