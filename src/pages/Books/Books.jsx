import { Helmet } from "react-helmet-async";
import Breadcrumb from "../../Components/Breadcrumb";
import BooksContainer from "./BooksContainer";
import Filter from "./Filter";
import Pagination from "./Pagination";

export default function Books() {
  return (
    <>
      <Helmet>
        <title>ChetonaProkashon - Books</title>
      </Helmet>
      <Breadcrumb />
      <Filter />
      <BooksContainer />
      <Pagination />
    </>
  );
}
