import React from "react";
import { FaUserGraduate } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import { SlGraduation } from "react-icons/sl";
import { GoBook } from "react-icons/go";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import './education.css'
import '../about/about.css'

const Education = () => {
  return (
    <div className="container edu__container">
      <h2>Education and Experience</h2>
      <div className="about__cards">
        
        <div className="card_line">

        <article className="about__card">
          <FaUserGraduate className="about__icon" />
          <h5>MASTERS OF TECHNOLOGY <br /> (M.TECH)</h5>
          <small>
            Jamia Milia Islamia (JMI) <br />
            88% <br />
            Electronics and Communication(ECE)<br />
            (2021-2023)
          </small>
        </article>

        <article className="about__card">
          <FaGraduationCap className="about__icon" />
          <h5>BACHELOR OF ENGINEERING (B.E)</h5>
          <small>
            Jamia Milia Islamia  (JMI)<br />
            74%,
            <br />Electronics and Communication(ECE) <br />
            (2016 - 2020)
          </small>
        </article>
        
        <article className="about__card">
          <SlGraduation className="about__icon" />
          <h5>DIPLOMA IN ELECTRONICS ENGINEERING</h5>
          <small>
            Jamia Milia Islamia (JMI)<br />
            79.9%,
            <br />Electronics and Communication(ECE) <br />
            (2013 - 2016)
          </small>
        </article>
        </div>
        <div className="card_line">
          <article className="about__card">
            <BsFillJournalBookmarkFill className="about__icon" />
            <h5>SENIOR SECONDARY (XII)</h5>
            <small>
              CBSE <br />
              SAINT VIVEKANAND SR SEC PUBLIC SCHOOL, ETAWAH (UP)<br />
              74%  <br />
              (2011-2013)
            </small>
          </article>

          <article className="about__card">
            <GoBook className="about__icon" />
            <h5>SECONDARY SCHOOL  (X)</h5>
            <small>

              CBSE <br />
              SAINT VIVEKANAND SR SEC PUBLIC SCHOOL, ETAWAH (UP) <br />
              79.8% <br />(2009-2011)
            </small>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Education;
