import Hero from "./Hero";
import CategorySlider from "./CategorySlider";
import AllBooksSlider from "./AllBooksSlider";
import RecentPublishedSlider from "./RecentPublishedSlider";
import FacebookPageBanner from "./FacebookPageBanner";
import Subscribe from "../Shared/Subscribe/Subscribe";

export default function Home() {
  return (
    <>
      <Hero />
      <RecentPublishedSlider />
      <AllBooksSlider />
      <CategorySlider />
      <FacebookPageBanner />
      <Subscribe />
    </>
  );
}
