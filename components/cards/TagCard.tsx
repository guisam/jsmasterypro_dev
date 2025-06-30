import ROUTES from "@/constants/routes";
import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";
import { getDeviconClassName } from "@/lib/utils";
import Image from "next/image";

interface TagCardProps {
  _id: string;
  name: string;
  questions?: number;
  showCount?: boolean;
  compact?: boolean;
  isButton?: boolean;
  remove?: boolean;
  handleRemove: () => void;
}

const TagCard = ({
  _id,
  name,
  questions,
  showCount = false,
  compact = false,
  isButton = false,
  remove = false,
  handleRemove,
}: TagCardProps) => {
  const iconClass = getDeviconClassName(name);

  const handleClick = (e) => {
    e.preventDefault();
  };

  const BadgeContent = (
    <>
      <Badge className="subtle-medium background-light800_dark300 text-light400_light500 flex flex-row gap-2 rounded-md border-none px-4 py-2 uppercase">
        <div className="flex-center space-x-2">
          <i className={`${iconClass} text-sm`}></i>
          <span>{name}</span>
        </div>
        {remove && (
          <Image
            src="/icons/close.svg"
            width={12}
            height={12}
            alt="Remove tag"
            className="cursor-pointer object-contain invert-0 dark:invert"
            onClick={handleRemove}
          />
        )}
      </Badge>
      {showCount && (
        <p className="small-medium text-dark500_light700">{questions}</p>
      )}
    </>
  );

  if (compact) {
    return isButton ? (
      <button onClick={handleClick} className="flex justify-between gap-2">
        {BadgeContent}
      </button>
    ) : (
      <Link href={ROUTES.TAG(_id)} className="flex justify-between gap-2">
        {BadgeContent}
      </Link>
    );
  }

  return (
    <Link
      href={ROUTES.TAG(_id)}
      className="border-light800_dark300 hover:bg-light700_dark300 flex items-center justify-between gap-2 rounded-md border px-4 py-2"
    >
      {BadgeContent}
    </Link>
  );
};

export default TagCard;
