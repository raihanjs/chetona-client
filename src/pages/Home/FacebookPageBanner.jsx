export default function FacebookPageBanner() {
  return (
    <section className="py-12 bg-white">
      <div className="container">
        <div className="md:flex space-y-5 space-x-5 items-center">
          <div className="md:w-7/12 lg:w-6/12">
            <img
              src="https://chetona-client.web.app/static/media/fbgroup.3c12a9327359efe4a45f.jpg"
              className="w-full"
              alt=""
            />
          </div>
          <div className="md:w-5/12 lg:w-6/12">
            <h3 className="text-xl lg:text-2xl font-bold">
              জয়েন করুন আমাদের ফেসবুক গ্রুপে
            </h3>
            <p className="text-lg my-2 lg:my-5">
              লরেম ইপ্সাম ডলর সিট আমেত, কনসেক্টেচুর অ্যাডিপিস্কিং এলিট। নানসি
              আল্ট্রিচিস ভ্যারিয়াস আউগিউ ইউ ফ্যাউসিবাস। ইন প্যালেনটেস্কিউ আউগিউ
              নন নিকিউ টেম্পর ট্রিস্টিক।
            </p>
            <button className="py-1 lg:py-2 px-8 lg:px-12 font-bold text-md lg:text-lg rounded-sm text-primary border border-primary hover:bg-primary hover:text-white">
              জয়েন করুন
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
