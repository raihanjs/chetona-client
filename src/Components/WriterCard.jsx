import { FaBook } from "react-icons/fa";

export default function WriterCard({ writer, margin }) {
  const { name, img } = writer;
  return (
    <div
      className={`${margin} w-[150px] sm:w-[180px] p-2 rounded-sm hover:shadow-2xl border-2 hover:border-primary`}
    >
      <img src={img} className="mx-auto size-28 rounded-full ring-4" alt="" />
      <div className="mt-3">
        <div className="flex space-x-2 items-center justify-center">
          <FaBook className="text-primary text-xl" />
          <strong>50</strong>
        </div>
        <h4 className="text-center truncate text-xl font-bold text-primary mt-1">
          {name}
        </h4>
      </div>
    </div>
  );
}
