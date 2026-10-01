import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaArrowRight,
  FaCode,
  FaDownload,
} from "react-icons/fa";
import profile from "../assets/profilePhoto.png";
const Home = () => {
  return (
    <main>
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            {/* Left Side */}

            <div className="hero-content">
              <p className="hero-intro">HELLO, I'M</p>

              <h1>
                Ashish
                <br />
                <span>Nishad</span>
              </h1>

              <h2>MERN Stack Developer</h2>

              <p className="hero-description">
                I build modern, responsive and scalable web applications using
                MongoDB, Express.js, React.js and Node.js.
              </p>

              <div className="hero-buttons">
                <Link to="/projects" className="primary-btn">
                  View Projects
                  <FaArrowRight />
                </Link>

                <Link to="/resume" className="secondary-btn">
                  <FaDownload />
                  Resume
                </Link>
              </div>

              <div className="social-links">
                <a href="#" target="_blank">
                  <FaGithub />
                </a>

                <a href="#" target="_blank">
                  <FaLinkedin />
                </a>
              </div>
            </div>

            {/* Right Side */}

            <div className="hero-image-area">
              <div className="hero-circle">
                <div className="hero-circle-inner">
                  {/* <FaCode className="code-icon" />

                  <h3>MERN</h3>

                  <p>Full Stack Developer</p> */}
                  <img src={profile} alt="Profile" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Info */}

      <section className="quick-section">
        <div className="container">
          <div className="quick-grid">
            <div className="quick-card">
              <h3>01</h3>
              <p>Clean Code</p>
            </div>

            <div className="quick-card">
              <h3>02</h3>
              <p>Responsive Design</p>
            </div>

            <div className="quick-card">
              <h3>03</h3>
              <p>Modern Technology</p>
            </div>

            <div className="quick-card">
              <h3>04</h3>
              <p>Problem Solving</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
