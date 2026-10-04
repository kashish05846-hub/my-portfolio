import { FaAlignCenter, FaDownload } from "react-icons/fa";
import "./Resume.css";
import { useRef } from "react";
import html2pdf from "html2pdf.js";

const Resume = () => {
  const resumeRef = useRef();

  const downloadPDF = () => {
    const element = resumeRef.current;

    const options = {
      margin: 0,
      filename: "Ashish-Resume.pdf",
      image: {
        type: "jpeg",
        quality: 0.98,
      },
      html2canvas: {
        scale: 2,
        useCORS: true,
        backgroundColor: "#0f172a",
      },
      jsPDF: {
        unit: "mm",
        format: "a4",
        orientation: "portrait",
      },
      pagebreak: {
        mode: ["avoid-all", "css", "legacy"],
      },
    };

    html2pdf().set(options).from(element).save();
  };

  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <p>MY JOURNEY</p>
          <h1>Resume</h1>
        </div>

        {/* PDF me ye pura content jayega */}
        <div className="resume-card" ref={resumeRef}>
          <h1 className="heading">Resume</h1>
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

            <p>Hewett Polytechnic Lucknow</p>

            <p>Information Technology</p>
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
        </div>
        <div className="download-btn-container">
          <button className="primary-btn download-btn" onClick={downloadPDF}>
            <FaDownload />
            Download Resume
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resume;
