"use client";
import RegisterForm from "@/components/forms/RegisterForm";
import React from "react";

const SignUp = () => {
  return (
    <RegisterForm
      onSubmit={(data) => Promise.resolve({ success: true, data })}
    />
  );
};

export default SignUp;
