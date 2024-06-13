import Breadcrumb from "../../Components/Breadcrumb";
import BooksContainer from "./BooksContainer";
import Filter from "./Filter";
import Pagination from "./Pagination";

export default function Books() {
  return (
    <>
      <Breadcrumb />
      <Filter />
      <BooksContainer />
      <Pagination />
    </>
  );
}
