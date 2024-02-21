import React, { useRef } from "react";
import { useState } from "react";
import "./home.css";
import LoadingSpinner from "./LoadingSpinner";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../firebase";
import Success from "./Success";
export default function Home() {
  const [day, setDay] = useState(0);
  const [hr, setHr] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [firstName, setFirstName] = useState(null);
  const [secondName, setSecondName] = useState(null);
  const [email, setEmail] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState(null);
  const [showSpinner, setShowSpinner] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const firstNameRef = useRef();
  const secondNameRef = useRef();
  const emailRef = useRef();
  const phoneRef = useRef();

  const deadLine = new Date(2024, 2, 10);
  let count = setInterval(() => {
    const currDate = new Date();
    let currTimeMili = currDate.getTime();
    let deadLineTimeMili = deadLine.getTime();
    let currTime = Math.trunc(currTimeMili / 1000);
    let deadLineTime = Math.trunc(deadLineTimeMili / 1000);
    let diffTime = deadLineTime - currTime;
    let dateDiff = Math.trunc(diffTime / 84000);
    setDay(dateDiff);

    let diffHr = diffTime - Math.trunc(dateDiff * 84000);
    let totalHour = Math.trunc(diffHr / 3600);
    setHr(totalHour);

    let diffMin = diffHr - Math.trunc(totalHour * 3600);
    let totalMin = Math.trunc(diffMin / 60);
    setMin(totalMin);

    let diffSec = diffMin - Math.trunc(totalMin * 60);
    setSec(diffSec);
  }, 1000);

  const handleSubmit = async () => {
    if (firstName && secondName && email && phoneNumber) {
      setShowSpinner(true);
      try {
        await setDoc(doc(db, "data", `${email}`), {
          firstName: `${firstName}`,
          secondName: `${secondName}`,
          email: `${email}`,
          phoneNumber: `${phoneNumber}`,
        });
        setShowSuccess(true);
        setShowSpinner(false);
        phoneRef.current.value = "";
        emailRef.current.value = "";
        firstNameRef.current.value = "";
        secondNameRef.current.value = "";
      } catch (error) {
        console.log(error);
      }
    }
    return;
  };

  return (
    <div className="container">
      {showSpinner && <LoadingSpinner />}
      {showSuccess && <Success setShowSuccess={setShowSuccess} />}
      <div className="home_container">
        <div className="linear"></div>
        <div className="main_container">
          <img src="/rvm_white_logo.png" alt="RVM PLUS" className="logo" />
          <div className="header">Coming Soon</div>
          <div className="header2">Subscribe To Get Notified When Launched</div>
          <iframe
            className="youtube_vd"
            src="https://www.youtube.com/embed/NA3Bv4nU_kA?rel=0&amp;fs=0&amp;showinfo=0"
            allowfullscreen
            frameborder="0"
          ></iframe>
          <div className="time_container">
            <div className="time_child">
              <div className="time day">{day}</div>
              <div className="type">days</div>
            </div>
            <div className="time_child">
              <div className="time hr">{hr}</div>
              <div className="type">hr</div>
            </div>
            <div className="time_child">
              <div className="time min">{min}</div>
              <div className="type">min</div>
            </div>
            <div className="time_child">
              <div className="time sec">{sec}</div>
              <div className="type">sec</div>
            </div>
          </div>
          <div className="subscribe_container">
            <input
              type="text"
              className="input_tag"
              placeholder="First Name"
              onChange={(e) => setFirstName(e.currentTarget.value)}
              ref={firstNameRef}
            />
            <input
              type="text"
              className="input_tag"
              placeholder="Second Name"
              onChange={(e) => setSecondName(e.currentTarget.value)}
              ref={secondNameRef}
            />
            <input
              type="text"
              className="input_tag"
              placeholder="Email Address"
              onChange={(e) => setEmail(e.currentTarget.value)}
              ref={emailRef}
            />
            <input
              type="number"
              className="input_tag"
              placeholder="Phone Number"
              onChange={(e) => setPhoneNumber(e.currentTarget.value)}
              ref={phoneRef}
            />
          </div>
          <button className="subscribe_button" onClick={handleSubmit}>
            Subscribe Now
          </button>
          <div className="note">
            We do not sell or share your information with anyone else.
          </div>
        </div>
      </div>
    </div>
  );
}
