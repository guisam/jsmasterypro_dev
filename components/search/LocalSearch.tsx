"use client";
import Image from "next/image";
import { useQueryState } from "nuqs";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { useDebounce } from "@/hooks/useDebounce";

interface LocalSearchProps {
  route: string;
  imgSrc: string;
  placeholder: string;
  otherClasses?: string;
}

const LocalSearch = ({
  route,
  imgSrc,
  placeholder,
  otherClasses,
}: LocalSearchProps) => {
  const [inputValue, setInputValue] = useState("");

  const [_, setSearchQuery] = useQueryState("query", {
    defaultValue: "",
    shallow: false,
  });

  const debouncedValue = useDebounce(inputValue);

  useEffect(() => {
    setSearchQuery(debouncedValue);
  }, [debouncedValue, setSearchQuery]);

  return (
    <div className="background-light800_darkgradient flex min-h-[56px] grow items-center gap-4 rounded-[10px] px-4">
      <Image
        src={imgSrc}
        alt="Search"
        width={24}
        height={24}
        className="cursor-pointer"
      />
      <Input
        type="text"
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className={cn(
          "paragraph-regular no-focus placeholder text-dark400_light700 force-transparent-bg border-none shadow-none outline-none",
          otherClasses,
        )}
      />
    </div>
  );
};

export default LocalSearch;
