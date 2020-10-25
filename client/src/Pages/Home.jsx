import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <div className="fmx-auto sm:mx-4 text-center text-black pt-16 md:pt-32">
          <div className="flex flex-col md:flex-row justify-center">
            <div className="max-w-xs mx-auto md:mx-0 md:w-1/2">
              <img
                className="h-48 w-48 rounded-lg shadow-xl sm:h-64 block mx-auto"
                src="https://i.imgur.com/2Hs0FYL.jpg"
                alt="Nikita Savelev"
              />
            </div>
            <div className="md:w-1/2 mx-auto md:mx-0 max-w-lg md:pl-4">
              <div className="tracking-wider text-3xl lg:text-4xl font-mono pt-10 md:pt-0 md:text-left">
               |Software Developer🐱‍💻|<br/>
               |QA Engineer🕵🏻‍♂️|<br/>
               |IT Technician🖥️|<br/>
               |Coffee drinker☕|
              </div>
              <div>
                <div className="leading-normal text-center hyphens-text pt-2 px-3 md:text-left md:px-0">
                  I am an enthusiastic and self-started Software Developer with
                  expertise in the M.E.R.N. stack (Mongo.js, Express.js, React
                  and Node.js), Ruby, and Ruby on Rails. I'm also a dedicated QA
                  Engineer with strong knowledge and understanding of Software
                  Development Life Cycle (SDLC) and Software Testing
                  Methodology. My true passion is learning and growing, both
                  independently and with the help of other knowledgeable
                  engineers. My two years as an I.T. technician gave me
                  experience collaborating with multiple teams including sales,
                  stock, and financial management. This experience gave me
                  skills such as troubleshooting, communication, and the desire
                  to always tinker. My passion for tech gives me the motivation
                  and determination to succeed in this ever-growing industry.
                </div>
              </div>
              <div className="p-6 space-x-4 align-center mr-2">
                <a href="/contact">
                  <button className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded inline-flex">
                    Contact Me
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
