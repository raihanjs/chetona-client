export default function Pagination() {
  return (
    <nav className="bg-white py-5">
      <ul className="flex justify-center">
        <li>
          <button className="px-4 py-2 bg-primary border text-white text-lg font-bold">
            1
          </button>
        </li>
        <li>
          <button className="px-4 py-2 bg-primary border text-white text-lg font-bold">
            2
          </button>
        </li>
        <li>
          <button className="px-4 py-2 bg-primary border text-white text-lg font-bold">
            3
          </button>
        </li>
        <li>
          <button className="px-4 py-2 bg-primary border text-white text-lg font-bold">
            4
          </button>
        </li>
      </ul>
    </nav>
  );
}
