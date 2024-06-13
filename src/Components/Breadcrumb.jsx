import { Link } from "react-router-dom";
import { MdArrowRightAlt } from "react-icons/md";

export default function Breadcrumb() {
  return (
    <section className="my-4">
      <div className="container border-b-2 border-primary">
        <div className="flex items-center justify-between">
          <h4 className="text-2xl font-bold">সকল বই</h4>
          <div className="flex items-center space-x-2">
            <Link to="" className="text-primary font-bold">
              হোম
            </Link>
            <MdArrowRightAlt />
            <p>সকল বই</p>
          </div>
        </div>
      </div>
    </section>
  );
}
