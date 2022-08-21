import React from "react";
import "./About.css";
import { FaGithub } from "react-icons/fa";
// import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const About = () => {
  return (
    <div id="about">
      <div className="a">
        {/* <div className="a-left">
          <div className="a-card bg"></div>
          <div className="a-card">
            <img
              src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHx8&w=1000&q=80"
              alt=""
              className="a-img"
            />
          </div>
        </div> */}
        <div className="a-right">
          <h1 className="a-title">ABOUT ME</h1>
          {/* <p className="a-sub">Hello I'm Abhishek Bhosale</p> */}
          <p className="a-desc">
            Whatever I do,learn or develop,It is with the passion of completing
            it successfully.No matter what hurdles & challenges,I personally
            challenge myself to get things done and that gives me immense
            pleasure.It is because of this feeling of satisfaction that keeps me
            going. And as an Aspiring Full Stack Developer I am seeking for a
            role wherein I can directly make an impact on the company's growth
            as well as my own Career.
          </p>
          <p className="a-desc">Drop a mail @ abhishekbhosale1025@gmail.com </p>

          <div
            id="a-right-div1"
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              width: "50%",
              margin: "auto",
              padding: "20px",
            }}
          >
            {/* <p>email <FaGithub/></p>
            <p>Github</p>
            <p>Linkdin</p> */}
            {/* <FaEmail/> */}
            <h2 style={{ fontSize: "32px" }}>
              {" "}
              <a
                style={{ color: "black" }}
                target="_blank"
                rel="noreferrer"
                href="https://github.com/abhishekbhosale1025"
              >
                {" "}
                <FaGithub />{" "}
              </a>
            </h2>
            <h2 style={{ fontSize: "32px" }}>
              {" "}
              <a
                rel="noreferrer"
                target="_blank"
                style={{ color: "black" }}
                href="https://mail.google.com/mail/u/0/?tf=cm&fs=1&to=abhishekbhosale1025@gamil.com&hl=en-GB"
              >
                {" "}
                <MdEmail />
              </a>
            </h2>
            <h2 style={{ fontSize: "32px" }}>
              {" "}
              <a
                rel="noreferrer"
                target="_blank"
                style={{ color: "#0077b5" }}
                href="https://www.linkedin.com/in/abhishek-bhosale-600921117/"
              >
                <img
                  width="30px"
                  alt=""
                  src="https://cdn.icon-icons.com/icons2/2428/PNG/512/linkedin_black_logo_icon_147114.png"
                />
              </a>{" "}
            </h2>
            {/* <FaLinkedin/> */}
          </div>
          {/* <div className="a-award">
            <img src="https://images.unsplash.com/photo-1542638099-c6b27ffbfd88?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjN8fGZvY3VzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" alt="" className="a-award-img" />
            <div className="a-award-texts">
            <h4 className="a-award-title">Lorem ipsum dolor sit amet consectetur.</h4>
           <p className="a-award-desc"> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum, ullam?</p>
           </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default About;
