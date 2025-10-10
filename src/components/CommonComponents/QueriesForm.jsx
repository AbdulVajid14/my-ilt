import React from 'react'
import { useState } from 'react';
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

function QueriesForm() {
    const [phone, setPhone] = useState("");
    
  return (
             <form className="w-full max-w-md lg:max-w-sm bg-white shadow-md rounded-lg p-4 sm:p-6 space-y-3 sm:space-y-4 order-1 lg:order-2">
                   <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Have Any Queries?</h3>
         
                   <input
                     type="text"
                     placeholder="Program interested"
                     className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                   />
         
                   <input
                     type="text"
                     placeholder="Name"
                     className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                   />
         
                   <input
                     type="email"
                     placeholder="Email"
                     className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-400"
                   />
         
                   {/* ✅ Phone Input Component */}
                   <div className="border border-gray-300 rounded-md">
                     <PhoneInput
                       country={"in"}
                       value={phone}
                       onChange={(phone) => setPhone(phone)}
                       inputClass="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-md border-2 border-green-200 bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-400 text-sm"
                       buttonClass="border-2 border-green-200 bg-green-100 rounded-l-md"
                       containerClass="w-full"
                       dropdownClass="rounded-md border border-green-200 bg-white"
                       specialLabel=""
                       inputStyle={{
                         width: "100%",
                         borderRadius: "0.375rem",
                         border: "2px solid #bbf7d0",
                       }}
                       enableSearch
                       placeholder="Phone"
                     />
                   </div>
         
                   <textarea
                     rows="3"
                     placeholder="Message"
                     className="w-full border border-gray-300 rounded-md py-2 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-400 resize-none"
                   />
         
                   <button
                     type="submit"
                     className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 text-sm rounded-md transition"
                   >
                     Send Message &gt;
                   </button>
                 </form>
  )
}

export default QueriesForm