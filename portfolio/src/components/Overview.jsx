import React from "react";
// import './AboutMe.css'; // Optional: for styling purposes

const Overview = () => {
  return (
    <section className="container mt-5 mb-5 p-5" data-aos="fade-up">
      <h2 className="text-center text-warning fw-bolder mb-5">
        WANT TO KNOW MORE ABOUT ME?
      </h2>

      <div className="d-flex flex-row-reverse justify-content-around gap-5">
        <div className="col-lg-6 col-sm-12">
          <p>
            Hello! I'm <strong>Kofi</strong>, a passionate software developer
            with a love for building web applications that make a difference.
            With experience in full-stack development, I specialize in
            technologies like <strong>JavaScript</strong>,{" "}
            <strong>Python</strong>, and frameworks such as{" "}
            <strong>React</strong> and <strong>Django</strong>.
          </p>
          <p>
            I enjoy solving complex problems and crafting efficient solutions
            that provide intuitive user experiences. My career journey has led
            me to work on various exciting projects, including my latest one,{" "}
            <strong>
              "Data Security for Blood Donors Using Blockchain Technology"
            </strong>
            , which leverages cutting-edge blockchain solutions for secure and
            traceable data management.
          </p>
          <p>
            Beyond coding, I'm constantly exploring new technologies and trends
            to stay up-to-date with the ever-evolving tech landscape. My goal is
            to continue honing my skills while contributing to impactful
            projects and collaborating with other talented developers.
          </p>
        </div>

        <div className="col-lg-6 col-sm-12">
          <h3>Skills & Technologies</h3>
          <ul className="skills-list">
            <li>JavaScript (React, Next.js)</li>
            <li>Python (Django)</li>
            <li>HTML5, CSS3, Bootstrap5</li>

            <li>Git, Github</li>
          </ul>
          <p>
            Feel free to explore my projects and reach out if you'd like to
            collaborate!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Overview;
