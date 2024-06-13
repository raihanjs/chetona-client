import useBooks from "../../hooks/useBooks";
import BookCard from "../../Components/BookCard";

export default function BooksContainer() {
  const [books, isLoading] = useBooks();
  return (
    <section className="py-12">
      <div className="container">
        <div className="flex flex-wrap space-y-2">
          {books.map((book) => (
            <BookCard key={book._id} book={book} mx="1" />
          ))}
          {books.map((book) => (
            <BookCard key={book._id} book={book} mx="1" />
          ))}
          {books.map((book) => (
            <BookCard key={book._id} book={book} mx="1" />
          ))}
        </div>
      </div>
    </section>
  );
}
