import React from "react";
import { Button } from "../ui/button";

const SocialAuthForm = () => {
  const buttonClass =
    "background-dark400_light900 body-medium text-dark200_light800 min-h-12 rounded-2 flex-1 px-4 py-3.5";

  return (
    <div className="flex flex-wrap mt-10 gap-2.5">
      <Button className={buttonClass}>
        <img
          src="/icons/github.svg"
          alt="Github Icon"
          className="invert-colors mr-2.5 object-contain"
        />
        <span>Log in with GitHub</span>
      </Button>
      <Button className={buttonClass}>
        <img
          src="/icons/google.svg"
          alt="Google Icon"
          className="mr-2.5 object-contain"
        />
        <span>Log in with Google</span>
      </Button>
    </div>
  );
};

export default SocialAuthForm;
