import { FaDownload } from "react-icons/fa";

const Resume = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <p>MY JOURNEY</p>
          <h1>Resume</h1>
        </div>

        <div className="resume-card">
          <div className="resume-section">
            <h2>Career Objective</h2>

            <p>
              To build a successful career as a MERN Stack Developer where I can
              apply my programming, problem-solving and development skills to
              create modern and scalable web applications.
            </p>
          </div>

          <hr />

          <div className="resume-section">
            <h2>Education</h2>

            <h3>Diploma in Information Technology</h3>

            <p>Your College Name</p>

            <p>Add your education details here.</p>
          </div>

          <hr />

          <div className="resume-section">
            <h2>Technical Skills</h2>

            <p>
              HTML5 • CSS3 • JavaScript • React.js • Node.js • Express.js •
              MongoDB • Git
            </p>
          </div>

          <hr />

          <div className="resume-section">
            <h2>Projects</h2>

            <p>News Application — MERN Stack</p>

            <p>Professional Portfolio — React</p>
          </div>

          <button className="primary-btn">
            <FaDownload />
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resume;
