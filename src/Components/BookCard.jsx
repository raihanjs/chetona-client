import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";

export default function BookCard() {
  return (
    <div className="mx-auto w-[150px] sm:w-[180px] px-4 py-2 rounded-md border-2 hover:border-[#40A4DC] transition-all hover:shadow-2xl relative">
      {/* Book Img */}
      <Link t0="">
        <img
          src="https://i.ibb.co/6tWJC3x/muslim-jatir-itihas.png"
          className="w-[150px] sm:w-[180px] overflow-hidden"
          alt=""
        />
      </Link>
      {/* Book Content */}
      <div className="pt-1">
        <Link to="">
          <h3 className="text-xl font-semibold truncate mt-2 hover:text-[#40A4DC] hover:underline">
            মুসলিম জাতির ইতিহাস
          </h3>
        </Link>
        <Link to="">
          <h5 className="text-lg truncate hover:text-[#40A4DC] hover:underline">
            মাহমুদ তাশফীন
          </h5>
        </Link>

        <p className="text-lg text-rose-600 mt-1">
          <strong>200&#2547;</strong>
        </p>
      </div>
      {/* add book to cart icon */}
      <button className="absolute bottom-0 right-0 p-2 hover:bg-[#40A4DC] hover:text-white rounded-tl">
        <AiOutlinePlus className=" " />
      </button>
    </div>
  );
}
