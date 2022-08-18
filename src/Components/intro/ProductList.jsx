import React from "react";

import { FaGithub } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import "./ProductList.css";
const ProductList = () => {
  return (
    <div id="projects">
      <h2
        style={{
          textAlign: "center",
          paddingTop: "210px",
          fontSize: "36px",
          fontWeight:" 800",
          color:"#4070f4",
          textDecoration: "underline",
          marginBottom: "-6px"
        }}
      >
       Projects
      </h2>

      {/* ////////////////////////////////        Netmeds        ///////////////////// */}
      <div class="container">
        <div class="card">
          <div class="box">
            <div class="content" style={{paddingTop:"30px"}}>
              {/* <h2>01</h2>
               */}

                <div>
                {" "}
                <img
                  src="/netmeds.png"
                  alt=""
                />
              </div>

              <h3>Netmeds Clone</h3>
              <p style={{textAlign:"left" ,fontSize:"14px"}}>Netmeds.com, India Ki Pharmacy, is one of India’s most trusted pharmacies, with over 100 years’ experience in dispensing quality medicines.
                <br /><br />
                <span style={{textDecoration:"underline"}}>Tech Stack: </span>React.js | Redux | Javascript | HTML | CSS 
                <br /> <br />
               <span style={{textDecoration:"underline"}}>Areas of Responsibilty</span>: In this project I worked on the main functionalities of this Pharmacitical E-commerce website starting with Sign-up to till the buying a products from the website.I used React-Redux,Javascript & Chakra UI for building the pages.And I used JSON server for the database. 
               <br /><br />
               Created this project individually in 5-days.
              </p>

               {/* ///////////////////// */}
               <div
              id='buttonnn'
              >
               <a
                  class="one"
                  target = '_blank'
                  rel="noreferrer"
                  href="https://github.com/abhishekbhosale1025/NetmedsCloneAB"
                >
                <FaGithub /> Github
                </a>
                <a
                  target = '_blank'
                  rel="noreferrer"
                  class="one"
                  href="https://netmeds-individual-clone-project.netlify.app/"
                >
                  <FaPlay /> Live Link
                </a>
              </div>
            </div>
          </div>
        </div>


        {/* ////////////////////////////////        Monster         ///////////////////// */}
        <div class="card">
          <div class="box" id="boxx">
            <div class="content" style={{paddingTop:"30px"}} >
              <h2>01</h2>
              <div>
                {" "}
                <img
                  src="/MONSTER.png"
                  alt=""
                />
              </div>

              <h3>Monster India Clone</h3>
              <p id="hoverwhite" style={{fontSize:"14px",textAlign:"left"}}>Monster India, India’s leading online career and recruitment resource with its cutting edge technology provides relevant profiles to employers<br /> <br />
              <span style={{textDecoration:"underline"}}>Tech Stack: </span>React.js | Redux | Javascript | HTML | CSS<br /> <br />
              <span style={{textDecoration:"underline"}}>Areas of Responsibilty</span>
                      : In this project,we have covered all main functionalities related to the job search & we have used react-redux with Chakra UI for building the pages.
                    <br /><br />
                    A collaborative project built by a team of 5, executed in 5 days.
        </p>

              <div  id='buttonnn'>
                    <a   rel="noreferrer" target = '_blank' class="one" href="https://github.com/abhishekbhosale1025/MonsterIndiaClone">
                      <FaGithub /> Github
                    </a>
                    <a  rel="noreferrer" target = '_blank' class="one" href="https://stellular-kleicha-361f06.netlify.app/">
                      <FaPlay /> Live Link
                    </a>
              </div>
            </div>
          </div>
        </div>



        {/* ////////////////////////////////        Zomato        ///////////////////// */}
        <div class="card">
          <div class="box">
            <div class="content" style={{paddingTop:"30px"}}>
              {/* <h2>01</h2> */}
              <div>
                {" "}
                <img
                  src="/Coursera.png"
                  alt=""
                />
              </div>

              <h3>Coursera Clone</h3>
              <p style={{textAlign:"left",fontSize:"14px"}}>
              A Coursera is online course certification platform for the developers
              <br /><br />
              <span style={{textDecoration:"underline"}}>Tech Stack: </span> Javascript | HTML | CSS
              <br /><br />
              <span style={{textDecoration:"underline"}}>Areas of Responsibilty</span>:
              Built a responsive with the frontend
              Created our own API with number of courses
              Developed the Home and Tariff page. 

                <br /><br />
                A collaborative project built by a team of 5, executed in 5 days.
              </p>

           
              
              <div
               id='buttonnn'
              >
                <a
                  target = '_blank'
                  rel="noreferrer"
                  class="one"
                  href="https://github.com/Sharadu16/Courseera-clone"
                >
                  <FaGithub /> Github
                </a>
                <a  rel="noreferrer"  target = '_blank' class="one" href="https://coursera-clone-project.netlify.app/">
                  <FaPlay /> Live Link
                </a>
              </div>
            </div>
          </div>
        </div>


        {/* ////////////////////////////////         FITMEAL         ///////////////////// */}
        <div class="card">
          <div class="box">
            <div class="content" style={{paddingTop:"30px"}}>
              {/* <h2>04</h2> */}
              <div>
                {" "}
                <img
                  src="/Fitmeal.png"
                  alt=""
                />
              </div>

              <h3 style={{marginTop:'-10px'}}>FitMeal Clone</h3>
              <p id="hoverwhite" style={{fontSize:"14px",textAlign:"left"}}>A Fitmeal website clone which is a food product website <br /> <br />
              <span style={{textDecoration:"underline"}}>Tech Stack: </span>Javascript | HTML | CSS   <br /> <br />
              <span style={{textDecoration:"underline"}}>Areas of Responsibilty</span>:
                      Built web pages and integrated it with the frontend.
                      All the pages,we have built are responsive to the user
                      Developed Home,Meal-plans,Health coaching,Products pages
                      Developed a form while doing the payment with the user information
                      <br /><br />
                      A collaborative project built by a team of 6, executed in 5 days.
                </p>


              <div
                id='buttonnn'
              >
                <a
                 rel="noreferrer"
                  class="one"
                  href="https://github.com/abhishekbhosale1025/fitmeals?organization=abhishekbhosale1025&organization=abhishekbhosale1025"
                  target = '_blank'
                >
                  <FaGithub /> Github
                </a>
                <a  rel="noreferrer"  target = '_blank' class="one" href="https://cloneoffitmeals.netlify.app/">
                  <FaPlay /> Live Link
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
