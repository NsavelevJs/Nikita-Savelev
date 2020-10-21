import React from "react";
import $ from 'jquery'

export default function Header({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);

  return (
    <div className='z-10'>
      <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-indigo-700">
        <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
            <a
              className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-no-wrap uppercase text-white"
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
$(".hamburger").click(function () {
  $(this).toggleClass("open")})

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

    // <div className="relative bg-blue-900 ">
    //   <header className="sm:flex text-gray-300 sm:justify-between sm:items-center sm:px-4 sm:py-3 z-10">
    //     <div className="flex items-center justify-between px-4 py-3">
    //       <a
    //         href="/"
    //         className="text-2xl cursor-pointer pl-2 md:pl-4 router-link-exact-active router-link-active"
    //       >
    //         Nikit Savelev
    //       </a>
    //       <div className="sm:hidden">
    //         <button
    //           aria-label="Navigate"
    //           className="block text-gray-500 hover: focus: focus:outline-none"
    //         >
    //           <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
    //             <path
    //               fillRule="evenodd"
    //               d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
    //             ></path>
    //           </svg>
    //         </button>
    //       </div>
    //     </div>
    //     <nav className="sm:block sm:max-h-full navLinks close max-h-0 ">
    //       <div className="px-4 pt-2 pb-4 sm:flex sm:p-0">
    //         <a href='/skills' className="cursor-pointer mt-1 block px-2 py-1 tracking-wide rounded hover:bg-gray-800 sm:mt-0 sm:ml-2 text-gray-400 font-normal">
    //           Skills
    //         </a>
    //         <a href='/work' className="cursor-pointer mt-1 block px-2 py-1 tracking-wide rounded hover:bg-gray-800 sm:mt-0 sm:ml-2 text-gray-400 font-normal">
    //           Experience
    //         </a>
    //         <a href='/contact' className="cursor-pointer mt-1 block px-2 py-1 tracking-wide rounded hover:bg-gray-800 sm:mt-0 sm:ml-2 text-gray-400 font-normal">
    //           Contact
    //         </a>
    //       </div>
    //     </nav>
    //   </header>
    // </div>

    // <div>

    //   <ul className="flex border-b ">
    //     <li className="-mb-px mr-5">
    //       <a
    //         className="bg-white inline-block py-2 px-4 text-orange-500 hover:text-orange-800 font-semibold"
    //         href="/"
    //       >
    //         Nikita Savelev
    //       </a>
    //     </li>
    //     <li className="mr-1 flex flex-end">
    //       <a
    //         className="bg-white inline-block py-2 px-4 text-orange-500 hover:text-orange-800 font-semibold"
    //         href="/skills"
    //       >
    //         Skills
    //       </a>
    //     </li>
    //     <li className="mr-1">
    //       <a
    //         className="bg-white inline-block py-2 px-4 text-orange-500 hover:text-orange-800 font-semibold"
    //         href="/work"
    //       >
    //         Work
    //       </a>
    //     </li>
    //     <li className="mr-1">
    //       <a
    //         className="bg-white inline-block py-2 px-4 text-orange-500 hover:text-orange-800 font-semibold"
    //         href="/contact"
    //       >
    //         Contact Me
    //       </a>
    //     </li>
    //   </ul>
    // </div>
  );
}
