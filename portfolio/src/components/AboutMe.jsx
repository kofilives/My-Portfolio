import React from "react";

const AboutMe = () => {
  return (
    <>
      <div className="d-flex flex-lg-row-reverse  mt-5 container h-100 p-5" data-aos="slide-right">
        <div className="row ">
          <div className="col-lg-6 col-sm-12 d-flex flex-column justify-content-center ">
            <h1 className="text-warning fw-bolder">I'M KOFI ANKOMAH JUNIOR</h1>
            <p className="mt-3 text-wrap col-lg-8">
              Full-Stack Developer with a passion for creating intuitive user
              experiences
            </p>
            <button className="col-lg-3 col-sm-3 bg-warning text-white p-2 rounded" variant="secondary">
              Learn More
            </button>
          </div>

          <div className="col-lg-6 col-sm-12">
            <img
              src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              className="w-100 h-100"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutMe;
