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

      {/* ////////////////////////////////        ZOMATO        ///////////////////// */}
      <div class="container">
        <div class="card">
          <div class="box">
            <div class="content">
              {/* <h2>01</h2>
               */}

<div>
                {" "}
                <img
                  src="/Tomoto11.png"
                  alt=""
                />
              </div>

              <h3>Zomoto Clone</h3>
              <p style={{textAlign:"left" ,fontSize:"14px"}}>Zomato is Food Website provides food service by taking food from nearby restaurants.
                <br /><br />
                <span style={{textDecoration:"underline"}}>Tech Stack: </span>React.js | Javascript | HTML | CSS 
                <br /> <br />
               <span style={{textDecoration:"underline"}}>Areas of Responsibilty</span>: I have built a single main page with all functionality related to the data using Axios on JSON server.
               It includes searching with debounce , sorting, filtering, pagination & add new restuarant details in server data such kind of functionalities.
               <br /><br />
             
               Created this project individually in a single day .
              </p>

               {/* ///////////////////// */}
               <a
                  class="one"
                  href="https://github.com/masai-course/abhishek_fw16_486/tree/master/RCT-121/sprint-1/day-4/assignments/RestaurantwithAxios"
                >
                  <FaGithub /> Github
                </a>
                <a
                  class="one"
                  href="https://eloquent-lamington-b5963d.netlify.app/"
                >
                  <FaPlay /> Live Link
                </a>
             
              <div
                style={{
                  display: "flex",
                  justifyContent: "spacebetween",
                  marginTop: "10px",
                }}
              >
               
              </div>
            </div>
          </div>
        </div>


        {/* ////////////////////////////////        APOLLO         ///////////////////// */}
        <div class="card">
          <div class="box">
            <div class="content">
              <h2>01</h2>
              <div>
                {" "}
                <img
                  src="/Apollo.png"
                  alt=""
                />
              </div>

              <h3>Apollo 24/7 Clone</h3>
              <p id="hoverwhite" style={{fontSize:"14px",textAlign:"left"}}>It has emerged as Asia’s foremost integrated healthcare services provider including Hospitals, Pharmacies, Primary Care & Diagnostic Clinics and several retail health models. <br /> <br />
              <span style={{textDecoration:"underline"}}>Tech Stack: </span>React.js | Javascript | HTML | CSS<br /> <br />
              <span style={{textDecoration:"underline"}}>Areas of Responsibilty</span>
                      :Built web pages and integrated it with the frontend.
                      All the pages,we have built are responsive to the user
                      Developed Doctor,Pharmacy main pages & login with OTP verification with the user information
                    <br /><br />
                    A collaborative project built by a team of 5, executed in 5 days.
        </p>


             
              <div
                style={{
                  display: "flex",
                  justifycontent: "spacebetween",
                  marginTop: "10px",
                }}
              >
                <a class="one" href="https://github.com/SAlimAbbas/ApolloClone">
                      <FaGithub /> Github
                    </a>
                    <a class="one" href="https://dapper-chebakia-d4e762.netlify.app/">
                      <FaPlay /> Live Link
                    </a>
              
              </div>
            </div>
          </div>
        </div>



        {/* ////////////////////////////////        Zomato        ///////////////////// */}
        <div class="card">
          <div class="box">
            <div class="content">
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
                style={{
                  display: "flex",
                  justifycontent: "spacebetween",
                  marginTop: "10px",
                }}
              >
                <a
                  class="one"
                  href="https://github.com/Sharadu16/Courseera-clone"
                >
                  <FaGithub /> Github
                </a>
                <a class="one" href="https://inquisitive-cassata-5ce846.netlify.app/">
                  <FaPlay /> Live Link
                </a>
          
               
              </div>
            </div>
          </div>
        </div>


        {/* ////////////////////////////////         Coursera         ///////////////////// */}
        <div class="card">
          <div class="box">
            <div class="content">
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
                style={{
                  display: "flex",
                  justifycontent: "spacebetween",
                  marginTop: "10px",
                }}
              >
                <a
                  class="one"
                  href="https://github.com/KalashThakur/fitmeals.git"
                >
                  <FaGithub /> Github
                </a>
                <a class="one" href="https://cloneoffitmeals.netlify.app/">
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
