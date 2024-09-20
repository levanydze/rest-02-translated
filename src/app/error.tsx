"use client";
import React from "react";
import ErrorDiv from "@/components/Error-NotFound/error/ErrorComponent";
import { errorMetadata } from "@/Control/navigation";

export const metadata = {
  title: errorMetadata?.title,
  description: errorMetadata?.description,
};

function error() {
  return <ErrorDiv />;
}

export default error;
