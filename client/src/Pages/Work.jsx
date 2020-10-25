import React, { Component } from "react";

class Work extends Component {
  render() {
    return (
      <section className="blog text-gray-700 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
              Work
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-base"></p>
          </div>

          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
              <div
                className="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center"
                style={{
                  backgroundImage: "url(https://i.imgur.com/pRuBC6O.png",
                }}
              ></div>

              <div className=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
                <div className="header-content inline-flex ">
                  <div className="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-blue-100">
                    <div className="h-2 w-2 rounded-full m-1 bg-blue-500 "></div>
                  </div>
                  <div className="category-title flex-1 text-sm">React</div>
                </div>
                <div className="header-content inline-flex ">
                  <div className="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-gray-700">
                    <div className="h-2 w-2 rounded-full m-1 bg-gray-500 "></div>
                  </div>
                  <div className="category-title flex-1 text-sm">Socket.io</div>
                </div>
                <div className="header-content inline-flex ">
                  <div className="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-gray-500">
                    <div className="h-2 w-2 rounded-full m-1 bg-green-400 "></div>
                  </div>
                  <div className="category-title flex-1 text-sm">Node.js</div>
                </div>

                <div className="title-post font-medium">Pick-Up</div>
                <div className="summary-post text-base text-justify flex flex-col">
                  Pick-up where you left off with this chat app.
                  <button>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/NsavelevJs/Pick-up"
                      className="bg-blue-100 text-blue-500 mt-4 block rounded p-2 text-sm "
                    >
                      Github
                    </a>
                  </button>
                  <button>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://pick-up.surge.sh"
                      className="bg-blue-100 text-blue-500 mt-4 block rounded p-2 text-sm"
                    >
                      Website
                    </a>
                  </button>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
              <div
                className="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center"
                style={{
                  backgroundImage: "url(https://i.imgur.com/YtL9W3M.png",
                }}
              ></div>

              <div className=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
                <div className="header-content inline-flex ">
                  <div className="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-blue-100">
                    <div className="h-2 w-2 rounded-full m-1 bg-blue-500 "></div>
                  </div>
                  <div className="category-title flex-1 text-sm">React</div>
                </div>
                <div className="header-content inline-flex ">
                  <div className="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-red-100">
                    <div className="h-2 w-2 rounded-full m-1 bg-red-500 "></div>
                  </div>
                  <div className="category-title flex-1 text-sm">Ruby</div>
                </div>
                <div className="header-content inline-flex ">
                  <div className="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-red-100">
                    <div className="h-2 w-2 rounded-full m-1 bg-red-500 "></div>
                  </div>
                  <div className="category-title flex-1 text-sm">Rails</div>
                </div>
                <div className="header-content inline-flex ">
                  <div className="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-white">
                    <div className="h-2 w-2 rounded-full m-1 bg-black"></div>
                  </div>
                  <div className="category-title flex-1 text-sm">Bcrypt</div>
                </div>
                <div className="header-content inline-flex ">
                  <div className="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-white">
                    <div className="h-2 w-2 rounded-full m-1 bg-black "></div>
                  </div>
                  <div className="category-title flex-1 text-sm">JWT</div>
                </div>
                <div className="title-post font-medium">Read&&Butter</div>

                <div className="summary-post text-base text-justify flex flex-col">
                  An open medium for anyone to post. No likes, no comments, no
                  obsession. Just post and enjoy.
                  <button>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/NsavelevJs/Read-And-butter/blob/master/README.md"
                      className="bg-blue-100 text-blue-500 px-2 mt-4 block rounded p-2 text-sm"
                    >
                      Github
                    </a>
                  </button>
                  <button>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://read-and-butter.surge.sh/"
                      className="bg-blue-100 text-blue-500 px-2 mt-4 block rounded p-2 text-sm"
                    >
                      Website
                    </a>
                  </button>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
              <div
                className="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center"
                style={{
                  backgroundImage: "url(https://i.imgur.com/8u1diR5.png",
                }}
              ></div>

              <div className=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
                <div className="header-content inline-flex ">
                  <div className="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-orange-100">
                    <div className="h-2 w-2 rounded-full m-1 bg-orange-500 "></div>
                  </div>
                  <div className="category-title flex-1 text-sm">HTML</div>
                </div>
                <div className="header-content inline-flex ">
                  <div className="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-blue-100">
                    <div className="h-2 w-2 rounded-full m-1 bg-blue-500 "></div>
                  </div>
                  <div className="category-title flex-1 text-sm">CSS</div>
                </div>
                <div className="header-content inline-flex ">
                  <div className="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-yellow-100">
                    <div className="h-2 w-2 rounded-full m-1 bg-yellow-500 "></div>
                  </div>
                  <div className="category-title flex-1 text-sm">
                    JavaScript
                  </div>
                </div>
                <div className="header-content inline-flex ">
                  <div className="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-indigo-100">
                    <div className="h-2 w-2 rounded-full m-1 bg-indigo-500 "></div>
                  </div>
                  <div className="category-title flex-1 text-sm">API</div>
                </div>
                <div className="title-post font-medium">Today's Weather</div>

                <div className="summary-post text-base text-justify flex flex-col">
                  Lets check the weather forecast using the open weather API.
                  <button>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/NsavelevJs/Todays-Weather"
                      className="bg-blue-100 text-blue-500 px-2 mt-4 block rounded p-2 text-sm"
                    >
                      Github
                    </a>
                  </button>
                  <button>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://nsavelevjs.github.io/Todays-Weather/"
                      className="bg-blue-100 text-blue-500 px-2 mt-4 block rounded p-2 text-sm"
                    >
                      Website
                    </a>
                  </button>
                </div>
              </div>
            </div>

            <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
              <div
                className="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center"
                style={{
                  backgroundImage: "url(https://i.imgur.com/xUFvesq.png",
                }}
              ></div>

              <div className=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
                <div className="header-content inline-flex ">
                  <div className="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-gray-500">
                    <div className="h-2 w-2 rounded-full m-1 bg-green-400 "></div>
                  </div>
                  <div className="category-title flex-1 text-sm">Node.js</div>
                </div>
                <div className="header-content inline-flex ">
                  <div className="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-white">
                    <div className="h-2 w-2 rounded-full m-1 bg-black "></div>
                  </div>
                  <div className="category-title flex-1 text-sm">
                    Express.js
                  </div>
                </div>
                <div className="header-content inline-flex ">
                  <div className="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-blue-100">
                    <div className="h-2 w-2 rounded-full m-1 bg-blue-500 "></div>
                  </div>
                  <div className="category-title flex-1 text-sm">React</div>
                </div>
                <div className="header-content inline-flex ">
                  <div className="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-green-100">
                    <div className="h-2 w-2 rounded-full m-1 bg-green-500 "></div>
                  </div>
                  <div className="category-title flex-1 text-sm">MongoDB</div>
                </div>
                <div className="header-content inline-flex ">
                  <div className="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-teal-100">
                    <div className="h-2 w-2 rounded-full m-1 bg-teal-500 "></div>
                  </div>
                  <div className="category-title flex-1 text-sm">Tailwind</div>
                </div>
                <div className="title-post font-medium">
                  Foodies and Goodies
                </div>

                <div className="summary-post text-base text-justify flex flex-col">
                  Recipe app that contains step by step instructions on some
                  really nice recipes.
                  <button>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/NsavelevJs/Recipe-box"
                      className="bg-blue-100 text-blue-500 px-2 mt-4 block rounded p-2 text-sm"
                    >
                      Github
                    </a>
                  </button>
                  <button>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://foodiesandgoodiesrecipebox.surge.sh/"
                      className="bg-blue-100 text-blue-500 px-2 mt-4 block rounded p-2 text-sm"
                    >
                      Website
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3 md:mb-0 mb-6 flex flex-col justify-center items-center max-w-sm mx-auto">
              <div
                className="bg-gray-300 h-56 w-full rounded-lg shadow-md bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url(https://i.pinimg.com/originals/00/79/6c/00796c794bd05ba60af2f09e96e7246a.gif",
                }}
              ></div>

              <div className=" w-70 bg-white -mt-10 shadow-lg rounded-lg overflow-hidden p-5">
                <div className="header-content inline-flex ">
                  <div className="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-blue-100">
                    <div className="h-2 w-2 rounded-full m-1 bg-blue-500 "></div>
                  </div>
                  <div className="category-title flex-1 text-sm">React</div>
                </div>
                <div className="header-content inline-flex ">
                  <div className="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-white">
                    <div className="h-2 w-2 rounded-full m-1 bg-red-500 "></div>
                  </div>
                  <div className="category-title flex-1 text-sm">NES.CSS</div>
                </div>
                <div className="header-content inline-flex ">
                  <div className="category-badge flex-1  h-4 w-4 m rounded-full m-1 bg-yellow-100">
                    <div className="h-2 w-2 rounded-full m-1 bg-yellow-500 "></div>
                  </div>
                  <div className="category-title flex-1 text-sm">
                    JavaScript
                  </div>
                </div>
                <div className="title-post font-medium">Duck Hunt</div>

                <div className="summary-post text-base text-justify flex flex-col">
                  Come play this classic Duck hunt game made with NES.CSS.
                  <button>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="https://github.com/NsavelevJs/duck-hunt"
                      className="bg-blue-100 text-blue-500 px-2 mt-4 block rounded p-2 text-sm"
                    >
                      Github
                    </a>
                  </button>
                  <button>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href="http://nicks-duck-hunt.surge.sh/"
                      className="bg-blue-100 text-blue-500 px-2 mt-4 block rounded p-2 text-sm"
                    >
                      Website
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Work;
