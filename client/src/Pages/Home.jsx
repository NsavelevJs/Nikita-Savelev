import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div className="flex justify-center p-8 mx-auto sm:flex-wrap">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img
            className="w-full rounded-full border-double border-4 border-gray-500"
            src="https://i.imgur.com/o8SQsf5.jpg"
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
        <div className="flex justify-center p-48">
          <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <p className="text-gray-700 text-base text-center">
              I am an enthusiastic and self-started back-end software engineer
              with expertise in the M.E.R.N. stack (Mongo.js, Express.js, React and
              Node.js), Ruby, and Ruby on Rails. I love to learn, both independently and with the help of
              more knowledgeable engineers. My two years as an I.T. technician
              gave me experience collaborating with multiple teams including
              sales, stock, and financial management. This experience gave me
              skills such as troubleshooting, communication, and the desire to
              always tinker. My passion for tech gives me the motivation and
              determination to succeed in this ever-growing industry.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
