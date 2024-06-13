import { useEffect, useState } from "react";

export default function useWriters() {
  const [isLoading, setIsLoading] = useState(true);
  const [writers, setWriters] = useState([]);

  useEffect(() => {
    fetch("writers.json")
      .then((res) => res.json())
      .then((data) => {
        setWriters(data);
        setIsLoading(false);
      });
  }, []);

  return [writers, isLoading];
}
