import React from "react";
import "./Intro.css";

const Intro = () => {
  return (
    <div className="i" id="main">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h1 style={{ display: "flex", fontSize: "50px",marginBottom:"-40px",marginTop:"15px" }}>Hello 👋</h1>
          <h1   className="i-name">I'm <span style={{color:'#4070f4'}}>Abhishek</span></h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Web developer</div>
              <div className="i-title-item">UI/UX Designer</div>
              <div className="i-title-item">MERN Stack Developer</div>
              {/* <div className="i-title-item">Content Creator</div> */}
              <div className="i-title-item">FrontEnd Developer</div>
            </div>
          </div>
          {/* <p className="i-desc">
          Quick learner and an aspiring full-stack web developer with core knowledge of MERN stack technology. Looking forward to applying and enhancing my skills and knowledge as a developer.
          </p> */}
         <a  rel="noreferrer" target = '_blank' href="https://drive.google.com/file/d/10hmZjj_8caclKCf4WEP0CoUM2mL9mTcA/view?usp=sharing"> <button style={{cursor:"pointer",background:"#4070f4",color:"white",border:"none"}} id="btnresume">Resume</button></a>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg">
          {" "}
          <img src='/AAB.jpg' alt="AB" className="i-img" />
        </div>
      </div>
    </div>
  );
};

export default Intro;
