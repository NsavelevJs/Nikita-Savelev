import React, { Component } from "react";

class Skills extends Component {
  render() {
    return (
      <div className="container mx-auto p-6">
        <div className="px-4 py-4 mx-auto">
          <div className="grid sm:h-24 sm:grid-flow-row sm:gap-4 sm:grid-cols-3 grid-cols-1 md:grid-cols-3">
            <div className="shadow-lg flex flex-col justify-center bg-white border border-gray-300 rounded">
              <div className="flex w-full h-full">
                <div className="w-1/3 flex items-center justify-center bg-yellow-300">
                  <p className="text-3xl font-semibold text-center text-black ">
                    JS
                  </p>
                </div>
                <div className="w-2/3 flex items-center justify-center">
                  <p className="text-2xl text-center text-gray-900">
                    JavaScript
                  </p>
                </div>
              </div>
            </div>
            <div className="shadow-lg flex flex-col justify-center bg-white border border-gray-300 rounded">
              <div className="flex w-full h-full">
                <div className="w-1/3 flex items-center justify-center bg-yellow-300">
                  <p className="text-3xl font-semibold text-center text-black">
                    ExJS
                  </p>
                </div>
                <div className="w-2/3 flex items-center justify-center">
                  <p className="text-2xl text-center text-gray-900">
                    Express.js
                  </p>
                </div>
              </div>
            </div>

            <div className="shadow-lg flex flex-col justify-center bg-white border border-gray-300 rounded">
              <div className="flex w-full h-full">
                <div className="w-1/3 flex items-center justify-center bg-red-700">
                  <p className="text-3xl font-semibold text-center text-black">
                    Rb
                  </p>
                </div>
                <div className="w-2/3 flex items-center justify-center ">
                  <p className="text-2xl text-center text-gray-900">Ruby</p>
                </div>
              </div>
            </div>
            <div className="shadow-lg flex flex-col justify-center bg-white border border-gray-300 rounded">
              <div className="flex w-full h-full">
                <div className="w-1/3 flex items-center justify-center bg-red-700">
                  <p className="text-3xl font-semibold text-center text-black">
                    Rbr
                  </p>
                </div>
                <div className="w-2/3 flex items-center justify-center ">
                  <p className="text-2xl text-center text-gray-900">
                    Ruby on Rails
                  </p>
                </div>
              </div>
            </div>
            <div className="shadow-lg flex flex-col justify-center bg-white border border-gray-300 rounded">
              <div className="flex w-full h-full">
                <div className="w-1/3 flex items-center justify-center bg-blue-500">
                  <p className="text-3xl font-semibold text-center text-black">
                    R
                  </p>
                </div>
                <div className="w-2/3 flex items-center justify-center ">
                  <p className="text-2xl text-center text-gray-900">React</p>
                </div>
              </div>
            </div>

            <div className="shadow-lg flex flex-col justify-center bg-white border border-gray-300 rounded">
              <div className="flex w-full h-full">
                <div className="w-1/3 flex items-center justify-center bg-teal-500">
                  <p className="text-3xl font-semibold text-center text-white">
                    TW
                  </p>
                </div>
                <div className="w-2/3 flex items-center justify-center ">
                  <p className="text-2xl text-center text-gray-900">
                    Tailwind CSS
                  </p>
                </div>
              </div>
            </div>
            <div className="shadow-lg flex flex-col justify-center bg-white border border-gray-300 rounded">
              <div className="flex w-full h-full">
                <div className="w-1/3 flex items-center justify-center bg-black">
                  <p className="text-3xl font-semibold text-center text-white">
                    GH
                  </p>
                </div>
                <div className="w-2/3 flex items-center justify-center ">
                  <p className="text-2xl text-center text-gray-900">
                    GitHub/Git
                  </p>
                </div>
              </div>
            </div>
            <div className="shadow-lg flex flex-col justify-center bg-white border border-gray-300 rounded">
              <div className="flex w-full h-full">
                <div className="w-1/3 flex items-center justify-center bg-white">
                  <p className="text-3xl font-semibold text-center text-green-500">
                    MDB
                  </p>
                </div>
                <div className="w-2/3 flex items-center justify-center ">
                  <p className="text-2xl text-center text-gray-900">MongoDB</p>
                </div>
              </div>
            </div>
            <div className="shadow-lg flex flex-col justify-center bg-white border border-gray-300 rounded">
              <div className="flex w-full h-full">
                <div className="w-1/3 flex items-center justify-center bg-gray-700">
                  <p className="text-3xl font-semibold text-center text-green-400">
                    N
                  </p>
                </div>
                <div className="w-2/3 flex items-center justify-center ">
                  <p className="text-2xl text-center text-gray-900">Node.js</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Skills;
