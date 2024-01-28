"use client";
import React, { useEffect } from "react";
import EmptyState from "./app/components/EmptyState";
interface ErrorStateProps {
  error: Error;
}
const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);
  return (
    <EmptyState
      title=" An unexpected error occurred"
      subtitle=" Sorry for the inconvenience."
    />
  );
};

export default ErrorState;
