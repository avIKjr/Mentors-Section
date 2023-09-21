import React, { useState, useEffect } from "react";
import "../Styles/myTeamSection.css";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";

//! all packages should be installed first
//! most of the css part is done with BootStarp 5.3 added with cdn link in index.html file

function MyTeam() {
  //mentorData has the data of every mentor
  const [mentorData, setMentorData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //using axios to fetch the data of every mentors
    axios
      .get("http://localhost:3010/api/mentors")
      .then((response) => {
        //setting the data in mentors state
        setMentorData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container-fluid text-center main">
      <div className="p-2 pt-5 fs-1 fw-bold heading">
        {/* heading */}
        Right Guidance from Experts
      </div>
      <div className="p-2 d-flex justify-content-center">
        <h4 className="container fw-normal">
          {/* Sub-heading */}
          College Vidya has a team of 2500+ experts who are there to assist you
          and give you the write guidance for your successful career ahead.
        </h4>
      </div>
      <div className="container-fluid px-5 py-5 justify-content-center">
        {/* this is the main div where the mentors card is, used swiper component for it */}
        <Swiper
          freeMode={true}
          grabCursor={true}
          className="mySwiper"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 50,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
        >
          {loading && mentorData ? (
            <div className="spinner-border text-primary m-5 p-5" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          ) : (
            // this is the main card where I am mapping the mentors data and every data is dynamic
            mentorData.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="card text-center mentor_card">
                  <img
                    src={`./${item.image_url}`}
                    className="card-img-top"
                    alt="..."
                    style={{ height: "350px" }}
                  />
                  <div className="card-img-overlay  d-flex justify-content-between">
                    <div className="rounded shadow ratings">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-star-fill icon"
                        >
                          <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                        </svg>
                      </span>
                      <span className="rNo">{item.rating}</span>
                    </div>
                    <div className="rounded shadow verified text-start ">
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-patch-check-fill icon2"
                        >
                          <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z" />
                        </svg>
                      </span>
                      <span className="cn">
                        <span className="fw-bold">+1948</span>
                        <br />
                        <span className="subCn">Counselling</span>
                      </span>
                    </div>
                  </div>
                  <div className="card-body">
                    <h5 className="card-title fw-bold">{item.name}</h5>
                    <div>
                      <span className="experience fw-medium">{item.role}</span>
                      &nbsp;&nbsp;&nbsp;
                      <span className="shadow experience rounded p-1">
                        {item.course}
                      </span>
                    </div>
                    <p className="card-text fw-medium text-muted pt-1">
                      {item.experience} Years of experience
                    </p>
                    <a href="*" className="btn btn-dark">
                      Consult Now
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </div>
    </div>
  );
}

export default MyTeam;
