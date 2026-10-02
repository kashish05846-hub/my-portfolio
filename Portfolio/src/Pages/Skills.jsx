import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import "./Skills.css";
const Skills = () => {
  const skills = [
    {
      name: "HTML5",
      icon: <FaHtml5 />,
      level: "Advanced",
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt />,
      level: "Advanced",
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
      level: "Intermediate",
    },
    {
      name: "React.js",
      icon: <FaReact />,
      level: "Intermediate",
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
      level: "Intermediate",
    },
    {
      name: "Express.js",
      icon: <FaNodeJs />,
      level: "Intermediate",
    },
    {
      name: "MongoDB",
      icon: "🍃",
      level: "Intermediate",
    },
    {
      name: "Git",
      icon: <FaGitAlt />,
      level: "Intermediate",
    },
  ];

  return (
    <section className="section">
      <div className="container">
        <div className="section-heading">
          <p>MY TECHNOLOGIES</p>
          <h1>Skills & Expertise</h1>
        </div>

        <div className="skills-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <div className="skill-icon">{skill.icon}</div>

              <h3>{skill.name}</h3>

              <p>{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
