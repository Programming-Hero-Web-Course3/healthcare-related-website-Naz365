import React from "react";
import aboutUsImg from "../img/4136933.jpg"
const AboutUs = () => {
  return (
    <div className="container">

    <div >
        <img className="img-fluid " src={aboutUsImg} alt="" srcset="" />
    </div>
      <div style={{ height: "100vh" }}>
        <h2>About Us</h2>
        <h5>The need for Naz's health care</h5>
        <p>
          Suppose your loved one is suffering from a chronic illnessand needs
          long term care. Due to this, you have to run to the doctor's chamber,
          diagnostic centre and hospitals with him/herevery day. On one hand,
          this is time consuming and exhausting. On the other hand, it's also
          expensive. As a result, all of your family members' normal life is
          disrupted. Thus, it becomes almost impossible to continue with the
          patient's completemedical treatment. There's no need to keep your
          loved one in thehospital anymore. Teresa Healthcare is beside you for
          that. Teresa Healthcare Services is dedicated to the goal of bringing
          quality health care to your home.
        </p>
        <h4>Naz HEALTHCARE SERVICES:</h4>
        <p>Specialist consultation arrangements & treatment.

Short term and and long term nursing service (24 hours)

Male or female attendant service (24 hours)

We provide rehabilitative treatments including physiotherapy.

Oxygen therapy arrangements, nebulizer & blood sugar tests.

Assisting with pathological investigations at well known diagnostic laboratories.

We transport patients by ambulance from anywhere to hospital.

Making arrangements for any other medical treatments like counseling, consultation, etc.
Providing diet charts by dietitian/nutritionist if necessary.

Teresa is dedicated to providing health care for your loved one at your own home.</p>
      </div>
    </div>
  );
};

export default AboutUs;
