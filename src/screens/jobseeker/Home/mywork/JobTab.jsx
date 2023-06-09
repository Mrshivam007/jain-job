import './style.css';
import './bootstrap.min.css';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
const JobTab = () => {
  return (
    <div>
                  <div class="container-xxl py-5">
        <div class="container-sm">
          <h1 class="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Job Listing</h1>
          <div class="tab-class text-center wow fadeInUp" data-wow-delay="0.3s">
            <ul class="nav nav-pills d-inline-flex justify-content-center border-bottom mb-5">
              <li class="nav-item">
                <a class="d-flex align-items-center text-start mx-3 ms-0 pb-3 active" data-bs-toggle="pill" href="#tab-1">
                  <h6 class="mt-n1 mb-0">Featured</h6>
                </a>
              </li>
              <li class="nav-item">
                <a class="d-flex align-items-center text-start mx-3 pb-3" data-bs-toggle="pill" href="#tab-2">
                  <h6 class="mt-n1 mb-0">Full Time</h6>
                </a>
              </li>
              <li class="nav-item">
                <a class="d-flex align-items-center text-start mx-3 me-0 pb-3" data-bs-toggle="pill" href="#tab-3">
                  <h6 class="mt-n1 mb-0">Part Time</h6>
                </a>
              </li>
            </ul>
            <div class="tab-content">
              <div id="tab-1" class="tab-pane fade show p-0 active">
                <div class="job-item p-4 mb-4">
                  <div class="row g-4">
                    <div class="col-sm-12 col-md-8 d-flex align-items-center">
                      <img class="flex-shrink-0 img-fluid border rounded" src="img/com-logo-1.jpg" alt="" style={{width: '80px', height: '80px'}} />
                        <div class="text-start ps-4">
                          <h5 class="mb-3">Software Engineer</h5>
                          <span class="text-truncate me-3"><LocationOnIcon />New York, USA</span> <br />
                          <span class="text-truncate me-3"><AccessTimeIcon />Full Time</span> <br />
                          <span class="text-truncate me-0"><AttachMoneyIcon />$123 - $456</span> <br />
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                      <div class="d-flex mb-3">
                        <a class="btn btn-light btn-square me-3" href=""><i class="far fa-heart text-primary"></i></a>
                        <a class="btn btn-primary" href="">Apply Now</a>
                      </div>
                      <small class="text-truncate"><i class="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small>
                    </div>
                  </div>
                </div>
                <div class="job-item p-4 mb-4">
                  <div class="row g-4">
                    <div class="col-sm-12 col-md-8 d-flex align-items-center">
                      <img class="flex-shrink-0 img-fluid border rounded" src="img/com-logo-2.jpg" alt="" style={{width: '80px', height: '80px'}} />
                        <div class="text-start ps-4">
                          <h5 class="mb-3">Marketing Manager</h5>
                          <span class="text-truncate me-3"><LocationOnIcon />New York, USA</span> <br />
                          <span class="text-truncate me-3"><AccessTimeIcon />Full Time</span> <br />
                          <span class="text-truncate me-0"><AttachMoneyIcon />$123 - $456</span> <br />
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                      <div class="d-flex mb-3">
                        <a class="btn btn-light btn-square me-3" href=""><i class="far fa-heart text-primary"></i></a>
                        <a class="btn btn-primary" href="">Apply Now</a>
                      </div>
                      <small class="text-truncate"><i class="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small>
                    </div>
                  </div>
                </div>
                <div class="job-item p-4 mb-4">
                  <div class="row g-4">
                    <div class="col-sm-12 col-md-8 d-flex align-items-center">
                      <img class="flex-shrink-0 img-fluid border rounded" src="img/com-logo-3.jpg" alt="" style={{width: '80px', height: '80px'}} />
                        <div class="text-start ps-4">
                          <h5 class="mb-3">Product Designer</h5>
                          <span class="text-truncate me-3"><LocationOnIcon />New York, USA</span> <br />
                          <span class="text-truncate me-3"><AccessTimeIcon />Full Time</span> <br />
                          <span class="text-truncate me-0"><AttachMoneyIcon />$123 - $456</span> <br />
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                      <div class="d-flex mb-3">
                        <a class="btn btn-light btn-square me-3" href=""><i class="far fa-heart text-primary"></i></a>
                        <a class="btn btn-primary" href="">Apply Now</a>
                      </div>
                      <small class="text-truncate"><i class="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small>
                    </div>
                  </div>
                </div>
                <div class="job-item p-4 mb-4">
                  <div class="row g-4">
                    <div class="col-sm-12 col-md-8 d-flex align-items-center">
                      <img class="flex-shrink-0 img-fluid border rounded" src="img/com-logo-4.jpg" alt="" style={{width: '80px', height: '80px'}} />
                        <div class="text-start ps-4">
                          <h5 class="mb-3">Creative Director</h5>
                          <span class="text-truncate me-3"><LocationOnIcon />New York, USA</span> <br />
                          <span class="text-truncate me-3"><AccessTimeIcon />Full Time</span> <br />
                          <span class="text-truncate me-0"><AttachMoneyIcon />$123 - $456</span> <br />
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                      <div class="d-flex mb-3">
                        <a class="btn btn-light btn-square me-3" href=""><i class="far fa-heart text-primary"></i></a>
                        <a class="btn btn-primary" href="">Apply Now</a>
                      </div>
                      <small class="text-truncate"><i class="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small>
                    </div>
                  </div>
                </div>
                <div class="job-item p-4 mb-4">
                  <div class="row g-4">
                    <div class="col-sm-12 col-md-8 d-flex align-items-center">
                      <img class="flex-shrink-0 img-fluid border rounded" src="img/com-logo-5.jpg" alt="" style={{width: '80px', height: '80px'}} />
                        <div class="text-start ps-4">
                          <h5 class="mb-3">Wordpress Developer</h5>
                          <span class="text-truncate me-3"><LocationOnIcon />New York, USA</span> <br />
                          <span class="text-truncate me-3"><AccessTimeIcon />Full Time</span> <br />
                          <span class="text-truncate me-0"><AttachMoneyIcon />$123 - $456</span> <br />
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                      <div class="d-flex mb-3">
                        <a class="btn btn-light btn-square me-3" href=""><i class="far fa-heart text-primary"></i></a>
                        <a class="btn btn-primary" href="">Apply Now</a>
                      </div>
                      <small class="text-truncate"><i class="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small>
                    </div>
                  </div>
                </div>
                <a class="btn btn-primary py-3 px-5" href="">Browse More Jobs</a>
              </div>
              <div id="tab-2" class="tab-pane fade show p-0">
                <div class="job-item p-4 mb-4">
                  <div class="row g-4">
                    <div class="col-sm-12 col-md-8 d-flex align-items-center">
                      <img class="flex-shrink-0 img-fluid border rounded" src="img/com-logo-1.jpg" alt="" style={{width: '80px', height: '80px'}} />
                        <div class="text-start ps-4">
                          <h5 class="mb-3">Software Engineer</h5>
                          <span class="text-truncate me-3"><LocationOnIcon />New York, USA</span> <br />
                          <span class="text-truncate me-3"><AccessTimeIcon />Full Time</span> <br />
                          <span class="text-truncate me-0"><AttachMoneyIcon />$123 - $456</span> <br />
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                      <div class="d-flex mb-3">
                        <a class="btn btn-light btn-square me-3" href=""><i class="far fa-heart text-primary"></i></a>
                        <a class="btn btn-primary" href="">Apply Now</a>
                      </div>
                      <small class="text-truncate"><i class="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small>
                    </div>
                  </div>
                </div>
                <div class="job-item p-4 mb-4">
                  <div class="row g-4">
                    <div class="col-sm-12 col-md-8 d-flex align-items-center">
                      <img class="flex-shrink-0 img-fluid border rounded" src="img/com-logo-2.jpg" alt="" style={{width: '80px', height: '80px'}} />
                        <div class="text-start ps-4">
                          <h5 class="mb-3">Marketing Manager</h5>
                          <span class="text-truncate me-3"><LocationOnIcon />New York, USA</span> <br />
                          <span class="text-truncate me-3"><AccessTimeIcon />Full Time</span> <br />
                          <span class="text-truncate me-0"><AttachMoneyIcon />$123 - $456</span> <br />
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                      <div class="d-flex mb-3">
                        <a class="btn btn-light btn-square me-3" href=""><i class="far fa-heart text-primary"></i></a>
                        <a class="btn btn-primary" href="">Apply Now</a>
                      </div>
                      <small class="text-truncate"><i class="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small>
                    </div>
                  </div>
                </div>
                <div class="job-item p-4 mb-4">
                  <div class="row g-4">
                    <div class="col-sm-12 col-md-8 d-flex align-items-center">
                      <img class="flex-shrink-0 img-fluid border rounded" src="img/com-logo-3.jpg" alt="" style={{width: '80px', height: '80px'}} />
                        <div class="text-start ps-4">
                          <h5 class="mb-3">Product Designer</h5>
                          <span class="text-truncate me-3"><LocationOnIcon />New York, USA</span> <br />
                          <span class="text-truncate me-3"><AccessTimeIcon />Full Time</span> <br />
                          <span class="text-truncate me-0"><AttachMoneyIcon />$123 - $456</span> <br />
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                      <div class="d-flex mb-3">
                        <a class="btn btn-light btn-square me-3" href=""><i class="far fa-heart text-primary"></i></a>
                        <a class="btn btn-primary" href="">Apply Now</a>
                      </div>
                      <small class="text-truncate"><i class="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small>
                    </div>
                  </div>
                </div>
                <div class="job-item p-4 mb-4">
                  <div class="row g-4">
                    <div class="col-sm-12 col-md-8 d-flex align-items-center">
                      <img class="flex-shrink-0 img-fluid border rounded" src="img/com-logo-4.jpg" alt="" style={{width: '80px', height: '80px'}} />
                        <div class="text-start ps-4">
                          <h5 class="mb-3">Creative Director</h5>
                          <span class="text-truncate me-3"><LocationOnIcon />New York, USA</span> <br />
                          <span class="text-truncate me-3"><AccessTimeIcon />Full Time</span> <br />
                          <span class="text-truncate me-0"><AttachMoneyIcon />$123 - $456</span> <br />
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                      <div class="d-flex mb-3">
                        <a class="btn btn-light btn-square me-3" href=""><i class="far fa-heart text-primary"></i></a>
                        <a class="btn btn-primary" href="">Apply Now</a>
                      </div>
                      <small class="text-truncate"><i class="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small>
                    </div>
                  </div>
                </div>
                <div class="job-item p-4 mb-4">
                  <div class="row g-4">
                    <div class="col-sm-12 col-md-8 d-flex align-items-center">
                      <img class="flex-shrink-0 img-fluid border rounded" src="img/com-logo-5.jpg" alt="" style={{width: '80px', height: '80px'}} />
                        <div class="text-start ps-4">
                          <h5 class="mb-3">Wordpress Developer</h5>
                          <span class="text-truncate me-3"><LocationOnIcon />New York, USA</span> <br />
                          <span class="text-truncate me-3"><AccessTimeIcon />Full Time</span> <br />
                          <span class="text-truncate me-0"><AttachMoneyIcon />$123 - $456</span> <br />
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                      <div class="d-flex mb-3">
                        <a class="btn btn-light btn-square me-3" href=""><i class="far fa-heart text-primary"></i></a>
                        <a class="btn btn-primary" href="">Apply Now</a>
                      </div>
                      <small class="text-truncate"><i class="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small>
                    </div>
                  </div>
                </div>
                <a class="btn btn-primary py-3 px-5" href="">Browse More Jobs</a>
              </div>
              <div id="tab-3" class="tab-pane fade show p-0">
                <div class="job-item p-4 mb-4">
                  <div class="row g-4">
                    <div class="col-sm-12 col-md-8 d-flex align-items-center">
                      <img class="flex-shrink-0 img-fluid border rounded" src="img/com-logo-1.jpg" alt="" style={{width: '80px', height: '80px'}} />
                        <div class="text-start ps-4">
                          <h5 class="mb-3">Software Engineer</h5>
                          <span class="text-truncate me-3"><LocationOnIcon />New York, USA</span> <br />
                          <span class="text-truncate me-3"><AccessTimeIcon />Full Time</span> <br />
                          <span class="text-truncate me-0"><AttachMoneyIcon />$123 - $456</span> <br />
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                      <div class="d-flex mb-3">
                        <a class="btn btn-light btn-square me-3" href=""><i class="far fa-heart text-primary"></i></a>
                        <a class="btn btn-primary" href="">Apply Now</a>
                      </div>
                      <small class="text-truncate"><i class="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small>
                    </div>
                  </div>
                </div>
                <div class="job-item p-4 mb-4">
                  <div class="row g-4">
                    <div class="col-sm-12 col-md-8 d-flex align-items-center">
                      <img class="flex-shrink-0 img-fluid border rounded" src="img/com-logo-2.jpg" alt="" style={{width: '80px', height: '80px'}} />
                        <div class="text-start ps-4">
                          <h5 class="mb-3">Marketing Manager</h5>
                          <span class="text-truncate me-3"><LocationOnIcon />New York, USA</span> <br />
                          <span class="text-truncate me-3"><AccessTimeIcon />Full Time</span> <br />
                          <span class="text-truncate me-0"><AttachMoneyIcon />$123 - $456</span> <br />
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                      <div class="d-flex mb-3">
                        <a class="btn btn-light btn-square me-3" href=""><i class="far fa-heart text-primary"></i></a>
                        <a class="btn btn-primary" href="">Apply Now</a>
                      </div>
                      <small class="text-truncate"><i class="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small>
                    </div>
                  </div>
                </div>
                <div class="job-item p-4 mb-4">
                  <div class="row g-4">
                    <div class="col-sm-12 col-md-8 d-flex align-items-center">
                      <img class="flex-shrink-0 img-fluid border rounded" src="img/com-logo-3.jpg" alt="" style={{width: '80px', height: '80px'}} />
                        <div class="text-start ps-4">
                          <h5 class="mb-3">Product Designer</h5>
                          <span class="text-truncate me-3"><LocationOnIcon />New York, USA</span> <br />
                          <span class="text-truncate me-3"><AccessTimeIcon />Full Time</span> <br />
                          <span class="text-truncate me-0"><AttachMoneyIcon />$123 - $456</span> <br />
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                      <div class="d-flex mb-3">
                        <a class="btn btn-light btn-square me-3" href=""><i class="far fa-heart text-primary"></i></a>
                        <a class="btn btn-primary" href="">Apply Now</a>
                      </div>
                      <small class="text-truncate"><i class="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small>
                    </div>
                  </div>
                </div>
                <div class="job-item p-4 mb-4">
                  <div class="row g-4">
                    <div class="col-sm-12 col-md-8 d-flex align-items-center">
                      <img class="flex-shrink-0 img-fluid border rounded" src="img/com-logo-4.jpg" alt="" style={{width: '80px', height: '80px'}} />
                        <div class="text-start ps-4">
                          <h5 class="mb-3">Creative Director</h5>
                          <span class="text-truncate me-3"><LocationOnIcon />New York, USA</span> <br />
                          <span class="text-truncate me-3"><AccessTimeIcon />Full Time</span> <br />
                          <span class="text-truncate me-0"><AttachMoneyIcon />$123 - $456</span> <br />
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                      <div class="d-flex mb-3">
                        <a class="btn btn-light btn-square me-3" href=""><i class="far fa-heart text-primary"></i></a>
                        <a class="btn btn-primary" href="">Apply Now</a>
                      </div>
                      <small class="text-truncate"><i class="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small>
                    </div>
                  </div>
                </div>
                <div class="job-item p-4 mb-4">
                  <div class="row g-4">
                    <div class="col-sm-12 col-md-8 d-flex align-items-center">
                      <img class="flex-shrink-0 img-fluid border rounded" src="img/com-logo-5.jpg" alt="" style={{width: '80px', height: '80px'}} />
                        <div class="text-start ps-4">
                          <h5 class="mb-3">Wordpress Developer</h5>
                          <span class="text-truncate me-3"><LocationOnIcon />New York, USA</span> <br />
                          <span class="text-truncate me-3"><AccessTimeIcon />Full Time</span> <br />
                          <span class="text-truncate me-0"><AttachMoneyIcon />$123 - $456</span> <br />
                        </div>
                    </div>
                    <div class="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                      <div class="d-flex mb-3">
                        <a class="btn btn-light btn-square me-3" href=""><i class="far fa-heart text-primary"></i></a>
                        <a class="btn btn-primary" href="">Apply Now</a>
                      </div>
                      <small class="text-truncate"><i class="far fa-calendar-alt text-primary me-2"></i>Date Line: 01 Jan, 2045</small>
                    </div>
                  </div>
                </div>
                <a class="btn btn-primary py-3 px-5" href="">Browse More Jobs</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobTab;