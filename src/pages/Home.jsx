import { useLoaderData } from "react-router-dom";
import Books from "../components/Books";
import Hero from "../components/Hero";

const Home = () => {
  const allBooks = useLoaderData()
  return (
    <div className="flex mt-[20px] lg:mt-[52px] relative flex-col justify-center items-center">
      <Hero />
      <Books allBooks={allBooks} />
    </div>
  );
};

export default Home;
