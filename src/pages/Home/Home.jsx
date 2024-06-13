import Hero from "./Hero";
import CategorySlider from "./CategorySlider";
import AllBooksSlider from "./AllBooksSlider";
import RecentPublishedSlider from "./RecentPublishedSlider";
import FacebookPageBanner from "./FacebookPageBanner";

export default function Home() {
  return (
    <>
      <Hero />
      <RecentPublishedSlider />
      <AllBooksSlider />
      <CategorySlider />
      <FacebookPageBanner />
    </>
  );
}
