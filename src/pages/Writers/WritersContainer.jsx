import WriterCard from "../../Components/WriterCard";
import useWriters from "../../hooks/useWriters";

export default function WritersContainer() {
  const [writers, isLoading] = useWriters();
  return (
    <section className="bg-white py-12">
      <div className="container">
        <div className="flex flex-wrap">
          {writers.map((writer) => (
            <WriterCard writer={writer} margin="m-1" />
          ))}
        </div>
      </div>
    </section>
  );
}
