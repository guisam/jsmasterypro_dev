import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";
import Link from "next/link";
import HomeFilter from "@/components/filters/HomeFilter";

const questions = [
  {
    _id: 1,
    title: "How to learn React?",
    description: "I am new to React and need some guidance.",
    tags: [
      { _id: 1, name: "React" },
      { _id: 2, name: "JavaScript" },
    ],
    author: {
      _id: 1,
      name: "John Doe",
    },
    createdAt: "2023-10-01T12:00:00Z",
    upvotes: 10,
    answers: 5,
    views: 100,
  },
  {
    _id: 2,
    title: "What is the best way to learn Next.js?",
    description: "Looking for resources and tips to get started with Next.js.",
    tags: [
      { _id: 3, name: "JavaScript" },
      { _id: 4, name: "Web Development" },
    ],
    author: {
      _id: 1,
      name: "John Doe",
    },
    createdAt: "2023-10-01T12:00:00Z",
    upvotes: 10,
    answers: 5,
    views: 100,
  },
];

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const Home = async ({ searchParams }: SearchParams) => {
  const { query = "", filter = "" } = await searchParams;

  const filteredQuestions = questions.filter((question) => {
    const matchesQuery = question.title
      .toLowerCase()
      .includes(query?.toLowerCase());
    const matchesFilter = filter
      ? question.tags[0].name.toLowerCase() === filter.toLowerCase()
      : true;
    return matchesQuery && matchesFilter;
  });

  return (
    <>
      <section className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Button
          className="primary-gradient !text-light-900 min-h-[46px] px-4 py-3"
          asChild
        >
          <Link href={ROUTES.ASK_QUESTION}>Ask a Question</Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch
          imgSrc="/icons/search.svg"
          placeholder="Search questions..."
          otherClasses="flex-1"
          route="/"
        />
      </section>
      <HomeFilter />
      <div className="mt-10 flex w-full flex-col gap-6">
        {filteredQuestions.map((question) => (
          <h1 key={question._id}>{question.title}</h1>
        ))}
      </div>
    </>
  );
};

export default Home;
