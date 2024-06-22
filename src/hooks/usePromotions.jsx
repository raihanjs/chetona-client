import { useEffect, useState } from "react";

export default function usePromotions() {
  const [isLoading, setIsLoading] = useState(true);
  const [promotions, setPromotions] = useState([]);

  useEffect(() => {
    fetch("https://chetona-server-eight.vercel.app/promotions")
      .then((res) => res.json())
      .then((data) => setPromotions(data));
  }, []);

  return [promotions, setPromotions, isLoading];
}
