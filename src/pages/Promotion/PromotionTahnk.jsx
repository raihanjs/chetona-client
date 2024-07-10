import { Link, useLocation } from 'react-router-dom';
import logo from './../../assets/images/logo.png'
import { FaFacebook } from "react-icons/fa";


export default function PromotionTahnk () {
    const location = useLocation();
    return (
        <div className="py-12 flex flex-col items-center justify-center mx-2">
            <img src={logo} className='w-28 md:w-50' alt="" />
            <h2 className='text-2xl md:text-6xl font-bold mt-12 md:mt-28'>Thank You {location?.state?.userName}</h2>
            <p className='text-lg md:text-3xl mt-2'>চেতনা প্রকাশন থেকে অর্ডার করার জন্য ধন্যবাদ</p>
            <p className='text-lg md:text-xl mt-2 ml-2'>দুই থেকে তিন দিনের ভিতর আপনার অর্ডারটি পৌঁছে যাবে ইনশা-আল্লহ</p>

            <div className='relative bg-white mt-20 p-4 md:p-12 flex flex-col justify-center'>
                <div className="absolute h-8 w-8 -top-4 left-1/2 bg-white -translate-x-1/2 rotate-45"></div>
                <p className='text-lg  mb-1'>আমাদের সাথে যুক্ত থাকার জন্য ফেসবুক পেইজে লাইক দিন</p>
                {/* <div className='relative'> */}
                    {/* <FaFacebook className='absolute top-0 left-0 text-white text-6xl'/> */}
                <Link to="https://www.facebook.com/chetonaprokashon" className='w-full py-2 md:py-4 px-4 md:px-12 bg-primary text-white text-xl font-bold flex justify-center items-center'><FaFacebook className='mr-2 text-2xl'/> <span className='border-b'>চেতনা প্রকাশন</span></Link>
                {/* </div>  */}
            </div>
        </div>
    );
};
