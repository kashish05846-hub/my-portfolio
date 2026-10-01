import { FaCode, FaLaptopCode, FaDatabase, FaServer } from "react-icons/fa";

const About = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <p>GET TO KNOW ME</p>
          <h1>About Me</h1>
        </div>

        <div className="about-grid">
          <div className="about-content">
            <h2>Turning ideas into meaningful digital experiences.</h2>

            <p>
              I am a passionate MERN Stack Developer interested in creating
              modern and user-friendly web applications.
            </p>

            <p>
              I enjoy working with JavaScript and React to create interactive
              frontend experiences. I also build backend APIs using Node.js and
              Express.js.
            </p>

            <p>
              MongoDB helps me create and manage application data while keeping
              my projects scalable and organized.
            </p>
          </div>

          <div className="about-services">
            <div className="service-card">
              <FaCode />
              <div>
                <h3>Frontend</h3>
                <p>React & JavaScript</p>
              </div>
            </div>

            <div className="service-card">
              <FaServer />
              <div>
                <h3>Backend</h3>
                <p>Node & Express</p>
              </div>
            </div>

            <div className="service-card">
              <FaDatabase />
              <div>
                <h3>Database</h3>
                <p>MongoDB</p>
              </div>
            </div>

            <div className="service-card">
              <FaLaptopCode />
              <div>
                <h3>Development</h3>
                <p>Full Stack Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
