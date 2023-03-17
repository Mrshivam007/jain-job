// import "./categories.css";
import "./bootstrap.min.css";
import BrushIcon from '@mui/icons-material/Brush';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import SensorsIcon from '@mui/icons-material/Sensors';
import ScienceIcon from '@mui/icons-material/Science';
import CodeIcon from '@mui/icons-material/Code';
import TheatersIcon from '@mui/icons-material/Theaters';
import CorporateFareIcon from '@mui/icons-material/CorporateFare';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import PersonIcon from '@mui/icons-material/Person';
import PlaylistAddCheckIcon from '@mui/icons-material/PlaylistAddCheck';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import HandshakeIcon from '@mui/icons-material/Handshake';
import LocalLibraryOutlinedIcon from '@mui/icons-material/LocalLibraryOutlined';
import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
const Categories = () => {
    return ( 
        <div>
            <section id="featured-services" class="featured-services">
          <div className="container-sm" >
                <h1 class="stretched-link" style={{textAlign: 'center', fontFamily: 'none'}}>Popular Categories</h1>
                <h4 class="stretched-link" style={{textAlign: 'center', paddingBottom: '2vh'}}>Here's the categories getting most view on the website.</h4>

{/* <div class="row gy-5" >

  <div class="col-xl-3 col-md-6 d-flex" data-aos="zoom-out"  >
    <div class="service-item position-relative" style={{backgroundColor: 'green'}}>
      <div class="icon"><BrushIcon style={{fontSize: '8vh'}}/></div>
      <h5 class="stretched-link">Design Art & Multimedia</h5>
      <p style={{color: 'white'}}>( 22 opening )</p>
    </div>
  </div>

  <div class="col-xl-3 col-md-6 d-flex" data-aos="zoom-out"   data-aos-delay="200">
    <div class="service-item position-relative" style={{backgroundColor: 'blue'}} >
    <div class="icon"><AttachMoneyIcon style={{fontSize: '8vh'}}/></div>
      <h5 class="stretched-link">Finance</h5>
      <p style={{color: 'white'}} >( 11 opening )</p>
    </div>
  </div>

  <div class="col-xl-3 col-md-6 d-flex" data-aos="zoom-out"   data-aos-delay="400">
    <div class="service-item position-relative" style={{backgroundColor: 'red'}} >
    <div class="icon"><MedicalServicesIcon style={{fontSize: '8vh'}}/></div>
      <h5 class="stretched-link">Medical</h5>
      <p style={{color: 'white'}} >( 27 opening )</p>
    </div>
  </div>

  <div class="col-xl-3 col-md-6 d-flex" data-aos="zoom-out"   data-aos-delay="600">
    <div class="service-item position-relative"style={{backgroundColor: 'yellow'}} > 
    <div class="icon"><SensorsIcon style={{fontSize: '8vh', color: 'black'}}/></div>
      <h5 class="stretched-link" style={{color: 'black'}}>Networking</h5>
      <p>( 12 opening )</p>
    </div>
  </div>

  <div class="col-xl-3 col-md-6 d-flex" data-aos="zoom-out"  >
    <div class="service-item position-relative" style={{backgroundColor: 'red'}} >
    <div class="icon"><ScienceIcon style={{fontSize: '8vh'}}/></div>
      <h5 class="stretched-link">Research</h5>
      <p style={{color: 'white'}} >( 02 opening )</p>
    </div>
  </div>

  <div class="col-xl-3 col-md-6 d-flex" data-aos="zoom-out"   data-aos-delay="200">
    <div class="service-item position-relative" style={{backgroundColor: 'yellow'}} >
    <div class="icon"><CodeIcon style={{fontSize: '8vh', color: 'black'}}/></div>
      <h5 class="stretched-link" style={{color: 'black'}}>Development</h5>
      <p>( 09 opening )</p>
    </div>
  </div>

  <div class="col-xl-3 col-md-6 d-flex" data-aos="zoom-out"   data-aos-delay="400">
    <div class="service-item position-relative" style={{backgroundColor: 'green'}}>
    <div class="icon"><TheatersIcon style={{fontSize: '8vh'}}/></div>
      <h5 class="stretched-link">Film Industry</h5>
      <p style={{color: 'white'}} >( 11 opening )</p>
    </div>
  </div>

  <div class="col-xl-3 col-md-6 d-flex" data-aos="zoom-out"   data-aos-delay="600">
    <div class="service-item position-relative" style={{backgroundColor: 'blue'}}>
    <div class="icon"><CorporateFareIcon style={{fontSize: '8vh'}}/></div>
      <h5 class="stretched-link">Corporate</h5>
      <p style={{color: 'white'}} >(10 opening)</p>
    </div>
  </div>

  <div class="col-xl-3 col-md-6 d-flex" data-aos="zoom-out"   data-aos-delay="400">
    <div class="service-item position-relative" style={{backgroundColor: 'orange'}}>
    <div class="icon"><TheatersIcon style={{fontSize: '8vh'}}/></div>
      <h5 class="stretched-link">Government</h5>
      <p style={{color: 'white'}} >( 12 opening )</p>
    </div>
  </div>

  <div class="col-xl-3 col-md-6 d-flex" data-aos="zoom-out"   data-aos-delay="600">
    <div class="service-item position-relative" style={{backgroundColor: 'purple'}}>
    <div class="icon"><CorporateFareIcon style={{fontSize: '8vh'}}/></div>
      <h5 class="stretched-link">Banking</h5>
      <p style={{color: 'white'}} >(20 opening)</p>
    </div>
  </div>

</div> */}
<div class="container-xxl py-5">
            <div class="container">
                {/* <h1 class="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Explore By Category</h1> */}
                <div class="row g-4">
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                        <a class="cat-item rounded p-4" href="">
                            <i class="text-primary mb-4"><MarkEmailUnreadIcon style={{fontSize: '8vh'}}/></i>
                            <h6 class="mb-3">Marketing</h6>
                            <p class="mb-0">123 Vacancy</p>
                        </a>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                        <a class="cat-item rounded p-4" href="">
                            <i class="text-primary mb-4"><SupportAgentIcon style={{fontSize: '8vh'}}/></i>
                            <h6 class="mb-3">Customer Service</h6>
                            <p class="mb-0">123 Vacancy</p>
                        </a>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                        <a class="cat-item rounded p-4" href="">
                            <i class="text-primary mb-4"><PersonIcon style={{fontSize: '8vh'}}/></i>
                            <h6 class="mb-3">Human Resource</h6>
                            <p class="mb-0">123 Vacancy</p>
                        </a>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                        <a class="cat-item rounded p-4" href="">
                            <i class="text-primary mb-4"><PlaylistAddCheckIcon style={{fontSize: '8vh'}}/></i>
                            <h6 class="mb-3">Project Management</h6>
                            <p class="mb-0">123 Vacancy</p>
                        </a>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                        <a class="cat-item rounded p-4" href="">
                            <i class="text-primary mb-4"><BusinessCenterIcon style={{fontSize: '8vh'}}/></i>
                            <h6 class="mb-3">Business Development</h6>
                            <p class="mb-0">123 Vacancy</p>
                        </a>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                        <a class="cat-item rounded p-4" href="">
                            <i class="text-primary mb-4"><HandshakeIcon style={{fontSize: '8vh'}}/></i>
                            <h6 class="mb-3">Sales & Communication</h6>
                            <p class="mb-0">123 Vacancy</p>
                        </a>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                        <a class="cat-item rounded p-4" href="">
                            <i class="text-primary mb-4"><LocalLibraryOutlinedIcon style={{fontSize: '8vh'}}/></i>
                            <h6 class="mb-3">Teaching & Education</h6>
                            <p class="mb-0">123 Vacancy</p>
                        </a>
                    </div>
                    <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                        <a class="cat-item rounded p-4" href="">
                            <i class=" text-primary mb-4"><DesignServicesOutlinedIcon style={{fontSize: '8vh'}}/></i>
                            <h6 class="mb-3">Design & Creative</h6>
                            <p class="mb-0">123 Vacancy</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>


</div>
</section>
        </div>
     );
}
 
export default Categories;