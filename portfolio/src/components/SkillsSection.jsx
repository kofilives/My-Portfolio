import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaReact, FaPython, FaNodeJs, FaHtml5, FaCss3Alt, FaGitAlt } from 'react-icons/fa';

const skillsData = [
  { name: 'React', icon: <FaReact />, level: 80, color: 'info' },
  { name: 'Python', icon: <FaPython />, level: 70, color: 'primary' },
  { name: 'Node.js', icon: <FaNodeJs />, level: 50, color: 'success' },
  { name: 'HTML5', icon: <FaHtml5 />, level: 95, color: 'danger' },
  { name: 'CSS3', icon: <FaCss3Alt />, level: 90, color: 'warning' },
  { name: 'Git', icon: <FaGitAlt />, level: 75, color: 'secondary' },
];

const SkillProgress = ({ skill }) => (
  <div className="mb-4">
    <div className="d-flex justify-content-between align-items-center mb-2">
      <div>
        {skill.icon} <span className="ms-2">{skill.name}</span>
      </div>
      <span className="badge bg-light text-dark">{skill.level}%</span>
    </div>
    <div className="progress" style={{ height: '10px' }}>
      <div
        className={`progress-bar bg-${skill.color}`}
        role="progressbar"
        style={{ width: `${skill.level}%` }}
        aria-valuenow={skill.level}
        aria-valuemin="0"
        aria-valuemax="100"
      />
    </div>
  </div>
);

const SkillsSection = () => {
  return (
    <section className="skills-section py-5" id='skills'  data-aos="fade-left">
      <div className="container">
        <h2 className="text-center mb-5 fw-bolder text-warning" data-aos="fade-up">SKILLS & PROFECIENCIES</h2>
        <div className="row justify-content-center">
          <div className="col-lg-8">
            {skillsData.map((skill, index) => (
              <SkillProgress key={index} skill={skill} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
