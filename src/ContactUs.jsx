
const ContactUs = () => {
       return (
         <div className="border rounded-2xl bg-[#1313180D] my-16 p-16 text-center">
           <h3 className="text-[#131318] text-4xl font-medium font-play">Contact Us</h3>
           <h3 className="text-[#5a5a5d] text-base font-medium py-10 border-b border-[#1313181A]">
             To get our daily book updates, offers & tips. Sign up today!
           </h3>
           <div className="flex flex-col gap-5 items-center mt-10">
             <input
               className="w-2/3 p-4 rounded-lg"
               type="text"
               placeholder="Enter your name"
             />
             <input
               className="w-2/3 p-4 rounded-lg"
               type="email"
               placeholder="Enter your email"
             />
             <textarea
               className="w-2/3 p-4 rounded-lg"
               placeholder="Type your Message"
               name="Message"
               id=""
               cols="50"
               rows="10"
             ></textarea>
             <button className="rounded-lg px-7 py-4 bg-[#23BE0A] text-white text-lg font-semibold">
               Send Message
             </button>
           </div>
         </div>
       );
};

export default ContactUs;