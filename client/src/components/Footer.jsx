function Footer() {
  return (
    <div className="flex flex-row">
      <div className="bg-slate-100 w-2/4">
        <div className="flex-col-reverse flex gap-10 overflow-hidden">
          <form className="m-12 flex flex-col gap-8">
            <label className="flex flex-col">
              <span className=" font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                placeholder="What is your name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
              />
            </label>

            <label className="flex flex-col">
              <span className=" font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                placeholder="What is your email?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
              />
            </label>

            <label className="flex flex-col">
              <span className=" font-medium mb-4">Your Message</span>
              <textarea
                rows="7"
                name="message"
                placeholder="What would you like to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
              />
            </label>
            <button
              className="hover:bg-green-700 shadow-md rounded-full px-6 py-3 font-semibold text-white bg-button"
              type="click"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="bg-slate-100 w-2/4  ">
        <div className="mt-10 justify-center items-center">
          <h6 className="text-center text-4xl font-semibold  ">
            Our Digital Presence
          </h6>
          <h6 className="text-center text-4xl font-semibold mt-10 ">
            Instagram
          </h6>
          <h6 className="text-center text-4xl font-semibold mt-10 ">
            Facebook
          </h6>
          <h6 className="text-center text-4xl font-semibold mt-10 ">Mail</h6>
        </div>
      </div>
    </div>
  );
}

export default Footer;
