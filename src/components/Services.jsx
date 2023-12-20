import React from "react";

const Services = ({ classicHeader, darkTheme }) => {
  // services details
  const services = [
    {
      name: "UI/UX Design",
      desc: "Creative UI/UX Designer Crafting Intuitive Interfaces for Exceptional User Experiences",
      icon: "fas fa-pencil-ruler",
    },
    {
      name: "Web Design & Development",
      desc: "Versatile Web Designer & Developer Crafting Stunning Websites with Seamless User Experiences",
      icon: "fas fa-desktop",
    },
    {
      name: "Game Development",
      desc: "Experienced Game Developer with a Knack for Creating Immersive Gaming Experiences",
      icon: "fas fa-gamepad",
    },
    {
      name: "App Design & Development",
      desc: "Expert Mobile App Designer & Developer with a Passion for Creating Engaging User Experiences",
      icon: "fas fa-mobile",
    },
    {
      name: "Blockchain Development",
      desc: "Innovative Blockchain Developer Driving Best Solutions with Expertise in Smart Contracts",
      icon: "fas fa-link",
    },
    {
      name: "Search Engine Optimization",
      desc: "Results-Driven SEO Specialist Boosting Online Visibility and Driving Organic Traffic Growth",
      icon: "fas fa-compass",
    },
  ];

  return (
    <section
      id="services"
      className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
    >
      <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
        {/* Heading */}
        <div className="position-relative d-flex text-center mb-5">
          <h2
            className={
              "text-24  text-uppercase fw-600 w-100 mb-0 " +
              (darkTheme ? "text-white-50  opacity-1" : "text-light  opacity-4")
            }
          >
            Services
          </h2>
          <p
            className={
              "text-9  fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            What I Do?
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        {/* content start */}
        <div className="row">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              {services.length > 0 &&
                services.map((service, index) => (
                  <div className="col-md-6" key={index}>
                    <div className="featured-box style-3 mb-5">
                      <div
                        className={
                          "featured-box-icon text-primary  shadow-sm rounded " +
                          (darkTheme ? "bg-dark-1" : "bg-white")
                        }
                      >
                        <i className={service.icon} />
                      </div>
                      <h3 className={darkTheme ? "text-white" : ""}>
                        {service.name}
                      </h3>
                      <p
                        className={"mb-0 " + (darkTheme ? "text-white-50" : "")}
                      >
                        {service.desc}
                      </p>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
        {/* content end */}
      </div>
    </section>
  );
};

export default Services;
