import ROUTES from "@/constants/routes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import TagCard from "../cards/TagCard";

const hotQuestions = [
  {
    _id: 1,
    title: "How to implement a custom hook in React?",
    votes: 12,
    answers: 5,
  },
  {
    _id: 2,
    title: "What is the difference between useState and useReducer?",
    votes: 8,
    answers: 3,
  },
  {
    _id: 3,
    title: "How to optimize performance in React applications?",
    votes: 15,
    answers: 7,
  },
];

const popularTags = [
  { _id: 1, name: "react", questions: 100 },
  { _id: 2, name: "javascript", questions: 150 },
  { _id: 3, name: "typescript", questions: 80 },
  { _id: 4, name: "nextjs", questions: 120 },
  { _id: 5, name: "react-query", questions: 90 },
];

const RightSidebar = () => {
  return (
    <section className="custom-scrollbar background-light900_dark200 light-border shadow-light300 sticky top-0 right-0 flex h-screen w-fit flex-col gap-6 overflow-y-auto border-l p-6 pt-36 max-xl:hidden max-sm:hidden lg:w-[350px] dark:shadow-none">
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map(({ _id, title }) => (
            <Link
              key={_id}
              href={ROUTES.QUESTION(_id)}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">{title}</p>
              <Image
                src="/icons/chevron-right.svg"
                alt="Chevron"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>
      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>
        <div className="mt-7 flex w-full flex-col gap-4">
          {popularTags.map(({ _id, name, questions }) => (
            <TagCard
              key={_id}
              _id={_id}
              name={name}
              questions={questions}
              showCount
              compact
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
