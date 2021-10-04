import React from "react";
import { Fragment } from "react";
import styles from "../Styles/Hero.module.css";
const Hero = () => {
  return (
    <Fragment>
      <section style={{ marginTop: "80px" }} className={`bg-dark p-5`}>
        <div className="container">
          <div className="d-flex justify-content-start align-content-center">
            <button
              className={`${styles.btnText} btn btn-outline-light mx-2 my-4 flex-grow-1`}
            >
              <i className="fa fa-graduation-cap mx-2"></i> Careers
            </button>
            <button
              className={`${styles.btnText} btn btn-primary mx-2 my-4 flex-grow-1`}
            >
              <i className="fa fa-sign-in mx-2"></i> Register
            </button>
          </div>
          <div className="d-block d-md-flex align-content-md-center md-justify-content-md-between mt-5 ">
            <div className="w-50">
              <p className="fw-bold h3 text-light">
                Empowering youth through capacity building{" "}
              </p>
              <p className="fs-6 text-light " style={{ opacity: "0.8" }}>
                GuleShaoor nurtures youth and maximizes its potential by
                providing mentorship, counselling and networks for their
                personal as well as career development.
              </p>
            </div>
            <div>{/* Gule Shaoor Image */}</div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default Hero;