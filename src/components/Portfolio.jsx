import React, { useEffect, useRef, useState } from "react";
import Isotope from "isotope-layout";
import ProjectDetailsModal from "./ProjectDetailsModal";
const Portfolio = ({ classicHeader, darkTheme }) => {
  // init one ref to store the future isotope object
  const isotope = useRef();
  // store the filter keyword in a state
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setimagesLoaded] = useState(0);
  const [selectedProjectDetails, setSelectedProjectDetails] = useState();

  const filters = {
    BACKEND: "BACKEND",
    FRONTEND: "FRONTEND",
    BLOCKCHAIN: "BLOCKCHAIN",
  };

  const projectsData = [
    {
      title: "TRACXN",
      description: "Technology-driven Platform",
      projectInfo:
        "TRACXN is a technology-driven platform that supports deal discovery through a unique blend of human expertise and artificial intelligence. Founded in 2013 by Abhishek Goyal and Neha Singh, TRACXN has quickly become a leading provider of venture capital data and analytics. The platform is designed to help investors, corporates, and other stakeholders identify promising startups and investment opportunities.",
      client: "Jack Walton Ltd",
      technologies: "AngularJS, Java Spring, PostgreSQL",
      industry: "Marketing, Client Management",
      date: "July 16, 2018",
      url: {
        name: "www.tracxn.com",
        link: "https://www.tracxn.com",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/tracxn/project.jpg",
      sliderImages: [
        "images/projects/tracxn/1.jpg",
      ],
      categories: [filters.BACKEND, filters.FRONTEND],
    },
    {
      title: "NXTYOU",
      description: "SaaS Platform",
      projectInfo:
        "NXTYOU, a groundbreaking Software-as-a-Service (SaaS) platform, has emerged as a trailblazer in the tech industry, revolutionizing the way businesses operate. Since its inception in 2017, NXTYOU has been empowering organizations worldwide with its innovative solutions and cutting-edge technology.",
      client: "BottleUp.com",
      technologies: "Webflow, Laravel, MySQL, React Native",
      industry: "SaaS",
      date: "Dec 6, 2019",
      url: {
        name: "nxtyou-2.pages.dev",
        link: "https://nxtyou-2.pages.dev/",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/nxtyou/project.jpg",
      sliderImages: [
        "images/projects/nxtyou/1.jpg",
        "images/projects/nxtyou/2.jpg",
        "images/projects/nxtyou/3.jpg",
      ],
      categories: [filters.BACKEND, filters.FRONTEND],
    },
    {
      title: "deliveroo",
      description: "Food Delivery Platform",
      projectInfo:
        "Deliveroo, a prominent food delivery platform in the United Kingdom, has transformed the way people experience food delivery. Launched in 2020, Deliveroo has quickly become a household name, connecting hungry customers with a diverse range of restaurants and eateries.",
      client: "Jessica Milton, Bryan McDonald",
      technologies: "Next.js, React Hook, Express.js, GraphQL",
      industry: "Food Industry",
      date: "Oct 1, 2020",
      url: {
        name: "deliveroo.co.uk",
        link: "https://deliveroo.co.uk/",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/deliveroo/project.jpg",
      sliderImages: [
        "images/projects/deliveroo/1.jpg",
        "images/projects/deliveroo/2.jpg",
        "images/projects/deliveroo/3.jpg",
        "images/projects/deliveroo/4.jpg",
      ],
      categories: [filters.BACKEND, filters.FRONTEND],
    },
    {
      title: "Crypto Legions",
      description: "NFT Game",
      projectInfo:
        "CryptoLegions is a revolutionary NFT game that has taken the blockchain gaming world by storm. Developed by a team of talented game developers and blockchain enthusiasts, CryptoLegions allows players to collect and trade unique digital assets known as Non-Fungible Tokens (NFTs) while battling it out in a futuristic world.",
      client: "Jisou.com",
      technologies: "Solidity, Web 3.0, GraphQL",
      industry: "Art & Design",
      date: "Apr 22, 2021",
      url: {
        name: "www.cryptolegions.app",
        link: "https://www.cryptolegions.app",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/cryptolegions/project.png",
      sliderImages: [
        "images/projects/cryptolegions/1.jpg",
        "images/projects/cryptolegions/2.jpg",
        "images/projects/cryptolegions/3.jpg",
        "images/projects/cryptolegions/4.jpg",
      ],
      categories: [filters.BACKEND, filters.BLOCKCHAIN],
    },
    {
      title: "Boat Rentals & Yacht Charters",
      description: "Fintech Platform",
      projectInfo:
        "BoatRental&YachtCharters is a premier online platform for renting boats and chartering yachts. Founded in 2022, the website has quickly become a go-to destination for boating enthusiasts around the world.",
      client: "Unknown",
      technologies: "DeFi, Django",
      industry: "E-Commerce",
      date: "July 8, 2022",
      url: {
        name: "www.sailme.com",
        link: "https://www.sailme.com",
      },
      socialLinks: {
        facebook: "http://www.facebook.com/",
        twitter: "http://www.twitter.com/",
        google: "http://www.google.com/",
        instagram: "http://www.instagram.com/",
        mail: "mailto:example@gmail.com",
      },
      thumbImage: "images/projects/sailme/project.jpg",
      sliderImages: [
        "images/projects/sailme/catamaran.jpg",
        "images/projects/sailme/mega.jpg",
        "images/projects/sailme/power.jpg",
        "images/projects/sailme/sail.jpg",
      ],
      categories: [filters.BACKEND],
    },
  ];

  // initialize an Isotope object with configs
  useEffect(() => {
    isotope.current = new Isotope(".portfolio-filter", {
      itemSelector: ".filter-item",
      layoutMode: "masonry",
    });

    // cleanup
    return () => {
      isotope.current.destroy();
    };
  }, []);

  // handling filter key change
  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

  return (
    <>
      <section
        id="portfolio"
        className={"section " + (darkTheme ? "bg-dark-2" : "bg-light")}
      >
        <div className={"container " + (classicHeader ? "" : "px-lg-5")}>
          {/* Heading */}
          <div className="position-relative d-flex text-center mb-5">
            <h2
              className={
                "text-24  text-uppercase fw-600 w-100 mb-0 " +
                (darkTheme ? "text-muted opacity-1" : "text-light opacity-4")
              }
            >
              Portfolio
            </h2>
            <p
              className={
                "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
                (darkTheme ? "text-white" : "text-dark")
              }
            >
              {" "}
              My Work
              <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
            </p>
          </div>
          {/* Heading end*/}
          {/* Filter Menu */}
          <ul
            className={
              "portfolio-menu nav nav-tabs justify-content-center border-bottom-0 mb-5 " +
              (darkTheme ? "nav-light" : "")
            }
          >
            <li className="nav-item">
              <button
                className={"nav-link " + (filterKey === "*" ? "active" : "")}
                onClick={handleFilterKeyChange("*")}
              >
                All
              </button>
            </li>
            {Object.keys(filters).map((oneKey, i) => (
              <li className="nav-item" key={i}>
                <button
                  className={
                    "nav-link " +
                    (filterKey === filters[oneKey] ? "active" : "")
                  }
                  onClick={handleFilterKeyChange(filters[oneKey])}
                >
                  {filters[oneKey]}
                </button>
              </li>
            ))}
          </ul>
          {/* Filter Menu end */}
          <div className="portfolio popup-ajax-gallery">
            <div className="row portfolio-filter filter-container g-4">
              {projectsData.length > 0 &&
                projectsData.map((project, index) => (
                  <div
                    className={
                      "col-sm-6 col-lg-4 filter-item " +
                      project.categories.join(" ")
                    }
                    key={index}
                  >
                    <div className="portfolio-box rounded">
                      <div className="portfolio-img rounded">
                        <img
                          onLoad={() => {
                            setimagesLoaded(imagesLoaded + 1);
                          }}
                          className="img-fluid d-block portfolio-image"
                          src={project.thumbImage}
                          alt=""
                        />
                        <div className="portfolio-overlay">
                          <a
                            className="popup-ajax stretched-link"
                            href=""
                            onClick={() => {
                              setSelectedProjectDetails(projectsData[index]);
                            }}
                            data-bs-toggle="modal"
                            data-bs-target="#exampleModal"
                          />
                          <div className="portfolio-overlay-details">
                            <h5 className="text-white fw-400">
                              {project.title}
                            </h5>
                            <span className="text-light">{project.description}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
      <div className="project-details-modal">
        {/* Modal */}
        <ProjectDetailsModal
          projectDetails={selectedProjectDetails}
          darkTheme={darkTheme}
        ></ProjectDetailsModal>
      </div>
    </>
  );
};

export default Portfolio;
