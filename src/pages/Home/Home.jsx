import AllBooks from "./AllBooks";
import CategorySlider from "./CategorySlider";
import Hero from "./Hero/Hero";
import RecentPublished from "./RecentPublished";

export default function Home() {
  return (
    <>
      <Hero />
      <RecentPublished />
      <AllBooks />
      <CategorySlider />
    </>
  );
}
