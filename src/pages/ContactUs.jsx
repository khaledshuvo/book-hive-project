import { useState } from 'react';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmit, setIsSubmit] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    if (!isChecked) {
      return;
    }
    //     const user = { name: name, email: email, message: message };
    setIsSubmit(true);
  };
  return (
    <div className="">
      <form
        onSubmit={event => handleSubmit(event)}
        className="flex flex-col mt-5 w-2/3 border rounded-2xl mx-auto bg-[#1313180D] my-8 p-8 text-center"
      >
        <h3 className="text-[#131318] text-4xl font-medium font-play">
          Contact Us
        </h3>
        <h3 className="text-[#5a5a5d] text-base font-medium py-5 mb-5 border-b border-[#1313181A]">
          To get our daily book updates, offers & tips. Contact us today!
        </h3>
        <h3 className="text-lg text-left ml-2 mb-1">Name</h3>
        <input
          required
          onChange={event => setName(event.target.value)}
          className="p-4 rounded-lg mb-7"
          type="text"
          placeholder="Enter your name"
        />
        <h3 className="text-lg text-left ml-2 mb-1">Email</h3>
        <input
          required
          onChange={event => setEmail(event.target.value)}
          className="p-4 rounded-lg mb-7"
          type="email"
          placeholder="Enter your email"
        />
        <h3 className="text-lg text-left ml-2 mb-1">Message</h3>
        <textarea
          required
          onChange={event => setMessage(event.target.value)}
          className="p-4 rounded-lg mb-7"
          placeholder="Type your Message"
          name="Message"
          id=""
          cols="50"
          rows="10"
        ></textarea>
        <div className="text-left pl-5">
          <input
            onChange={event => setIsChecked(event.target.checked)}
            type="checkbox"
          />
          Do you agree with our terms and conditions?
        </div>
        <div className="text-right">
          <button className="rounded-lg px-7 py-4 bg-[#23BE0A] text-white text-lg font-semibold">
            Send Message
          </button>
        </div>
      </form>
      {isSubmit && (
        <div className="fixed top-0 bottom-0 right-0 left-0 z-10 h-screen w-full flex justify-center items-center bg-[#8EDF6E]">
          <div className="h-1/3 w-1/2 py-12 px-10 bg-white rounded-xl text-center">
            <h4 className="text-[#131318] text-3xl font-medium font-play mb-10">
              You have submitted the form successfully!
            </h4>
            <p className="text-lg mb-3 text-left">
              Hey {name}, we have got your message:-{' '}
              <span className="text-lg text-blue-500">
                {"'"} {message.slice(0, 15)}
                {"'"}
              </span>{' '}
              successfully. We will contact with you on your email: {email}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
