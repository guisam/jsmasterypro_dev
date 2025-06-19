"use client";
import AuthForm from "@/components/forms/AuthForm";
import React from "react";

const SignIn = () => {
  return (
    <AuthForm onSubmit={(data) => Promise.resolve({ success: true, data })} />
  );
};

export default SignIn;
