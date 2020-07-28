import React, { Component } from "react";

class Work extends Component {
  render() {
    return (
        <div className=''>

      <div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto p-8">
        <img
          className="w-full"
          src="https://i.imgur.com/YtL9W3M.png"
          alt="Read&&Butter website page"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2 text-center">Read&&Butter</div>
          <p className="text-gray-700 text-base">
            An open medium for anyone to post. No likes no comments no obsession. Just post and enjoy.
          </p>
        </div>
        <div className="px-6 py-4 flex justify-center">
          <button>
            <a href='https://github.com/NsavelevJs/Read-And-butter/blob/master/README.md'className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              GitHub
            </a>
          </button>
          <button>
            <a target='_blank' href='http://read-and-butter.surge.sh/' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
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
          <div className="font-bold text-xl mb-2 text-center">Nikita Savelev</div>
          <p className="text-gray-700 text-base">
            The website you're currently on.
          </p>
        </div>
        <div className="px-6 py-4 flex justify-center">
          <button>
            <a target='_blank' href='https://github.com/NsavelevJs/Nikita-Savelev/blob/master/client/README.md' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              GitHub
            </a>
          </button>
          <button>
            <a target='_blank' href='/' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
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
          <div className="font-bold text-xl mb-2 text-center">Todays Weather</div>
          <p className="text-gray-700 text-base">
           Lets check the weather.
          </p>
        </div>
        <div className="px-6 py-4 flex justify-center">
          <button>
            <span className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              GitHub
            </span>
          </button>
          <button>
            <a target='_blank' href='https://nsavelevjs.github.io/Todays-Weather/' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
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
           Recipe app that contains step by step instructions on some really nice recipes.
          </p>
        </div>
        <div className="px-6 py-4 flex justify-center">
          <button>
            <a target='_blank' href='https://github.com/NsavelevJs/Recipe-box/blob/master/p3-worksheet.md' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              GitHub
            </a>
          </button>
          <button>
            <a target='_blank' href='http://foodiesandgoodiesrecipebox.surge.sh/' className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
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
