import React from "react";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }
  render() {
    const { status } = this.state;
    return (
      <div className="flex justify-center">
        <div className="flex flex-col lg:w-1/2 pr-4">
          <div className="text-5xl text-blue-800 px-10 py-8 flex justify-center">
            Contact Me!
          </div>
          <div className="hyphens-text leading pb-4 flex justify-center">
            Want to chat? Let's grab coffee!
          </div>
          <div className="inline-flex hover: text-orange-500 border-b py-4 pl-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/NsavelevJs/"
              className="inline-flex hover text-black hover:font-semibold"
            >
            <svg viewBox="0 0 24 24" class="mx-1 fill-current" style={{width: "24px", height: "24px"}}><path d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"></path></svg> 
             NsavelevJS
            </a>
          </div>
          <div className="inline-flex hover: text-orange-500 border-b py-4 pl-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/nikita-savelev-129994140?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Brvo0mRjpR9OrFkv4TtVVWw%3D%3D"
              className="inline-flex hover text-black hover:font-semibold"
            >
              <svg viewBox="0 0 24 24" class="mx-1 fill-current" style={{width: "24px", height: "24px"}}><path d="M19,3A2,2 0 0,1 21,5V19A2,2 0 0,1 19,21H5A2,2 0 0,1 3,19V5A2,2 0 0,1 5,3H19M18.5,18.5V13.2A3.26,3.26 0 0,0 15.24,9.94C14.39,9.94 13.4,10.46 12.92,11.24V10.13H10.13V18.5H12.92V13.57C12.92,12.8 13.54,12.17 14.31,12.17A1.4,1.4 0 0,1 15.71,13.57V18.5H18.5M6.88,8.56A1.68,1.68 0 0,0 8.56,6.88C8.56,5.95 7.81,5.19 6.88,5.19A1.69,1.69 0 0,0 5.19,6.88C5.19,7.81 5.95,8.56 6.88,8.56M8.27,18.5V10.13H5.5V18.5H8.27Z"></path></svg>
               Nikita Savelev
            </a>
          </div>
          <a href='tel:1-917-495-0056' className="inline-flex hover: text-orange-500 border-b py-4 pl-4">
            <span className="inline-flex hover text-black hover:font-semibold">
            <img alt="phone" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjM1cHgiIGhlaWdodD0iMzVweCIgdmlld0JveD0iMCAwIDM1IDM1IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCAzNSAzNTsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPHBhdGggZD0iTTI1LjMwMiwwSDkuNjk4Yy0xLjMsMC0yLjM2NCwxLjA2My0yLjM2NCwyLjM2NHYzMC4yNzFDNy4zMzQsMzMuOTM2LDguMzk4LDM1LDkuNjk4LDM1aDE1LjYwNA0KCQljMS4zLDAsMi4zNjQtMS4wNjIsMi4zNjQtMi4zNjRWMi4zNjRDMjcuNjY2LDEuMDYzLDI2LjYwMiwwLDI1LjMwMiwweiBNMTUuMDA0LDEuNzA0aDQuOTkyYzAuMTU4LDAsMC4yODYsMC4xMjgsMC4yODYsMC4yODcNCgkJYzAsMC4xNTgtMC4xMjgsMC4yODYtMC4yODYsMC4yODZoLTQuOTkyYy0wLjE1OCwwLTAuMjg2LTAuMTI4LTAuMjg2LTAuMjg2QzE0LjcxOCwxLjgzMiwxNC44NDYsMS43MDQsMTUuMDA0LDEuNzA0eiBNMTcuNSwzMy44MTgNCgkJYy0wLjY1MywwLTEuMTgyLTAuNTI5LTEuMTgyLTEuMTgzczAuNTI5LTEuMTgyLDEuMTgyLTEuMTgyczEuMTgyLDAuNTI4LDEuMTgyLDEuMTgyUzE4LjE1MywzMy44MTgsMTcuNSwzMy44MTh6IE0yNi4wMjEsMzAuNjI1DQoJCUg4Ljk3OVYzLjc0OWgxNy4wNDJWMzAuNjI1eiIvPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPC9zdmc+DQo=" />
              (917) 495-0056
            </span>
          </a>
          <div className="mx-1 inline-flex hover: text-orange-500 border-b py-4 pl-4">
            <span className="inline-flex hover text-black hover:font-semibold">
            <svg id="icon-email" width="24px" height="24px" viewBox="0 0 26 21">
      <path className="cls-1" d="M3406.8,2205h-22.01a1.625,1.625,0,0,1-1.8-1.74V2192a1.01,1.01,0,0,1,2.02,0v11h21.79a1.248,1.248,0,0,0,.21-0.02V2192a1,1,0,1,1,1.99,0v11.26C3409,2204.3,3408.11,2205,3406.8,2205Zm-11.03-9.05a2.13,2.13,0,0,1-1.25-.39l-0.01-.01-10.69-7.85a1.954,1.954,0,0,1-.73-2.22,2.134,2.134,0,0,1,2.06-1.48h21.42a2.134,2.134,0,0,1,2.06,1.48,1.974,1.974,0,0,1-.73,2.23l-10.73,7.78A2.369,2.369,0,0,1,3395.77,2195.95Zm-0.09-2.02a0.7,0.7,0,0,0,.47-0.06l10.86-7.79v0.01a2.277,2.277,0,0,0-.44-0.09h-21.42a0.141,0.141,0,0,0-.17.1Z" transform="translate(-3383 -2184)"></path></svg>
        
           NsavelevJS@gmail.com
            </span>
          </div>
          <div className="text-5xl text-blue-800 px-10 py-8 flex justify-center">
            Lets chat!
          </div>
          <form>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            />
            <label>Message:</label>
            <textarea
              type="text"
              name="message"
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
            />
            {status === "SUCCESS" ? (
              <p class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                Thanks!
              </p>
            ) : (
              <button class="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded inline-flex">
                Send it!
              </button>
            )}
            {status === "ERROR" && <p>Ooops! There was an error.</p>}
          </form>
        </div>
      </div>
    );
  }
  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
