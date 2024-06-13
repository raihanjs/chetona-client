import Hero from "./Hero";
import CategorySlider from "./CategorySlider";
import AllBooksSlider from "./AllBooksSlider";
import RecentPublishedSlider from "./RecentPublishedSlider";
import FacebookPageBanner from "./FacebookPageBanner";
import Subscribe from "../Shared/Subscribe/Subscribe";
import AllWritersSlider from "./AllWritersSlider";

export default function Home() {
  return (
    <>
      <Hero />
      <RecentPublishedSlider />
      <AllBooksSlider />
      <AllWritersSlider />
      <CategorySlider />
      <FacebookPageBanner />
      <Subscribe />
    </>
  );
}
