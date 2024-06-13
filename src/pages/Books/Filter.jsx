export default function Filter() {
  return (
    <section className="bg-white py-5">
      <div className="container">
        <div className="flex justify-end space-x-5">
          <div className="flex items-center space-x-2">
            <p>দেখান</p>
            <select className="rounded-sm border border-primary py-1 px-3 font-bold text-primary">
              <option value="">৩০</option>
              <option value="">৫০</option>
              <option value="">৮০</option>
              <option value="">১০০</option>
            </select>
          </div>
          <div>
            <select className="rounded-sm border border-primary py-1 px-3 font-bold text-primary">
              <option value="">দাম অনুযায়ী নির্বাচন করুন</option>
              <option value="">সর্বনিম্ন থেকে সর্বোচ্চ</option>
              <option value="">সর্বোচ্চ থেকে সর্বনিম্ন</option>
            </select>
          </div>
        </div>
      </div>
    </section>
  );
}
