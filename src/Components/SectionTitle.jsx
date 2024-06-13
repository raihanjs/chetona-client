import { Link } from "react-router-dom";

export default function SectionTitle({ title, text, link }) {
  return (
    <div className="flex justify-between items-center">
      <h3 className="text-3xl font-bold">{title}</h3>
      <Link
        to={link}
        className="text-lg font-bold border-b-2 hover:text-primary hover:border-primary hover:pr-2 ease-in duration-200"
      >
        {text}
      </Link>
    </div>
  );
}
