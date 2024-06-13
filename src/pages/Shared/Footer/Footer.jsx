import { Link } from "react-router-dom";

import { ImPhone } from "react-icons/im";
import { FaEnvelope } from "react-icons/fa";
import Logo from "../../../assets/images/logo.png";

export default function Footer() {
  return (
    <footer className="pt-5">
      <div className="container">
        <div className="flex flex-wrap justify-between space-x-5">
          {/* Menu Item */}
          <div className="w-full md:w-4/12">
            <img src={Logo} className="mb-8" alt="" />
            <p className="text-xs text-[#7E7E7E] leading-3 mb-5 mr-3">
              লরেম ইপ্সাম ডলর সিট আমেত, কনসেক্টেচুর অ্যাডিপিস্কিং এলিট। নানসি
              আল্ট্রিচিস ভ্যারিয়াস আউগিউ ইউ ফ্যাউসিবাস। ইন প্যালেনটেস্কিউ আউগিউ
              নন নিকিউ টেম্পর ট্রিস্টিক। নিউলা এ পিউরাস অরনারে, ম্যাটুস এনিম
              স্যাড, ম্যাক্সিমাস মি। ডোনেক পোর্টা রিউট্রাম ডিগনিসসিম। ডোনেক
              ভাইটা ইরস এলিকুয়াম, রিউট্রাম রাইসাস এট, পরতিটর লরেম। আয়েনান
              স্যাড এনিম লুকাস। সেড ইয়াকিউলাস এরাট আইডি ম্যাক্সিমাস
              হেন্ড্রেরিট। নিউলাম এ এফিকিটার ইরস। আয়েনান স্যাড এনিম লুকাস। সেড
              ইয়াকিউলাস এরাট আইডি ম্যাক্সিমাস হেন্ড্রেরিট। নিউলাম এ এফিকিটার
              ইরস।
            </p>
            <a
              href="mailto:chetonaprokashon@gmail.com"
              className="flex items-center font-mont"
            >
              <FaEnvelope className="text-md text-primary mr-1" />
              chetonaprokashon@gmail.com
            </a>
            <a
              href="tel:+8801798947657"
              className="flex items-center font-mont"
            >
              <ImPhone className="text-md text-primary mr-1" />
              01798-947657
            </a>
          </div>
          {/* Menu Item */}
          <div className="">
            <h5 className="text-2xl text-[#40A4DC] mt-8">সাইট ভিউ</h5>
            <ul>
              <li>
                <Link className="text-base lg:text-lg text-[#000000]" to="">
                  হোম
                </Link>
              </li>
              <li>
                <Link className="text-base lg:text-lg text-[#000000]" to="">
                  বই
                </Link>
              </li>
              <li>
                <Link className="text-base lg:text-lg text-[#000000]" to="">
                  লেখক
                </Link>
              </li>
              <li>
                <Link className="text-base lg:text-lg text-[#000000]" to="">
                  ক্যাটাগরি
                </Link>
              </li>

              <li>
                <Link className="text-base lg:text-lg text-[#000000]" to="">
                  প্যাকেজ
                </Link>
              </li>
              <li>
                <Link className="text-base lg:text-lg text-[#000000]" to="">
                  ব্লগ
                </Link>
              </li>
            </ul>
          </div>
          {/* Menu Item */}
          <div className="">
            <h5 className="text-2xl text-[#40A4DC] mt-8">কাস্টোমার</h5>
            <ul>
              <li>
                <Link className="text-base lg:text-lg text-[#000000]" to="">
                  একাউন্ট
                </Link>
              </li>

              <li>
                <Link className="text-base lg:text-lg text-[#000000]" to="">
                  কাস্টমার হেল্প
                </Link>
              </li>
              <li>
                <Link className="text-base lg:text-lg text-[#000000]" to="">
                  অর্ডারের পদ্ধতি
                </Link>
              </li>
              <li>
                <Link className="text-base lg:text-lg text-[#000000]" to="">
                  কুরিয়ার সিস্টেম
                </Link>
              </li>
              <li>
                <Link className="text-base lg:text-lg text-[#000000]" to="">
                  কুরিয়ার লোকেশন
                </Link>
              </li>
              <li>
                <Link className="text-base lg:text-lg text-[#000000]" to="">
                  FAQ
                </Link>
              </li>
              <li>
                <Link className="text-base lg:text-lg text-[#000000]" to="">
                  গ্রুপে জয়েন করুন
                </Link>
              </li>
              <li>
                <Link className="text-base lg:text-lg text-[#000000]" to="">
                  যোগাযোগ
                </Link>
              </li>
            </ul>
          </div>
          {/* Menu Item */}
          <div className="">
            <h5 className="text-2xl text-[#40A4DC] mt-8">অন্যান্য লিঙ্ক</h5>
            <ul>
              <li>
                <Link className="text-base lg:text-lg text-[#000000]" to="">
                  পরিচিতি
                </Link>
              </li>
              <li>
                <Link className="text-base lg:text-lg text-[#000000]" to="">
                  সোশাল পেজ
                </Link>
              </li>

              <li>
                <Link className="text-base lg:text-lg text-[#000000]" to="">
                  পেমেন্ট ও রিফান্ড পলিসি
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center py-2 border-t-2">
        <p className="font-mont text-base md:text-lg lg:text-xl text-[#272425]">
          Copyright © 2024 | Design and Developed by RaihanJS
        </p>
      </div>
    </footer>
  );
}
