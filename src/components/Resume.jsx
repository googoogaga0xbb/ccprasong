import React from "react";
import resumeFile from "../documents/resume.pdf";

const Resume = ({ classicHeader, darkTheme }) => {
  const educationDetails = [
    {
      yearRange: "NOV 2017 - OCT 2019",
      title: "Full-stack Developer",
      place: "Pusher Ltd",
      desc: "- Developed a customer engagement app \n- Improved performance in terms of error-free and speed\n- Updated the user interface and added many more features\n- Increased the number of active users by 15%\n- Used HTML/CSS/Vanilla Javascript/jQuery/and jQuery UI for frontend development\n- Used PHP/ Symfony as the backend framework",
    },
    {
      yearRange: "JUN 2021 - NOV 2022",
      title: "Full-stack Developer",
      place: "PABAU, Dubai",
      desc: "- Developed SaaS app that automates B2B customer onboarding and KYC process.\n- Used AWS Serverless architecture (AWS Gateway & AWS Lamba) for the backend API development and built the Lambda functions using Python & Node\n- Integrated PySpacy, NumPy & Pandas for NLP and other advanced features\n- Used AWS SAM template and CLI to provision the architecture and deploy it\n- Ensured the smooth performance by building the platform as event driven with the help of AWS SNS and SQS\n- Used PostgreSQL and DynamoDB as the database\n- Developed the frontend using React & MaterialUI & &GraphQL & Axios",
    },

  ];

  const experienceDetails = [
    {
      yearRange: "NOV 2019 - JUN 2021",
      title: "Backend Developer",
      place: "Uniclix, Copenhagen",
      desc: "- Developed an integrated social network platform\n- Built integrated dashboard for the different social networks\n- Enabled switching of multiple social accounts\n- Boosted the sales by 20% by developing a scheduled post feature that posts content onto different social platforms regularly\n- Upgraded the legacy website into the modern web app using MERN stack\n- Integrated third-party APIs including Facebook, Twitter, Linkedin, and Instagram",
    },
    {
      yearRange: "DEC 2022 - SEP 2023",
      title: "Full-stack Developer",
      place: "Sverselab, Nigeria",
      desc: "- Developed NFT based Game\n- Built NFT marketplaces on both Ethereum and Solana networks\n- Improved performance by integrating the Moralis API, Graph protocol, and QuickNode APIs\n- Worked on the backend development using Node.js, Express.js and Nest.js\n- Used Python, FastAPI and SQLAlchemy also to build the backend APIs\n- Worked on the frontend development using React.js, Vue.js, Tailwindcss, SASS, MaterialUI, DaisyUI, Ant Design, and ChakraUI\n- Created various scripts for metadata and artworks manipulation using Python",
    },

  ];

  const skills = {
    Frontend: [
      {
        name: "HTML5/CSS/SCSS/LESS",
        percent: 100
      },
      {
        name: "TailwindCSS",
        percent: 90
      },
      {
        name: "Javascript ES5/ES6",
        percent: 100
      },
      {
        name: "Typescript",
        percent: 93
      },
      {
        name: "JQuery/Bootstrap",
        percent: 100
      },
      {
        name: "React.js/React Hooks",
        percent: 99
      },
      {
        name: "Next.js",
        percent: 97
      },
      {
        name: "Redux",
        percent: 95
      },
      {
        name: "Vue.js/Nuxt.js",
        percent: 90
      },
      {
        name: "Svelte.js/Svelte Kit",
        percent: 99
      },
      {
        name: "AngularJS",
        percent: 90
      },
      {
        name: "Figma",
        percent: 93
      },
    ],
    Backend: [
      {
        name: "Node.js/Express.js/Nest.js",
        percent: 98
      },
      {
        name: "PHP/CodeIgniter/Laravel",
        percent: 96,
      },
      {
        name: "Java/Java Spring/Spring Boot",
        percent: 92
      },
      {
        name: "C#/ASP.Net",
        percent: 92
      },
      {
        name: "Python/Django/PySpacy",
        percent: 90
      },
      {
        name: "AWS/AWS Lambda",
        percent: 95
      },
    ],
    Database: [
      {
        name: "PostgreSQL/MySQL/MySQL Query",
        percent: 100
      },
      {
        name: "NoSQL/MongoDB",
        percent: 92
      },
      {
        name: "AWS RDS/AWS DynamoDB",
        percent: 90
      },
      {
        name: "Google FireStore",
        percent: 85
      },
    ],
    Blockchain: [
      {
        name: "Smart Contract",
        percent: 95
      },
      {
        name: "DeFi/DEX/NFT",
        percent: 96
      },
      {
        name: "Web3.js/Ether.js",
        percent: 92
      },
      {
        name: "SPL/Solana",
        percent: 86
      },
    ],
    "Agile Development": [
      {
        name: "SCRUM/Kanban",
        percent: 89
      },
      {
        name: "Git/GitLab/BitBucket",
        percent: 99
      },
      {
        name: "Trello/JIRA",
        percent: 96
      },
      {
        name: "Discord/Slack",
        percent: 100
      },
    ],
  };

  return (
    <section
      id="resume"
      className={"section " + (darkTheme ? "bg-dark-1" : "")}
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
            Summary
          </h2>
          <p
            className={
              "text-9 text-dark fw-600 position-absolute w-100 align-self-center lh-base mb-0 " +
              (darkTheme ? "text-white" : "text-dark")
            }
          >
            {" "}
            Resume
            <span className="heading-separator-line border-bottom border-3 border-primary d-block mx-auto" />
          </p>
        </div>
        {/* Heading end*/}
        <div className="row gx-5">
          {/* My Education */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >
              {/* My Education / Career */}
            </h2>
            {educationDetails.length > 0 &&
              educationDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  {/* <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}> */}
                  {
                    value.desc.split('\n').map(elem => {
                      return (<p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>{elem}</p>)
                    })
                  }
                  {/* {value.desc} */}
                  {/* </p> */}
                </div>
              ))}
          </div>
          {/* My Experience */}
          <div className="col-md-6">
            <h2
              className={
                "text-6 fw-600 mb-4 " + (darkTheme ? "text-white" : "")
              }
            >

            </h2>
            {experienceDetails.length > 0 &&
              experienceDetails.map((value, index) => (
                <div
                  key={index}
                  className={
                    "bg-white  rounded p-4 mb-4 " +
                    (darkTheme ? "bg-dark" : "bg-white border")
                  }
                >
                  <p className="badge bg-primary text-2 fw-400">
                    {value.yearRange}
                  </p>
                  <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                    {value.title}
                  </h3>
                  <p className={darkTheme ? "text-primary" : "text-danger"}>
                    {value.place}
                  </p>
                  {/* <p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}> */}
                  {
                    value.desc.split('\n').map(elem => {
                      return (<p className={"mb-0 " + (darkTheme ? "text-white-50" : "")}>{elem}</p>)
                    })
                  }
                  {/* {value.desc} */}
                  {/* </p> */}
                </div>
              ))}
          </div>
        </div>

        {/** My Education */}
        <h2
          className={
            "text-6 fw-600 mt-4 mb-4 " + (darkTheme ? "text-white" : "")
          }
        >
          My Education
        </h2>
        <div className="row gx-5">
          <div className="col-md-12">
            <div
              key={676}
              className={
                "bg-white  rounded p-4 mb-4 " +
                (darkTheme ? "bg-dark" : "bg-white border")
              }
            >
              <p className="badge bg-primary text-2 fw-400">
                2009 - 2013
              </p>
              <h3 className={"text-5 " + (darkTheme ? "text-white" : "")}>
                Bachelor`s in Computer Science, G404
              </h3>
              <p className={"text-4 " + (darkTheme ? "text-primary" : "")}>
                School of Computer Science & Informatics
              </p>
              <p className={"text-6 " + (darkTheme ? "text-primary" : "")}>
                Cardiff University
              </p>

            </div>
          </div>
        </div>

        {/* My Skills */}
        <h2
          className={
            "text-6 fw-600 mt-4 mb-4 " + (darkTheme ? "text-white" : "")
          }
        >
          My Skills
        </h2>
        <div className="row gx-5">
          {Object.keys(skills).length > 0 &&
            Object.keys(skills).map((skillSet) => (
              <div >
                <div className={
                  "text-5 fw-600 mt-4 mb-4 " + (darkTheme ? "text-white" : "")
                }>{skillSet}</div>
                <div className="row gx-5">
                  {
                    skills[skillSet].map((skill, index) => (
                      <div key={index} className="col-md-6">
                        <p
                          className={
                            " fw-500 text-start mb-2 " +
                            (darkTheme ? "text-light" : "text-dark")
                          }
                        >
                          {skill.name}{" "}
                          <span className="float-end">{skill.percent}%</span>
                        </p>
                        <div
                          className={
                            "progress progress-sm mb-4 " + (darkTheme ? "bg-dark" : "")
                          }
                        >
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: skill.percent + "%" }}
                            aria-valuenow={skill.percent}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                        </div>
                      </div>
                    ))
                  }
                </div>
              </div>
            ))
          }

        </div>
        <div className="text-center mt-5">
          <a
            className="btn btn-outline-secondary rounded-pill shadow-none"
            href={resumeFile}
            download
          >
            Download CV
            <span className="ms-1">
              <i className="fas fa-download" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resume;
