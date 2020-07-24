import React, { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <ul class="flex border-b ">
          <li class="-mb-px mr-5">
            <a
              class="bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-orange-500 font-semibold"
              href="/"
            >
              Nikita Savelev
            </a>
          </li>
          <li class="mr-1">
            <a
              class="bg-white inline-block py-2 px-4 text-orange-500 hover:text-orange-800 font-semibold"
              href="/skills"
            >
              Skills
            </a>
          </li>
          <li class="mr-1">
            <a
              class="bg-white inline-block py-2 px-4 text-orange-500 hover:text-orange-800 font-semibold"
              href="/Work"
            >
              Work
            </a>
          </li>
          <li class="mr-1">
            <a
              class="bg-white inline-block py-2 px-4 text-orange-500 hover:text-orange-800 font-semibold"
              href="#"
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
