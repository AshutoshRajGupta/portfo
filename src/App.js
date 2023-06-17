import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { useState } from "react";
import me from "./images/me.jpg";
import code from "./images/enigma.png";
import design from "./images/python_certification.jpg";
import consulting from "./images/reactjs.jpg";
import htmlcss from "./images/html_css.jpg";
import sql from "./images/SQL.png";
import ds from "./images/datascience.jpg";

import web1 from "./images/p1.png";
import web2 from "./images/p2.png";
import web3 from "./images/p3.png";
import web4 from "./images/p4.png";
import web5 from "./images/p5.png";
import web6 from "./images/p6.png";
import advnc from "./images/advnc1.png";
import advnc1 from "./images/advnc2.png";
import resumePDF from "./images/resume.pdf";



function App() {
  return (
    // <div>
    <div>
      <title>Portfolio</title>
      <meta name="description" content="Generated by create next app" />
      <link rel="icon" href="/favicon.ico" />

      <main className=" bg-slate-50 px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        {/* header section */}
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-4xl font-extrabold text-slate-600">
              PORTFOLIO
            </h1>
            <ul className="flex items-center">
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 text-to-teal-900 text-white px-4 py-2 border-none rounded-md ml-8"
                  href={resumePDF}
                  download="resume.pdf"
                >
                  RESUME
                </a>
              </li>
            </ul>
          </nav>

          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 font-medium dark:text-teal-400 md:text-6xl">
              <span className="animate-gradient-x text-teal-600">Ashutosh</span>{" "}
              <span className="animate-pulse text-purple-600">Raj</span>{" "}
              <span className="animate-gradient-x text-blue-600">Gupta</span>
            </h2>

            <h3 className="text-2xl py-2 dark:text-white md:text-3xl animate-bounce">
              FrontEnd Web Developer and Designer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl animate-fade-in">
              Freelancer providing services for programming and design content
              needs. Join me down below and let's get cracking!
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3">
              <a href="https://github.com/AshutoshRajGupta" target="_blank">
                <FaGithubSquare className="animate-pulse text-gray-800 dark:text-gray-200 hover:text-teal-600" />
              </a>
              <a
                href="https://www.linkedin.com/in/ashutosh-raj-gupta-18230820b/"
                target="_blank"
              >
                <AiFillLinkedin className="animate-pulse text-blue-600 hover:text-blue-800" />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100022615870474"
                target="_blank"
              >
                <FaFacebookSquare className="animate-pulse text-blue-800 hover:text-blue-900" />
              </a>
            </div>

            <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-40 h-40 relative overflow-hidden mt-20 md:h-56 md:w-56">
              <img src={me} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>

        {/* certifiction section */}

        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-gray-800 font-extrabold">
              Certifications and Courses
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Throughout my career as a designer and developer, I have acquired
              valuable certifications and completed various courses to enhance
              my skills and knowledge.
            </p>
          </div>
          <div className="lg:flex gap-10">
            {/* css */}
            <div className="lg:w-1/3">
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
                <img src={htmlcss} width={300} height={100} />
                <h3 className="text-lg font-medium pt-8 pb-2">HTML && CSS</h3>
                <a
                  href="https://www.udemy.com/certificate/UC-8257aff3-1c38-4feb-835a-399d5c9c8b4e/"
                  target="_blank"
                  className="btn-primary mr-30 px-4 py-2 bg-teal-600 text-white border border-teal-600 hover:bg-teal-800 hover:border-teal-800"
                >
                  visit
                </a>
                <h4 className="py-4 text-teal-600">Skills Gained</h4>
                <ul className="text-gray-800 py-1">
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
                <img src={consulting} width={300} height={100} />
                <h3 className="text-lg font-medium pt-8 pb-2">
                  REACTJS CERTIFICATION
                </h3>
                <a
                  href="https://www.udemy.com/certificate/UC-2b0e022c-a01e-4d43-a853-6e99b5a2a40e/"
                  target="_blank"
                  className="btn-primary mr-30 px-4 py-2 bg-teal-600 text-white border border-teal-600 hover:bg-teal-800 hover:border-teal-800"
                >
                  visit
                </a>
                <h4 className="py-4 text-teal-600">Skills Gained</h4>
                <ul className="text-gray-800 py-1">
                  <li>REACT COMPONENT</li>
                  <li>HOOKS IN REACT</li>
                  <li>EVENT HANDLING</li>
                </ul>
              </div>
            </div>

            <div className="lg:w-1/3">
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
                <img src={design} width={300} height={100} />
                <h3 className="text-lg font-medium pt-8 pb-2">PYTHON COURSE</h3>
                <a
                  href="https://www.udemy.com/certificate/UC-e442c3b5-b993-4f05-9ca5-18b0881c2cce/"
                  target="_blank"
                  className="btn-primary mr-30 px-4 py-2 bg-teal-600 text-white border border-teal-600 hover:bg-teal-800 hover:border-teal-800"
                >
                  visit
                </a>
                <h4 className="py-4 text-teal-600">Skills Gained</h4>
                <ul className="text-gray-800 py-1">
                  <li>PYTHON BASICS</li>
                  <li>FRAMEWORKS</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="lg:flex gap-10">
            <div className="lg:w-1/3">
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
                <img src={ds} width={300} height={100} />
                <h3 className="text-lg font-medium pt-8 pb-2">
                  DATASCIENCE WITH PYTHON
                </h3>
                <a
                  href="https://www.udemy.com/certificate/UC-06476e45-241e-4d52-a89f-d2c29c067f41/"
                  target="_blank"
                  className="btn-primary mr-30 px-4 py-2 bg-teal-600 text-white border border-teal-600 hover:bg-teal-800 hover:border-teal-800"
                >
                  visit
                </a>
                <h4 className="py-4 text-teal-600">Skills Gained</h4>
                <ul className="text-gray-800 py-1">
                  <li>NUMPY & PANDAS</li>
                  <li>MATPLOTLIB</li>
                </ul>
              </div>
            </div>
            <div className="lg:w-1/3">
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
                <img src={sql} width={300} height={100} />
                <h3 className="text-lg font-medium pt-8 pb-2">
                  SQL COURSE CERTIFICATION
                </h3>
                <a
                  href="https://www.sololearn.com/certificates/CT-CMYLLQGB"
                  target="_blank"
                  className="btn-primary mr-30 px-4 py-2 bg-teal-600 text-white border border-teal-600 hover:bg-teal-800 hover:border-teal-800"
                >
                  visit
                </a>
                <h4 className="py-4 text-teal-600">Skills Gained</h4>
                <ul className="text-gray-800 py-1">
                  <li>MYSQl</li>
                  <li>BUILDING DATABASE</li>
                </ul>
              </div>
            </div>
            <div className="lg:w-1/3">
              <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white">
                <img src={code} width={300} height={100} />
                <h3 className="text-lg font-medium pt-8 pb-2">ENIGMA</h3>
                <a
                  href=""
                  target="_blank"
                  className="btn-primary mr-30 px-4 py-2 bg-teal-600 text-white border border-teal-600 hover:bg-teal-800 hover:border-teal-800"
                >
                  visit
                </a>

                <h4 className="py-4 text-teal-600">Skills Gained</h4>
                <ul className="text-gray-800 py-1">
                  <li>LOGIC BUILDING</li>
                  <li>PROBLEM-SOLVING</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Projects section */}
        <section className="py-10">
          <div>
            <h3 className="text-3xl py-1 font-bold dark:text-white">
              Projects
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for{" "}
              <span className="text-teal-500">agencies</span>, consulted for{" "}
              <span className="text-teal-500">startups</span>, and collaborated
              with talented people to create digital products for both business
              and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer a wide range of services, including brand design,
              programming, and teaching.
            </p>
          </div>

          {/* Beginner Level */}
          <div className="py-10">
            <h4 className="text-3xl py-2 mb-8 font-bold dark:text-white text-center font-extrabold text-blue-400 animate-pulse">
              BEGINNER
            </h4>

            <div className="flex flex-col gap-10 lg:flex-row lg:flex-wrap">
              <div className="basis-1/3 flex-1">
                <img
                  className="rounded-lg object-cover"
                  width={500}
                  height={250}
                  layout="responsive"
                  src={web2}
                  alt="Project 2"
                />
                <p className="text-lg py-2 font-medium text-blue-900 dark:text-blue-400">
                  Random Advice Generator
                </p>

                <p className="text-red-600">
                  Random Advice Generator made using ReactJs with advice API.
                  <br />
                  Users can click on the button to get random advice.
                </p>
                <div className="flex justify-center mt-4">
                  <a
                    href="https://github.com/AshutoshRajGupta/Random_quote_generator"
                    target="_blank"
                    className="btn-primary mr-30 px-4 py-2 bg-teal-600 text-white border border-teal-600 hover:bg-teal-800 hover:border-teal-800"
                  >
                    Github
                  </a>
                  <a
                    href="https://random-quote-generator-woad.vercel.app/"
                    target="_blank"
                    className="btn-secondary px-4 py-2 bg-gray-300 text-gray-800 border border-gray-300 hover:bg-gray-400 hover:border-gray-400"
                  >
                    Visit Website
                  </a>
                </div>
              </div>

              <div className="basis-1/3 flex-1">
                <img
                  className="rounded-lg object-cover"
                  width={500}
                  height={250}
                  layout="responsive"
                  src={web1}
                  alt="Project 1"
                />
                <p className="text-lg py-2 font-medium text-blue-900 dark:text-blue-400">
                  ToDo Application
                </p>

                <p className="text-red-600">
                  ToDo Application made using ReactJs with localStorage.
                  <br />
                  Users can edit, add, delete, and mark todos as complete.
                </p>
                <div className="flex justify-center mt-4">
                  <a
                    href="https://github.com/AshutoshRajGupta/Todo_react"
                    target="_blank"
                    className="btn-primary mr-30 px-4 py-2 bg-teal-600 text-white border border-teal-600 hover:bg-teal-800 hover:border-teal-800"
                  >
                    Github
                  </a>
                  <a
                    href="https://todo-react-six-red.vercel.app/"
                    target="_blank"
                    className="btn-secondary px-4 py-2 bg-gray-300 text-gray-800 border border-gray-300 hover:bg-gray-400 hover:border-gray-400"
                  >
                    Visit Website
                  </a>
                </div>
              </div>

              {/* Add more beginner level projects here */}
            </div>
          </div>

          {/* Intermediate Level */}
          <div className="py-10">
            <h4 className="text-3xl py-2 mb-8 font-bold dark:text-white text-center font-extrabold text-blue-900 animate-pulse">
              INTERMEDIATE
            </h4>

            <div className="flex flex-col gap-10 lg:flex-row lg:flex-wrap">
              <div className="basis-1/3 flex-1">
                <img
                  className="rounded-lg object-cover"
                  width={500}
                  height={250}
                  layout="responsive"
                  src={web3}
                  alt="Project 3"
                />
                <p className="text-lg py-2 font-medium text-blue-900 dark:text-blue-400">
                  Ecommerce Website
                </p>

                <p className="text-red-600">
                  Ecommerce website made using PHP, MySQL, and HTML.
                  <br />
                  Users can login, sign in, add items to the cart, and proceed
                  to payment.
                </p>
                <div className="flex justify-center mt-4">
                  <a
                    href=""
                    target="_blank"
                    className="btn-primary mr-30 px-4 py-2 bg-teal-600 text-white border border-teal-600 hover:bg-teal-800 hover:border-teal-800"
                  >
                    Github
                  </a>
                  <a
                    href=""
                    target="_blank"
                    className="btn-secondary px-4 py-2 bg-gray-300 text-gray-800 border border-gray-300 hover:bg-gray-400 hover:border-gray-400"
                  >
                    Visit Website
                  </a>
                </div>
              </div>

              <div className="basis-1/3 flex-1">
                <img
                  className="rounded-lg object-cover"
                  width={500}
                  height={250}
                  layout="responsive"
                  src={web4}
                  alt="Project 4"
                />
                <p className="text-lg py-2 font-medium text-blue-900 dark:text-blue-400">
                  Event Management System
                </p>

                <p className="text-red-600">
                  Event management system made for college studentto register
                  and<br></br> aprticipate in event.User can register then login
                  go payment fees etc.{" "}
                </p>
                <div className="flex justify-center mt-4">
                  <a
                    href="https://github.com/AshutoshRajGupta/WTL_MIni_Project"
                    target="_blank"
                    className="btn-primary mr-30 px-4 py-2 bg-teal-600 text-white border border-teal-600 hover:bg-teal-800 hover:border-teal-800"
                  >
                    Github
                  </a>
                  <a
                    href="https://github.com/AshutoshRajGupta/WTL_MIni_Project"
                    target="_blank"
                    className="btn-secondary px-4 py-2 bg-gray-300 text-gray-800 border border-gray-300 hover:bg-gray-400 hover:border-gray-400"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
              <div className="basis-1/3 flex-1">
                <img
                  className="rounded-lg object-cover"
                  width={500}
                  height={250}
                  layout="responsive"
                  src={web5}
                  alt="Project 5"
                />
                <p className="text-lg py-2 font-medium text-blue-900 dark:text-blue-400">
                  Map2procoder
                </p>

                <p className="text-red-600">
                  A website which describes the learning path for different
                  domains
                </p>
                <div className="flex justify-center mt-4">
                  <a
                    href="https://github.com/AshutoshRajGupta/map2proCoder"
                    target="_blank"
                    className="btn-primary mr-30 px-4 py-2 bg-teal-600 text-white border border-teal-600 hover:bg-teal-800 hover:border-teal-800"
                  >
                    Github
                  </a>
                  <a
                    href="https://map2procoder.vercel.app/"
                    target="_blank"
                    className="btn-secondary px-4 py-2 bg-gray-300 text-gray-800 border border-gray-300 hover:bg-gray-400 hover:border-gray-400"
                  >
                    Visit Website
                  </a>
                </div>
              </div>
              <div className="basis-1/3 flex-1">
                <img
                  className="rounded-lg object-cover"
                  width={500}
                  height={250}
                  layout="responsive"
                  src={web6}
                  alt="Project 6"
                />
                <p className="text-lg py-2 font-medium text-blue-900 dark:text-blue-400">
                  Expense Budget App
                </p>

                <p className="text-red-600">
                  Budget app made using reactjs and vitejs to manage your budget
                  and expense
                </p>
                <div className="flex justify-center mt-4">
                  <a
                    href="https://github.com/AshutoshRajGupta/expense_try"
                    target="_blank"
                    className="btn-primary mr-30 px-4 py-2 bg-teal-600 text-white border border-teal-600 hover:bg-teal-800 hover:border-teal-800"
                  >
                    Github
                  </a>
                  <a
                    href="https://expense-try.vercel.app"
                    target="_blank"
                    className="btn-secondary px-4 py-2 bg-gray-300 text-gray-800 border border-gray-300 hover:bg-gray-400 hover:border-gray-400"
                  >
                    Visit Website
                  </a>
                </div>
              </div>

              {/* Add more intermediate level projects here */}
            </div>
          </div>

          {/* Advanced Level */}
          <div className="py-10">
            <h4 className="text-3xl py-2 mb-8 font-bold dark:text-white text-center font-extrabold text-blue-900 animate-pulse">
              ADVANCED
            </h4>

            <div className="flex flex-col gap-10 lg:flex-row lg:flex-wrap">
              <div className="basis-1/3 flex-1">
                <img
                  className="rounded-lg object-cover"
                  width={500}
                  height={250}
                  layout="responsive"
                  src={advnc}
                  alt="Project 3"
                />
                <p className="text-lg py-2 font-medium text-blue-900 dark:text-blue-400">
                  WorkOut Website
                </p>

                <p className="text-red-600">
                  A mern stack workout website made using mongodb reactjs
                  express nodejs<br></br> where user can add information about
                  his workout and <br></br>he can delete the workout and all the
                  workouts will be save on the database.
                </p>
                <div className="flex justify-center mt-4">
                  <a
                    href=""
                    target="_blank"
                    className="btn-primary mr-30 px-4 py-2 bg-teal-600 text-white border border-teal-600 hover:bg-teal-800 hover:border-teal-800"
                  >
                    Github
                  </a>
                  <a
                    href=""
                    target="_blank"
                    className="btn-secondary px-4 py-2 bg-gray-300 text-gray-800 border border-gray-300 hover:bg-gray-400 hover:border-gray-400"
                  >
                    Visit Website
                  </a>
                </div>
              </div>

              <div className="basis-1/3 flex-1">
                <img
                  className="rounded-lg object-cover"
                  width={500}
                  height={250}
                  layout="responsive"
                  src={advnc1}
                  alt="Project 3"
                />
                <p className="text-lg py-2 font-medium text-blue-900 dark:text-blue-400">
                  Crypto Website
                </p>

                <p className="text-red-600">
                  A crypto currency website made using ReactJs and rapid API
                  through which <br></br> users can easily acess the data of
                  every crypto currency <br></br> and user can get the data
                  through visiual representation.
                </p>
                <div className="flex justify-center mt-4">
                  <a
                    href="https://github.com/AshutoshRajGupta/cryptoworld"
                    target="_blank"
                    className="btn-primary mr-30 px-4 py-2 bg-teal-600 text-white border border-teal-600 hover:bg-teal-800 hover:border-teal-800"
                  >
                    Github
                  </a>
                  <a
                    href="https://github.com/AshutoshRajGupta/cryptoworld"
                    target="_blank"
                    className="btn-secondary px-4 py-2 bg-gray-300 text-gray-800 border border-gray-300 hover:bg-gray-400 hover:border-gray-400"
                  >
                    Visit Website
                  </a>
                </div>
              </div>

              {/* Add more advanced level projects here */}
            </div>
          </div>
        </section>

        <section className="bg-blue-200 py-10">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 animate-pulse">
              CONNECT WITH US
            </h2>
            <div className="flex justify-center mt-8">
              <a
                href="https://www.linkedin.com/in/ashutosh-raj-gupta-18230820b/"
                className="btn-primary mr-10 bg-blue-600 hover:bg-blue-800 px-6 py-3 animate-bounce"
              >
                LINKEDIN
              </a>
              <a
                href="https://github.com/AshutoshRajGupta"
                className="btn-secondary mr-10 bg-gray-800 text-white hover:bg-gray-900 px-6 py-3 animate-pulse"
              >
                GITHUB
              </a>
              <a
                href="#"
                className="btn-secondary mr-10 bg-red-600 hover:bg-red-800 px-6 py-3 animate-spin"
              >
                MAIL
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
