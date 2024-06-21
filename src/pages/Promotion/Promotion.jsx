import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { HiOutlineArrowCircleRight } from "react-icons/hi";
import { useLoaderData } from "react-router-dom";

export default function Promotion() {
  const promotionDetails = useLoaderData();
  const [userDetails, setUserDetails] = useState({
    userName: "",
    userPhone: "",
    userDistrict: "",
    userAddress: "",
  });
  const districts = [
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
  const [deliveryCharge, setDeliveryCharge] = useState(0);

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

  useEffect(() => {
    if (userDetails.userDistrict === "dhaka") setDeliveryCharge(60);
    else if (userDetails.userDistrict === "gazipur") setDeliveryCharge(60);
    else if (userDetails.userDistrict === "narayanganj") setDeliveryCharge(60);
    else setDeliveryCharge(120);
  }, [userDetails]);

  return (
    <section className="bg-white m-2 sm:m-10">
      <Helmet>
        <title>ChetonaProkashon - {promotionDetails?.name}</title>
      </Helmet>
      <div className="container">
        <div className="p-2 sm:p-4 md:p-10 lg:p-20">
          {/* Page title */}
          <div className="flex flex-col space-y-5 mb-5">
            <h2 className="bg-primary p-4 md:text-2xl lg:text-4xl font-bold text-white text-center">
              {promotionDetails?.title}
            </h2>
            <h4 className="border-2 border-red-200 p-4 text-xl md:text-2xl lg:text-3xl text-center text-red-500">
              {promotionDetails?.warn}
            </h4>
            <h5 className="text-center text-xl md:text-2xl lg:text-3xl">
              {promotionDetails?.subWarn}
            </h5>
          </div>
          {/* Promotion short desc */}
          <div className="md:flex items-center justify-center bg-primary px-4 py-2 mb-5">
            <img
              className="w-[50%] mx-auto md:mx-0"
              src={promotionDetails?.image}
              alt=""
            />
            <div className="flex flex-col space-y-16">
              <p className="text-xl">{promotionDetails?.imageCaption}</p>
              <p className="text-xl">লেখকঃ {promotionDetails?.writer}</p>
              <div>
                <p className="text-xl">
                  পুর্বের হাদিয়াঃ {promotionDetails?.price} টাকা
                </p>
                <p className="text-xl">
                  বর্তমান হাদিয়াঃ {promotionDetails?.offerPrice} টাকা
                </p>
                <button className="text-xl font-bold text-white mt-2 py-2 px-5 md:px-12 bg-cyan-900 rounded-sm">
                  <a href="#order">বইটি অর্ডার করতে চাই</a>
                </button>
              </div>
            </div>
          </div>
          {/* Bullet lists */}
          {promotionDetails?.lists && (
            <div>
              <h3 className="text-center md:text-2xl lg:text-4xl text-cyan-900 font-bold bg-primary p-4">
                {promotionDetails?.listTitle}
              </h3>
              <div className="bg-cyan-50 my-2 p-2">
                <p className="text-lg md:text-xl lg:text-2xl my-2">
                  {promotionDetails?.listHeaderText}
                </p>
                <ul className="text-sm sm:text-lg md:text-xl font-bold ml-1 md:ml-8 lg:ml-12">
                  <li className="mb-2 flex items-center">
                    <HiOutlineArrowCircleRight className="text-2xl mr-3 text-primary" />{" "}
                    নামাযের মধ্যে টুপি পড়ে গেলে কী করতে হয়?
                  </li>
                  {promotionDetails?.lists.map((list, i) => (
                    <li key={i} className="mb-2 flex items-center">
                      <HiOutlineArrowCircleRight className="text-2xl mr-3 text-primary" />{" "}
                      {list}
                    </li>
                  ))}
                </ul>
                <p className="text-lg md:text-xl lg:text-2xl my-2">
                  {promotionDetails?.listFooterText}
                </p>
              </div>
            </div>
          )}
          {/* Video Area */}
          {promotionDetails?.youtubeLink && (
            <div>
              <div className="w-full h-[300px] md:h-[350px] lg:h-[500px]">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${promotionDetails?.youtubeLink}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p className="text-lg md:text-xl lg:text-2xl text-slate-700 my-3">
                {promotionDetails?.videoCaption}
              </p>
              <div className="flex justify-center">
                <button className="text-xl font-bold text-white mt-2 py-2 px-12 bg-cyan-900 rounded-sm">
                  <a href="#order">এখনি অর্ডার করুন!</a>
                </button>
              </div>
            </div>
          )}
          {/* Form area */}
          <div className="mt-12" id="order">
            <h3 className="text-xl md:text-3xl lg:text-5xl text-green-500 font-bold p-4">
              {promotionDetails?.orderTitle}
            </h3>
            <h5 className="bg-yellow-200 p-4 text-xl md:text-2xl">
              {promotionDetails?.orderWarn}
            </h5>

            <div className="mt-5 p-4 border-4 border-green-300">
              <p className="text-xl md:text-2xl lg:text-4xl text-red-400">
                সম্পুর্ন নিশ্চিত হয়ে, অর্ডার করতে আপনার নাম, ঠিকানা ও ফোন
                নাম্বার লিখুন।।​
              </p>

              <div className="flex flex-col md:flex-row justify-between md:space-x-12 mt-5 space-y-12">
                <div className=" md:w-1/2">
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
                <div className=" md:w-1/2 text-lg font-bold">
                  <h5 className="text-lg font-bold">Your Order</h5>

                  <div className="flex items-center justify-between mt-5 border-t border-b">
                    <div className="flex items-center">
                      <img
                        src={promotionDetails?.image}
                        className="w-20"
                        alt=""
                      />
                      <p>{promotionDetails?.name}</p>
                    </div>
                    <p>{promotionDetails?.offerPrice}.00 TK</p>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <p>Subtotal</p>
                    <p>{promotionDetails?.offerPrice}.00 TK</p>
                  </div>
                  <div className="flex items-center justify-between mt-2 border-b">
                    <p>Shipping</p>
                    <p>
                      {deliveryCharge}
                      .00 TK
                    </p>
                  </div>
                  <div className="flex items-center justify-between mt-2">
                    <p>Total</p>
                    <p>
                      {promotionDetails?.offerPrice + deliveryCharge}
                      .00 TK
                    </p>
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
