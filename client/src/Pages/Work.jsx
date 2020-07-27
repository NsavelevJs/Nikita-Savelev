import React, { Component } from "react";

class Work extends Component {
  render() {
    return (
        <div className=''>

      <div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto p-8">
        <img
          class="w-full"
          src="https://i.imgur.com/YtL9W3M.png"
          alt="Read&&Butter website page"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 text-center">Read&&Butter</div>
          <p class="text-gray-700 text-base">
            An open medium for anyone to post. No likes no comments no obsession. Just post and enjoy.
          </p>
        </div>
        <div class="px-6 py-4 flex justify-center">
          <button>
            <span class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              GitHub
            </span>
          </button>
          <button>
            <a target='_blank' href='http://read-and-butter.surge.sh/' class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Website
            </a>
          </button>
        </div>
      </div>

      <div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto p-8">
        <img
          class="w-full"
          src="https://i.imgur.com/FdVSz05.png"
          alt="Read&&Butter website page"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 text-center">Nikita Savelev</div>
          <p class="text-gray-700 text-base">
            The website you're currently on.
          </p>
        </div>
        <div class="px-6 py-4 flex justify-center">
          <button>
            <span class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              GitHub
            </span>
          </button>
          <button>
            <a target='_blank' href='' class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Website
            </a>
          </button>
        </div>
      </div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto p-8">
        <img
          class="w-full"
          src="https://i.imgur.com/YzuxXYt.png"
          alt="Todays weather apps"
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Todays Weather</div>
          <p class="text-gray-700 text-base">
           Lets check the weather.
          </p>
        </div>
        <div class="px-6 py-4 flex justify-center">
          <button>
            <span class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              GitHub
            </span>
          </button>
          <button>
            <a target='_blank' href='https://nsavelevjs.github.io/Todays-Weather/' class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              Website
            </a>
          </button>
        </div>
      </div>
      <div class="max-w-sm rounded overflow-hidden shadow-lg mx-auto p-8">
        <img
          class="w-full"
          src="/img/card-top.jpg"
          alt=""
        />
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">Read&&Butter</div>
          <p class="text-gray-700 text-base">
            An open medium for anyone to post. No likes no comments no obsession. Just post and enjoy.
          </p>
        </div>
        <div class="px-6 py-4 flex justify-center">
          <button>
            <a src='' class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
              GitHub
            </a>
          </button>
          <button>
            <a target='_blank' href='http://read-and-butter.surge.sh/' class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
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
