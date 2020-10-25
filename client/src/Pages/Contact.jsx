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
              Github: NsavelevJS
            </a>
          </div>
          <div className="inline-flex hover: text-orange-500 border-b py-4 pl-4">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.linkedin.com/in/nikita-savelev-129994140?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3Brvo0mRjpR9OrFkv4TtVVWw%3D%3D"
              className="inline-flex hover text-black hover:font-semibold"
            >
              LinkedIn: Nikita Savelev
            </a>
          </div>
          <div className="inline-flex hover: text-orange-500 border-b py-4 pl-4">
            <span className="inline-flex hover text-black hover:font-semibold">
              Phone Number: (917) 495-0056
            </span>
          </div>
          <div className="inline-flex hover: text-orange-500 border-b py-4 pl-4">
            <span className="inline-flex hover text-black hover:font-semibold">
              Email: NsavelevJS@gmail.com
            </span>
          </div>
          <div className="text-5xl text-blue-800 px-10 py-8 flex justify-center">
            Lets chat!
          </div>
          <form
            onSubmit={this.submitForm}
            action="https://formspree.io/f/mvovanwz"
            method="POST"
            className="w-full max-w-lg flex flex-col mx-auto pt-20"
          >
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
              <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
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
