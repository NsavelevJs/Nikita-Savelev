import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      // max-w-sm w-full lg:max-w-full lg:flex
      <div className=" mx-auto justify-center max-w-sm lg:max-w-full lg:flex sm:flex-wrap ">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full"
            src="https://i.imgur.com/2Hs0FYL.jpg"
            alt="Picture of Nikita Savelev"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 font-mono text-center">
              Nikita Savelev
            </div>
            <div className="font-bold text-xl mb-2 font-mono text-center">
              Software Engineer
            </div>
          </div>
        </div>
        <div className="max-w-sm w-full lg:max-w-full lg:flex flex-wrap justify-center flex justify-center max-w-sm lg:max-w-full lg:flex p-8 sm:flex-wrap">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <p className=" text-gray-700 text-base text-center">
              I am an enthusiastic and self-started back-end software engineer
              with expertise in the M.E.R.N. stack (Mongo.js, Express.js, React
              and Node.js), Ruby, and Ruby on Rails. I love to learn, both
              independently and with the help of more knowledgeable engineers.
              My two years as an I.T. technician gave me experience
              collaborating with multiple teams including sales, stock, and
              financial management. This experience gave me skills such as
              troubleshooting, communication, and the desire to always tinker.
              My passion for tech gives me the motivation and determination to
              succeed in this ever-growing industry.
            </p>
          </div>
        </div>
      </div>




    );
  }
}

export default Home;
