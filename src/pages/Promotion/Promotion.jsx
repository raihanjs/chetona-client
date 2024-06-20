import { useState } from "react";
import { HiOutlineArrowCircleRight } from "react-icons/hi";

export default function Promotion() {
  const districts = [
    "select",
    "dhaka",
    "comilla",
    "chittagong",
    "rajshahi",
    "gazipur",
    "narayanganj",
    "barisal",
    "sylhet",
    "mymensingh",
  ];

  const [userDetails, setUserDetails] = useState({
    userName: "",
    userPhone: "",
    userDistrict: "",
    userAddress: "",
  });

  const handleChange = (e) => {
    let target = e.target.name;
    let value = e.target.value;

    let newUserDetails = { ...userDetails, [target]: value };
    setUserDetails(newUserDetails);
  };

  const handleConfirmOrder = (e) => {
    e.preventDefault();
    console.log(userDetails);
  };

  return (
    <section className="bg-white m-2 sm:m-10">
      <div className="container">
        <div className="p-2 sm:p-4 md:p-10 lg:p-20">
          {/* Page title */}
          <div className="flex flex-col space-y-5 mb-5">
            <h2 className="bg-primary p-4 md:text-2xl lg:text-4xl font-bold text-white text-center">
              অবহেলা নয়! নির্ভুল ভাবে নামাজ পড়তে এই বইটি সংগ্রহ করুন।
            </h2>
            <h4 className="border-2 border-red-200 p-4 text-xl md:text-2xl lg:text-3xl text-center text-red-500">
              সাবধান! কম দামে সস্তা বাইন্ডিং এবং কপি বই কিনে প্রতারিত হবেন না।
              "নামাজ বিশ্বকোষ" এর একমাত্র স্বত্বাধিকার "আনোয়ার লাইব্রেরী"!
            </h4>
            <h5 className="text-center text-xl md:text-2xl lg:text-3xl">
              এত কষ্ট করে নামাজ পড়ছেন যদি সঠিক বা কবুল না হয় তাহলে পরবর্তীতে
              আফসোস করা ছাড়া করা ছাড়া কোনো রাস্তা থাকবে না।
            </h5>
          </div>
          {/* Promotion short desc */}
          <div className="md:flex items-center justify-center bg-primary px-4 py-2 mb-5">
            <img
              className="w-[50%] mx-auto md:mx-0"
              src="https://dawahbooksbd.com/wp-content/uploads/2023/11/Namaz-Bissokosh.png"
              alt=""
            />
            <div className="flex flex-col space-y-16">
              <p className="text-xl">
                নামায নিয়ে আমাদের যত প্রশ্ন আছে সকল প্রশ্নের উত্তর যদি এক বইয়েই
                পাওয়া যায়? তেমনই একটি বই ‘নামায বিশ্বকোষ’। নামাজ নিয়ে যত বই
                প্রকাশিত হয়েছে, তার মধ্যে সর্বাধিক আলোচিত ‘নামায বিশ্বকোষ’ বইটি।
              </p>
              <p className="text-xl">লেখকঃ মুফতি মুহাম্মদ ইনআমুল হক কাসেমী</p>
              <div>
                <p className="text-xl">পুর্বের হাদিয়াঃ ১২০০টাকা</p>
                <p className="text-xl">বর্তমান হাদিয়াঃ ১২০০টাকা</p>
                <button className="text-xl font-bold text-white mt-2 py-2 px-5 md:px-12 bg-cyan-900 rounded-sm">
                  <a href="#order">বইটি অর্ডার করতে চাই</a>
                </button>
              </div>
            </div>
          </div>
          {/* Bullet lists */}
          <div>
            <h3 className="text-center md:text-2xl lg:text-4xl text-cyan-900 font-bold bg-primary p-4">
              "নামায বিশ্বকোষ" বইটি কেন পড়বেন?
            </h3>
            <div className="bg-cyan-50 my-2 p-2">
              <p className="text-lg md:text-xl lg:text-2xl my-2">
                নামাজ নিয়ে আমাদের অনেক অজানা প্রশ্ন মাথায় আসে, কিন্তু সেগুলোর
                উত্তর আমাদের না জানার কারণে নামাজে ত্রুটি হবার সম্ভবনা থেকে যায়।
                যেমনঃ
              </p>
              <ul className="text-sm sm:text-lg md:text-xl font-bold ml-1 md:ml-8 lg:ml-12">
                <li className="mb-2 flex items-center">
                  <HiOutlineArrowCircleRight className="text-2xl mr-3 text-primary" />{" "}
                  নামাযের মধ্যে টুপি পড়ে গেলে কী করতে হয়?
                </li>
                <li className="mb-2 flex items-center">
                  <HiOutlineArrowCircleRight className="text-2xl mr-3 text-primary" />{" "}
                  সূরা ফাতিহা দুইবার পড়ে ফেললে কী হবে?
                </li>
                <li className="mb-2 flex items-center">
                  <HiOutlineArrowCircleRight className="text-2xl mr-3 text-primary" />{" "}
                  মাম যদি ৩য় সিজদায় চলে যায় তখন কী করব?
                </li>
                <li className="mb-2 flex items-center">
                  <HiOutlineArrowCircleRight className="text-2xl mr-3 text-primary" />{" "}
                  অযু অথবা নামাজের মধ্যে সন্দেহ হলে?
                </li>
                <li className="mb-2 flex items-center">
                  <HiOutlineArrowCircleRight className="text-2xl mr-3 text-primary" />{" "}
                  ফাতিহার আগে অন্য সূরা পড়ে ফেললে কী হবে?
                </li>
                <li className="mb-2 flex items-center">
                  <HiOutlineArrowCircleRight className="text-2xl mr-3 text-primary" />{" "}
                  একই সূরা দুই রাকাআতে পড়ে ফেললে কী হবে?
                </li>
              </ul>
              <p className="text-lg md:text-xl lg:text-2xl my-2">
                তা ছাড়া নামায সংক্রান্ত যেকোন ছোট বড় শত-শত প্রশ্নের উত্তর পাবেন
                মুফতি মুহাম্মদ ইনআমুল হক কাসেমী রচিত “নামায বিশ্বকোষ” বইটিতে।
              </p>
            </div>
          </div>
          {/* Video Area */}
          <div>
            <div className="w-full h-[300px] md:h-[350px] lg:h-[500px]">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/5GfPQHO8Ngs?si=KIOW6TWM2c8OdShU"
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
            <p className="text-lg md:text-xl lg:text-2xl text-slate-700 my-3">
              রাসুলুল্লাহ (সা.) বলেছেন, ‘ইমানের পরে সবচেয়ে গুরুত্বপূর্ণ ইবাদাত
              হলো নামাজ। একজন মুসলমান পুরুষ হোক অথবা নারী, নামাজের পরিপূর্ণ
              ফজিলত ও বরকত তখনই লাভ করবে যখন নামাজের পরিপূর্ণ মাসাইল ও আহকাম
              সম্পর্কে জানতে পারবে।।
            </p>
            <div className="flex justify-center">
              <button className="text-xl font-bold text-white mt-2 py-2 px-12 bg-cyan-900 rounded-sm">
                <a href="#order">এখনি অর্ডার করুন!</a>
              </button>
            </div>
          </div>
          {/* Form area */}
          <div className="mt-12" id="order">
            <h3 className="text-xl md:text-3xl lg:text-5xl text-green-500 font-bold p-4">
              প্রতিটি মুসলিম পরিবারে অন্তত একটি কপি রাখা উচিৎ!
            </h3>
            <h5 className="bg-yellow-200 p-4 text-xl md:text-2xl">
              মনে রাখবেন, নামাজ নিয়ে অবহেলা নয়! নামাজ কবুল হওয়ার পূর্বশর্ত সঠিক
              ভাবে নামাজ আদায় করা।।
            </h5>

            <div className="mt-5 p-4 border-4 border-green-300">
              <p className="text-4xl text-red-400">
                সম্পুর্ন নিশ্চিত হয়ে, অর্ডার করতে আপনার নাম, ঠিকানা ও ফোন
                নাম্বার লিখুন।।​
              </p>

              <div className="flex justify-between space-x-12 mt-5">
                <div className="w-1/2">
                  <h5 className="text-lg font-bold">Billing Details</h5>
                  <form onSubmit={handleConfirmOrder}>
                    {/* Input field */}
                    <div className="flex flex-col space-y-1 mt-5">
                      <label
                        htmlFor="customerName"
                        className="text-lg font-bold"
                      >
                        আপনার নাম লিখুন <span className="text-red-600">*</span>
                      </label>
                      <input
                        id="customerName"
                        type="text"
                        className="border-2 p-2 focus:outline-green-200"
                        required
                        name="userName"
                        value={userDetails.userName}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                    {/* Input field */}
                    <div className="flex flex-col space-y-1 mt-5">
                      <label
                        htmlFor="customerPhone"
                        className="text-lg font-bold"
                      >
                        আপনার ফোন নাম্বার
                        <span className="text-red-600"> *</span>
                      </label>
                      <input
                        id="customerPhone"
                        type="number"
                        className="border-2 p-2 focus:outline-green-200"
                        required
                        name="userPhone"
                        value={userDetails.userPhone}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                    {/* Input field */}
                    <div className="flex flex-col space-y-1 mt-5">
                      <label
                        htmlFor="customerDistrict"
                        className="text-lg font-bold"
                      >
                        আপনার জেলা
                        <span className="text-red-600"> *</span>
                      </label>
                      <select
                        id="customerDistrict"
                        className="border-2 p-2 focus:outline-green-200 capitalize"
                        required
                        name="userDistrict"
                        value={userDetails.userDistrict}
                        onChange={(e) => handleChange(e)}
                      >
                        {districts.map((district, index) => (
                          <option key={index} className="capitalize">
                            {district}
                          </option>
                        ))}
                      </select>
                    </div>
                    {/* Input field */}
                    <div className="flex flex-col space-y-1 mt-5">
                      <label
                        htmlFor="customerAddress"
                        className="text-lg font-bold"
                      >
                        আপনার ঠিকানা
                        <span className="text-red-600"> *</span>
                      </label>
                      <input
                        id="customerAddress"
                        type="text"
                        className="border-2 p-2 focus:outline-green-200"
                        required
                        name="userAddress"
                        value={userDetails.userAddress}
                        onChange={(e) => handleChange(e)}
                      />
                    </div>
                    {/* Input field */}
                    <div className="mt-5">
                      <input
                        type="submit"
                        value="কনফার্ম অর্ডার"
                        className="text-xl font-bold text-white mt-2 py-2 px-12 bg-cyan-900 rounded-sm cursor-pointer"
                      />
                    </div>
                  </form>
                </div>
                <div className="w-1/2 text-lg font-bold">
                  <h5 className="text-lg font-bold">Your Order</h5>

                  <div className="flex items-center justify-between mt-5 border-t border-b">
                    <div className="flex items-center">
                      <img
                        src="https://dawahbooksbd.com/wp-content/uploads/2023/11/Namaz-Bissokosh.png"
                        className="w-20"
                        alt=""
                      />
                      <p>Namaz Bissokosh</p>
                    </div>
                    <p>790.00 TK</p>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <p>Subtotal</p>
                    <p>790.00 TK</p>
                  </div>
                  <div className="flex items-center justify-between mt-2 border-b">
                    <p>Shipping</p>
                    <p>
                      {userDetails.userDistrict === "dhaka" ? 60 : 120}
                      .00 TK
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <p>Total</p>
                    <p>850.00 TK</p>
                  </div>

                  <div className="p-3 bg-gray-300 mt-5">
                    <p>ক্যাশ অন ডেলিভারি</p>
                    <p className="bg-gray-400 p-2">
                      পণ্য হাতে পেয়ে টাকা পরিশোধ
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
