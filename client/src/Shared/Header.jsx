import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <ul className="flex border-b ">
          <li className="-mb-px mr-5">
            <a
              className="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-orange-500 font-semibold"
              href="/"
            >
              Nikita Savelev
            </a>
          </li>
          <li className="mr-1">
            <a
              className="bg-white inline-block py-2 px-4 text-orange-500 hover:text-orange-800 font-semibold"
              href="/skills"
            >
              Skills
            </a>
          </li>
          <li className="mr-1">
            <a
              className="bg-white inline-block py-2 px-4 text-orange-500 hover:text-orange-800 font-semibold"
              href="/work"
            >
              Work
            </a>
          </li>
          <li className="mr-1">
            <a
              className="bg-white inline-block py-2 px-4 text-orange-500 hover:text-orange-800 font-semibold"
              href="/contact"
            >
              Contact Me
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
