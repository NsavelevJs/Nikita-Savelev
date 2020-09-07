import React, { Component } from "react";

class Work extends Component {
  render() {
    return (
      <div>
         <div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto p-8">
          <img
            className="w-full"
            src="https://i.imgur.com/pRuBC6O.png"
            alt="Pick-Up chat app"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">
              Pick-Up
            </div>
            <p className="text-gray-700 text-base">
              Pick-up where you left off with this chat app
            </p>
          </div>
          <div className="px-6 py-4 flex justify-center">
            <button>
              <a
              target="_blank"
              rel='noopener noreferrer'
                href="https://github.com/NsavelevJs/Pick-up"
                className="bg-teal-400 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full m-2"
              >
                GitHub
              </a>
            </button>
            <button>
              <a
                target="_blank"
                rel='noopener noreferrer'
                href="https://5f4e606234ceb22409fcbe73--fervent-golick-aa38cc.netlify.app/"
                className="bg-teal-400 hover:bg-teal-600  text-white font-bold py-2 px-4 rounded-full m-2"
              >
                Website
              </a>
            </button>
          </div>
        </div>

        <div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto p-8">
          <img
            className="w-full"
            src="https://i.imgur.com/YtL9W3M.png"
            alt="Read&&Butter website page"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">
              Read&&Butter
            </div>
            <p className="text-gray-700 text-base">
              An open medium for anyone to post. No likes, no comments, no
              obsession. Just post and enjoy.
            </p>
          </div>
          <div className="px-6 py-4 flex justify-center">
            <button>
              <a
              target="_blank"
              rel='noopener noreferrer'
                href="https://github.com/NsavelevJs/Read-And-butter/blob/master/README.md"
                className="bg-teal-400 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full m-2"
              >
                GitHub
              </a>
            </button>
            <button>
              <a
                target="_blank"
                rel='noopener noreferrer'
                href="http://read-and-butter.surge.sh/"
                className="bg-teal-400 hover:bg-teal-600  text-white font-bold py-2 px-4 rounded-full m-2"
              >
                Website
              </a>
            </button>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto p-8">
          <img
            className="w-full"
            src="https://i.imgur.com/FdVSz05.png"
            alt="Read&&Butter website page"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">
              Nikita Savelev
            </div>
            <p className="text-gray-700 text-base">
              The website you're currently on.
            </p>
          </div>
          <div className="px-6 py-4 flex justify-center">
            <button>
              <a
                target="_blank"
                rel='noopener noreferrer'
                href="https://github.com/NsavelevJs/Nikita-Savelev/blob/master/client/README.md"
                className="bg-teal-400 hover:bg-teal-600  text-white font-bold py-2 px-4 rounded-full m-2"
              >
                GitHub
              </a>
            </button>
            <button>
              <a
                target="_blank"
                href="/"
                className="bg-teal-400 hover:bg-teal-600  text-white font-bold py-2 px-4 rounded-full m-2"
              >
                Website
              </a>
            </button>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto p-8">
          <img
            className="w-full"
            src="https://i.imgur.com/8u1diR5.png"
            alt="Todays weather apps"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">
              Todays Weather
            </div>
            <p className="text-gray-700 text-base">Lets check the weather.</p>
          </div>
          <div className="px-6 py-4 flex justify-center">
            <button>
              <a
                target="_blank"
                rel='noopener noreferrer'
                href="https://github.com/NsavelevJs/Todays-Weather"
                className="bg-teal-400 hover:bg-teal-600  text-white font-bold py-2 px-4 rounded-full m-2"
              >
                GitHub
              </a>
            </button>
            <button>
              <a
                target="_blank"
                rel='noopener noreferrer'
                href="https://nsavelevjs.github.io/Todays-Weather/"
                className="bg-teal-400 hover:bg-teal-600  text-white font-bold py-2 px-4 rounded-full m-2"
              >
                Website
              </a>
            </button>
          </div>
        </div>
        <div className="max-w-sm rounded overflow-hidden shadow-lg mx-auto p-8">
          <img
            className="w-full"
            src="https://i.imgur.com/xUFvesq.png"
            alt=""
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2 text-center">Recipe Box</div>
            <p className="text-gray-700 text-base">
              Recipe app that contains step by step instructions on some really
              nice recipes.
            </p>
          </div>
          <div className="px-6 py-4 flex justify-center">
            <button>
              <a
                target="_blank"
                rel='noopener noreferrer'
                href="https://github.com/NsavelevJs/Recipe-box/blob/master/p3-worksheet.md"
                className="bg-teal-400 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full m-2"
              >
                GitHub
              </a>
            </button>
            <button>
              <a
                target="_blank"
                rel='noopener noreferrer'
                href="http://foodiesandgoodiesrecipebox.surge.sh/"
                className="bg-teal-400 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded-full m-2"
              >
                Website
              </a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Work;
