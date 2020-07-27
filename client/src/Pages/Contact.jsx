import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="flex justify-center">
        <div className="flex flex-col lg:w-1/2 pr-4">
          <div className="text-5xl text-orange-500 font-mono px-10 py-8 underline flex justify-center">
            Contact Me
          </div>
          <div className="hyphens-text leading pb-4 flex justify-center">
            {" "}
            Want to chat? Lets grab coffee!{" "}
          </div>
          <div className="inline-flex hover:text-orange-500 border-b py-4 pl-4">
            <a
              target="_blank"
              href="https://www.google.com/maps/place/Brooklyn,+NY/@40.6451594,-74.0850816,11z/data=!3m1!4b1!4m5!3m4!1s0x89c24416947c2109:0x82765c7404007886!8m2!3d40.6781784!4d-73.9441579"
              className="inline-flex hover text-black hover:font-semibold "
            >
              Location: Brooklyn, NY
            </a>
          </div>
          <div className="inline-flex hover: text-orange-500 border-b py-4 pl-4">
            <a
              target="_blank"
              href="https://github.com/NsavelevJs/"
              className="inline-flex hover text-black hover:font-semibold"
            >
              Github: NsavelevJS
            </a>
          </div>
          <div className="inline-flex hover: text-orange-500 border-b py-4 pl-4">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/nikita-savelev-129994140?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Brvo0mRjpR9OrFkv4TtVVWw%3D%3D"
              className="inline-flex hover text-black hover:font-semibold"
            >
              LinkedIn: Nikita Savelev
            </a>
          </div>

          <form class="w-full max-w-lg flex flex-col mx-auto pt-20">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-first-name"
                >
                  Email
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="text"
                  placeholder="example@email.com"
                />
              </div>

              <div class="w-full md:w-1/2 px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-last-name"
                >
                  Full name
                </label>
                <input
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-last-name"
                  type="text"
                  placeholder="Full Name"
                />
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full px-3">
                <label
                  class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-password"
                >
                  Message
                </label>
                <textarea
                  class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-password"
                  type="text"
                />
                <p class="text-gray-600 text-xs italic">
                  Formality is optional
                </p>
              </div>
            </div>
            <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
              Send it!
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Contact;