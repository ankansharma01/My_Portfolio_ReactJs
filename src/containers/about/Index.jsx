import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";
import PageHeader from "../../components/pageHeader/Index";
import { Animate } from "react-simple-animate";
import "./styles.scss";
import { DiAndroid } from "react-icons/di";
import { FaDev, FaDatabase,FaJava,FaPython,FaReact } from "react-icons/fa";

const personalDetails = [
  { label: "Name", value: "Ankan Sharma" },
  { label: "Age", value: "20" },
  { label: "Address", value: "Kolkata,India" },
  { label: "Email", value: "ankansharma930@gmail.com" },
  { label: "Contact No", value: "+91 9875417995" },
];
const jobSummary = "Currently pursuing a B.Tech in Computer Science and Engineering, I am passionate about software development with practical experience in Java, Python, and React.js. I have actively developed skills in creating robust applications using Java, implementing efficient algorithms and data structures. Python has been instrumental in my journey, enabling me to build versatile applications and explore web development with frameworks like Django. As I delve into React.js, I am enhancing my expertise in building responsive and interactive user interfaces. Eager to expand my knowledge, I am on a learning path towards mastering machine learning techniques, aiming to apply predictive analytics and data-driven insights to my projects.";
const About = () => {
  return (
    <section id="about" className="about">
      <PageHeader headerText="About Me" icon={<BsInfoCircleFill size={40} />} />
      <div className="about__content">
        <div className="about__content__personalwrapper">
          {" "}
          <Animate
            play
            duration={1}
            delay={1}
            start={{
              transform: "translateX(-900px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3>Software Developer</h3>
            <p>{jobSummary}</p>
          </Animate>
          <Animate
            play
            duration={1}
            delay={1}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="personalInformation">Personal Information</h3>
            <ul>
              {personalDetails.map((item, index) => (
                <li key={index}>
                  <span className="title">{item.label}</span>
                  <span className="value">{item.value}</span>
                </li>
              ))}
            </ul>
          </Animate>
        </div>
        <div className="about__content__serviceswrapper">
        <Animate
            play
            duration={1}
            delay={1}
            start={{
              transform: "translateX(600px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
        <div className="about__content__serviceswrapper__innerContent">
        <div><div>
            <FaPython size={60} color="var( --yellow-theme-main-color)" />
          </div></div>
        <div>
            <FaReact size={60} color="var( --yellow-theme-main-color)" />
          </div>
          <div>
            <FaDatabase size={60} color="var( --yellow-theme-main-color)" />
          </div>
          
          <div>
            <FaJava size={60} color="var( --yellow-theme-main-color)" />
          </div>
          </div>
          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
