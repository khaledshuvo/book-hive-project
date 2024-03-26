import { useLoaderData } from "react-router-dom";
import Books from "../components/Books";
import Hero from "../components/Hero";

const Home = () => {
  const allBooks = useLoaderData()
  return (
    <div className="flex mt-[52px] relative flex-col justify-center items-center min-h-[calc(100vh-200px)]">
      <Hero />
      <Books allBooks={allBooks} />
    </div>
  );
};

export default Home;
