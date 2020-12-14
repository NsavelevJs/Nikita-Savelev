import React from "react";
import $ from "jquery";

export default function Header() {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <div className="">
      <nav className=" relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-indigo-700 z-10">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className=" w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className=" text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
              href="/"
            >
              Nikita Savelev
            </a>
            <button
              className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
              type="button"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <div className="hamburger">
                <span className="hamburger__top-bun"></span>
                <span className="hamburger__bottom-bun"></span>
              </div>
              <script>
                $(".hamburger").click(function () {$(this).toggleClass("open")})
              </script>
            </button>
          </div>
          <div
            className={
              "lg:flex flex-grow items-center" +
              (navbarOpen ? " flex" : " hidden")
            }
            id="example-navbar-danger"
          >
            <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="/skills"
                >
                  <i className="text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Skills</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="https://drive.google.com/file/d/1fGLOcv7qkxqbtnMAwN0lJFEEUir6xX9J/view?usp=sharing"
                >
                  <i className="text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Resume</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="/work"
                >
                  <i className="text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Work</span>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                  href="/contact"
                >
                  <i className="text-lg leading-lg text-white opacity-75"></i>
                  <span className="ml-2">Contact Me</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
