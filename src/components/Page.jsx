import React from "react";
import Person from "../assets/images/lady.png";

const Page = () => {
  return (
    <section className="pageSec">
      <div>
        <p id="cl1">New Arrivals</p>
        <p id="cl2">
          Just <br /> For
        </p>
        <p id="cl3">You</p>
        <img src={Person} alt="" className="img" />
      </div>
      <div>
        <p id="cl4">
          For Your Online <br /> Order
        </p>
        <p id="cl5">
          30% <br /> OFF
        </p>
      </div>
    </section>
  );
};

export default Page;
